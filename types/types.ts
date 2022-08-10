export type HeroType = {
  attributes: {
    blurb: string;
  };
};

export type AboutType = {
  attributes: {
    blurb: string;
  };
};

export type TechStackType = string[];

export type Work = {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    headline: string;
    description: string;
    approach: string;
    problemSolved?: string;
    techStack: TechStackType;
    thumbnail: StrapiImageType;
    coverImage: StrapiImageType;
    image1?: StrapiImageType;
    image2?: StrapiImageType;
    image3?: StrapiImageType;
  };
};

export type WorksType = Work[];

export type StrapiImageFormatType = {
  width: number;
  height: number;
  url: string;
};

export type StrapiImageType = {
  data: {
    attributes: {
      alternativeText: string;
      caption: string;
      url: string;
      width: number;
      height: number;
      formats: {
        thumbnail: StrapiImageFormatType;
        large: StrapiImageFormatType;
        medium: StrapiImageFormatType;
        small: StrapiImageFormatType;
      };
    };
  };
};
