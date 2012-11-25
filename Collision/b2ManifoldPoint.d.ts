/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2ContactID.d.ts" />

//import b2Math = Box2D.Common.Math;

module Box2D.Collision {

	/**
	* A manifold point is a contact point belonging to a contact manifold. It holds details related to the geometry and dynamics of the contact points. The local point usage depends on the manifold type: -e_circles: the local center of circleB -e_faceA: the local center of cirlceB or the clip point of polygonB -e_faceB: the clip point of polygonA This structure is stored across time steps, so we keep it small. Note: the impulses are used for internal caching and may not provide reliable contact forces, especially for high speed collisions.
	**/
	export class b2ManifoldPoint {

		/**
		* Contact ID.
		**/
		public m_id: b2ContactID;

		/**
		* Local contact point.
		**/
		public m_localpoint: b2Math.b2Vec2;
		
		/**
		* Normal impluse for this contact point.
		**/
		public m_normalImpulse: number;

		/**
		* Tangent impulse for contact point.
		**/
		public m_tangentImpulse: number;

		/**
		* Creates a new manifold point.
		**/
		constructor ();

		/**
		* Resets this manifold point.
		**/
		public Reset(): void;

		/**
		* Sets this manifold point from a manifold point.
		* @m The manifold point to copy values from.
		**/
		public Set(m: b2ManifoldPoint): void;
	}
}
