export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  link?: string;
  pdfLink?: string;
  thumbnail: string;
}

export interface ResearchProject {
  title:string;
  description: string;
  image: string;
}

export interface NewsItem {
    date: string;
    content: string;
}

export interface EducationItem {
    degree: string;
    institution: string;
}

export interface Profile {
    name: string;
    title: string;
    affiliation: string;
    bio: string;
    longBio: string;
    profilePicture: string;
    email: string;
    cvLink: string;
    interests: string[];
    education: EducationItem[];
    links: {
        googleScholar: string;
        linkedIn: string;
        twitter: string;
    }
}