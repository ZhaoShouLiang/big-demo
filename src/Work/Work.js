import React from 'react';
import WorkCard from '../component/WorkCard';
import { getJson1 } from '../utils/helpers';

class Work extends React.Component {
	constructor(){
	    super();
	    this.state={
	      data:[],
	      wait:true
	    }
	 }
	componentDidMount(){
		getJson1()
		.then( (Recdata)=>{
			this.setState({
				data:Recdata.getJson1,
				wait:false
			})
		})
	}
	render () {
	    let cards = this.state.data.map( (item,i) => <WorkCard {...item} key={i} /> );
    	return(
      	<div className="container-fluid">
        	<div className="row" style={{marginTop:'20px'}}>
         		{this.state.wait ? '请稍等' : cards}
        	</div>
      	</div>
	    )
	 }
}

export default Work;
