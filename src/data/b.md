## 3. 数据流：state props propType

### 3.1 state && setState
用状态控制组件变化
可以把一个组件看做一个状态机, 每一次状态对应于组件的一个 ui

**组件内部的状态，可以使用 state**

```js
import React, { Component } from 'react';

class StateDemo extends Component {

  state = {
    secondsElapsed: 0
  }

  tick(){
    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
  }

  componentDidMount(){
    this.interval = setInterval( this.tick.bind(this), 1000 );
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render(){
    return (
      <div>目前已经计时：{this.state.secondsElapsed}秒</div>
    )
  }
}

export default StateDemo;

```


### 3.2 props
通过 this.props 可以获取传递给该组件的属性值，还可以通过定义 getDefaultProps 来指定默认属性值（这是ES5的写法，ES6定义组件的默认props可以直接写props）

下面几个是props的常用API：
- `this.props.children`
- `this.props.map`
- `this.props.filter`

**props是调用组件的时候传递进去的数据，一般用于组件树数据传递**

```js
import React, { Component } from 'react';

class PropsDemo extends Component {
  props = {
    title: '这是默认的title属性值'
  }
  render(){
    console.log(this.props);

    return <b>{this.props.title}</b>
  }
}

export default PropsDemo;


// 组件调用方式
// <PropsDemo title="设置的标题" />
```

### 3.3 propTypes
通过指定 propTypes 可以校验props属性值的类型，校验可提升开发者体验，用于约定统一的接口规范。

```js
import React, { Component, PropTypes } from 'react';

class PropTypesDemo extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  props = {
      title: '默认的title'
  }

  render(){
    return <b>{this.props.title}</b>
  }
}

export default PropTypesDemo;

```

## 4. 调用API定义组件

用 React.createClass或者React.Component 定义组件时允许传入相应的配置及组件API的使用，包括组件生命周期提供的一系列钩子函数。

### 4.1 组件初始定义

- getDefaultProps 得到默认属性对象，这个在ES6的时候不需要这样定义
- propTypes 属性检验规则
- mixins 组件间公用方法


### 4.2 初次创建组件时调用

- getInitialState 得到初始状态对象
- render 返回组件树. 必须设置
- componentDidMount 渲染到 dom 树中是调用，只在客户端调用，可用于获取原生节点

### 4.3 组件的属性值改变时调用

- componentWillReceiveProps 属性改变调用
- shouldComponentUpdate 判断是否需要重新渲染
- render 返回组件树. 必须设置
- componentDidUpdate 渲染到 dom 树中是调用, 可用于获取原生节点

### 4.4 销毁组件
- componentWillUnmount 组件从 dom 销毁前调用

### 4.5 示例诠释组件全生命周期

```js
import React, { Component } from 'react';

class LifeCycle extends Component {

  Props = {
    value: '开始渲染'
  }

  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps');
    this.setState({
        value: nextProps.value
    });
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps,nextState){
    console.log('componentWillUpdate');
  }

  componentWillMount(){
    console.log('componentWillMount');
  }

  render() {
    console.log('render');
    return <span>{this.props.value}</span>
  }

  componentDidMount() {
      console.log('componentDidMount');
  }

  componentDidUpdate(prevProps,prevState) {
      console.log('componentDidUpdate');
  }

  componentWillUnmount(prevProps,prevState) {
      console.log('componentWillUnmount');
  }
}

export default LifeCycle;

```

调用组件并销毁组件示例
```
import React, { Component } from 'react';
import LifeCycleDemo from './LifeCycleDemo';

class DestroyComponent extends Component {

  state = {
    value:1,
    destroyed:false
  }

  increase = () => {
    this.setState({
      value: this.state.value + 1
    });
  }

  destroy = () => {
    this.setState({
      destroyed: true
    });
  }

  render() {
    if(this.state.destroyed){
        return null;
    }

    return <div>
      <p>
        <button onClick={this.increase}>每次加1</button>
        <button onClick={this.destroy}>干掉这两个按钮</button>
      </p>
      <LifeCycleDemo value={this.state.value}/>
    </div>;
  }
}

export default DestroyComponent;

```

### 4.6 回顾组件的渲染过程
```js
# 创建-》渲染-》销毁

getDefaultProps()
getInitialState()
componentWillMount()
render()
componentDidMount()
componentWillUnmount()

# 更新组件

componentWillReceiveProps()
shouldComponentUpdate()
componentWillUpdate()
render()
componentDidUpdate()
```