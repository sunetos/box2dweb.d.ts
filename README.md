box2dweb.d.ts
===========

This is a typescript definitions file for box2dweb.js.

box2dweb.js website: http://code.google.com/p/box2dweb/

There are a few ports of box2d to javascript, I have specifically picked box2dweb.js since it has zero dependencies and can be linked to your project via a single file.  It also appears to be the most up to date with box2d.

The actual typescript definitions are organized with the original box2d directory structure, however you can reference everything by only including the box2dweb.d.ts in the root folder.
```javascript
/// <reference path="box2dweb.d.ts" />
```