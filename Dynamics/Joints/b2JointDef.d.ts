/// <reference path="../b2Body.d.ts" />

module Box2D.Dynamics.Joints {
  export class b2JointDef {
    public bodyA: b2Body;
    public bodyB: b2Body;
    public collideConnected: bool;
    public type: number;
    public userData: any;

    constructor();
  }
}
