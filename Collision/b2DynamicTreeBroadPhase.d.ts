/// <reference path="b2AABB.d.ts" />
/// <reference path="b2DynamicTreeNode.d.ts" />
/// <reference path="b2RayCastInput.d.ts" />

module Box2D.Collision {

	/**
	* The broad-phase is used for computing pairs and performing volume queries and ray casts. This broad-phase does not persist pairs. Instead, this reports potentially new pairs. It is up to the client to consume the new pairs and to track subsequent overlap.
	**/
	export class b2DynamicTreeBroadPhase {

		/**
		* Creates the dynamic tree broad phase.
		**/
		constructor ();

		/**
		* Create a proxy with an initial AABB. Pairs are not reported until UpdatePairs is called.
		* @aabb Proxy Fat AABB.
		* @userData User defined data.
		* @return Proxy created from aabb and userData.
		**/
		public CreateProxy(aabb: b2AABB, userData: any): b2DynamicTreeNode;

		/**
		* Destroy a proxy. It is up to the client to remove any pairs.
		* @proxy Proxy to destroy.
		**/
		public DestroyProxy(proxy: b2DynamicTreeNode): void;
		
		/**
		* Get the Fat AABB for a proxy.
		* @proxy Proxy to retrieve the Fat AABB.
		**/
		public GetFatAABB(proxy: b2DynamicTreeNode): b2AABB;

		/**
		* Get the number of proxies.
		* @return Number of proxies.
		**/
		public GetProxyCount(): number;

		/**
		* Get user data from a proxy. Returns null if the proxy is invalid.
		* @return Gets the user data from proxy, or null if the proxy is invalid.
		**/
		public GetUserData(proxy: b2DynamicTreeNode): any;

		/**
		* Call MoveProxy as many times as you like, then when you are done call UpdatePairs to finalized the proxy pairs (for your time step).
		* @proxy Proxy to move.
		* @aabb Swept AABB.
		* @displacement Extra AABB displacement.
		**/
		public MoveProxy(proxy: b2DynamicTreeNode, aabb: b2AABB, displacement: b2Math.b2Vec2): void;

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

		/**
		* Tests if two proxies overlap.
		* @proxyA First proxy to test.
		* @proxyB Second proxy to test.
		* @return True if the proxyA and proxyB overlap with Fat AABBs, otherwise false.
		**/
		public TestOverlap(proxyA: b2DynamicTreeNode, proxyB: b2DynamicTreeNode): bool;

		/**
		* Update the pairs. This results in pair callbacks. This can only add pairs.
		* @callback Called for all new proxy pairs.
		*	@userDataA Proxy A in the pair user data.
		*	@userDataB Proxy B in the pair user data.
		**/
		public UpdatePairs(callback: (userDataA: any, userDataB: any) => void): void;

		/**
		* Validates the dynamic tree.
		* NOTE: this says "todo" in the current Box2DFlash code.
		**/
		public Validate(): void;
	}
}