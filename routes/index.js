"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const https = require("https");
const request = require('request');


class IndexRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("[IndexRoute::create] Creating index route.");
        router.get("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
        router.post("/", (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
    }

    constructor() {
        super();
    }

    index(req, res, next) {
        this.title = "Darkide";
        let options = {
            "message": "Hello World"
        };
        this.render(req, res, "index", options);
    }

  }

exports.IndexRoute = IndexRoute;
