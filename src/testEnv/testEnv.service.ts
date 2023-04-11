import { Injectable } from "@nestjs/common";

@Injectable()
export class TestEnvService {
    getTestValue() {return "This environment has ENVTEST = " + process.env.ENVTEST}
}