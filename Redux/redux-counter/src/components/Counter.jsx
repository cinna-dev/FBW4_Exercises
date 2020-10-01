import React from 'react';
import CounterControl from './CounterControl.jsx';
import CounterOutPut from './CounterOutPut.jsx';
import ShowResults from './ShowResults';
import { connect } from 'react-redux';
import {
  addOne,
  subOne,
  addFive,
  subFive,
  showResult,
  deleteListItem
} from '../action/counterAction';

const Counter = props => {
  return (
    <div>
      <CounterOutPut value={props.counter} />
      <CounterControl label='Increment' clickhandler={props.addOne} />
      <CounterControl label='Decrement' clickhandler={props.subOne} />
      <CounterControl label='Add 5' clickhandler={props.addFive} />
      <CounterControl label='Subtract 5' clickhandler={props.subFive} />
      <CounterControl label='show Results' clickhandler={props.showResult} />
      <ShowResults list={props.list} clickhandler={props.deleteListItem} />
    </div>
  );
};

const mapStateToProps = state => ({
  counter: state.counter.counter,
  list: state.counter.list,
  listId: state.counter.listId
});

export default connect(mapStateToProps, {
  addOne,
  subOne,
  addFive,
  subFive,
  showResult,
  deleteListItem
})(Counter);
