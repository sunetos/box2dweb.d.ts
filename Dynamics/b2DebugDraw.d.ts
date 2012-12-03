/// <reference path="../Common/b2Color.d.ts" />
/// <reference path="../Common/Math/b2Transform.d.ts" />
/// <reference path="../Common/Math/b2Vec2.d.ts" />

import b2Common = Box2D.Common;

module Box2D.Dynamics {
	export class b2DebugDraw {
    public static e_aabbBit: number;
    public static e_centerOfMassBit: number;
    public static e_coreShapeBit: number;
    public static e_jointBit: number;
    public static e_obbBit: number;
    public static e_pairBit: number;
    public static e_shapeBit: number;

    constructor();
    public AppendFlags(flags:number): void;
    public ClearFlags(flags:number): void;
    public DrawCircle(center: b2Math.b2Vec2, radius: number, color: b2Common.b2Color): void;
    public DrawPolygon(vertices: any[], vertexCount:number, color: b2Common.b2Color): void;
    public DrawSegment(p1: b2Math.b2Vec2, p2: b2Math.b2Vec2, color: b2Common.b2Color): void;
    public DrawSolidCircle(center: b2Math.b2Vec2, radius: number, axis: b2Math.b2Vec2, color: b2Common.b2Color): void;
    public DrawSolidPolygon(vertices: any[], vertexCount:number, color: b2Common.b2Color): void;
    public DrawXForm(xf: b2Math.b2Transform): void;
    public GetAlpha(): number;
    public GetDrawScale(): number;
    public GetFillAlpha(): number;
    public GetFlags(): number;
    public GetLineThickness(): number;
    public GetSprite(): HTMLCanvasElement;
    public GetXFormScale(): number;
    public SetAlpha(alpha: number): void;
    public SetDrawScale(drawScale: number): void;
    public SetFillAlpha(alpha: number): void;
    public SetFlags(flags: number): void;
    public SetLineThickness(lineThickness: number): void;
    public SetSprite(sprite: HTMLCanvasElement): void;
    public SetXFormScale(xformScale: number): void;
	}
}
