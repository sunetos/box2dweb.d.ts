/// <reference path="../Collision/b2AABB.d.ts" />
/// <reference path="../Collision/b2RayCastInput.d.ts" />
/// <reference path="../Collision/b2RayCastOutput.d.ts" />
/// <reference path="../Collision/Shapes/b2MassData.d.ts" />
/// <reference path="../Collision/Shapes/b2Shape.d.ts" />
/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2Body.d.ts" />

module Box2D.Dynamics {
	export class b2Fixture {
    constructor();

    public GetAABB(): b2Collision.b2AABB;
    public GetBody(): b2Body;
    public GetDensity(): number;
    public GetFilterData(): any;
    public GetFriction(): number;
    public GetMassData(massData?: b2Shapes.b2MassData): b2Shapes.b2MassData;
    public GetNext(): b2Fixture;
    public GetRestitution(): number;
    public GetShape: b2Shapes.b2Shape;
    public GetType(): number;
    public GetUserData(): any;
    public IsSensor(): bool;
    public RayCast(output: b2Collision.b2RayCastOutput, input: b2Collision.b2RayCastInput): bool;
    public SetDensity(density: number): void;
    public SetFilterData(filter: any): void;
    public setFriction(friction: number): void;
    public setRestitution(restitution: number): void;
    public setSensor(sensor: bool): void;
    public setUserData(data: any): void;
    public TestPoint(p: b2Math.b2Vec2): bool;
	}
}
