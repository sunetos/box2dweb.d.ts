/// <reference path="b2Vec2.d.ts" />
/// <reference path="b2Vec3.d.ts" />

module Box2D.Common.Math {
	export class b2Mat33 {

		public col1: b2Vec3;
		public col2: b2Vec3;
		public col3: b2Vec3;

		constructor (c1: b2Vec3, c2: b2Vec3, c3: b2Vec3);

		public SetVVV(c1: b2Vec3, c2: b2Vec3, c3: b2Vec3): void;
		public Copy(): b2Mat33;
		public SetM(m: b2Mat33): void;
		public AddM(m: b2Mat33): void;
		public SetIdentity(): void;
		public SetZero(): void;
		public Solve22(out: b2Vec2, bX: number, bY: number): b2Vec2;
		public Solve33(out: b2Vec3, bX: number, bY: number, bZ: number): b2Vec3;
	}
}