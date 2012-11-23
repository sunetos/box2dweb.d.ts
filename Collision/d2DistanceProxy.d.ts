/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="Shapes/b2Shape.d.ts" />

import b2Math = Box2D.Common.Math;

module Box2D.Collision {
	export class b2DistanceProxy {
	
		public m_buffer: b2Math.b2Vec2;
		public m_vertices: b2Math.b2Vec2[];
		public m_count: number;
		public m_radius: number;

		constructor ();
	
		public Set(shape: Shapes.b2Shape): void;
		public GetSupport(d: b2Math.b2Vec2): number;
		public GetSupportVertex(d: b2Math.b2Vec2): b2Math.b2Vec2;
		public GetVertexCount(): number;
		public GetVertex(index: number): b2Math.b2Vec2;

	}
}