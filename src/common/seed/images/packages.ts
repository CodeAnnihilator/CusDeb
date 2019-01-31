import * as R from 'ramda';

import randomNumInRange from 'utils/randomNumInRange';

const packages = [
	'accountsservice',
	'acct',
	'acl',
	'acpid',
	'adduser',
	'adium-theme-ubuntu',
	'advancecomp',
	'adwaita-icon-theme',
	'aide',
	'aide-common',
	'aisleriot',
	'alembic',
	'alsa-base',
	'alsa-utils',
	'amavisd-new',
	'anacron',
	'aodh-api',
	'aodh-common',
	'aodh-doc',
	'aodh-evaluator',
	'aodh-expirer',
	'aodh-listener',
	'aodh-notifier',
	'apache2',
	'apache2-bin',
	'apache2-data',
	'apache2-dbg',
	'apache2-dev',
	'apache2-doc',
	'apache2-ssl-dev',
	'apache2-utils',
	'apg',
	'app-install-data',
	'app-install-data-partner',
	'apparmor',
	'apparmor-notify',
	'apparmor-profiles',
	'apparmor-utils',
	'apport',
	'apport-gtk',
	'apport-retrace',
	'apport-symptoms',
	'appstream',
	'appstream-doc',
	'appstream-glib-doc',
	'apt',
	'apt-clone',
	'apt-config-icons',
	'apt-config-icons-hidpi',
	'apt-config-icons-large',
	'build-essential',
	'busybox-initramfs',
	'busybox-static',
	'byobu',
	'bzip2',
	'bzip2-doc',
	'bzr',
	'bzr-doc',
	'bzrtools',
	'ca-certificates',
	'cu',
	'culmus',
	'cups',
	'cups-browsed',
	'cups-bsd',
	'cups-client',
	'cups-common',
	'cups-core-drivers',
	'cups-daemon',
	'cups-filters',
	'emacs25-dbg',
	'emacs25-el',
	'emacs25-lucid-dbg',
	'emacs25-nox',
	'emacs25-nox-dbg',
	'emacsen-common',
	'enchant',
	'eog',
	'eog-dev',
	'erlang-asn1',
	'fontconfig',
	'fontconfig-config',
	'fonts-arabeyes',
	'fonts-arphic-ukai',
	'fonts-arphic-uming',
	'fonts-beng',
	'fonts-beng-extra',
	'fonts-dejavu-core',
	'fonts-dejavu-extra',
	'fonts-deva',
	'fonts-smc-suruma',
	'fonts-smc-uroob',
	'fonts-taml',
	'fonts-telu',
	'fonts-telu-extra',
	'fonts-thai-tlwg',
	'fonts-tibetan-machine',
	'fonts-tlwg-garuda',
	'fonts-tlwg-garuda-ttf',
	'fonts-tlwg-kinnari',
	'gdisk',
	'gdm3',
	'gedit',
	'gedit-common',
	'gedit-dev',
	'genisoimage',
	'geoclue-2.0',
	'geoip-bin',
	'geoip-database',
	'germinate',
	'gir1.2-colorhug-1.0',
	'gir1.2-dazzle-1.0',
	'gir1.2-dbusmenu-glib-0.4',
	'gir1.2-dbusmenu-gtk3-0.4',
	'gir1.2-dee-1.0',
	'gir1.2-devhelp-3.0',
	'gir1.2-ebook-1.2',
	'gir1.2-ebookcontacts-1.2',
	'gir1.2-edataserver-1.2',
	'gir1.2-edataserverui-1.2',
	'gir1.2-nautilus-3.0',
	'gir1.2-networkmanager-1.0',
	'gir1.2-nm-1.0',
	'gir1.2-nma-1.0',
	'gir1.2-nmgtk-1.0',
	'gir1.2-notify-0.7',
	'gir1.2-packagekitglib-1.0',
	'gir1.2-pango-1.0',
	'gir1.2-peas-1.0',
	'gir1.2-polkit-1.0',
	'gnome-getting-started-docs-lv',
	'gnome-getting-started-docs-mr',
	'gnome-getting-started-docs-nl',
	'gnome-getting-started-docs-pa',
	'gnome-getting-started-docs-pl',
	'gnome-getting-started-docs-pt',
	'gnome-getting-started-docs-ro',
	'gnome-getting-started-docs-ru',
	'gnome-getting-started-docs-sk',
	'gnome-getting-started-docs-sr',
	'gnome-user-docs-gu',
	'gnome-user-docs-he',
	'gnome-user-docs-hi',
	'gnome-user-docs-hr',
	'gnome-user-docs-hu',
	'gnome-user-docs-id',
	'gnome-user-docs-it',
	'gnome-user-docs-ja',
	'gnome-user-docs-kn',
	'gnome-user-docs-ko',
	'jasper',
	'java-common',
	'javascript-common',
	'jfsutils',
	'jigit',
	'john',
	'john-data',
	'joyent-mdata-client',
	'kbd',
	'kdump-tools',
	'language-pack-gnome-he-base',
	'language-pack-gnome-hi',
	'language-pack-gnome-hi-base',
	'language-pack-gnome-hr',
	'language-pack-gnome-hr-base',
	'language-pack-gnome-hu',
	'language-pack-gnome-hu-base',
	'language-pack-gnome-ia',
	'language-pack-gnome-ia-base',
	'language-pack-gnome-id',
	'language-selector-gnome',
	'laptop-detect',
	'lbdb',
	'ldap-utils',
	'less',
	'leveldb-doc',
	'lftp',
	'libaa1',
	'libaa1-dbg',
	'libaa1-dev',
	'libgbm1',
	'libgc-dev',
	'libgc1c2',
	'libgcab-1.0-0',
	'libgcab-dev',
	'libgcab-doc',
	'libgcc-7-dev',
	'libgcc-7-dev-arm64-cross',
	'libgcc-7-dev-armhf-cross',
	'libgcc-7-dev-powerpc-cross',
	'quagga-pimd',
	'quagga-ripd',
	'quagga-ripngd',
	'quota',
	'rabbitmq-server',
	'rados-objclass-dev',
	'radosgw',
	'radvd',
	'rake',
	'raptor2-utils',
	'strongswan-tnc-base',
	'strongswan-tnc-client',
	'strongswan-tnc-pdp',
	'strongswan-tnc-server',
	'sudo',
	'swift-account',
	'swift-container',
	'swift-doc',
	'swift-object',
	'swift-proxy',
];

