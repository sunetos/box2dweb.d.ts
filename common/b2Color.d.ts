module Box2D.Common {
	
	/**
	* Color for debug drawing.  Each value has the range [0, 1].
	**/
	export class b2Color {
		
		/**
		* Red
		**/
		public r: number;

		/**
		* Green
		**/
		public g: number;

		/**
		* Blue
		**/
		public b: number;

		/**
		* RGB color as hex.
		* @type uint
		**/
		public color: number;

		/**
		* Constructor
		* @rr Red value
		* @gg Green value
		* @bb Blue value
		**/
		constructor (rr: number, gg: number, bb: number);

		/**
		* Sets the Color to new RGB values.
		* @rr Red value
		* @gg Green value
		* @bb Blue value
		**/
		public Set(rr: number, gg: number, bb: number): void;
	}
}