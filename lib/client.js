import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

const client = sanityClient(
    {
        projectId: "7b1x6sye",
        dataset: "production",
        apiVersion: "2022-04-25",
        useCdn: true,
        token: "skLS5qfmzlwDXnv5QNL1XNKnvFoh9ONuodxoF2GnMq78Tg5o14Pko2tM66xNkwhFcp26upx5sZ68BxRZpsCoAuR3hCoxn5KpWClHfdhcKTWaX1QlcjDVv9LjdKFMKcd14WyDyRSyZhUldmN8Fp4kdQ87uZFWJYVl3R57tR8wYnZ7gcGSO5UB"
    }
)