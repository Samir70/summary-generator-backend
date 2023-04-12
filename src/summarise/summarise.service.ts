import { Injectable } from "@nestjs/common";
import { Configuration, OpenAIApi } from "openai";

@Injectable({})
export class SummariseService {
    async getSummary(text: String) {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY
        });
        const openai = new OpenAIApi(configuration);

        let msg = (text === "frog pond splash") ? "The text you submitted can be summarised as follows: It is a translation of a haiku expressing the inevitability of actions when free will is nothing but an illusion." : "Give me a moment, I'm still reading."
        if (text.length > 20) {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                max_tokens: 50,
                prompt: "Can you please give me a short summary (upto 40 words) of the following text: " + text,
                temperature: 0.6,
            });
    
            // console.log(completion.data.choices, completion.data.usage)
            msg = completion.data.choices[0].text.trim()
        }
        return { text, summary: msg }
    }
}