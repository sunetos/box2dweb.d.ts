box2dweb.d.ts
===========

This is a derived work of the original Box2D C++ located here: http://box2d.org/

This is a typescript definitions file for box2dweb.js located here: http://code.google.com/p/box2dweb/

There are a few ports of Box2D to javascript, I have specifically picked box2dweb.js since it has zero dependencies and can be linked to your project via a single file.  It also appears to be the most up to date with box2d and is a direct automated port from Box2DFlash (http://www.box2dflash.org/)

The actual typescript definitions are organized with the original Box2D directory structure, however you can reference everything by only including the box2dweb.d.ts in the root folder.
```javascript
/// <reference path="box2dweb.d.ts" />
```