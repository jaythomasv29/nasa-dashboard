const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customers: ['NASA', 'USA'],
  upcoming: true,
  success: true,
}

const launch2 = {
  flightNumber: 103,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customers: ['NASA', 'USA'],
  upcoming: true,
  success: true,
}

const launch3 = {
  flightNumber: 99,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  customers: ['NASA', 'USA'],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber, launch)
launches.set(launch2.flightNumber, launch2)
launches.set(launch3.flightNumber, launch3)

function getAllLaunches() {
  return Array.from(launches.values())
}

module.exports = {
  getAllLaunches,
}