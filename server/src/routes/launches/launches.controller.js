const { getAllLaunches, addNewLaunch, existsLaunchWithId, abortLaunchById } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body  // capture launch from req

  if(!launch.mission || !launch.rocket || !launch.launchDate ||
    !launch.target){
      return res.status(400).json({error: 'Missing required launch property'})  // Bad request due to invalid syntax
    } 
  
    launch.launchDate = new Date(launch.launchDate)
    if(launch.launchDate.toString() === 'Invalid Date') {
      return res.status(400).json({error: 'Invalid date for launch'})
    }

    addNewLaunch(launch);
    return res.status(201).json((launch))
  
}

function httpAbortLaunch(req, res) {
  let { id } = req.params;
  id = Number(id)
  // if launch doesn't exist return 404
  if(!existsLaunchWithId(id))
  return res.status(404).json({
    error: 'Launch not found'
  })
  const aborted = abortLaunchById(id)
  return res.status(200).json(aborted);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
};
