/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2AABB.d.ts" />
/// <reference path="b2DynamicTreeNode.d.ts" />
/// <reference path="b2RayCastInput.d.ts" />

module Box2D.Collision {
	
	/**
	* A dynamic tree arranges data in a binary tree to accelerate queries such as volume queries and ray casts. Leafs are proxies with an AABB. In the tree we expand the proxy AABB by b2_fatAABBFactor so that the proxy AABB is bigger than the client object. This allows the client object to move by small amounts without triggering a tree update. Nodes are pooled.
	**/
	export class b2DynamicTree {

		/**
		* Constructing the tree initializes the node pool.
		**/
		constructor ();

		/**
		* Create a proxy. Provide a tight fitting AABB and a userData.
		* @aabb AABB.
		* @userDate User defined data for this proxy.
		* @return Dynamic tree node.
		**/
		public CreateProxy(aabb: b2AABB, userData: any): b2DynamicTreeNode;

		/**
		* Destroy a proxy. This asserts if the id is invalid.
		* @proxy Proxy to destroy.
		**/
		public DestroyProxy(proxy: b2DynamicTreeNode): void;

		/**
		* Gets the Fat AABB for the proxy.
		* @proxy Proxy to retrieve Fat AABB.
		* @return Fat AABB for proxy.
		**/
		public GetFatAABB(proxy: b2DynamicTreeNode): b2AABB;

		/**
		* Get user data from a proxy. Returns null if the proxy is invalid.
		* Cast to your type on return.
		* @proxy Proxy to retrieve user data from.
		* @return User data for proxy or null if proxy is invalid.
		**/
		public GetUserData(proxy: b2DynamicTreeNode): any;

		/**
		* Move a proxy with a swept AABB. If the proxy has moved outside of its fattened AABB, then the proxy is removed from the tree and re-inserted. Otherwise the function returns immediately.
		* @proxy Proxy to move.
		* @aabb Swept AABB.
		* @displacement Extra AABB displacement.
		**/
		public MoveProxy(proxy: b2DynamicTreeNode, aabb: b2AABB, displacement: b2Math.b2Vec2): bool;

		/**
		* Query an AABB for overlapping proxies. The callback is called for each proxy that overlaps the supplied AABB. The callback should match function signature fuction callback(proxy:b2DynamicTreeNode):Boolean and should return false to trigger premature termination.
		* @callback Called for each proxy that overlaps the supplied AABB.
		*	@proxy Proxy overlapping the supplied AABB.
		* @aabb Proxies are query for overlap on this AABB.
		**/
		public Query(callback: (proxy: b2DynamicTreeNode) => bool, aabb: b2AABB): void;

		/**
		* Ray-cast against the proxies in the tree. This relies on the callback to perform a exact ray-cast in the case were the proxy contains a shape. The callback also performs the any collision filtering. This has performance roughly equal to k log(n), where k is the number of collisions and n is the number of proxies in the tree.
		* @callback Called for each proxy that is hit by the ray.
		*	@input Ray cast input data.
		*	@proxy The proxy hit by the ray cast.
		*	@return Return value is the new value for maxFraction.
		* @input Ray cast input data.  Query all proxies along this ray cast.
		**/
		public RayCast(callback: (input: b2RayCastInput, proxy: b2DynamicTreeNode) => number, input: b2RayCastInput): void;

		/**
		* Perform some iterations to re-balance the tree.
		* @iterations Number of rebalance iterations to perform.
		**/
		public Rebalance(iterations: number): void;
	}
}