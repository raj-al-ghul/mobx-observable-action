import { configure, observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import './App.css';
import setter from './setter';

configure({enforceActions: "always"});

class Store {
  @observable @setter myField = '';
  // @setter myField = '';

  // @observable myField = '';
  // @observable myField2 = '';
  // @action setMyField2 = (v:any) => this.myField2 = v;
}

const store:any = new Store();

const App: React.FC = () => {
  // console.log(store)
  console.log('rendering')

  return (
    <div className="App">
      <div>=</div>
      <div>{store.myField || '--'}</div>
      <div>=</div>
      <input onChange={e => {
        store.setMyField(e.target.value);
        // store.myField = e.target.value;
        // console.log(store);
      }} />
    </div>
  );
}

export default observer(App);
