module Box2D.Collision {
	export class b2ContactID {

		public features: Features;

		constructor();

		public Set(id: b2ContactID): void;
		public Copy(): b2ContactID;
		public Key: number;

	}
}