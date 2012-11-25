/// <reference path="../Common/Math/b2Sweep.d.ts" />
/// <reference path="b2DistanceProxy.d.ts" />

//import b2Math = Box2D.Common.Math;

module Box2D.Collision {

	/**
	* Inpute parameters for b2TimeOfImpact
	**/
	export class b2TOIInput {

		/**
		* Proxy A
		**/
		public proxyA: b2DistanceProxy;

		/**
		* Proxy B
		**/
		public proxyB: b2DistanceProxy;

		/**
		* Sweep A
		**/
		public sweepA: b2Math.b2Sweep;

		/**
		* Sweep B
		**/
		public sweepB: b2Math.b2Sweep;

		/**
		* Tolerance
		**/
		public tolerance: number;
	}
}