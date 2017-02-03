## 5. 使用ref对操作DOM

- ReactDOM.findDOMNode
- this.refs.xxx

获取DOM后可以方便结合现有非 react 类库的使用，通过 ref/refs 可以取得组件实例，进而取得原生节点，不过尽量通过 state/props 更新组件，不要使用该功能去更新组件的DOM。

```js
import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';

class HandleDOMComponent extends Component {
  componentDidMount(){
    // 两种方式都可以获取到元素
    let ele = findDOMNode(this.refs.content);
    let ele2 = this.refs.content;

    // 如果想用 jquery，那么这是个好时机
    console.log( ele );
    console.log( ele.innerHTML );
    console.log( ele2.innerHTML );

  }

  render(){
    return (
      <div>
        <h3>来吧，一起操作DOM</h3>
        <div ref='content'>这是我DOM元素里面的内容</div>
      </div>
    );
  }
}

export default HandleDOMComponent;

```

再看一个有趣的例子
```js
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

class Refs extends Component {
  state = {
    red: 0,
    green: 0,
    pink: 0
  }
  update = (e) => {
    this.setState({
      red: findDOMNode(this.refs.red).value,
      green: findDOMNode(this.refs.green).value,
      pink: findDOMNode(this.refs.pink).value
    })
  }
  render(){
    return (
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br />
        <Slider ref="pink" update={this.update} />
        {this.state.pink}
      </div>
    )
  }
}

class Slider extends Component {
  render(){
    return (
        <input type="range"
          min="0"
          max="255"
          onChange={this.props.update} />
    )
  }

}

export default Refs;

```

## 6. 事件event

可以通过设置原生 dom 组件的 onEventType 属性来监听 dom 事件，例如 onClick, onMouseDown，在加强组件内聚性的同时，避免了传统 html 的全局变量污染

```js
'use strict';

import React, { Component } from 'react';

class HandleEvent extends Component {

  state = { liked: false }

  handleClick = (event) => {
    this.setState({liked: !this.state.liked});
  }

  render() {
    let text = this.state.liked ? '喜欢' : '不喜欢';

    return (
      <p onClick={this.handleClick}>
        我 {text} 你.
      </p>
    );
  }
}

export default HandleEvent;

```

**注意：事件回调函数参数为标准化的事件对象，可以不用考虑 IE**

更多事件我们可以一起看[这里](http://reactjs.cn/react/docs/events.html#form-events)