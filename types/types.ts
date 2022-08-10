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
  };
};

export type WorksType = Work[];
