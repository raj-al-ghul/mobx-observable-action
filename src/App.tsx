import { configure, observable, IAction } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import './App.css';
import setter from './setter';

configure({enforceActions: "always"});

type ISetter = (param:any) => void;
type IStoreSetters = {
  setMyField:IAction & ISetter
}

class Store {
  @observable @setter myField = '';
}

const store = new Store() as Store & IStoreSetters;

const App: React.FC = () => {
  console.log(store)
  console.log(JSON.stringify(store));
  console.log(Object.keys(store));
  // console.log(store.setMyField.isMobxAction);
  return (
    <div className="App">
      <input value={store.myField} onChange={e => store.setMyField(e.target.value)} />
    </div>
  );
}

export default observer(App);
