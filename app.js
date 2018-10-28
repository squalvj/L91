var launcher = require('simple-autoreload-server');

var server = launcher({
    port: 8008,
    path: './dist/html/',
    watch:  "./dist/html/blog/css/*.{css}",
});

module.exports = server;