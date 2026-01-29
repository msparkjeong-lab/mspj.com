
export interface SiteSettings {
  academyName: string;
  slogan: string;
  subSlogan: string;
  heroImage: string;
  pointColor: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  kakaoLink: string;
  instaLink: string;
  youtubeLink: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'Announcement' | 'EnglishTips';
  thumbnail?: string;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  bio: string;
  imageUrl: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  target: string;
  icon: string;
}

export interface SiteData {
  settings: SiteSettings;
  posts: Post[];
  teachers: Teacher[];
  courses: Course[];
}
