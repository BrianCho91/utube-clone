// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

// class CommentForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       body: ``
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//   };

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.action(this.state)
//   };

//   handleInput() {
//     return(e) => {
//       this.setState({
//         body: e.target.value
//       })
//     };
//   };
  
//   render() {

//     return(
//       <div className="comment-form-container">
//         <div className="comment-count-container">
//           <p className="comment-counter">comment counter</p>
//           <div className="comment-sort-container"></div>
//         </div>
//         <div className="comment-form-container-items-container">
//           <div className="comment-form-icon-container">
//             <Link to={`/channel/""}`} className="comment-author-icon">
//               <FontAwesomeIcon className="comment-author-faIcons" icon={faUserCircle} />
//             </Link>
//           </div>
//           <div className="comment-form-item-container">
//             <form action="" className="comment-form-item">
//               <input type="text" 
//                 className="comment-form-input"
//                 onChange={this.handleInput}
//                 value="Comment here"
//               />
//             </form>
//             <button className="comment-form-submit">

//             </button>
//           </div>
//         </div>
//       </div>
//     )
//   }

// }

// export default CommentForm