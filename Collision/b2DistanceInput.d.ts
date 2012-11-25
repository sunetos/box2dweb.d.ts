/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="../Common/Math/b2Transform.d.ts" />
/// <reference path="b2DistanceProxy.d.ts" />

//import b2Math = Box2D.Common.Math;

module Box2D.Collision {

	/**
	* Input for b2Distance. You have to option to use the shape radii in the computation. Even
	**/
	export class b2DistanceInput {

		/**
		* Proxy A
		**/
		public proxyA: b2DistanceProxy;

		/**
		* Proxy B
		**/
		public proxyB: b2DistanceProxy;

		/**
		* Transform A
		**/
		public transformA: b2Math.b2Transform;

		/**
		* Transform B
		**/
		public transformB: b2Math.b2Transform;

		/**
		* Use shape radii in computation?
		**/
		public useRadii: bool;
	}
}