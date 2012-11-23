/// <reference path="b2AABB.d.ts" />
/// <reference path="b2DynamicTreeNode.d.ts" />
/// <reference path="b2RayCastInput.d.ts" />

module Box2D.Collision {
	export class b2DynamicTreeBroadPhase {

		constructor ();

		public CreateProxy(aabb: b2AABB, userData: any): b2DynamicTreeNode;
		public DestroyProxy(proxy: b2DynamicTreeNode): void;
		public MoveProxy(proxy: b2DynamicTreeNode, aabb: b2AABB, displacement: b2Math.b2Vec2): void;
		public TestOverlap(proxyA: b2DynamicTreeNode, proxyB: b2DynamicTreeNode): bool;
		public GetUserData(proxy: b2DynamicTreeNode): any;
		public GetFatAABB(proxy: b2DynamicTreeNode): b2AABB;
		public GetProxyCount(): number;
		public UpdatePairs(callback: (userDataA: any, userDataB: any) => void): void;
		public Query(callback: (node: b2DynamicTreeNode) => bool, aabb: b2AABB): void;
		public RayCast(callback: (subInput: b2RayCastInput, node: b2DynamicTreeNode) => number, input: b2RayCastInput): void;
		public Validate(): void;
		public Rebalance(iterations: number): void;
		public BufferMove(proxy: b2DynamicTreeNode): void;
		//public ComparePairs(pair1, pair2): number;
	}
}