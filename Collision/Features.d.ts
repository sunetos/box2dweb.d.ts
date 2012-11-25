module Box2D.Collision {

	/**
	* We use contact ids to facilitate warm starting.
	**/
	export class Features {

		/**
		* A value of 1 indicates that the reference edge is on shape2.
		**/
		public flip: number;

		/**
		* The edge most anti-parallel to the reference edge.
		**/
		public incidentEdge: number;

		/**
		* The vertex (0 or 1) on the incident edge that was clipped.
		**/
		public incidentVertex: number;

		/**
		* The edge that defines the outward contact normal.
		**/
		public referenceEdge: number;
	}
}