export const buildTypes = [
  'Classic image',
  'Mender compatible image',
  'Mender artifact'
]

export const targetDevices = [
  'Raspberry Pi Model B and B+',
  'Raspberry Pi 2 Model B',
  'Raspberry Pi 3 Model B',
  'Raspberry Pi Zero'
]

export const distros = [
  'Ubuntu 18.04 "Bionic Beaver" (32-bit)',
  'Ubuntu 18.04 "Bionic Beaver" (64-bit)',
  'Ubuntu 16.04 "Xenial Xerus" (32-bit)',
  'Raspbian 9 "Stretch" (32-bit)',
  'Devuan 1 "Jessie" (32-bit)'
]

const generateBuildType = () => {
  const buildType = buildTypes[Math.round(Math.random() * (buildTypes.length - 1))]
  return { full_name: buildType }
}

const generateTargetDevice = () => {
  const targetDevice = targetDevices[Math.round(Math.random() * (targetDevices.length - 1))]
  return { full_name: targetDevice }
}

const generateConfiguration = () => ({
  HOST_NAME: 'cusdeb',
  IMAGE_ROOTFS_SIZE: Math.round(Math.random() * 10),
  TIME_ZONE: 'Europe/London'
})

const generateDistro = () => {
  const distro = distros[Math.round(Math.random() * (distros.length - 1))]
  return { full_name: distro }
}

const generateRandomString = () => Math.random().toString(36).replace(/[^a-z]+/g, '')
const generateRandomLength = (length, min=0) => min + Math.round(Math.random() * length)

const generateRandomNote = () => {
  const wordsArray = Array.from(
    { length: generateRandomLength(35, 4) },
    () => {
      const leftPart = generateRandomString().slice(0, generateRandomLength(10))
      const rightPart = generateRandomString().slice(0, generateRandomLength(10))
      return leftPart + rightPart
    }
  )
  return wordsArray.join(' ')
}

const generateRandomPackages = () => {
  const packages = Array.from(
    { length: generateRandomLength(25) },
    () => generateRandomString()
  )
  return packages
}

const generateDummyImage = () => ({
  buildtype: generateBuildType(),
  configuration: generateConfiguration(),
  distro: generateDistro(),
  emulate: !!Math.round(Math.random()),
  name: generateRandomString(),
  notes: generateRandomNote(),
  packages: generateRandomPackages(),
  started_at: new Date(),
  targetdevice: generateTargetDevice()
})

export const generateDummyImages = (length) => {
  const images = Array.from({ length: length }, () => generateDummyImage())
  return images
}