/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="../Common/Math/b2Transform.d.ts" />
/// <reference path="d2DistanceProxy.d.ts" />

//import b2Math = Box2D.Common.Math;

module Box2D.Collision {
	export class b2DistanceInput {

		public proxyA: b2DistanceProxy;
		public proxyB: b2DistanceProxy;
		public transformA: b2Math.b2Transform;
		public transformB: b2Math.b2Transform;
		public useRadii: bool;

		constructor ();
	
	}
}