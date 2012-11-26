/// <reference path="../Common/Math/b2Vec2.d.ts" />

module Box2D.Dynamics {

	/**
	* A body definition holds all the data needed to construct a rigid body. You can safely re-use body definitions.
	**/
	export class b2BodyDef {

		/**
		* Does this body start out active?
		**/
		public active: bool;

		/**
		* Set this flag to false if this body should never fall asleep. Note that this increases CPU usage.
		**/
		public allowSleep: bool;

		/**
		* The world angle of the body in radians.
		**/
		public angle: number;

		/**
		* Angular damping is use to reduce the angular velocity. The damping parameter can be larger than 1.0f but the damping effect becomes sensitive to the time step when the damping parameter is large.
		**/
		public angularDamping: number;

		/**
		* The angular velocity of the body.
		**/
		public angularVelocity: number;

		/**
		* Is this body initially awake or sleeping?
		**/
		public awake: bool;

		/**
		* Is this a fast moving body that should be prevented from tunneling through other moving bodies? Note that all bodies are prevented from tunneling through static bodies.
		* @warning You should use this flag sparingly since it increases processing time.
		**/
		public bullet: bool;

		/**
		* Should this body be prevented from rotating? Useful for characters.
		**/
		public fixedRotation: bool;

		/**
		* Scales the inertia tensor.
		* @warning Experimental
		**/
		public inertiaScale: number;

		/**
		* Linear damping is use to reduce the linear velocity. The damping parameter can be larger than 1.0f but the damping effect becomes sensitive to the time step when the damping parameter is large.
		**/
		public linearDamping: number;

		/**
		* The linear velocity of the body's origin in world co-ordinates.
		**/
		public linearVelocity: b2Math.b2Vec2;

		/**
		* The world position of the body. Avoid creating bodies at the origin since this can lead to many overlapping shapes.
		**/
		public position: b2Math.b2Vec2;

		/**
		* The body type: static, kinematic, or dynamic. A member of the b2BodyType class .
		* @note If a dynamic body would have zero mass, the mass is set to one.
		**/
		public type: number;

		/**
		* Use this to store application specific body data.
		**/
		public userData: any;
	}
}