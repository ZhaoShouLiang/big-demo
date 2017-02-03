<h1 style="font-size: 40px;text-align:center;color: #007cdc;">React基础知识详解</h1>

> 除组件化、虚拟DOM在复用以及性能上带来的一般好处外，React思想使得开发者之间更好的分工与合作，在配合上非常顺畅，规范的接口以及极强的约束，使得整个代码结构清晰，不同开发者的代码高度一致。

下面主要讲解ES6语法来写React组件代码，提前明确以下几点：

- 不支持 `getInitialState` 在设置组件初始的 `state` ，可在组件的 `constructor` 中通过 `this.state` 设置，也可直接作为 `properties` 定义
- `propTypes、defaultProps` 作为 `properties` 定义，也可在组件外部通过键值对方式设置。
- 不支持 `mixins`，可以使用*高阶组件*写法，或者 `decorator`。

## 1. 顶层API

最简单的React组件及其渲染
```js
import React, { Component } from 'react';

/**
 * 最简单的一个组件
 */
class SimpleComponent extends Component {
  render(){
    return <div> here we go </div>;
  }
}

// 我们可以看看React给我们提供了哪些顶层组件
console.log( React );

export default SimpleComponent;
```

### `react.js`
```js
React.Children: Object
React.Component: ReactComponent(props, context, updater)
React.DOM: Object
React.PropTypes: Object
React.cloneElement: (element, props, children)
React.createClass: (spec)
React.createElement: (type, props, children)
React.createFactory: (type)
React.createMixin: (mixin)
React.isValidElement: (object)
```

Component API
```js
this.context: Object
this.props: Object
this.refs: Object
this.state: Object
this.setState: Object
```
### `react-dom.js`

```js
ReactDOM.findDOMNode: findDOMNode(componentOrElement)
ReactDOM.render: ()
ReactDOM.unmountComponentAtNode: (container)
```

### `react-dom-server.js`

```
ReactDOMServer.renderToString
ReactDOMServer.renderToStaticMarkup
```

## 2. jsx语法

类似 xml 的语法，用来描述组件树
```
<div classname="x">
  <a href="#">#</a>
    <component x="y">1</component>
</div>
```
不用JSX，用React提供的API写的话
```js
React.createElement('div',{
  className:'x'
    },[
    React.createElement('a',{href:'#'},'#'),
    React.createElement(Component,{x:'y'},1);
]);
```

### 2.1 注释、命名、根元素个数、JSX 嵌入变量
```js
import React, { Component } from 'react';

// 1. 组件命名遵循驼峰命名，首字母大写
class ComponentDemo extends Component {
  render(){
    {
      /*
      2. 这是代码注释
      也可以是多行
      */
    }
    const name = this.props.name;

    // 3. render 方法 return 回来的根元素只能是一个，超过会报错
    // 4. { } 里面可以写JS代码
    return (
      <div>
        hello, {name ? name : "我是默认的"}
      </div>
    );
  }
}

export default ComponentDemo;
```

- React只有一个限制， 组件只能渲染单个根节点。如果你想要返回多个节点，它们必须被包含在同一个节点里。

### 2.2 styles
```js
import React, { Component } from 'react';

class StyleDemo extends Component {
  render(){
    // 5. 在JS文件里面给组件定义样式
    var MyComponentStyles = {
        color: 'blue',
        fontSize: '28px'
    };

    return (
      <div style={MyComponentStyles}>
          可以直接这样写行内样式
      </div>
    )
  }
}

export default StyleDemo;
```
### 2.3  JSX SPREAD
可以用通过 {...obj} 来批量设置一个对象的键值对到组件的属性，注意顺序
```js
import React, { Component } from 'react';

class SpreadDemo extends Component {
  componentWillMount(){
    console.log(this.props);
  }
  render(){
    return <h1> {this.props.name} is a {this.props.type} </h1>;
  }
}

export default SpreadDemo;

```
### 2.4 属性名不能和 js 关键字冲突

例如：className, readOnly, htmlfor
