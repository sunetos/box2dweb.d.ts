/// <reference path="../b2Body.d.ts" />
/// <reference path="../b2DebugDraw.d.ts" />
/// <reference path="../b2World.d.ts" />
/// <reference path="b2ControllerEdge.d.ts" />

module Box2D.Dynamics.Controllers {

	export class b2Controller {
		public m_bodyCount: number;
		public m_bodyList: b2ControllerEdge;

    constructor();
    public AddBody(body: b2Body): void;
    public Clear(): void;
    public Draw(debugDraw: b2DebugDraw): void;
    public GetBodyList(): b2ControllerEdge;
    public GetNext(): b2Controller;
    public GetWorld(): b2World;
    public RemoveBody(body: b2Body): void;
    public Step(step: any): void;
	}
}
