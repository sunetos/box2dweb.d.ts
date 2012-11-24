module Box2D.Common {

	/**
	* Controls Box2D global settings.
	**/
	export class b2Settings {

		/**
		* b2Assert is used internally to handle assertions. By default, calls are commented out to save performance, so they serve more as documentation than anything else.
		**/
		public static b2Assert(a: bool): void;

		/**
		* Friction mixing law. Feel free to customize this.
		* @friction1
		* @friction2
		* @return
		**/
		public static b2MixFriction(friction1: number, friction2: number): number;

		/**
		* Restitution mixing law. Feel free to customize this.
		* @restitution1
		* @restitution2
		* @return
		**/
		public static b2MixRestitution(restitution1: number, restitution2: number): number;

		/**
		* This is used to fatten AABBs in the dynamic tree. This allows proxies to move by a small amount without triggering a tree adjustment. This is in meters.
		**/
		public static b2_aabbExtension: number;

		/**
		* This is used to fatten AABBs in the dynamic tree. This is used to predict the future position based on the current displacement. This is a dimensionless multiplier.
		**/
		public static b2_aabbMultiplier: number;

		/**
		* A body cannot sleep if its angular velocity is above this tolerance.
		**/
		public static b2_angularSleepTolerance: number;

		/**
		* A small angle used as a collision and constraint tolerance. Usually it is chosen to be numerically significant, but visually insignificant.
		**/
		public static b2_angularSlop: number;

		/**
		* This scale factor controls how fast overlap is resolved. Ideally this would be 1 so that overlap is removed in one time step. However using values close to 1 often lead to overshoot.
		**/
		public static b2_contactBaumgarte: number;

		/**
		* A body cannot sleep if its linear velocity is above this tolerance.
		**/
		public static b2_linearSleepTolerance: number;

		/**
		* A small length used as a collision and constraint tolerance. Usually it is chosen to be numerically significant, but visually insignificant.
		**/
		public static b2_linearSlop: number;

		/**
		* The maximum angular position correction used when solving constraints. This helps to prevent overshoot.
		**/
		public static b2_maxAngularCorrection: number;

		/**
		* The maximum linear position correction used when solving constraints. This helps to prevent overshoot.
		**/
		public static b2_maxLinearCorrection: number;

		/**
		* Number of manifold points in a b2Manifold. This should NEVER change.
		**/
		public static b2_maxManifoldPoints: number;

		/**
		* The maximum angular velocity of a body. This limit is very large and is used to prevent numerical problems. You shouldn't need to adjust this.
		**/
		public static b2_maxRotation: number;

		/**
		* b2_maxRotation squared
		**/
		public static b2_maxRotationSquared: number;

		/**
		* Maximum number of contacts to be handled to solve a TOI island.
		**/
		public static b2_maxTOIContactsPerIsland: number;

		/**
		* Maximum number of joints to be handled to solve a TOI island.
		**/
		public static b2_maxTOIJointsPerIsland: number;

		/**
		* The maximum linear velocity of a body. This limit is very large and is used to prevent numerical problems. You shouldn't need to adjust this.
		**/
		public static b2_maxTranslation: number;

		/**
		* b2_maxTranslation squared
		**/
		public static b2_maxTranslationSquared: number;

		/**
		* 3.141592653589793
		**/
		public static b2_pi: number;

		/**
		* The radius of the polygon/edge shape skin. This should not be modified. Making this smaller means polygons will have and insufficient for continuous collision. Making it larger may create artifacts for vertex collision.
		**/
		public static b2_polygonRadius: number;

		/**
		* The time that a body must be still before it will go to sleep.
		**/
		public static b2_timeToSleep: number;

		/**
		* Continuous collision detection (CCD) works with core, shrunken shapes. This is the amount by which shapes are automatically shrunk to work with CCD. This must be larger than b2_linearSlop.
		* @see also b2_linearSlop
		**/
		public static b2_toiSlop: number;

		/**
		* A velocity threshold for elastic collisions. Any collision with a relative linear velocity below this threshold will be treated as inelastic.
		**/
		public static b2_velocityThreshold: number;


		/**
		* Maximum unsigned short value.
		**/
		public static USHRT_MAX: number;

		/**
		* The current version of Box2D.
		**/
		public static VERSION: string;
	}
}