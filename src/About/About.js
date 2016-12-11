import React from 'react';
import Echart from '../Echart/Echarts.js'
import {blue500} from 'material-ui/styles/colors';
import axios from 'axios';
import ShowGit from './gitShow'


import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

class About extends React.Component {
constructor(){
  super();
  this.state={
    data:{},
    showSearch:0
  }
}
 handleSubmit(e){
   e.preventDefault;
   let text = this.refs.text.getValue();
   console.log(text)
    if (text!=='') {
    this.setState({showSearch:1})
    axios.get(`https://api.github.com/users/${text}`)
    .then( res => this.setState({data:res.data,showSearch:2}),console.log(this.state.data) )
    .catch(function (error) {console.log(error)})
    this.refs.form.reset()
  }else{
    return alert('用户名不能为空');

 }




}
  render () {
    let styles = {
      underlineStyle:{borderColor: blue500},
      showSearch:{
        textAlign:'center',
        marginTop:'10vh'
      }


    }
    return(
      <div className='about-wrap'>
          <div className="git-card">
            <h2>SEARCH</h2>
              <form className="about-form" onSubmit={this.handleSubmit.bind(this)} ref='form'>
                  <TextField  hintText="搜索"  underlineFocusStyle={styles.underlineStyle} ref='text'/>
                  <RaisedButton label="search" secondary={true} style={{marginLeft:'10px'}}  onClick={this.handleSubmit.bind(this)}/>
              </form>
        </div>
        <div style={styles.showSearch}>
             {
               this.state.showSearch==1 ? <CircularProgress size={80} thickness={5} /> :
               this.state.showSearch==2 ? <ShowGit gitShowCon={this.state.data}/> :''
           }
        </div>
      </div>
    )
  }
}

export default About;
