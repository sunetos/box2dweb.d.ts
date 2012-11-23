/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2AABB.d.ts" />
/// <reference path="b2DynamicTreeNode.d.ts" />
/// <reference path="b2RayCastInput.d.ts" />

module Box2D.Collision {
	export class b2DynamicTree {

		constructor ();

		public CreateProxy(aabb: b2AABB, userData: any): b2DynamicTreeNode;
		public DestroyProxy(proxy: b2DynamicTreeNode): void;
		public MoveProxy(proxy: b2DynamicTreeNode, aabb: b2AABB, displacement: b2Math.b2Vec2): bool;
		public Rebalance(iterations: number): void;
		public GetFatAABB(proxy: b2DynamicTreeNode): b2AABB;
		public GetUserData(proxy: b2DynamicTreeNode): any;
		public Query(callback: (node: b2DynamicTreeNode) => bool, aabb: b2AABB): void;
		public RayCast(callback: (subInput: b2RayCastInput, node: b2DynamicTreeNode) => number, input: b2RayCastInput): void;

		// Public in box2dweb.js but they should be private functions.
		//public AllocateNode(): b2DynamicTreeNode;
		//public FreeNode(node: b2DynamicTreeNode): void;
		//public InsertLeaf(leaf: b2DynamicTreeNode): void;
		//public RemoveLeaf(leaf: b2DynamicTreeNode): void;
	}
}