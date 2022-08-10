import Image from "next/image";

// API
import { getLoaderMedia, getMedia } from "../../lib/api";

// TYPES
import { StrapiImageType } from "../../types/types";

interface INextImage {
  image: StrapiImageType;
  priority?: boolean;
  thumbnail?: boolean;
}

const NextImage = ({
  image,
  priority = false,
  thumbnail = false,
}: INextImage) => {
  const { alternativeText, width, height, formats } = image.data.attributes;

  return (
    <Image
      layout="intrinsic"
      width={thumbnail ? formats?.medium?.width : width}
      height={thumbnail ? 400 : height}
      objectFit="cover"
      src={getMedia(image)}
      loader={() => getLoaderMedia(image)}
      alt={alternativeText || ""}
      className={`rounded-t-lg ${!thumbnail && "lg:!rounded-lg"}`}
      priority={priority}
    />
  );
};

export default NextImage;
