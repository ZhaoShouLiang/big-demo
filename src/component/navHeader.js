import React from 'react';
import { hashHistory } from 'react-router';

class NavHeader extends React.Component {
  handleBack(){
     this.context.router.goBack();
     console.log(this.context.router)
   }
   handleBackHome(){
     this.context.router.push(`/`)
   }
  render (){
    return(
      <div className="nav-header">
        <p style={{fontSize:'18px'}} onClick={this.handleBack.bind(this)}><i className="glyphicon glyphicon-chevron-left" aria-hidden="true"></i>Back</p>
        <h3>ZhaoShouLiang@{this.props.title}</h3>
        <p className="glyphicon glyphicon-apple" aria-hidden="true" onClick={this.handleBackHome.bind(this)}></p>
      </div>
    )
  }
}

NavHeader.contextTypes = {
   router: React.PropTypes.object.isRequired
}
export default NavHeader;
