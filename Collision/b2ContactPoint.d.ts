/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2ContactID.d.ts" />
/// <reference path="Shapes/b2Shape.d.ts" />

import b2Math = Box2D.Common.Math;

module Box2D.Collision {
	export class b2ContactPoint {

		public friction: number;
		public id: b2ContactID;
		public normal: b2Math.b2Vec2;
		public position: b2Math.b2Vec2;
		public restitution: number;
		public separation: number;
		public shape1: Shapes.b2Shape;
		public shape2: Shapes.b2Shape;
		public velocity: b2Math.b2Vec2;

		constructor ();
	}
}