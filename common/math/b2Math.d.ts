/// <reference path="b2Vec2.d.ts" />
/// <reference path="b2Mat22.d.ts" />
/// <reference path="b2Transform.d.ts" />

module Box2D.Common.Math {

	/**
	* Math utility functions.
	**/
	export class b2Math {

		/**
		* Determines if a number is valid.  A number is valid if it is finite.
		* @x Number to check for validity.
		* @return True if x is valid, otherwise false.
		**/
		public static IsValid(x: number): bool;

		/**
		* Dot product of two vector 2s.
		* @a Vector 2 to use in dot product.
		* @b Vector 2 to use in dot product.
		* @return Dot product of a and b.
		**/
		public static Dot(a: b2Vec2, b: b2Vec2): number;

		/**
		* Cross product of two vector 2s.
		* @a Vector 2 to use in cross product.
		* @b Vector 2 to use in cross product.
		* @return Cross product of a and b.
		**/
		public static CrossVV(a: b2Vec2, b: b2Vec2): number;

		/**
		* Cross product of vector 2 and s.
		* @a Vector 2 to use in cross product.
		* @s s value.
		* @return Cross product of a and s.
		**/
		public static CrossVF(a: b2Vec2, s: number): b2Vec2;

		/**
		* Cross product of s and vector 2.
		* @s s value.
		* @a Vector 2 to use in cross product.
		* @return Cross product of s and a.
		**/
		public static CrossFV(s: number, a: b2Vec2): b2Vec2;

		/**
		* 
		**/
		public static MulMV(A: b2Mat22, v: b2Vec2): b2Vec2;
		public static MulTMV(A: b2Mat22, v: b2Vec2): b2Vec2;
		public static MulX(T: b2Transform, v: b2Vec2): b2Vec2;
		public static MulXT(T: b2Transform, v: b2Vec2): b2Vec2;
		public static AddVV(a: b2Vec2, b: b2Vec2): b2Vec2;
		public static SubtractVV(a: b2Vec2, b: b2Vec2): b2Vec2;
		public static Distance(a: b2Vec2, b: b2Vec2): number;
		public static DistanceSquared(a: b2Vec2, b: b2Vec2): number;
		public static MulFV(s: number, a: b2Vec2): b2Vec2;
		public static AddMM(A: b2Mat22, B: b2Mat22): b2Mat22;
		public static MulMM(A: b2Mat22, B: b2Mat22): b2Mat22;
		public static MulTMM(A: b2Mat22, B: b2Mat22): b2Mat22;
		public static Abs(a: number): number;
		public static AbsV(a: b2Vec2): b2Vec2;
		public static AbsM(A: b2Mat22): b2Mat22;
		public static Min(a: number, b: number): number;
		public static MinV(a: b2Vec2, b: b2Vec2): b2Vec2;
		public static Max(a: number, b: number): number;
		public static MaxV(a: b2Vec2, b: b2Vec2): b2Vec2;
		public static Clamp(a: number, low: number, high: number): number;
		public static ClampV(a: b2Vec2, low: b2Vec2, high: b2Vec2): b2Vec2;
		public static Swap(a: any, b: any): void;
		public static Random(): number;
		public static RandomRange(lo: number, hi: number): number;
		public static NextPowerOfTwo(x: number): number;
		public static IsPowerOfTwo(x: number): bool;

		/**
		* Global instance of a zero'ed vector.  Use as read-only.
		**/
		public static b2Vec2_zero: b2Vec2;

		/**
		* Global instance of a 2x2 identity matrix.  Use as read-only.
		**/
		public static b2Mat22_identity: b2Mat22;

		/**
		* Global instance of an identity transform.  Use as read-only.
		**/
		public static b2Transform_identity: b2Transform;
	}
}