/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="../Common/Math/b2Transform.d.ts" />
/// <reference path="b2Manifold.d.ts" />

//import b2Math = Box2D.Common.Math;

module Box2D.Collision {

	/**
	* This is used to compute the current state of a contact manifold.
	**/
	export class b2WorldManifold {

		/**
		* World vector pointing from A to B.
		**/
		public m_normal: b2Math.b2Vec2;

		/**
		* World contact point (point of intersection).
		**/
		public m_points: b2Math.b2Vec2[];

		/**
		* Creates a new b2WorldManifold.
		**/
		constructor ();

		/**
		* Evaluate the manifold with supplied transforms. This assumes modest motion from the original state. This does not change the point count, impulses, etc. The radii must come from the shapes that generated the manifold.
		* @manifold Manifold to evaluate.
		* @xfA A transform.
		* @radiusA A radius.
		* @xfB B transform.
		* @radiusB B radius.
		**/
		public Initialize(
			manifold: b2Manifold,
			xfA: b2Math.b2Transform,
			radiusA: number,
			xfB: b2Math.b2Transform,
			radiusB: number): void;
	}
}