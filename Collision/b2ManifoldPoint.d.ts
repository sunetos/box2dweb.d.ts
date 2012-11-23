/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2ContactID.d.ts" />

import b2Math = Box2D.Common.Math;

module Box2D.Collision {
	export class b2ManifoldPoint {

		public m_localpoint: b2Math.b2Vec2;
		public m_id: b2ContactID;
		public m_normalImpulse: number;
		public m_tangentImpulse: number;

		public constructor ();

		public Reset(): void;
		public Set(m: b2ManifoldPoint): void;
	}
}
