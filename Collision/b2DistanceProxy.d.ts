/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="Shapes/b2Shape.d.ts" />

//import b2Math = Box2D.Common.Math;

module Box2D.Collision {

	/**
	* A distance proxy is used by the GJK algorithm. It encapsulates any shape.
	**/
	export class b2DistanceProxy {
	
		/**
		* Count
		**/
		public m_count: number;

		/**
		* Radius
		**/
		public m_radius: number;

		/**
		* Verticies
		**/
		public m_vertices: b2Math.b2Vec2[];

		/**
		* Get the supporting vertex index in the given direction.
		* @d Direction to look for the supporting vertex.
		* @return Supporting vertex index.
		**/
		public GetSupport(d: b2Math.b2Vec2): number;

		/**
		* Get the supporting vertex in the given direction.
		* @d Direction to look for the supporting vertex.
		* @return Supporting vertex.
		**/
		public GetSupportVertex(d: b2Math.b2Vec2): b2Math.b2Vec2;

		/**
		* Get a vertex by index.  Used by b2Distance.
		* @return Vertex at the given index.
		**/
		public GetVertex(index: number): b2Math.b2Vec2;

		/**
		* Get the vertex count.
		* @return The number of vertices. (m_vertices.length)
		**/
		public GetVertexCount(): number;

		/**
		* Initialize the proxy using the given shape. The shape must remain in scope while the proxy is in use.
		* @shape Shape to initialize the distance proxy.
		**/
		public Set(shape: Shapes.b2Shape): void;
	}
}