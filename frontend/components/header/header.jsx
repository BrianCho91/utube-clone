import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faBell, faEnvelope, faVideo, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import Icon from '@material-ui/core/Icon'
// import {search} from '@material-ui/icons';
import SideDrawer from '../header/side_drawer';
import UserMenu from '../header/user_menu';
import VideoFormDropdown from '../header/video_form_dropdown';
import SearchVideoDropdownContainer from '../searchbar/search_video_dropdown_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
      userMenuOpen: false,
      videoFormDropOpen: false,
      searchText: "",
      searchbar: false
    };
    this.sideDrawerClickHandler = this.sideDrawerClickHandler.bind(this);
    this.signupLoginLink = this.signupLoginLink.bind(this);
    this.userMenuClickHandler = this.userMenuClickHandler.bind(this);
    this.videoFormDropdownClickHandler = this.videoFormDropdownClickHandler.bind(this);
    this.searchClickHandler = this.searchClickHandler.bind(this);
    this.update = this.update.bind(this);
  };

  clickedOutsideDropdown() {
    let that = this;

    document.addEventListener('click', function(e) {
      let userMenuDrop = document.getElementById('user-menu')
      let videoFormDrop = document.getElementById('dropdownMenu')
      let userMenuButton = document.getElementById('create-form-button')
      let videoFormButton = document.getElementById('user-menu-button')
      
      let clickedInsideUserMenu
      let clickedInsideVideoMenu;
      let clickedInsideUserButton;
      let clickedInsideVideoButton;

      if (userMenuDrop) {
        clickedInsideUserMenu = userMenuDrop.contains(e.target);
      } 
      if (videoFormDrop) {
        clickedInsideVideoMenu = videoFormDrop.contains(e.target);
      }
      if (userMenuButton) {
        clickedInsideUserButton = userMenuButton.contains(e.target);
      }
      if (videoFormButton) {
        clickedInsideVideoButton = videoFormButton.contains(e.target);
      }

      if (that.state.userMenuOpen === true) {
        if (!clickedInsideUserMenu && !clickedInsideUserButton) {
          if (!clickedInsideVideoMenu && !clickedInsideVideoButton) {

            that.setState((prevState) => {
              return {userMenuOpen: !prevState.userMenuOpen};
            });
          }
        }
      }

      if (that.state.videoFormDropOpen === true) {
        if (!clickedInsideVideoMenu && !clickedInsideVideoButton) {
          if (!clickedInsideUserMenu && !clickedInsideUserButton) {

            that.setState((prevState) => {
              return {videoFormDropOpen: !prevState.videoFormDropOpen};
            });
          }
        }
      }
    })
  }

  // clickedOutsideDropdown() {
  //   let that = this;

  //   document.addEventListener('click', function(e) {
  //     e.preventDefault()
  //     let userMenuDrop = document.getElementById('user-menu')
  //     let videoFormDrop = document.getElementById('dropdownMenu')
  //     let userMenuButton = document.getElementById('create-form-button')
  //     let videoFormButton = document.getElementById('user-menu-button')
      
  //     let clickedInsideUserMenu;
  //     let clickedInsideVideoMenu;
  //     let clickedInsideUserButton;
  //     let clickedInsideVideoButton;

  //     if (userMenuDrop) {
  //       clickedInsideUserMenu = userMenuDrop.contains(e.target);
  //     } 
  //     if (videoFormDrop) {
  //       clickedInsideVideoMenu = videoFormDrop.contains(e.target);
  //     }
  //     if (userMenuButton) {
  //       clickedInsideUserButton = userMenuButton.contains(e.target);
  //     }
  //     if (videoFormButton) {
  //       clickedInsideVideoButton = videoFormButton.contains(e.target);
  //     }

  //     if (that.state.userMenuOpen === true) {
  //       if (!clickedInsideUserMenu && !clickedInsideUserButton) {
  //         if (!clickedInsideVideoMenu && !clickedInsideVideoButton) {

  //           that.setState((prevState) => {
  //             return {userMenuOpen: !prevState.userMenuOpen};
  //           });
  //         }
  //       }
  //     }

  //     if (that.state.videoFormDropOpen === true) {
  //       if (!clickedInsideVideoMenu && !clickedInsideVideoButton) {
  //         if (!clickedInsideUserMenu && !clickedInsideUserButton) {

  //           that.setState((prevState) => {
  //             return {videoFormDropOpen: !prevState.videoFormDropOpen};
  //           });
  //         }
  //       }
  //     }
  //   })
  // }

  sideDrawerClickHandler() {
    this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  sideDrawerToggle() {
    let sideDrawer;
    if (this.state.sideDrawerOpen) {
      return sideDrawer = <SideDrawer
                            show={this.state.sideDrawerOpen} 
                            sideDrawerClickHandler={this.sideDrawerClickHandler}
                          />;
    };
  };

  videoFormDropdownClickHandler() {
    this.setState((prevState) => {
      return {
        videoFormDropOpen: !prevState.videoFormDropOpen,
        userMenuOpen: false
      };
    });
  }

  videoFormDropdownToggle() {
    let videoFormDropdown;
    if (this.state.videoFormDropOpen) {
      return videoFormDropdown = <VideoFormDropdown
                          show={this.state.videoFormDropOpen}
                          videoFormDropdownClickHandler={this.videoFormDropdownClickHandler}
                          user={this.props.user}
                          currentUser={this.props.currentUser}
                        />;
    };
  };

  userMenuClickHandler() {
    this.setState((prevState) => {
      return {
        userMenuOpen: !prevState.userMenuOpen,
        videoFormDropOpen: false
      };
    });
  };

  userMenuToggle() {
    let userMenu;
    if (this.state.userMenuOpen) {
      return userMenu = <UserMenu
                          show={this.state.userMenuOpen}
                          userMenuClickHandler={this.userMenuClickHandler}
                          user={this.props.user}
                          logout={this.props.logout}
                        />;
    };
  };

  update(e) {
    this.setState({
      searchText: e.currentTarget.value,
    });
  }

  searchClickHandler() {
    this.props.history.push(`/results/search_query/${this.state.searchText}`)
    this.setState({
      searchText: ""
    });
  }

  signupLoginLink() {
    if (this.props.currentUser) {
      return (
        <div id="user-menu-button" className="user-profile-icon" >
          {this.userMenuToggle()}
          <FontAwesomeIcon className="faIcons" icon={faUserCircle} onClick={this.userMenuClickHandler}/>
        </div>
      )
    } else {
      return (
        <Link to='/login' className="user-profile-icon-signin">
          <FontAwesomeIcon className="faIcons" icon={faUserCircle} />
          &nbsp;&nbsp;<span>Sign In</span>
        </Link>
      )
    }
  }

  userIconContainerSize() {
    if (this.props.currentUser) {
      return "user-icons-container"
    } else {
      return "user-icons-container-login"
    }
  }


  render() {

    this.clickedOutsideDropdown();

    return(
      <div>
        {this.sideDrawerToggle()}
        <div className="header">
          <div className="home-icons-container">
            <button>
              <FontAwesomeIcon className="faIcons" id="faBars" icon={faBars} onClick={this.sideDrawerClickHandler}/>
            </button>
              <div id="home-buttons" className="uTube-icon">
                <Link to={`/`} >
                  <FontAwesomeIcon className="faYoutube" icon={faYoutube} />
                  <span className="uTube-icon-letters">uTube</span>
                </Link>
              </div>
            {/* <img id="logo" src="https://i.ytimg.com/vi/216xvaj_OAA/maxresdefault.jpg" alt=""/> */}
          </div>

          {/* <div className="header-search-container"> */}
            <form className="header-search-container"> 
              <input type="text"
                className="header-search-bar"
                value={this.state.searchText}
                placeholder="Search"
                onChange={this.update}
                />
              {/* <div className="header-search-bar">Search</div> */}
              <button className="header-search-button" onClick={this.searchClickHandler}>
              <FontAwesomeIcon className="faIcons" id="faSearch" icon={faSearch} />
                {/* <i id="search" className="large material-icons">search</i> */}
              </button>
            </form>
            {/* <SearchVideoDropdownContainer searchText={this.state.searchText} fetchVideos={this.props.fetchVideos} /> */}
          {/* </div> */}

          <div className={this.userIconContainerSize()}>
            <div id="create-form-button" className="create-post-icon">
              {this.videoFormDropdownToggle()}
              <FontAwesomeIcon id="faIcons" className="faIcons" icon={faVideo} onClick={this.videoFormDropdownClickHandler} />
              {/* <i id="video_call" className="large material-icons">video_call</i> */}
            </div>
            <div className="messages-icon">
              <FontAwesomeIcon className="faIcons" icon={faEnvelope} />
              {/* <i id="mail" className="large material-icons">mail</i> */}
            </div>
            {/* <div className="alerts-icon">
              <FontAwesomeIcon className="faIcons" icon={faBell} />
              
            </div> */}
            {this.signupLoginLink()}
            {/* <div className="user-profile-icon">
              <FontAwesomeIcon className="faIcons" icon={faUserCircle} /> */}
              {/* <i id="person" className="large material-icons">person</i> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Header;