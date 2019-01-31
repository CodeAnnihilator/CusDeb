import randomNumInRange from 'utils/randomNumInRange';
import generatePackagesWithTypes from './packages';

import DebianSVG from 'assets/images/distributive/debian.svg';
import DevuanSVG from 'assets/images/distributive/devuan.svg';
import UbuntuSVG from 'assets/images/distributive/ubuntu.svg';

export const buildTypes = [
	'Classic image',
	'Mender compatible image',
	'Mender artifact',
];

export const brands = [
	'Raspberry',
	'Debian',
	'Something else',
];

export const targetDevices = [
	'Raspberry Pi Model B and B+',
	'Raspberry Pi 2 Model B',
	'Raspberry Pi 3 Model B',
	'Raspberry Pi Zero',
];

export const distros = [
	'Ubuntu 18.04 "Bionic Beaver" (32-bit)',
	'Ubuntu 18.04 "Bionic Beaver" (64-bit)',
	'Ubuntu 16.04 "Xenial Xerus" (32-bit)',
	'Raspbian 9 "Stretch" (32-bit)',
	'Devuan 1 "Jessie" (32-bit)',
	'Ubuntu 16.03 "Xenial Xerus" (64-bit)',
	'Ubuntu 16.06 "Xenial Xerus" (86-bit)',
	'Raspbian 12 "Stretch" (32-bit)',
	'Devuan 11 "Jessie" (32-bit)',
];

const generateBuildType = () => {
	const buildType = buildTypes[Math.round(Math.random() * (buildTypes.length - 1))];

	return {full_name: buildType};
};

const generateTargetDevice = () => {
	const targetDevice = targetDevices[Math.round(Math.random() * (targetDevices.length - 1))];

	return {full_name: targetDevice};
};

const generateConfiguration = () => ({
	HOST_NAME: 'cusdeb',
	IMAGE_ROOTFS_SIZE: Math.round(Math.random() * 10),
	TIME_ZONE: 'Europe/London',
});

const generateDistro = () => {
	const distro = distros[Math.round(Math.random() * (distros.length - 1))];

	return {full_name: distro};
};

const generateRandomString = () => Math.random().toString(36).replace(/[^a-z]+/g, '');

const generateRandomLength = (length: number, min = 0) => min + Math.round(Math.random() * length);

const generateRandomNote = () => {
	const wordsArray = Array.from(
		{length: generateRandomLength(35, 4)},
		() => {
			const leftPart = generateRandomString().slice(0, generateRandomLength(10));
			const rightPart = generateRandomString().slice(0, generateRandomLength(10));

			return leftPart + rightPart;
		},
	);

	return wordsArray.join(' ');
};

// const generatePackages = (type: string) => {
// 	const allPackages = [...packageList];

// 	const generatePackages = (max: number, min: number) => {
// 		const sliceFromIndex = generateRandomLength(allPackages.length - min, 0);
// 		const sliceLength = generateRandomLength(max, min);

// 		const da = allPackages.slice(
// 			sliceFromIndex,
// 			sliceFromIndex + sliceLength,
// 		).map(el => ({package: el}));

// 		return da[type];
// 	};
// };

const generateRandomImage = () => {
	const variants = [DebianSVG, DevuanSVG, UbuntuSVG];
	const selectedVariant = variants[Math.round(Math.random() * 2)];

	return selectedVariant;
};

const generateBuild = (index: number) => {
	const statuses = ['building', 'error', 'ready'];

	const resultStatus = index < 3 ? statuses[index] : statuses[randomNumInRange(0, 2)];

	return {
		status: resultStatus,
		activeStep: randomNumInRange(0, 10),
		totalSteps: 10,
	};
};

const generateDummyImage = (index: number) => {
	const packages = generatePackagesWithTypes();

	return {
		buildtype: generateBuildType(),
		configuration: generateConfiguration(),
		distro: generateDistro(),
		emulate: !!Math.round(Math.random()),
		name: generateRandomString(),
		notes: generateRandomNote(),
		basePackages: packages.filter((item: any) => item.type === 'base'),
		depPackages: packages.filter((item: any) => item.type === 'dependencies'),
		addedPackages: packages.filter((item: any) => item.type === 'added'),
		started_at: new Date(),
		targetdevice: generateTargetDevice(),
		thumb: generateRandomImage(),
		build: generateBuild(index),
	};
};

export const generateDummyImages = (length: number) => (
	Array.from({length},
		(_, index) => generateDummyImage(index),
	)
);
