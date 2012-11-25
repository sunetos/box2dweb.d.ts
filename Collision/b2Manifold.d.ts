/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2ManifoldPoint.d.ts" />

//import b2Math = Box2D.Common.Math;

module Box2D.Collision {

	/**
	* A manifold for two touching convex shapes. Box2D supports multiple types of contact: - clip point versus plane with radius - point versus point with radius (circles) The local point usage depends on the manifold type: -e_circles: the local center of circleA -e_faceA: the center of faceA -e_faceB: the center of faceB Similarly the local normal usage: -e_circles: not used -e_faceA: the normal on polygonA -e_faceB: the normal on polygonB We store contacts in this way so that position correction can account for movement, which is critical for continuous physics. All contact scenarios must be expressed in one of these types. This structure is stored across time steps, so we keep it small.
	**/
	export class b2Manifold {

		/**
		* Circles
		**/
		public static e_circles: number;

		/**
		* Face A
		**/
		public static e_faceA: number;

		/**
		* Face B
		**/
		public static e_faceB: number;

		/**
		* Not used for Type e_points
		**/
		public m_localPlaneNormal: b2Math.b2Vec2;

		/**
		* Usage depends on manifold type
		**/
		public m_localPoint: b2Math.b2Vec2;

		/**
		* The number of manifold points
		**/
		public m_pointCount: number;

		/**
		* The points of contact
		**/
		public m_points: b2ManifoldPoint[];

		/**
		* Manifold type.
		**/
		public m_type: number;

		/**
		* Creates a new manifold.
		**/
		constructor ();

		/**
		* Copies the manifold.
		* @return Copy of this manifold.
		**/
		public Copy(): b2Manifold;

		/**
		* Resets this manifold.
		**/
		public Reset(): void;

		/**
		* Sets this manifold from another manifold.
		* @m Manifold to copy values from.
		**/
		public Set(m: b2Manifold): void;
	}
}
