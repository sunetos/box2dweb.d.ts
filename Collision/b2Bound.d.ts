/// <reference path="b2BoundValues.d.ts" />


module Box2D.Collision {
	export class b2Bound {

		public value: b2BoundValues;
		public proxy: unknown;
		public stabbingCount: number;

		constructor ();

		public IsLower(): bool;
		public IsUpper(): bool;
		public Swap(b: b2Bound): void;
	}
}