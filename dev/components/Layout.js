import React from 'react';
//import { Link } from 'react-router';
let Link = require('react-router').Link;
import * as actionCreators from '../action-creators';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

 class Layout extends React.Component {

	render() {
		return (
			<div>
				<nav className="navbar navbar-white navbar-fixed-top">
		      <div className="container p-y-1">
		        <div className="navbar-header">
		          <button
								type="button"
								className="navbar-toggle collapsed"
								data-toggle="collapse"
								data-target="#navbar"
								aria-expanded="false"
								aria-controls="navbar"
							>
			          <span className="sr-only">Toggle navigation</span>
			          <span className="icon-bar" />
			          <span className="icon-bar" />
			          <span className="icon-bar" />
		          </button>
		          <p className="navbar-brand title"><Link to="/">FileStackGram</Link></p>
		        </div>
		        <div id="navbar" className="collapse navbar-collapse">
		          <ul className="nav navbar-nav navbar-right">
		            <li><Link to="/add">Upload</Link></li>
		            <li><a href="http://blog.filestack.com/working-with-filepicker/create-an-instagram-app-to-upload-and-share-images/" target="_blank">Blog</a></li>
		          </ul>
		        </div>
		      </div>
		    </nav>
		    <div className="container m-t-3">
		      {React.cloneElement(this.props.children, this.props)}
		    </div>
		  </div>
		);
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch)
}

export let LayoutContainer = connect(null, mapDispatchToProps)(Layout);