import React from 'react';
import {Link} from 'react-router'


class LeftNav extends React.Component {

  render () {
    return(
      <div className="left-nav">
        <h3>ZSL@{this.props.title}</h3>
      	<Link activeStyle={{color:'teal'}} onlyActiveOnIndex={true} to="/"><span className='glyphicon glyphicon-user'></span><br/>Home</Link>
      	<Link activeStyle={{color:'teal'}} to="/blog"><span className='glyphicon glyphicon-leaf'></span><br/>Blog</Link>
      	<Link activeStyle={{color:'teal'}} to="/work"><span className='glyphicon glyphicon-leaf'></span><br/>Work</Link>
      	<Link activeStyle={{color:'teal'}} to="/about"><span className='glyphicon glyphicon-leaf'></span><br/>About</Link>
      </div>
    )
  }
}

export default LeftNav;
