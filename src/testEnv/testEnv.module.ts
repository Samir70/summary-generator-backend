import { Module } from "@nestjs/common";
import { testEnvController } from "./testEnv.controller";
import { TestEnvService } from "./testEnv.service";

@Module({
    controllers: [testEnvController],
    providers: [TestEnvService]
})
export class testEnv {}