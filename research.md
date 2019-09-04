# Rsearch

## Mobx @action stuff
It takes a function and returns a function with the same signature,
but wrapped with `transaction`, `untracked`, and `allowStateChanges`.
https://mobx.js.org/refguide/action.html
https://github.com/mobxjs/mobx/blob/gh-pages/docs/refguide/api.md#configure


## Mobx internals
https://github.com/mobxjs/mobx/blob/master/src/api/observable.ts
https://developpaper.com/a-brief-note-on-mobx-source-reading/


## Decorators
@foo before the definition of X is the same as saying X = foo(X)
https://github.com/facebook/create-react-app/issues/411#issuecomment-238974268

https://codewithhugo.com/js-object-defineproperty-for-function/

## Typescript
`//@ts-ignore` cheat code
https://github.com/microsoft/typescript/issues/3019


## mobx-form-validate
https://github.com/tdzl2003/mobx-form-validate/blob/master/src/index.js


## enumerable
```javascript
const object1 = {};
Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false,
  enumerable: true // property1 shows up in console.log(object1)
});

console.log(object1);
object1.property1 = 77; // throws an error in strict mode
console.log(object1.property1); // expected output: 42
```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty


## Notes

Why does it not enumerable
https://stackoverflow.com/questions/55757089/strange-behavior-of-object-defineproperty-in-javascript


General Info
decorators
https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841
https://github.com/GoogleChrome/samples/blob/gh-pages/decorators-es7/read-write/src/scripts/libs/ReadWrite/ReadWrite.js
https://github.com/wycats/javascript-decorators
https://github.com/tc39/proposal-decorators
https://tc39.es/proposal-decorators/#decorator-semantics
https://gist.github.com/remojansen/16c661a7afd68e22ac6e


TS
Request: Class Decorator Mutation
https://github.com/microsoft/TypeScript/issues/4881
https://stackoverflow.com/questions/41038812/declare-dynamically-added-class-properties-in-typescript
https://mariusschulz.com/blog/typing-functions-in-typescript
https://www.typescriptlang.org/docs/handbook/functions.html#this

MobX
https://github.com/mobxjs/mobx/issues/1388
https://github.com/mobxjs/mobx/issues/459

TODO
https://stackoverflow.com/questions/43933155/what-is-the-target-in-javascript-decorators


https://medium.com/@rossbulat/get-started-with-typescript-decorators-cf3924c37f04
```
Attaching a decorator to a class will give it access to the class constructor.
Attaching a decorator to a class method will give it access to the method’s parameters, the metadata associated with the method object, as well as its class prototype.
Attaching a decorator to a class property will give it access to the name and value of that property, along with its class prototype.
Attaching a decorator to a class method parameter will give it access to that parameter’s index, name and value.
```
