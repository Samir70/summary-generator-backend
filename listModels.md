# list of openai models

I got this with:

```
const response = await openai.listModels()
console.log(response.data.data.map(m => m.id))
```

There are a lot to choose from. I'm going to use `text-curie-001`

```
[
  'babbage',
  'davinci',
  'text-davinci-edit-001',
  'babbage-code-search-code',
  'text-similarity-babbage-001',
  'gpt-3.5-turbo',
  'code-davinci-edit-001',
  'text-davinci-001',
  'ada',
  'babbage-code-search-text',
  'babbage-similarity',
  'gpt-3.5-turbo-0301',
  'code-search-babbage-text-001',
  'text-curie-001',
  'whisper-1',
  'code-search-babbage-code-001',
  'text-davinci-003',
  'text-ada-001',
  'text-embedding-ada-002',
  'text-similarity-ada-001',
  'curie-instruct-beta',
  'ada-code-search-code',
  'ada-similarity',
  'code-search-ada-text-001',
  'text-search-ada-query-001',
  'davinci-search-document',
  'ada-code-search-text',
  'text-search-ada-doc-001',
  'davinci-instruct-beta',
  'text-similarity-curie-001',
  'code-search-ada-code-001',
  'ada-search-query',
  'text-search-davinci-query-001',
  'curie-search-query',
  'davinci-search-query',
  'babbage-search-document',
  'ada-search-document',
  'text-search-curie-query-001',
  'text-search-babbage-doc-001',
  'curie-search-document',
  'text-search-curie-doc-001',
  'babbage-search-query',
  'text-babbage-001',
  'text-search-davinci-doc-001',
  'text-search-babbage-query-001',
  'curie-similarity',
  'curie',
  'text-similarity-davinci-001',
  'text-davinci-002',
  'davinci-similarity',
  'cushman:2020-05-03',
  'ada:2020-05-03',
  'babbage:2020-05-03',
  'curie:2020-05-03',
  'davinci:2020-05-03',
  'if-davinci-v2',
  'if-curie-v2',
  'if-davinci:3.0.0',
  'davinci-if:3.0.0',
  'davinci-instruct-beta:2.0.0',
  'text-ada:001',
  'text-davinci:001',
  'text-curie:001',
  'text-babbage:001'
]
```