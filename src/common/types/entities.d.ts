import {number} from 'prop-types';

export interface IImageDistro {
	full_name: string;
}

export interface IImageBuildtype {
	full_name: string;
}

export interface IImagePackage {
	package: string;
}

export interface IImageConfiguration {
	HOST_NAME: string;
	IMAGE_ROOTFS_SIZE: number;
	TIME_ZONE: string;
}

export interface IImageTargetDevice {
	title: string;
	icon: string;
}

export interface IImageBuild {
	status: string;
	activeStep: number;
	totalSteps: number;
}

export interface IImage {
	name: string;
	notes: string;
	configuration: IImageConfiguration;
	buildtype: IImageBuildtype;
	distro: IImageDistro;
	started_at: number;
	thumb: string;
	build: IImageBuild;
	targetdevice: IImageTargetDevice;
	basePackages: IImagePackage[];
	depPackages: IImagePackage[];
	addedPackages: IImagePackage[];
}

export interface IState {
	images: IImage[] | undefined;
}
