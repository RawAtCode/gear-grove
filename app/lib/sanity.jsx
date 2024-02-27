import{createClient} from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';
import * as dotenv from 'dotenv'

dotenv.config();

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    apiVersion: '2022-03-07',
    useCdn: false,
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
    return imgBuilder.image(source);
}