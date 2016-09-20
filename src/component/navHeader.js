import React from 'react';


class NavHeader extends React.Component {
  render () {
    return(
      <div className="nav-header">
      	<p><span className="glyphicon glyphicon-arrow-left"></span>BACK</p>
      	<h2>WELCOME</h2>
      	<p> <span className="glyphicon glyphicon-align-justify"></span></p>
      </div>
    )
  }
}

export default NavHeader;
