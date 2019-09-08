import React from "react";
import { Route } from 'react-router-dom';
import Header from './header/header';
import SideDrawer from './header/side_drawer';
import Sidebar from './header/sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false
    }
    this.sideDrawerClickHandler = this.sideDrawerClickHandler.bind(this)
  }

  sideDrawerClickHandler() {
    this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  }

  sideDrawerToggle() {
    let sideDrawer;
    // let modal;
    console.log("toggled")
    console.log(this.state.sideDrawerOpen)
    if (this.state.sideDrawerOpen) {
      return sideDrawer = <SideDrawer 
                            show={this.state.sideDrawerOpen} 
                            sideDrawerClickHandler={this.sideDrawerClickHandler}
                          />;
      // modal = <Modal show={this.state.sidebarOpen} />;
    }
  }
  
  componentDidMount() {
    document.body.classList.add("background-black");
  }

  render() {

    return(  
      <div>
        <Header sideDrawerClickHandler={this.sideDrawerClickHandler}/>
        {this.sideDrawerToggle()}
        <Sidebar />
      <main></main>
      </div>
    )
  }

};

export default App;