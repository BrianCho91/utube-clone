import React from "react";
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import SideDrawer from './header/side_drawer';
import Sidebar from './header/sidebar';
import SessionForm from './session/session_form';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import VideoIndexContainer from './videos/videos_index_container';
import VideoShowContainer from './videos/video_show_container';
import { AuthRoute, UploadRoute } from '../util/route_util';
import TestComponent from '../components/test_component';
import VideoFormContainer from './videos/video_form_container';


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        sideDrawerOpen: false
      }
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
        <Switch>       
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />  
          {/* <Route exact path='/' component={Header} sideDrawerClickHandler={this.sideDrawerClickHandler}/> */}
          {/* {this.sideDrawerToggle()} */}
          
          {/* <Route exact path="/videos/:videoId" component={VideoShowContainer} /> */}
          <Route exact path="/test" component={TestComponent} />      
          <Route path='/' component={HeaderContainer} />
        </Switch>
        <UploadRoute exact path="/upload" component={VideoFormContainer} />    
        <Route exact path="/watch/:videoId" component={VideoShowContainer} />   
        <Route exact path='/' component={Sidebar} />
        <Route exact path='/' component={VideoIndexContainer} />
      </div>
    )
  }

};

export default App;