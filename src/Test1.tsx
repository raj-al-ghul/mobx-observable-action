import React from 'react';
import { observer } from "mobx-react";
import { observable } from 'mobx';

class Test1Store {
    @observable field1 = 4;
    field2 = 3;
};

const Test1 = () => {
    const store = new Test1Store();
    console.log('Test1');
    console.log(store);
    console.log(JSON.stringify(store));
    return(
        (<h1>hi</h1>)
    );
};

export default observer(Test1);
