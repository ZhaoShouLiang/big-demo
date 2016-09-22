
import React, { PropTypes } from 'react'

class TestChild extends React.Component {
  componentDidMount(){
    console.log(this.context);
  }
  render () {
    return(
      <div>
        孙子辈
      </div>
    )
  }
}

TestChild.contextTypes = {
  color: React.PropTypes.string
};
export default TestChild;
