import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

const client = sanityClient(
    {
        projectId: "7b1x6sye",
        dataset: "production",
        apiVersion: "2022-04-25",
        useCdn: true,
        token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    }
)