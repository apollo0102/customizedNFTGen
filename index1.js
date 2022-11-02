const basePath = process.cwd();
const { startCreating, buildSetup, startCreatingWithParam } = require(`${basePath}/src/main.js`);

(() => {
  buildSetup();
  //startCreating();
  //startCreatingWithParam("0:Backgrounds-1:Body-0:JerseyNumber-0:JerseyStreetwear-0:Mouth-0:OutterFrame-0:a-TeamCountryCity-0:TeamName");
  startCreatingWithParam("0:Backgrounds-1:Body-0:JerseyNumber-0:JerseyStreetwear-0:Mouth-0:OutterFrame-0:TeamCountryCity-0:TeamName");
})();