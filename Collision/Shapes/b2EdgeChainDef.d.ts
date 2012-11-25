/// <reference path="../../Common/Math/b2Vec2.d.ts" />

import b2Math = Box2D.Common.Math;

module Box2D.Collision.Shapes {

	/**
	* This structure is used to build edge shapes.
	**/
	export class b2EdgeChainDef {

		/**
		* Whether to create an extra edge between the first and last vertices.
		**/
		public isALoop: bool;

		/**
		* The number of vertices in the chain.
		**/
		public vertexCount: number;

		/**
		* The vertices in local coordinates.
		**/
		public vertices: b2Math.b2Vec2;

		/**
		* Creates a new edge chain def.
		**/
		constructor ();
	}
}