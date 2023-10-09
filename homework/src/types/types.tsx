import { ReactNode } from "react";

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
  isFavorite?: boolean;
  likes: number;
}

export interface IUser {
  username: string;
  email: string;
  password: string;
}

export interface IAddPost {
  image: any;
  text: string;
  lesson_num: number;
  title: string;
  description: string;
}

export interface IMenu {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export interface IInput {
  label: string;
  placeholder: string;
  type: "password" | "text" | "file" | "number";
  accept?: string;
  value: string;
  onChange: (value: string) => void;
}

export interface IPageTemplate {
  title: string;
  children: ReactNode;
}

export interface ITab {
  children: ReactNode;
  isActive?: boolean;
}