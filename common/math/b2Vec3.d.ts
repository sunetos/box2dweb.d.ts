
module Box2D.Common.Math {
	export class b2Vec3 {

		public x: number;
		public y: number;
		public z: number;

		constructor (x: number, y: number, z: number);

		public SetZero(): void;
		public Set(x: number, y: number, z: number): void;
		public SetV(v: b2Vec3): void;
		public GetNegative(): b2Vec3;
		public NegativeSelf(): void;
		public Copy(): b2Vec3;
		public Add(v: b2Vec3): void;
		public Subtract(v: b2Vec3): void;
		public Multiply(a: number): void;
	}
}