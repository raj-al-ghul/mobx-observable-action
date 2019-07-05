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
