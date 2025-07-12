import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { resume, jobDescription } = req.body;
  const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
  const openai = new OpenAIApi(configuration);

  const prompt = `
Analyze the match between this resume and job description.
Return a JSON with:
- matchPercentage (0-100)
- missingKeywords (array)
- categoryScores: { skills, experience, education, industry }
Resume: ${resume}
Job Description: ${jobDescription}
Return format: {"matchPercentage": number, "missingKeywords": [array], "categoryScores": {"skills": number, "experience": number, "education": number, "industry": number}}
`;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1000,
      temperature: 0.3,
    });
    const reply = completion.data.choices[0].message.content;
    const json = JSON.parse(reply);
    res.status(200).json(json);
  } catch (e) {
    res.status(500).json({ error: "Failed to parse AI response", detail: e.message });
  }
}
