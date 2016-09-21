import React from 'react';


class Home extends React.Component {
  render () {
    return(
      <div className="home-container">
        <div className="home-cover">
          <div className="home-item">
            <h2>HI, I'M <span style={{color:'#00bcd4'}}>ZhaoShouLiang</span></h2>
            <p style={{marginBottom:'20px'}}>WEB DEVELOPER</p>
            <button className="home-btn"><a href="https://github.com/ZhaoShouLiang" style={{color:'#fff'}}>HIRE ME</a></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
