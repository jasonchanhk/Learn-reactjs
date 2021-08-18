import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
    };
  }

 

  render() {

    const HomePage = () => {
        return(
            <Home 
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    }

    const DishWithId = ({match}) => {
        {/*Match carry router parameter inside it as its own properties*/}
        {/*match.params.___ by inserting the key, we can extract the value (parseInt is to turn "string" in to integer) */}
        return(
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
    };
      
    return (
      <div>
        <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/aboutus' component={() => <About leaders={this.state.leaders} />} />
                <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                <Route exact path='/contactus' component={Contact} />
                {/* path can also carry parameter values, by starting with a ":" it will be interpreted as router parameter*/}
                <Route path='/menu/:dishId' component={DishWithId} />
                <Redirect to="/home" />
            </Switch>
          <Footer />
      </div>
    );
  }
}

export default Main;