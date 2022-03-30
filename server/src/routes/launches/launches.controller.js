const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body  // capture launch from req

  if(!launch.mission || !launch.rocket || !launch.launchDate ||
    !launch.destination){
      return res.status(400)  // Bad request due to invalid syntax
    } else {
      launch.launchDate = new Date(launch.launchDate)
      addNewLaunch(launch);
      return res.status(201).json((launch))
    }
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
};
