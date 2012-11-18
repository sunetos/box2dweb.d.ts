/// <reference path="../b2AABB.d.ts" />
/// <reference path="../../Common/Math/b2Transform.d.ts" />

import math = Box2D.Common.Math;

module Box2D.Collision.Shapes {
	export class b2Shape {

		public static e_unknownShape: number;
		public static e_circleShape: number;
		public static e_polygonShape: number;
		public static e_edgeShape: number;
		public static e_shapeTypeCount: number;
		public static e_hitCollide: number;
		public static e_massCollide: number;
		public static e_startsInsideCollide: number;

		public m_radius: number;
		public m_type: number;

		constructor ();

		public Copy(): b2Shape;
		public Set(other: b2Shape): void;
		public GetType(): number;
		// TODO
		public TestPoint(xf, p): bool;
		// TODO
		public RayCast(
			output: b2RayCastOutput,
			input: b2RayCastInput,
			transform: math.b2Transform): bool;
		// TODO
		public ComputeAABB(aabb: b2AABB, xf): void;
		// TODO
		public ComputeMass(massData: b2MassData, density: number): void;
		// TODO
		public ComputeSubmergedArea(
			normal: unknown,
			offset: unknown,
			xf: unknown,
			c: unknown): number;


		public static TestOverlap(
			shape1: b2Shape,
			transform1: math.b2Transform,
			shape2: b2Shape,
			transform2: math.b2Transform): bool;
	}
}