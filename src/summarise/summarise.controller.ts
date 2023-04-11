import { Controller, Get, Req } from "@nestjs/common";
import { SummariseService } from "./summarise.service";
import { Request } from "express";

@Controller("viaopenai")
export class SummariseController {
    constructor(private summariseService: SummariseService) {
    }
    
    @Get("getsummary")
    getSummary(@Req() req: Request) {
        return this.summariseService.getSummary(req.query.text)
    }
}