export interface IPost {
  post: IPosts;
  size: string;
}

export interface IPosts {
  id: number;
  image?: string;
  description: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
  size: string;
}
