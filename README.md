# domer
> A simple and covenient javascript DOM util

## API

### `domer(...values)`
This is a DOM selector.

```js
// select one
let obj = domer('class_id_tag');

// multi select
let [ objClass, objId, objTag ] = domer('class', 'id', 'tag');
``` 

### `domer.ready()`
The function will to parse the entire document elements which have `class` attr or `id` attr.

```js
// id="obj-id" class='obj-class'
let { objId, objClass } = domer.ready(); 
```

## License
MIT
