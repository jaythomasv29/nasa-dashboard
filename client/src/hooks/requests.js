const API_URL = 'http://localhost:8000'

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.∂
  const response = await fetch(`${API_URL}/planets`)
  const data = await response.json()
  return data
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
  const response = await fetch(`${API_URL}/launches`)
  const data = await response.json()
  // return sorted in ascending order by flightNumber property
  return data.sort((a,b) => a.flightNumber - b.flightNumber)
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
  console.log('launch submit', launch);
  try {

    return await fetch(`${API_URL}/launches`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(launch),
      
    })
  } catch (err) {
    console.log(err);
    return { ok: false }
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: 'DELETE',
    });
  } catch(err) {
    console.log(err);
    return { ok: false }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};