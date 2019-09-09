import React from "react";
import { Route } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import SideDrawer from './header/side_drawer';
import Sidebar from './header/sidebar';
import SessionForm from './session/session_form';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container'
import { AuthRoute } from '../util/route_util';


class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   sideDrawerOpen: false
    // }
    // this.sideDrawerClickHandler = this.sideDrawerClickHandler.bind(this)
  }

  // sideDrawerClickHandler() {
  //   this.setState((prevState) => {
  //   return {sideDrawerOpen: !prevState.sideDrawerOpen}
  //   });
  // }

  // sideDrawerToggle() {
  //   let sideDrawer;
  //   // let modal;
  //   console.log("toggled")
  //   console.log(this.state.sideDrawerOpen)
  //   if (this.state.sideDrawerOpen) {
  //     return sideDrawer = <Route exact path='/' component={SideDrawer} 
  //                           show={this.state.sideDrawerOpen} 
  //                           sideDrawerClickHandler={this.sideDrawerClickHandler}
  //                         />;
    //   return sideDrawer = <SideDrawer
    //   show={this.state.sideDrawerOpen} 
    //   sideDrawerClickHandler={this.sideDrawerClickHandler}
    // />;
      // modal = <Modal show={this.state.sidebarOpen} />;
  //   }
  // }
  
  componentDidMount() {
    document.body.classList.add("background-black");
  }

  render() {
    return(  
      <div>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          {/* <Route exact path='/' component={Header} sideDrawerClickHandler={this.sideDrawerClickHandler}/> */}
          <Route exact path='/' component={HeaderContainer} />
          {/* {this.sideDrawerToggle()} */}
          <Route exact path='/' component={Sidebar} />
      <main></main>
      </div>
    )
  }

};

export default App;