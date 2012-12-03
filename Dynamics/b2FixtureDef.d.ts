module Box2D.Dynamics {
	export class b2FixtureDef {
    public density: number;
    public filter: any;
    public friction: number;
    public isSensor: bool;
    public restitution: number;
    public shape: any;  // Polymorphism seems broken right now, so not using b2Shape
    public userData: any;

    constructor();
	}
}
