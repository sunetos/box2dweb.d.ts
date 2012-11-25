/// <reference path="Features.d.ts" />

module Box2D.Collision {

	/**
	* We use contact ids to facilitate warm starting.
	**/
	export class b2ContactID {

		/**
		* Features
		**/
		public features: Features;

		/**
		* ID Key
		**/
		public Key: number;

		/**
		* Creates a new Contact ID.
		**/
		constructor();

		/**
		* Copies the Contact ID.
		* @return Copied Contact ID.
		**/
		public Copy(): b2ContactID;

		/**
		* Sets the Contact ID from a Contact ID.
		* @id The Contact ID to copy values from.
		**/
		public Set(id: b2ContactID): void;
	}
}