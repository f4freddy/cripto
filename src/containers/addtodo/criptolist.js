import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

import {getCriptoData} from '../../actions'

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


class Criptolist extends Component {

 constructor(props) {
    super(props);
    this.props.dispatch(getCriptoData());
  }
  componentWillMount(){
  
  
  }

  componentWillUpdate(nextProps, nextState) {
console.log('hhhhhhhhhhhhhhhhhh',nextProps)
  }

   

  render() {
   console.log('here',this.props.data)
    return (
     <div>
    <Paper style={style} zDepth={2} circle={true} ><img alt="dfbdsj" style={style1} src="./bitcoin.jpg"></img><p>Bitcoin</p></Paper>
    <Paper style={style} zDepth={2} circle={true} ><img alt="dfbdsj" style={style1} src="./Ethereum.jpg"></img><p>Ethereum</p></Paper>
    <Paper style={style} zDepth={2} circle={true} ><img alt="dfbdsj" style={style1} src="./ripple.png"></img><p>Ripple</p></Paper>
    <Paper style={style} zDepth={2} circle={true} ><img alt="dfbdsj" style={style1} src="./litcoin.jpg"></img><p>Litcoin</p></Paper>
    <Paper style={style} zDepth={2} circle={true} ><img alt="dfbdsj" style={style1} src="./bitcoin.jpg"></img><p>Bitcoin</p></Paper>
    <Paper style={style} zDepth={2} circle={true} ><img alt="dfbdsj" style={style1} src="./bitcoin.jpg"></img><p>Bitcoin</p></Paper>
    </div>
    );
  }
}


const mapStateToProps = (state) => ({
  data: state.data,
 
});

export default connect(
  mapStateToProps
)(Criptolist);