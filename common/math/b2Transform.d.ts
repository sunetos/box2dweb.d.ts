/// <reference path="b2Vec2.d.ts" />
/// <reference path="b2Mat22.d.ts" />

module Box2D.Common.Math {

	/**
	* A transform contains translation and rotation. It is used to represent the position and orientation of rigid frames.
	**/
	export class b2Transform {

		/**
		* Transform position.
		**/
		public position: b2Vec2;

		/**
		* Transform rotation.
		**/
		public R: b2Mat22;

		/**
		* The default constructor does nothing (for performance).
		* @pos Position
		* @r Rotation
		**/
		constructor (pos: b2Vec2, r: b2Mat22);

		/**
		* Calculate the angle that the rotation matrix represents.
		* @return Rotation matrix angle.
		**/
		public GetAngle(): number;

		/**
		* Initialize using a position vector and rotation matrix.
		* @pos Position
		* @r Rotation
		**/
		public Initialize(pos: b2Vec2, r: b2Mat22): void;

		/**
		* Sets the transfrom from a transfrom.
		* @x Transform to copy values from.
		**/
		public Set(x: b2Transform): void;

		/**
		* Set this to the identity transform.
		**/
		public SetIdentity(): void;
	}
}