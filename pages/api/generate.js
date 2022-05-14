import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion(req.body.engine, {
    prompt: req.body.promptBox,
    //sets max lenght of response
    max_tokens: 100,
    //sets how different responses will be
    temperature: 0.5,
  });
  res.status(200).json({prompt: req.body.promptBox, result: completion.data.choices[0].text});
}