import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import Header from './components/Header';
import './App.css';
import PuppyNametag from './components/PuppyNametag';
import PuppyList from './components/PuppyList';

export default class App extends React.Component{
 
  state = {
    loading: true,
    list1: [],
    list2: []
  }

  // FETCHING DATA FROM API, PARSING, ENSURING NO DUPLICATES
  async componentDidMount() {
    const url = 'https://dog.ceo/api/breeds/list/all';
    const reponse = await fetch(url);
    const data = await reponse.json();
      
    // converts JSONObject keys into an iterable array temp. 
    var temp = [];
    for (var k in data.message) {
      temp.push(k + " ");
    }

    // l1 and l2 are the final lists of dogs, arr is used to generate a random unique sequence of numbers.
    var l1 = [];
    var l2 = [];
    var arr = [];

    // creates a unique random set of numbers from 0 to # of dog species
    while(arr.length < 20){
        var r = Math.floor(Math.random() * temp.length);
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    // uses random numbers as index to select dogs
    for (let c = 0; c < arr.length; c++) {
        ((c >= 10) ? l1.push(temp[arr[c]])  : l2.push(temp[arr[c]]));
    }

    // and finally sets them to the state
    const obj1 = [];
    const obj2 = [];

    for (let i = 0; i< l1.length; i++) {
      obj1[i] = {'id': i+1, 'name': l1[i]};
    }

    for (let k = 0; k< l2.length; k++) {
      obj2[k] = {id: k+11, 'name': l2[k]}
    }

    this.setState({loading: false, list1: obj1, list2: obj2});
    console.log(this.state);
  }
  

  // 1. splice item from where it's pulled out 
  // 2. and put it in the right list state, 
  // 3. call stateupdate? 
  onDragEnd = (result) => {
    console.log(result);
    if (!result.destination) { return;}

    const {source, destination} = result;
    
    const copieditems = [...this.state.list1]; 
    const copieditems2 = [...this.state.list2];
    // source is 1
    if (source.droppableId === 'List 1') {
        const [removed] = copieditems.splice(source.index, 1) // removed item from list 1.
        // destination
        if (destination.droppableId === 'List 1') { 
            copieditems.splice(destination.index, 0, removed); // slap it into right place    
        } else { // destination is 2
            copieditems2.splice(destination.index, 0, removed); // slap into list 2
        }
    } else { // source is 2
        const [removed] = copieditems2.splice(source.index, 1)
        // destination
        if (destination.droppableId === 'List 1') { 
            copieditems.splice(destination.index, 0, removed);     
        } else {
            copieditems2.splice(destination.index, 0, removed); 
        }
    }
    const newState = {
      ...this.state,
      list1: copieditems,
      list2: copieditems2
    }
    this.setState(newState);
  }
    

  render() {
    return (
      <div>  
        <DragDropContext onDragEnd={result => this.onDragEnd(result)}>
          <div>
            <Header title='- by Alex Lin'/>
          </div>
          <div style={{ float: 'left', display: 'flex', justifyContent: 'center', height: '100%', backgroundColor: 'teal'}}>
            {<PuppyList puppies={this.state.list1} header='List 1' /> }
          </div>
          <div style={{float: 'right', display: 'flex', justifyContent: 'left', height:'100%'}}>
            {<PuppyList puppies={this.state.list2} header='List 2' /> }
          </div>
        </DragDropContext >
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
