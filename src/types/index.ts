
export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
