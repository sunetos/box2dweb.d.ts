/// <reference path="b2Vec2.d.ts" />

module Box2D.Common.Math {
	
	/**
	* A 2-by-2 matrix.  Stored in column-major order.
	**/
	export class b2Mat22 {

		/**
		* Column 1
		**/
		public col1: b2Vec2;

		/**
		* Column 2
		**/
		public col2: b2Vec2;

		/**
		* Empty constructor
		**/
		constructor ();

		/**
		* Sets all internal matrix values to absolute values.
		**/
		public Abs(): void;

		/**
		* Adds the two 2x2 matricies together.
		* @m 2x2 matrix to add.
		**/
		public AddM(m: b2Mat22): void;

		/**
		* Creates a copy of the matrix.
		* @return Copy of this 2x2 matrix.
		**/
		public Copy(): b2Mat22;

		/**
		* Creates a rotation 2x2 matrix from the given angle.
		* R(theta) = [ cos(theta)  -sin(theta) ]
		*            [ sin(theta)   cos(theta) ]
		* @angle Matrix angle (theta).
		* @return 2x2 matrix.
		**/
		public static FromAngle(angle: number): b2Mat22;
		
		/**
		* Creates a 2x2 matrix from two columns.
		* @c1 Column 1 vector.
		* @c2 Column 2 vector.
		* @return 2x2 matrix.
		**/
		public static FromVV(c1: b2Vec2, c2: b2Vec2): b2Mat22;
		
		/**
		* Gets the rotation matrix angle.
		* R(theta) = [ cos(theta)  -sin(theta) ]
		*            [ sin(theta)   cos(theta) ]
		* @return The rotation matrix angle (theta).
		**/
		public GetAngle(): number;

		/**
		* Compute the inverse of this matrix, such that inv(A) A = identity.
		* @out Inverse matrix.
		* @return Inverse matrix.
		**/
		public GetInverse(out: b2Mat22): b2Mat22;

		/**
		* Sets the 2x2 rotation matrix from the given angle.
		* R(theta) = [ cos(theta)  -sin(theta) ]
		*            [ sin(theta)   cos(theta) ]
		* @angle Matrix angle (theta).
		**/
		public Set(angle: number): void;
		
		/**
		* Sets the 2x2 matrix to identity.
		**/
		public SetIdentity(): void;

		/**
		* Sets the 2x2 matrix from a 2x2 matrix.
		* @m 2x2 matrix values.
		**/
		public SetM(m: b2Mat22): void;

		/**
		* Sets the 2x2 matrix from 2 column vectors.
		* @c1 Column 1 vector.
		* @c2 Column 2 vector.
		**/
		public SetVV(c1: b2Vec2, c2: b2Vec2): void;

		/**
		* Sets the 2x2 matrix to all zeros.
		**/
		public SetZero(): void;

		/**
		* TODO, has something to do with the determinant
		* @out Solved vector
		* @bX
		* @bY
		* @return Solved vector
		**/
		public Solve(out: b2Vec2, bX: number, bY: number): b2Vec2;
	}
}