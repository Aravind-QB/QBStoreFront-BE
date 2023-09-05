import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken');

export function generateAccessToken(username : any) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}
   
export function authenticateToken(req : Request, res : Response, next : NextFunction) {
    const authCookie = req.cookies.authToken;
    if( authCookie == null)
        return res.sendStatus(401);
    jwt.verify(authCookie, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
    if (err)
        return res.sendStatus(403);
      next();
    })
  }

