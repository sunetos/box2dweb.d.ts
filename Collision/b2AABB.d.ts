/// <reference path="../Common/Math/b2Vec2.d.ts" />

import b2Math = Box2D.Common.Math;

module Box2D.Collision {
	export class b2AABB {

		public lowerBound: b2Math.b2Vec2;
		public uppderBound: b2Math.b2Vec2;

		constructor ();

		public IsValid(): bool;
		public GetCenter(): b2Math.b2Vec2;
		public GetExtents(): b2Math.b2Vec2;
		public Contains(aabb: b2AABB): bool;
		// TODO
		public RayCast(output: b2RayCastOutput, input: b2RayCastInput): bool;
		public TestOverlap(other: b2AABB): bool;
		public Combine(aabb1: b2AABB, aabb2: b2AABB): void;

		public static Combine(aabb1: b2AABB, aabb2: b2AABB): b2AABB;
	}
}