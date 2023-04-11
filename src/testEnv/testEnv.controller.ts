import { Controller, Get } from "@nestjs/common";
import { TestEnvService } from "./testEnv.service";

@Controller()
export class testEnvController {
    constructor (private testEnvServise: TestEnvService) {}

    @Get('testenv')
    getTestEnv() {
        return this.testEnvServise.getTestValue()
    }
}