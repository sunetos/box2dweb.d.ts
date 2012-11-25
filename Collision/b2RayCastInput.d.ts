/// <reference path="../Common/Math/b2Vec2.d.ts" />

//import b2Math = Box2D.Common.Math;

module Box2D.Collision {
	
	/**
	* Ray cast input data.
	**/
	export class b2RayCastInput {

		/**
		* Truncate the ray to reach up to this fraction from p1 to p2
		**/
		public maxFraction: number;

		/**
		* The start point of the ray.
		**/
		public p1: b2Math.b2Vec2;

		/**
		* The end point of the ray.
		**/
		public p2: b2Math.b2Vec2;
		
		/**
		* Creates a new ray cast input.
		* @p1 Start point of the ray, default = null.
		* @p2 End point of the ray, default = null.
		* @maxFraction Truncate the ray to reach up to this fraction from p1 to p2.
		**/
		constructor (p1?: b2Math.b2Vec2, p2?: b2Math.b2Vec2, maxFraction?: number);
	}
}