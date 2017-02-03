import axios from 'axios';

function searchGit(add){
	let address = `https://api.github.com/users/${add}`
	return  axios.get(address)
      .then((res) => ({
       		getdata:res.data
       }))
      .catch(function (error) {
        alert(error);
      });
}


function getJson(){
	let address = `https://raw.githubusercontent.com/ZhaoShouLiang/demodate/master/bigdemo-card.json?${Math.random()}`;
	return axios.get(address)
		.then((res) => ({
       		getJson:res.data
       }))
      .catch(function (error) {
        alert(error);
      });
}

function getJson1(){
  let address = `https://raw.githubusercontent.com/ZhaoShouLiang/demodate/master/card.json?${Math.random()}`
  return axios.get(address)
    .then((res) => ({
          getJson1:res.data
       }))
      .catch(function (error){
        alert(error);
      });
}
function getMd(add) {
   let address = `https://raw.githubusercontent.com/ZhaoShouLiang/big-demo/master/src/data/${add}.md`;
   return axios.get(address)
     .then( (res) => (
       { getMd:res.data }
     ))
     .catch(function (error) {
       alert(error);
     });
 }

export { searchGit, getJson, getJson1, getMd };
