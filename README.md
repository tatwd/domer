# domer
> A simple and covenient javascript DOM util

## API

### `domer(...values)`
This is a DOM selector.

```js
// <div id="foo"></div>
let obj = domer('foo');

// <div class="foo"></div>
let obj = domer('foo');

// multi select
// <div id="foo">
//   <div class="koo"></div>
// </div>
let [ foo, koo ] = domer('foo', 'koo');
``` 

### `domer.ready()`
The function will to parse the entire document elements which have `class` attr or `id` attr.

```js
// <div id="foo-id"></div>
// <div class="foo-class"></div>
let { fooId, fooClass } = domer.ready(); 
```

## License
MIT
