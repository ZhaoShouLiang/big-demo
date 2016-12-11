import React, { PropTypes } from 'react';
import echarts from 'echarts'
require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title')


class Echart extends React.Component {
	componentDidMount(){
		let myChart = echarts.init(document.getElementById('main1'));
		myChart.setOption({
    		title: { text: '我的技能' },
    		tooltip: {},
    		xAxis: {
        	data: ["HTML","CSS","JQUERY","REACT","NODE","JS"]
    		},
   	 		yAxis: {},
    		series: [{
        	name: '娴熟度',
        	type: 'bar',
        	data: [5, 20, 36, 10, 10, 20]
    		}]
		});
		myChart.setOption(option);



	}
 render () {

    return(
    	<div>

    		<div id="main1" style={{width:"600px",height:"600px",textAlign:'center',display:'block',margin:'0 auto'}}></div>

    	</div>

    )
  }
}


export default Echart ;
