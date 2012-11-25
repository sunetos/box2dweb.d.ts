/// <reference path="../Common/Math/b2Vec2.d.ts" />

import b2Math = Box2D.Common.Math;

module Box2D.Collision {

	/**
	* Output calculation for b2Distance.
	**/
	export class b2DistanceOutput {
	
		/**
		*  Calculated distance.
		**/
		public distance: number;

		/**
		* Number of gjk iterations used in calculation.
		**/
		public iterations: number;

		/**
		* Closest point on shape A.
		**/
		public pointA: b2Math.b2Vec2;

		/**
		* Closest point on shape B.
		**/
		public pointB: b2Math.b2Vec2;
	}
}