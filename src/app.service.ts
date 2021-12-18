import {Request, Response} from "express";

export class AppService{
    constructor() {}

    public welcome = async (req: Request, res:Response) => {
        return res.json({
            message: "Hello world in JSON"
        })
    }
}
