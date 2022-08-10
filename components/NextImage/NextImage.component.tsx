import Image from "next/image";

// API
import { getLoaderMedia, getMedia } from "../../lib/api";

// TYPES
import { StrapiImageType } from "../../types/types";

interface INextImage {
  image: StrapiImageType;
  priority?: boolean;
  thumbnail?: boolean;
  about?: boolean;
  className?: string | undefined;
}

const NextImage = ({
  image,
  priority = false,
  thumbnail = false,
  about = false,
  className = undefined,
}: INextImage) => {
  const { alternativeText, width, height, formats } = image.data.attributes;

  return (
    <Image
      layout="intrinsic"
      width={thumbnail ? formats?.medium?.width : width}
      height={thumbnail ? 400 : about ? 1200 : height}
      objectFit="cover"
      src={getMedia(image)}
      loader={() => getLoaderMedia(image)}
      alt={alternativeText || ""}
      className={`${className} rounded-t-lg ${!thumbnail && "lg:!rounded-lg"}`}
      priority={priority}
    />
  );
};

export default NextImage;
