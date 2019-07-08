import { action } from 'mobx';

const setterName = (s:string) => `set${s.charAt(0).toUpperCase() + s.slice(1)}`;

const setter:PropertyDecorator = function(target, name) {
  console.log(target);
  const setterDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true, // why does console.log(store) not include property?
    value: action(function(v:any) {
      console.log(target);
      //@ts-ignore
      // console.log(new target.constructor());
      //@ts-ignore
      this[name] = v;
    })
  };

  // TODO if name is a symbol
  Object.defineProperty(target, setterName(name.toString()), setterDescriptor);

  // what gets written to object vs. _proto_?
  Object.defineProperty(target, '_$a', {
    configurable: true,
    enumerable: true,
    get: () => 3
  });
  Object.defineProperty(target, '_$b', {
    configurable: true,
    enumerable: true,
    value: () => 3
  });

  // can we also make it an observer
  // Object.defineProperty(target, name, {
  //   enumerable: true,
  //   value: observable(target[name])
  // });

  // return descriptor;
}

export default setter;
