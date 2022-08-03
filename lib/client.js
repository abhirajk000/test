import sanityClient from "@sanity/client";
import  ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "1fbi7n7f",
    dataset: "production",
    apiVersion:"2022-07-29",
    useCdn: true,
    token: "sk0aOGG8NYt2Y3GGhAAWXWPc764Xr8noJGl5FV28TyEumSJWHfB2tTMGapzbeACFqZbIKqtvzTHJ1TxAR8L2MVFrud00WAAQQDz0rdK4NG0ltvLiciaM5PLCJ4pvwhrykADQ00RFPVIULOoUOagAr8ZeCy8EUH5QrebGsHABa2XtvJEeOw1Q"

});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);