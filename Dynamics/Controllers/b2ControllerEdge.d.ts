/// <reference path="../b2Body.d.ts" />
/// <reference path="b2Controller.d.ts" />

module Box2D.Dynamics.Controllers {
	export class b2ControllerEdge {
    constructor();
    public body: b2Body;
    public controller: b2Controller;
    public nextBody: b2ControllerEdge;
    public nextController: b2ControllerEdge;
    public prevBody: b2ControllerEdge;
    public prevController: b2ControllerEdge;
	}
}
