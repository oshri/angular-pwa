export type EnvNameType = 'prod' | 'dev';

export interface IEnvironment {
	envName: EnvNameType;
	production: boolean;
	url: string;
	gaId: string;
}
