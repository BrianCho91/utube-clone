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
import VideoFormDetails from './videos/video_form_details';
import SearchVideoIndexContainer from './searchbar/search_video_index_container'
import ChannelContainer from './channel/channel_container'
import EditVideoFormContainer from './videos/edit_video_form_container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false
    }
  }

  componentDidMount() {
    document.body.classList.add("background-black");
  }

  render() {
    return (
      <div>
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <Route exact path="/test" component={TestComponent} />
          <Route path='/' component={HeaderContainer} />
        </Switch>
        <UploadRoute exact path="/upload" component={VideoFormContainer} />
        <UploadRoute exact path='/upload/edit/:videoId' component={EditVideoFormContainer} />
        <Route exact path='/' component={Sidebar} />
        <Route path='/results/search_query/:query' component={SearchVideoIndexContainer} />
        <Route exact path='/' component={VideoIndexContainer} />
        <UploadRoute path="/upload/details" component={VideoFormDetails} />
        <Route exact path="/watch/:videoId" component={VideoShowContainer} />
        <Route exact path='/channel/:userId' component={ChannelContainer} />
      </div>
    )
  }

};

export default App;