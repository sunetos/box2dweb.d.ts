/// <reference path="../Common/Math/b2Vec2.d.ts" />

module Box2D.Collision {

	/**
	* Results of a ray cast.
	**/
	export class b2RayCastOutput {

		/**
		* The fraction between p1 and p2 that the collision occurs at.
		**/
		public fraction: number;

		/**
		* The normal at the point of collision.
		**/
		public normal: b2Math.b2Vec2;
	}
}
