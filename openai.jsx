const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({apikey: "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"});
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAi(message) {
    console.log(openai)
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.data.choices[0].text;
}
