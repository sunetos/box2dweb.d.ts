/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2ManifoldPoint.d.ts" />

import b2Math = Box2D.Common.Math;

module Box2D.Collision {
	export class b2Manifold {

		public static e_circles: number;
		public static e_faceA: number;
		public static e_faceB: number;

		public m_points: b2ManifoldPoint[];
		public m_localPlaneNormal: b2Math.b2Vec2;
		public m_localPoint: b2Math.b2Vec2;

		constructor ();

		public Reset(): void;
		public Set(m: b2Manifold): void;
		public Copy(): b2Manifold;
	}
}
