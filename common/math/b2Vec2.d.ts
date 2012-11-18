/// <reference path="b2Mat22.d.ts" />

module Box2D.Common.Math {
	export class b2Vec2 {

		public x: number;
		public y: number;

		constructor (x: number, y: number);

		public static Make(x: number, y: number): b2Vec2;

		public SetZero(): void;
		public Set(x: number, y: number): void;
		public SetV(v: b2Vec2): void;
		public GetNegative(): b2Vec2;
		public NegativeSelf(): void;
		public Copy(): b2Vec2;
		public Add(v: b2Vec2): void;
		public Subtract(v: b2Vec2): void;
		public Multiply(a: number): void;
		public MulM(A: b2Mat22): void;
		public MultM(A: b2Mat22): void;
		public CrossVF(s: number): void;
		public CrossFV(s: number): void;
		public MinV(b: b2Vec2): void;
		public MaxV(b: b2Vec2): void;
		public Abs(): void;
		public Length(): number;
		public LengthSquared(): number;
		public Normalize(): number;
		public IsValid(): bool;
	}
}