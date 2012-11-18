/// <reference path="b2Vec2.d.ts" />
/// <reference path="b2Mat22.d.ts" />

module Box2D.Common.Math {
	export class b2Transform {

		public position: b2Vec2;
		public R: b2Mat22;

		constructor (pos: b2Vec2, r: b2Mat22);

		public Initialize(pos: b2Vec2, r: b2Mat22): void;
		public SetIdentity(): void;
		public Set(x: b2Transform): void;
		public GetAngle(): number;
	}
}