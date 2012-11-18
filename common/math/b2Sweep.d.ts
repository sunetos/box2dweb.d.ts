/// <reference path="b2Vec2.d.ts" />
/// <reference path="b2Transform.d.ts" />

module Box2D.Common.Math {
	export class b2Sweep {

		public localCenter: b2Vec2;
		public c0: b2Vec2;
		public c: b2Vec2;
		public a0: b2Vec2;
		public a: b2Vec2;
		public t0: b2Vec2;

		constructor ();

		public Set(other: b2Sweep): void;
		public Copy(): b2Sweep;
		public GetTransform(xf_out: b2Transform, alpha: number): void; // xf is out
		public Advance(t: number): void;
	}
}