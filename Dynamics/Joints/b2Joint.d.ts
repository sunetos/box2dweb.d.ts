/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="../b2Body.d.ts" />

module Box2D.Dynamics.Joints {
  export class b2Joint {
    constructor();

    public GetAnchorA(): b2Math.b2Vec2;
    public GetAnchorB(): b2Math.b2Vec2;
    public GetBodyA(): b2Body;
    public GetBodyB(): b2Body;
    public GetNext(): b2Joint;
    public GetReactionForce(inv_dt: number): b2Math.b2Vec2;
    public GetReactionTorque(inv_dt: number): number;
    public GetType(): number;
    public GetUserData(): any;
    public IsActive(): bool;
    public SetUserData(data: any); void;
  }
}
