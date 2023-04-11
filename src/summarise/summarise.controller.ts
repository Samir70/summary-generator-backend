import { Controller, Get } from "@nestjs/common";
import { SummariseService } from "./summarise.service";

@Controller("viaopenai")
export class SummariseController {
    constructor(private summariseService: SummariseService) {
    }
    
    @Get("getsummary")
    getSummary() {
        return this.summariseService.getSummary()
    }
}