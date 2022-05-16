const deadServer = require("dead-server");

deadServer.start({
    port: 1337,
    root: "src",
    file: "index.html",
    wait: 300,
    logLevel: 2,
});
