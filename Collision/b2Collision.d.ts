/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2AABB.d.ts" />

import math = Box2D.Common.Math;

module Box2D.Collision {
	export class b2Collision {

		public static ClipSegmentToLine(
			vOut: b2ClipVertex,
			vIn: b2ClipVertex,
			normal: math.b2Vec2,
			offset: number): number;

		public static EdgeSeparation(
			poly1: unknown,
			xf1: unknown,
			edge1: number,
			poly2: unknown,
			xf2: unknown): number;

		public static FindMaxSeparation(
			edgeIndex: number,
			poly1: unknown,
			xf1: unknown,
			poly2: unknown,
			xf2: unknown): number;

		public static FindIncidentEdge(
			c: unknown,
			poly1: unknown,
			xf1: unknown,
			edge1: number,
			poly2: unknown,
			xf2: uknown): void;

		public static MakeClipPointVector(): ClipVertex[];

		public static CollidePolygons(
			manifold: unknown,
			polyA: unknown,
			xfA: unknown,
			polyB: unknown,
			xfB: uknown): void;

		public static CollideCircles(
			manifold: unknown,
			circle1: unknown,
			xf1: unknown,
			circle2: unknown,
			xf2: unknown): void;

		public static CollidePolygonAndCircle(
			manifold: unknown,
			polgon: unknown,
			xf1: unkown,
			circle: unknown,
			xf2: unknown): void;

		public static TestOverlap(a: b2AABB, b: b2AABB): bool;
		
		//public static s_incidentEdge = b2Collision.MakeClipPointVector();
		//s_clipPoints1 = b2Collision.MakeClipPointVector();
		//s_clipPoints2 = b2Collision.MakeClipPointVector();
		//s_edgeAO = new Vector_a2j_Number(1);
		//s_edgeBO = new Vector_a2j_Number(1);
		//s_localTangent = new b2Vec2();
		//s_localNormal = new b2Vec2();
		//s_planePoint = new b2Vec2();
		//s_normal = new b2Vec2();
		//s_tangent = new b2Vec2();
		//s_tangent2 = new b2Vec2();
		//s_v11 = new b2Vec2();
		//s_v12 = new b2Vec2();
		public static b2CollidePolyTempVec: b2Math.b2Vec2;
		public static b2_nullFeature: number;
	}
}