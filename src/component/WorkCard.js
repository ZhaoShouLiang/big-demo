import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';

class WorkCard extends React.Component {
  
    render () {
    return(
      <div className="col-xs-6 col-sm-4">
        <div className="thumbnail">
          <img src={this.props.img} />
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
            <p><a className="btn btn-primary" role="button">Button</a></p>
          </div>
        </div>
      </div>
    )
  }
}
WorkCard.defaultProps={
  title:'我是标题',
  desc:'我是描述',
  img:'http://obmf232cc.bkt.clouddn.com/home1.jpg'
}

export default WorkCard;
