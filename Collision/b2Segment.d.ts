/// <reference path="../Common/Math/b2Vec2.d.ts" />

import b2Math = Box2D.Common.Math;

module Box2D.Collision {
	export class b2Segment {

		public p1: b2Math.b2Vec2;
		public p2: b2Math.b2Vec2;

		constructor ();

		public TestSegment(
			lambda: number[],
			normal: b2Math.b2Vec2,
			segment: b2Segment,
			maxLambda: number): bool;
	
	}
}