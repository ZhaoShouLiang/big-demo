import React from 'react';
import Echarts from '../Echart/Echarts'

class ShowGit extends React.Component{
  render(){
    let info = this.props.gitShowCon;
    let styles={
      img:{
        width:'100%',
        maxWidth:'130px',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.55) 0px 3px 10px'
      }
    }
    return(
      <div >
        <img src={info.avatar_url} style={styles.img}/>
        <h3>{info.login}</h3>
        <div className='show-git'>
          <p>followers<br/>{info.followers}</p>
          <p>following<br/>{info.following}</p>
          <p>location<br/>{info.location}</p>
        </div>
        <Echarts />
      </div>
    )
  }
}

export default ShowGit;
