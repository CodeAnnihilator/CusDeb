import randomNumInRange from 'utils/randomNumInRange';

import DebianSVG from 'assets/images/distributive/debian.svg';
import DevuanSVG from 'assets/images/distributive/devuan.svg';
import UbuntuSVG from 'assets/images/distributive/ubuntu.svg';

export const buildTypes = [
	{
		title: 'Classic image',
	},
	{
		title: 'Mender compatible image',
	},
	{
		title: 'Mender artifact',
	},
];

export const brands = [
	{
		title: 'Raspberry',
		icon: 'Raspberry',
	},
	{
		title: 'Orange pi',
		icon: 'SampleBrand',
	},
	{
		title: 'Something else',
		icon: 'SampleBrand',
	},
];

export const targetDevices = [
	{
		title: 'Raspberry Pi Model B and B+',
		icon: 'Raspberry',
	},
	{
		title: 'Raspberry Pi 2 Model B',
		icon: 'Raspberry',
	},
	{
		title: 'Raspberry Pi 3 Model B',
		icon: 'Raspberry',
	},
	{
		title: 'Raspberry Pi Zero',
		icon: 'Raspberry',
	},
];

export const distros = [
	{
		title: 'Ubuntu 18.04 \'Bionic Beaver\' (32-bit)',
		icon: 'Ubuntu',
	},
	{
		title: 'Ubuntu 18.04 \'Bionic Beaver\' (64-bit)',
		icon: 'Ubuntu',
	},
	{
		title: 'Ubuntu 16.04 \'Xenial Xerus\' (32-bit)',
		icon: 'Ubuntu',
	},
	{
		title: 'Raspbian 9 \'Stretch\' (32-bit)',
		icon: 'Raspbian',
	},
	{
		title: 'Devuan 1 \'Jessie\' (32-bit)',
		icon: 'Devuan',
	},
	{
		title: 'Ubuntu 16.03 \'Xenial Xerus\' (64-bit)',
		icon: 'Ubuntu',
	},
	{
		title: 'Ubuntu 16.06 \'Xenial Xerus\' (86-bit)',
		icon: 'Ubuntu',
	},
	{
		title: 'Raspbian 12 \'Stretch\' (32-bit)',
		icon: 'Raspbian',
	},
	{
		title: 'Devuan 11 \'Jessie\' (32-bit)',
		icon: 'Devuan',
	},
];

const generateBuildType = () => {
	const buildType = buildTypes[Math.round(Math.random() * (buildTypes.length - 1))];

	return {full_name: buildType.title};
};

const generateTargetDevice = () => {
	const targetDevice = targetDevices[Math.round(Math.random() * (targetDevices.length - 1))];

	return {full_name: targetDevice.title};
};

const generateConfiguration = () => ({
	HOST_NAME: 'cusdeb',
	IMAGE_ROOTFS_SIZE: Math.round(Math.random() * 10),
	TIME_ZONE: 'Europe/London',
});

const generateDistro = () => {
	const distro = distros[Math.round(Math.random() * (distros.length - 1))];

	return {full_name: distro.title};
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

const generateRandomPackages = (max: number, min = 0) => {
	const packages = Array.from(
		{length: generateRandomLength(max, min)},
		() => generateRandomString()).map(el => ({package: el}),
	);

	return packages;
};

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

const generateDummyImage = (index: number) => ({
	buildtype: generateBuildType(),
	configuration: generateConfiguration(),
	distro: generateDistro(),
	emulate: !!Math.round(Math.random()),
	name: generateRandomString(),
	notes: generateRandomNote(),
	basePackages: generateRandomPackages(180, 100),
	depPackages: generateRandomPackages(40, 15),
	addedPackages: generateRandomPackages(25),
	started_at: new Date(),
	targetdevice: generateTargetDevice(),
	thumb: generateRandomImage(),
	build: generateBuild(index),
});

export const generateDummyImages = (length: number) => (
	Array.from({length},
		(_, index) => generateDummyImage(index),
	)
);
