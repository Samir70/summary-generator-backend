import { Injectable } from "@nestjs/common";

@Injectable({})
export class SummariseService {
    getSummary(text) {
        let msg = (text === "frog pond splash") ? "The text you submitted can be summarised as follows: It is a translation of a haiku expressing the inevitability of actions when free will is nothing but an illusion." : "Give me a moment, I'm still reading."
        return {text, summary: msg}
    }
}