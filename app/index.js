const config = require("./lib/config");
const ejs = require("ejs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const http = require("http");

let server = http.createServer(app);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", ejs.__express);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/img", express.static(__dirname + "/public/img"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/fonts", express.static(__dirname + "/public/fonts"));
app.use("/vendor", express.static(__dirname + "/public/vendor"));
app.use("/favicon.ico", express.static(__dirname + "/public/favicon.ico"));

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
  res.render("pages/index");
});

app.post("/cvForm", (req, res) => {
  res.locals.get = get;
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
