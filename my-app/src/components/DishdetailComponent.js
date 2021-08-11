import { render } from "@testing-library/react";
import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component{

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>

            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null){
            var comments = dish.comments.map((eachComment) => {
                return (
                    <div>
                        <ul class="list-unstyled" key={eachComment.id}>
                            <li>{eachComment.comment}</li>
                            <li>-- {eachComment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(eachComment.date)))}</li>
                        </ul>
                    </div>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>
                );
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
            </div>
        );        
    }
}

export default Dishdetail;