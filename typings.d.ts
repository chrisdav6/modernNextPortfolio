interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: string;
  name: string;
  phoneNumber: string;
  profilePic: string;
}

interface Technology extends SanityBody {
  _type: 'skill';
  image: Image;
  progress: number;
  title: string;
}

interface Skill extends SanityBody {
  _type: 'skill';
  image: Image;
  progress: number;
  title: string;
}

interface Project extends SanityBody {
  _type: 'project';
  title: string;
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

interface Experience extends SanityBody {
  _type: 'experience';
  company: string;
  companyImage: Image;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}
