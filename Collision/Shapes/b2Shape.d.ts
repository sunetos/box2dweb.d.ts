/// <reference path="../../Common/Math/b2Transform.d.ts" />

import b2Math = Box2D.Common.Math;

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
		public RayCast(output, input, transform: Common.Math.b2Transform): bool;
		// TODO
		public ComputeAABB(aabb: b2AABB, xf): void;
		// TODO
		public ComputeMass(massData, density: number): void;
		// TODO
		public ComputeSubmergedArea(normal, offset, xf, c): number;



		// TODO
		public static TestOverlap(shape1: b2Shape, transform1: b2Math.b2Transform, shape2: b2Shape, transform2: b2Math.b2Transform): bool;
	}
}