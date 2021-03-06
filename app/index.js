const config = require("./lib/config");
const ejs = require("ejs");
const express = require("express");
const app = express();
const http = require("http");

let server = http.createServer(app);
const logger = require("./lib/logger");

const Health = require("check-connectivity");
const health = new Health({
  host: config.host,
  port: config.healthPort,
  debug: true,
  compatibleWith: {
    "af-connect": "^1.0.0-beta",
    "af-portability": "^1.0.0-beta"
  }
}).listen();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", ejs.__express);

app.use(express.urlencoded());
app.use(express.json());

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/img", express.static(__dirname + "/public/img"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/fonts", express.static(__dirname + "/public/fonts"));
app.use("/vendor", express.static(__dirname + "/public/vendor"));
app.use("/favicon.ico", express.static(__dirname + "/public/favicon.ico"));

app.use(logger);

// Helper function to check existance and get nested properties
let get = function() {
  var args = Array.prototype.slice.call(arguments, 0);
  var path = args[0].split(".");
  var root = this;
  for (var i = 0; i < path.length; i++) {
    if (root[path[i]] === void 0) {
      return args[1] ? args[1] : null;
    } else {
      root = root[path[i]];
    }
  }
  return root;
};

app.get("/", (req, res) => {
  res.locals.get = get;
  res.render("pages/index", {
    companyName: config.companyName,
    jobTitle: config.jobTitle,
    afConnectUrl: config.afConnectUrl,
    afPortabilityUrl: config.afPortabilityUrl,
    afPortabilityApiKey: config.afPortabilityApiKey
  });
});

app.get("/bare", (req, res) => {
  res.locals.get = get;
  console.log("render:pages/bare");
  res.render("pages/bare", {
    afConnectUrl: config.afConnectUrl,
    afPortabilityUrl: config.afPortabilityUrl,
    afPortabilityApiKey: config.afPortabilityApiKey
  });
});

app.post("/cvForm", (req, res) => {
  res.locals.get = get;
  console.log("cvForm: Rendering: ", req.body);
  res.render("partials/cv-form", { data: req.body });
});

if (config.host === "localhost") {
  server.listen(config.port, () =>
    console.log(`AF Connect Demo listening on: ${config.host}:${config.port} !`)
  );
} else {
  server.listen(config.port, config.host, () =>
    console.log(`AF Connect Demo listening on: ${config.host}:${config.port} !`)
  );
}
