/// <reference path="b2Mat22.d.ts" />

module Box2D.Common.Math {

	/**
	* A 2D column vector.
	**/
	export class b2Vec2 {

		/**
		* x value
		**/
		public x: number;

		/**
		* y value
		**/
		public y: number;

		/**
		* Creates a new vector 2.
		* @x x value, default = 0.
		* @y y value, default = 0.
		**/
		constructor (x?: number, y?: number);

		/**
		* Sets x and y to absolute values.
		**/
		public Abs(): void;

		/**
		* Adds the vector 2 to this vector 2.  The result is stored in this vector 2.
		* @v Vector 2 to add.
		**/
		public Add(v: b2Vec2): void;

		/**
		* Creates a copy of the vector 2.
		* @return Copy of this vector 2.
		**/
		public Copy(): b2Vec2;

		/**
		* Cross F V
		* @s
		**/
		public CrossFV(s: number): void;

		/**
		* Cross V F
		* @s
		**/
		public CrossVF(s: number): void;

		/**
		* Gets the negative of this vector 2.
		* @return Negative copy of this vector 2.
		**/
		public GetNegative(): b2Vec2;

		/**
		* True if the vector 2 is valid, otherwise false.  A valid vector has finite values.
		* @return True if the vector 2 is valid, otherwise false.
		**/
		public IsValid(): bool;

		/**
		* Calculates the length of the vector 2.
		* @return The length of the vector 2.
		**/
		public Length(): number;

		/**
		* Calculates the length squared of the vector2.
		* @return The length squared of the vector 2.
		**/
		public LengthSquared(): number;

		/**
		* Creates a new vector 2 from the given values.
		* @x x value.
		* @y y value.
		**/
		public static Make(x: number, y: number): b2Vec2;

		/**
		* Calculates which vector has the maximum values and sets this vector to those values.
		* @b Vector 2 to compare for maximum values.
		**/
		public MaxV(b: b2Vec2): void;

		/**
		* Calculates which vector has the minimum values and sets this vector to those values.
		* @b Vector 2 to compare for minimum values.
		**/
		public MinV(b: b2Vec2): void;

		/**
		* Matrix multiplication.  Stores the result in this vector 2.
		* @A Matrix to muliply by.
		**/
		public MulM(A: b2Mat22): void;

		/**
		* Vector multiplication.  Stores the result in this vector 2.
		* @a Value to multiple the vector's values by.
		**/
		public Multiply(a: number): void;

		/**
		* Dot product multiplication.  Stores the result in this vector 2.
		* @A Matrix to multiply by.
		**/
		public MulTM(A: b2Mat22): void;

		/**
		* Sets this vector 2 to its negative.
		**/
		public NegativeSelf(): void;

		/**
		* Normalizes the vector 2 [0,1].
		* @return Length.
		**/
		public Normalize(): number;

		/**
		* Sets the vector 2.
		* @x x value, default is 0.
		* @y y value, default is 0.
		**/
		public Set(x?: number, y?: number): void;

		/**
		* Sets the vector 2 from a vector 2.
		* @v Vector 2 to copy values from.
		**/
		public SetV(v: b2Vec2): void;

		/**
		* Sets the vector 2 to zero values.
		**/
		public SetZero(): void;

		/**
		* Subtracts the vector 2 from this vector 2.  The result is stored in this vector 2.
		* @v Vector 2 to subtract.
		**/
		public Subtract(v: b2Vec2): void;
	}
}