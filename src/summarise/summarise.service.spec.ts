import { Test, TestingModule } from '@nestjs/testing';
import { SummariseService } from './summarise.service';

describe('SummariseService', () => {
    let service: SummariseService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SummariseService],
        }).compile();

        service = module.get<SummariseService>(SummariseService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getSummary method -- without sending requests to openai', () => {
        it("should respond with long summary of particular short poem", async () => {
            const result = await service.getSummary("frog pond splash")
            expect(result).toEqual({ text: "frog pond splash", summary: "The text you submitted can be summarised as follows: It is a translation of a haiku expressing the inevitability of actions when free will is nothing but an illusion." })
        })
        it("should respond with sarcasm to text with fewer than 20 words", async () => {
            const result = await service.getSummary("A frog sees a pond and jumps in.")
            expect(result).toEqual({ text: "A frog sees a pond and jumps in.", summary: "That's so much to summarise. Give me a moment, I'm still reading." })
        })
    });
});


