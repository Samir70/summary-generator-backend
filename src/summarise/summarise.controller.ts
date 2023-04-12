import { Controller, Get, Query } from "@nestjs/common";
import { SummariseService } from "./summarise.service";
import { Request } from "express";

@Controller("viaopenai")
export class SummariseController {
    constructor(private summariseService: SummariseService) {
    }
    
    @Get("getsummary")
    getSummary(@Query() query: any) {
        if (!query || !query.text) {
            return {text: "No text was sent with this request", summary: "You've not read the docs for this API, have you?"}
        }
        return this.summariseService.getSummary(query.text)
    }
}