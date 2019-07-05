import { action, observable } from 'mobx';

const setterName = attribute =>
  `set${attribute.charAt(0).toUpperCase() + attribute.slice(1)}`;

export default function setter(target, name, args) {
  const descriptor = {
    configurable: true,
    enumerable: true, // why does console.log(store) not include property?
    value: action(function(v) {
      this[name] = v;
    })
  };

  Object.defineProperty(target, setterName(name), descriptor);

  // can we also make it an observer
  // Object.defineProperty(target, name, {
  //   enumerable: true,
  //   value: observable(target[name])
  // });
}
