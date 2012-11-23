/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2ContactID.d.ts" />

import b2Math = Box2D.Common.Math;

module Box2D.Collision {
	export class b2ContactPoint {

		public position: b2Math.b2Vec2;
		public velocity: b2Math.b2Vec2;
		public normal: b2Math.b2Vec2;
		public id: b2ContactID;

		constructor ();
	}
}