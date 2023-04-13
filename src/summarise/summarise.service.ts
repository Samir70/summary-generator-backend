import { Injectable } from "@nestjs/common";
import { Configuration, OpenAIApi } from "openai";

@Injectable({})
export class SummariseService {
    configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    });
    openai = new OpenAIApi(this.configuration);

    async getSummary(text: String) {
        let msg = (text === "frog pond splash") ? "The text you submitted can be summarised as follows: It is a translation of a haiku expressing the inevitability of actions when free will is nothing but an illusion." : "That's so much to summarise. Give me a moment, I'm still reading."
        if (text.split(" ").length > 20) {
            const completion = await this.openai.createCompletion({
                model: "text-davinci-003",
                max_tokens: 100,
                prompt: "Can you please give me a short summary (upto 75 words) of the following text: " + text,
                temperature: 0.6,
            });

            // console.log(completion.data.choices, completion.data.usage)
            msg = completion.data.choices[0].text.trim()
        }
        return { text, summary: msg }
    }
}