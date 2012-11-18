/// <reference path="b2Vec2.d.ts" />

module Box2D.Common.Math {
	export class b2Mat22 {

		public col1: b2Vec2;
		public col2: b2Vec2;

		constructor ();

		public static FromAngle(angle: number): b2Mat22;
		public static FromVV(c1: b2Vec2, c2: b2Vec2): b2Mat22;
		
		public Set(angle: number): void;
		public SetVV(c1: b2Vec2, c2: b2Vec2): void;
		public Copy(): b2Mat22;
		public SetM(m: b2Mat22): void;
		public AddM(m: b2Mat22): void;
		public SetIdentity(): void;
		public SetZero(): void;
		public GetAngle(): number;
		public GetInverse(out: b2Mat22): b2Mat22;
		public Solve(out: b2Vec2, bX: number, bY: number): b2Vec2;
		public Abs(): void;
	}
}