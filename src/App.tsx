import { configure, observable, IAction } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import './App.css';
import setter from './setter';

import Test1 from './Test1';

configure({enforceActions: "always"});

type ISetter = (param:any) => void;
type IStoreSetters = {
  setMyField:IAction & ISetter
}

class Store {
  showUp = 3;
  @observable @setter myField = '';
  @observable showUpObservable = 4;
}

const store = new Store() as Store & IStoreSetters;

const App: React.FC = () => {
  return <Test1 />;

  // console.log(store)
  // console.log(JSON.stringify(store));
  // console.log(Object.keys(store));
  // console.log(Object.getOwnPropertyNames(store));
  // Object.keys(store).map(e => console.log(e));
  // console.log(store.setMyField.isMobxAction);
  return (
    <div className="App">
      <input value={store.myField} onChange={e => store.setMyField(e.target.value)} />
    </div>
  );
}

export default observer(App);
