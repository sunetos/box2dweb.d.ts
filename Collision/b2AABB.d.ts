/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2RayCastOutput.d.ts" />
/// <reference path="b2RayCastInput.d.ts" />

//import b2Math = Box2D.Common.Math;

module Box2D.Collision {

	/**
	* Axis aligned bounding box.
	**/
	export class b2AABB {

		/**
		* Lower bound.
		**/
		public lowerBound: b2Math.b2Vec2;

		/**
		* Upper bound.
		**/
		public upperBound: b2Math.b2Vec2;

		/**
		* Combines two AABBs into one with max values for upper bound and min values for lower bound.
		* @aabb1 First AABB to combine.
		* @aabb2 Second AABB to combine.
		* @return New AABB with max values from aabb1 and aabb2.
		**/
		public static Combine(aabb1: b2AABB, aabb2: b2AABB): b2AABB;

		/**
		* Combines two AABBs into one with max values for upper bound and min values for lower bound.  The result is stored in this AABB.
		* @aabb1 First AABB to combine.
		* @aabb2 Second AABB to combine.
		**/
		public Combine(aabb1: b2AABB, aabb2: b2AABB): void;

		/**
		* Determines if an AABB is contained within this one.
		* @aabb AABB to see if it is contained.
		* @return True if aabb is contained, otherwise false.
		**/
		public Contains(aabb: b2AABB): bool;

		/**
		* Gets the center of the AABB.
		* @return Center of this AABB.
		**/
		public GetCenter(): b2Math.b2Vec2;

		/**
		* Gets the extents of the AABB (half-widths).
		* @return Extents of this AABB.
		**/
		public GetExtents(): b2Math.b2Vec2;

		/**
		* Verify that the bounds are sorted.
		* @return True if the bounds are sorted, otherwise false.
		**/
		public IsValid(): bool;

		/**
		* Perform a precise raycast against this AABB.
		* @output Ray cast output values.
		* @input Ray cast input values.
		* @return True if the ray cast hits this AABB, otherwise false.
		**/
		public RayCast(output: b2RayCastOutput, input: b2RayCastInput): bool;

		/**
		* Tests if another AABB overlaps this AABB.
		* @other Other AABB to test for overlap.
		* @return True if other overlaps this AABB, otherwise false.
		**/
		public TestOverlap(other: b2AABB): bool;
	}
}