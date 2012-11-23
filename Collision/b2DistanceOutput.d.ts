/// <reference path="../Common/Math/b2Vec2.d.ts" />

import b2Math = Box2D.Common.Math;

module Box2D.Collision {
	export class b2DistanceOutput {
	
		public pointA: b2Math.b2Vec2;
		public pointB: b2Math.b2Vec2;
		public distance: number;
		public iterations: number;

		constructor ();
	
	}
}