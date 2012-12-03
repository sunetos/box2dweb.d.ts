/// <reference path="../../Common/Math/b2Transform.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="../b2AABB.d.ts" />
/// <reference path="b2MassData.d.ts" />
/// <reference path="b2Shape.d.ts" />

module Box2D.Collision.Shapes {
	export class b2PolygonShape extends b2Shape {
    public static AsArray(vertices: any[], vertexCount: number): b2PolygonShape;
    public static AsBox(hx: number, hy: number): b2PolygonShape;
    public static AsEdge(v1: b2Math.b2Vec2, b2: b2Math.b2Vec2): b2PolygonShape;
    public static AsOrientedBox(hx: number, hy: number, center?: b2Math.b2Vec2, angle?: number): b2PolygonShape;
    public static AsVector(vertices: any[], vertexCount: number): b2PolygonShape;

		constructor ();
		public ComputeAABB(aabb: b2AABB, xf: b2Math.b2Transform): void;
		public ComputeMass(massData: b2MassData, density: number): void;
		public ComputeSubmergedArea(normal: b2Math.b2Vec2, offset: number, xf: b2Math.b2Transform, c: b2Math.b2Vec2): number;
		public Copy(): b2PolygonShape;
		public GetNormals(): any[];
    public GetSupport(d: b2Math.b2Vec2): number;
    public GetSupportVertex(d: b2Math.b2Vec2): b2Math.b2Vec2;
    public GetVertexCount(): number;
		public GetVertices(): any[];
		public RayCast(output: b2RayCastOutput, input: b2RayCastInput, transform: b2Math.b2Transform): bool;
		public Set(other: b2Shape): void;
    public SetAsArray(vertices: any[], vertexCount?: number): void;
    public SetAsBox(hx: number, hy: number): void;
    public SetAsEdge(v1: b2Math.b2Vec2, b2: b2Math.b2Vec2): void;
    public SetAsOrientedBox(hx: number, hy: number, center?: b2Math.b2Vec2, angle?: number): void;
    public SetAsVector(vertices: any[], vertexCount?: number): void;
		public TestPoint(xf: b2Math.b2Transform, p: b2Math.b2Vec2): bool;
	}
}
