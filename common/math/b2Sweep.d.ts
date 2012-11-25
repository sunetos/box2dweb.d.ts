/// <reference path="b2Vec2.d.ts" />
/// <reference path="b2Transform.d.ts" />

module Box2D.Common.Math {

	/**
	* This describes the motion of a body/shape for TOI computation. Shapes are defined with respect to the body origin, which may no coincide with the center of mass. However, to support dynamics we must interpolate the center of mass position.
	**/
	export class b2Sweep {

		/**
		* World angle.
		**/
		public a: number;

		/**
		* World angle.
		**/
		public a0: number;

		/**
		* Center world position.
		**/
		public c: b2Vec2;

		/**
		* Center world position.
		**/
		public c0: b2Vec2;
		
		/**
		* Local center of mass position.
		**/
		public localCenter: b2Vec2;
		
		/**
		* Time interval = [t0,1], where t0 is in [0,1].
		**/
		public t0: b2Vec2;

		/**
		* Advance the sweep forward, yielding a new initial state.
		* @t The new initial time.
		**/
		public Advance(t: number): void;

		/**
		* Creates a copy of the sweep.
		**/
		public Copy(): b2Sweep;

		/**
		* Get the interpolated transform at a specific time.
		* @xf Transform at specified time, this is an out parameter.
		* @alpha Is a factor in [0,1], where 0 indicates t0.
		**/
		public GetTransform(xf: b2Transform, alpha: number): void;

		/**
		* Sets the sweep from a sweep.
		* @other Sweep values to copy from.
		**/
		public Set(other: b2Sweep): void;
	}
}