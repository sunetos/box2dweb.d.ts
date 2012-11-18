module Box2D.Common {

	export class b2Settings {
		b2MixFriction(friction1: number, friction2: number): number;
		b2MixRestitution(restitution1: number, restitution2: number): number;
		b2Assert(a: bool): void;

		VERSION: string;
		USHRT_MAX: number;
		b2_pi: number;
		b2_maxManifoldPoints: number;
		b2_aabbExtension: number;
		b2_aabbMultiplier: number;
		b2_polygonRadius: number;
		b2_linearSlop: number;
		b2_angularSlop: number;
		b2_toiSlop: number;
		b2_maxTOIContactsPerIsland: number;
		b2_maxTOIJointsPerIsland: number;
		b2_velocityThreshold: number;
		b2_maxLinearCorrection: number;
		b2_maxAngularCorrection: number;
		b2_maxTranslation: number;
		b2_maxTranslationSquared: number;
		b2_maxRotation: number;
		b2_maxRotationSquared: number;
		b2_contactBaumgarte: number;
		b2_timeToSleep: number;
		b2_linearSleepTolerance: number;
		b2_angularSleepTolerance: number;
	}
}