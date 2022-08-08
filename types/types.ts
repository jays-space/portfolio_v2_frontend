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
  attributes: {
    title: string;
    description: string;
    approach: string;
    techStack: TechStackType;
  };
};

export type WorksType = Work[];