// const destributePackages = (type: string) => {
// 	const packagesLength = packages.length;
// 	const destributionPercentages = [0.3, 0.05, 0.01];
// 	const destributeValues = destributionPercentages
// 		.map(percentage => Math.round(packagesLength * percentage));

// 	const totalPackagesSum = destributeValues.reduce((accum, value) => accum + value);

// 	const basePackagesCheckpoint = randomNumInRange(0, packagesLength - totalPackagesSum);
// 	const depPackagesCheckpoint = basePackagesCheckpoint + destributeValues[0];
// 	const addedPackagesCheckpoint = depPackagesCheckpoint + destributeValues[1];
// 	const lastCheckpoint = addedPackagesCheckpoint + destributeValues[2];

// 	let typedPackages: any[] = [];

// 	switch (type) {
// 		case 'base':
// 			typedPackages = packages.slice(
// 				basePackagesCheckpoint, depPackagesCheckpoint);
// 			break;
// 		case 'dep':
// 			typedPackages = packages.slice(
// 				depPackagesCheckpoint, addedPackagesCheckpoint);
// 			break;
// 		case 'added':
// 			typedPackages = packages.slice(
// 				addedPackagesCheckpoint, lastCheckpoint);
// 			break;
// 	}

// 	if (typedPackages.length) {
// 		typedPackages = typedPackages.map(item => ({
// 			name: item,
// 			type,
// 		}));
// 	}

// 	return typedPackages;
// };

// export default destributePackages;

const shuffle = (a: any) => {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}

	return a;
};

const generateWeights = () => ([
	randomNumInRange(0.2, 0.4),
	randomNumInRange(0.03, 0.1),
	randomNumInRange(0.01, 0.05),
].map(weight => Math.round(weight * packages.length)));

const packageTypes = ['base', 'dependencies', 'added'];

const generatePackagesWithTypes = (data: any) => R.flatten(
	generateWeights().reduce((c: any, n: any, index: any) => {
		const generatedPackages = shuffle(data)
			.slice(c.length, n)
			.map((packageName: any) => ({
				type: packageTypes[index],
				name: packageName,
			}))
			.sort((item: any, nextItem: any) => item.name < nextItem.name ? -1 : 1);

		return [...c, generatedPackages];
	}, []),
);

export default () => generatePackagesWithTypes(packages)
