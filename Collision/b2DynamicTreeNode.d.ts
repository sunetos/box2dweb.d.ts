/// <reference path="b2AABB.d.ts" />

// Do not need to interact directly with this, perhaps remove from definitions.
module Box2D.Collision {
	export class b2DynamicTreeNode {

		public aabb: b2AABB;
		public child1: number;
		public child2: number;
		public height: number;

		constructor ();

		public IsLeaf(): bool;

	}
}