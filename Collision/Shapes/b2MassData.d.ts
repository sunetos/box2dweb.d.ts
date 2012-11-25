/// <reference path="../../Common/Math/b2Vec2.d.ts" />

//import b2Math = Box2D.Common.Math;

module Box2D.Collision.Shapes {

	/**
	* This holds the mass data computed for a shape.
	**/
	export class b2MassData {

		/**
		* The position of the shape's centroid relative to the shape's origin.
		**/
		public center: b2Math.b2Vec2;

		/**
		* The rotational inertia of the shape. This may be about the center or local origin, depending on usage.
		**/
		public I: number;

		/**
		* The mass of the shape, usually in kilograms.
		**/
		public mass: number;
	}
}