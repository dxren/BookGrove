import type { RequestHandler } from "express";

export const logging = (logBody: boolean = false): RequestHandler => (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    if (logBody && req.body) console.dir(req.body, {depth: null});
    return next();
};