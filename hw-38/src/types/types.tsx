export interface IPost {
    post: IPosts;
  }
  
export interface IPosts {
    id: number;
    image?: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    author: number;
}

