import { Injectable } from "@nestjs/common";

@Injectable({})
export class SummariseService {
    getSummary() {
        return "The text you gave me can be summarised as: some words"
    }
}