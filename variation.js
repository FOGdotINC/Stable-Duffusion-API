import { Configuration, OpenAIApi} from 'openai';
import { writeFileSync } from 'fs';


const configuration = new Configuration({
    apiKey:'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',
});

const openai = new OpenAIApi(configuration);

const src = './img/1672945482107';

const result = await openai.createImageVariation(
    createReadStream(`./img/${src}`),
    1,
    '1024x1024',
);

const url = result.data.data[0].url;
console.log(url);

// Save Image URL to Disk

const imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from(await blob.arrayBuffer());
writeFileSync(`./img/${Date.now()}.png`, buffer)