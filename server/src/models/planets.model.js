const { parse } = require("csv-parse");
const path = require("path");
const fs = require("fs");

const planets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetData() {
  return new Promise((resolve, reject) => {
    // console.log(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
    fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          planets.push(data);
        }
      })
      .on("end", () => {
        resolve()
      })
      .on("error", (err) => {
        console.log(err);
        reject(err)
      });
  });
}

module.exports = {
  loadPlanetData,
  planets
};
