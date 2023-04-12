import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/testenv (GET)', () => {
    return request(app.getHttpServer())
      .get('/testenv')
      .expect(200)
      .expect('This environment has ENVTEST = Hello from .ENV');
  });

  it('gets summary of frog pond splash via path /viaopenai/getsummary (GET)', () => {
    return request(app.getHttpServer())
      .get('/viaopenai/getsummary?text=frog pond splash')
      .expect(200)
      .expect({text: "frog pond splash", summary:"The text you submitted can be summarised as follows: It is a translation of a haiku expressing the inevitability of actions when free will is nothing but an illusion."});
  });
  it('gets joke summary if no text sent in query /viaopenai/getsummary (GET)', () => {
    return request(app.getHttpServer())
      .get('/viaopenai/getsummary')
      .expect(200)
      .expect({text: "No text was sent with this request", summary:"You've not read the docs for this API, have you?"});
  });
});
