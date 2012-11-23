/// <reference path="../Common/Math/b2Vec2.d.ts" />

//import b2Math = Box2D.Common.Math;

module Box2D.Collision {
	export class b2RayCastInput {

		public p1: b2Math.b2Vec2;
		public p2: b2Math.b2Vec2;
		public maxFriction: number;

		constructor (p1: b2Math.b2Vec2, p2: b2Math.b2Vec2, maxFriction?: number);
	}
}