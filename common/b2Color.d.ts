module Box2D.Common {
	export class b2Color {
		
		public r: number;
		public g: number;
		public b: number;
		public color: number;

		constructor (r: number, g: number, b: number);

		public Set(r: number, g: number, b: number): void;
	}
}