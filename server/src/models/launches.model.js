const launches = new Map();
let latestFlightNumber = 100;
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

function addNewLaunch(launch) {
  latestFlightNumber++
  launches.set(
    latestFlightNumber, 
    Object.assign(launch, 
      {
        flightNumber: latestFlightNumber,
        customer: ['Nasa', 'Space X',],
        upcoming: true,
        success: true
      }));
}

function existsLaunchWithId(launchId) {
  return launches.has(launchId);
}

function abortLaunchById(launchId) {
  // get launches(Map) by launchId
  const aborted =  launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
}