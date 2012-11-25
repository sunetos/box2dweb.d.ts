/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2ContactID.d.ts" />
/// <reference path="Shapes/b2Shape.d.ts" />

//import b2Math = Box2D.Common.Math;

module Box2D.Collision {

	/**
	* This structure is used to report contact points.
	**/
	export class b2ContactPoint {

		/**
		* The combined friction coefficient.
		**/
		public friction: number;
		
		/**
		* The contact id identifies the features in contact.
		**/
		public id: b2ContactID;

		/**
		* Points from shape1 to shape2.
		**/
		public normal: b2Math.b2Vec2;

		/**
		* Position in world coordinates.
		**/
		public position: b2Math.b2Vec2;

		/**
		* The combined restitution coefficient.
		**/
		public restitution: number;

		/**
		* The separation is negative when shapes are touching.
		**/
		public separation: number;

		/**
		* The first shape.
		**/
		public shape1: Shapes.b2Shape;

		/**
		* The second shape.
		**/
		public shape2: Shapes.b2Shape;

		/**
		* Velocity of point on body2 relative to point on body1 (pre-solver).
		**/
		public velocity: b2Math.b2Vec2;
	}
}