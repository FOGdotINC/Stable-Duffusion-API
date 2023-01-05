import { Configuration, OpenAIApi} from 'openai';
import { writeFileSync } from 'fs';

const configuration = new Configuration({
    apiKey:'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',
});

const openai = new OpenAIApi(configuration);

const prompt = 'the effiel tower on a lunar crater overlooking the earth '

const result = await openai.createImage({
    prompt,
    n: 1,
    size: '1024x1024',
    user: 'daviddao',
      
   
});

const url = result.data.data[0].url;
console.log(url);

// Save Image URL to Disk

const imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from(await blob.arrayBuffer());
writeFileSync(`./img/${Date.now()}.png`, buffer)