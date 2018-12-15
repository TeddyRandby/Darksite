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
        router.get("/contact", (req, res, next) => {
            new IndexRoute().contact(req, res, next);
        });
        router.get("/history", (req, res, next) => {
            new IndexRoute().history(req, res, next);
        });
        router.get("/merch", (req, res, next) => {
            new IndexRoute().merch(req, res, next);
        });
        router.get("/photos", (req, res, next) => {
            new IndexRoute().photos(req, res, next);
        });
        router.get("/roster", (req, res, next) => {
            new IndexRoute().roster(req, res, next);
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

    contact(req, res, next) {
        this.title = "Darkide";
        let options = {
            "message": "Hello World"
        };
        this.render(req, res, "contact", options);
    }

    history(req, res, next) {
        this.title = "Darkide";
        let options = {
            "message": "Hello World"
        };
        this.render(req, res, "history", options);
    }

    merch(req, res, next) {
        this.title = "Darkide";
        let options = {
            "message": "Hello World"
        };
        this.render(req, res, "merch", options);
    }

    photos(req, res, next) {
        this.title = "Darkide";
        let options = {
            "message": "Hello World"
        };
        this.render(req, res, "photos", options);
    }

    roster(req, res, next) {
        this.title = "Darkide";
        let options = {
            "message": "Hello World"
        };
        this.render(req, res, "roster", options);
    }

  }

exports.IndexRoute = IndexRoute;
