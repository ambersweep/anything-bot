import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion(req.body.engine, {
    prompt: req.body.promptBox,
    max_tokens: 100,
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}