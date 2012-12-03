/// <reference path="../Collision/Shapes/b2Shape.d.ts" />
/// <reference path="../Collision/b2AABB.d.ts" />
/// <reference path="../Collision/b2Segment.d.ts" />
/// <reference path="../Collision/IBroadPhase.d.ts" />
/// <reference path="../Common/b2Color.d.ts" />
/// <reference path="../Common/Math/b2Transform.d.ts" />
/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="Controllers/b2Controller.d.ts" />
/// <reference path="Joints/b2Joint.d.ts" />
/// <reference path="Joints/b2JointDef.d.ts" />
/// <reference path="b2BodyDef.d.ts" />
/// <reference path="b2Body.d.ts" />
/// <reference path="b2DebugDraw.d.ts" />
/// <reference path="b2Fixture.d.ts" />

module Box2D.Dynamics {
	export class b2World {
    constructor(gravity: b2Math.b2Vec2, doSleep: bool);
    public AddController(c: Controllers.b2Controller): Controllers.b2Controller;
    public ClearForces(): void;
    public CreateBody(def: b2BodyDef): b2Body;
    public CreateJoint(def: Joints.b2JointDef): Joints.b2Joint;
    public DestroyBody(b: b2Body): void;
    public DestroyController(controller: Controllers.b2Controller): void;
    public DestroyJoint(j: Joints.b2Joint): void;
    public DrawDebugData(): void;
    public DrawJoint(j: Joints.b2Joint): void;
    public DrawShape(shape: b2Shapes.b2Shape, xf: b2Math.b2Transform, color: b2Common.b2Color): void;
    public GetBodyCount(): number;
    public GetBodyList(): b2Body;
    public GetContactCount(): number;
    public GetGravity(): b2Math.b2Vec2;
    public GetGroundBody(): b2Body;
    public GetJointCount(): number;
    public GetJointList(): Joints.b2Joint;
    public GetPairCount(): number;
    public GetProxyCount(): number;
    public IsLocked(): bool;
    public Query(aabb: b2Collision.b2AABB, shapes: any[], maxCount: number): number;
    public Raycast(callback: Function, point1: b2Math.b2Vec2, point2: b2Math.b2Vec2): void;
    public RaycastAll(point1: b2Math.b2Vec2, point2: b2Math.b2Vec2): any[];
    public RaycastOne(point1: b2Math.b2Vec2, point2: b2Math.b2Vec2): b2Fixture;
    public RemoveController(c: Controllers.b2Controller): void;
    public SetBroadPhase(broadPhase: b2Collision.IBroadPhase): void;
    public SetContactListener(listener: any): void;
    public SetContinuousPhysics(flag: bool): void;
    public SetDebugDraw(debugDraw: b2DebugDraw): void;
    public SetDestructionListener(listener: any): void;
    public SetGravity(gravity: b2Math.b2Vec2): void;
    public SetWarmStarting(flag: bool): void;
    public Step(dt: number, velocityIterations: number, positionIterations: number);
    public Validate(): void;
	}
}
