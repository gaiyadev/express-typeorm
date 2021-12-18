import {Request, Response} from "express";

export const signIn = (req: Request, res:Response) => {
    res.json({message: 'welcome to docker crash course!'})
}