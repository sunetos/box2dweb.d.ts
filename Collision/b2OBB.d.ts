/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="../Common/Math/b2Mat22.d.ts" />

//import b2Math = Box2D.Common.Math;

module Box2D.Collision {

	/**
	* An oriented bounding box.
	**/
	export class b2OBB {

		/**
		* The local centroid.
		**/
		public center: b2Math.b2Vec2;

		/**
		* The half-widths.
		**/
		public extents: b2Math.b2Vec2;

		/**
		* The rotation matrix.
		**/
		public R: b2Math.b2Mat22;
	}
}