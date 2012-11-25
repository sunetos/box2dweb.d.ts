/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2AABB.d.ts" />

//import b2Math = Box2D.Common.Math;

module Box2D.Collision {

	/**
	* A line in space between two given vertices.
	**/
	export class b2Segment {

		/**
		* The starting point.
		**/
		public p1: b2Math.b2Vec2;

		/**
		* The ending point.
		**/
		public p2: b2Math.b2Vec2;

		/**
		* Extends or clips the segment so that it's ends lie on the boundary of the AABB.
		* @aabb AABB to extend/clip the segement.
		**/
		public Extend(aabb: b2AABB): void;

		/**
		* See Extend, this works on the ending point.
		* @aabb AABB to extend/clip the ending point.
		**/
		public ExtendBackward(aabb: b2AABB): void;

		/**
		* See Extend, this works on the starting point.
		* @aabb AABB to extend/clip the starting point.
		**/
		public ExtendForward(aabb: b2AABB): void;

		/**
		* Ray cast against this segment with another segment.
		* @lambda returns the hit fraction. You can use this to compute the contact point * p = (1 - lambda) * segment.p1 + lambda * segment.p2 * @normal Normal at the contact point.  If there is no intersection, the normal is not set.
		* @segment Defines the begining and end point of the ray cast.
		* @maxLambda a number typically in the range [0,1].
		* @return True if there is an intersection, otherwise false.
		**/
		public TestSegment(
			lambda: number[],
			normal: b2Math.b2Vec2,
			segment: b2Segment,
			maxLambda: number): bool;
	}
}