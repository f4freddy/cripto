import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
const style1 = {    
    width: '100%'
  };

const PaperExampleCircle = () => (
  <div>
    <Paper style={style} zDepth={2} circle={true} ><img alt="dfbdsj" style={style1} src="./bitcoin.jpg"></img><p>Bitcoin</p></Paper>
    <Paper style={style} zDepth={2} circle={true} ><img alt="dfbdsj" style={style1} src="./Ethereum.jpg"></img><p>Ethereum</p></Paper>
    <Paper style={style} zDepth={2} circle={true} ><img alt="dfbdsj" style={style1} src="./ripple.png"></img><p>Ripple</p></Paper>
    <Paper style={style} zDepth={2} circle={true} ><img alt="dfbdsj" style={style1} src="./litcoin.jpg"></img><p>Litcoin</p></Paper>
    <Paper style={style} zDepth={2} circle={true} ><img alt="dfbdsj" style={style1} src="./bitcoin.jpg"></img><p>Bitcoin</p></Paper>
    <Paper style={style} zDepth={2} circle={true} ><img alt="dfbdsj" style={style1} src="./bitcoin.jpg"></img><p>Bitcoin</p></Paper>
  </div>
);

export default PaperExampleCircle;