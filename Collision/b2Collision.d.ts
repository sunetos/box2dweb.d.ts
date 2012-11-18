/// <reference path="../Common/Math/b2Vec2.d.ts" />

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
		
	}
}