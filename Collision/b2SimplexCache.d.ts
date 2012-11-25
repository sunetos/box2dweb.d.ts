module Box2D.Collision {

	/**
	* Used to warm start b2Distance. Set count to zero on first call.
	**/
	export class b2SimplexCache {

		/**
		* Number in cache.
		**/
		public count: number;

		/**
		* Vertices on shape a.
		**/
		public indexA: number[];

		/**
		* Vertices on shape b.
		**/
		public indexB: number[];

		/**
		* Length or area.
		**/
		public metric: number;
	}
}