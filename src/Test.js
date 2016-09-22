import React from 'react';
import TestChild from './TestChild'



class Test extends React.Component {
  getChildContext() {
    return {color: "purple"};
  }
  render () {
    return(
      <div>
        爷爷辈
        <TestChild/>
      </div>
    )
  }
}
Test.childContextTypes = {
  color: React.PropTypes.string
};
export default Test;
