export interface Post {
    id: string;
    title: string;
    content: string;
    author: string;
    tags?: string[];
    imageUrl?: string; 
    comments?: Comment[];
    createdAt: Date;
    description:string;
    slug: string;
    like: number;
}

export interface Comment {
    id: string;
    postId: number;
    author: User;
    content: string;
    date: string;
    createdAt: Date;
}

export interface Tags{
    id: string;
    name: string;
}

export interface User {
    id: string;
    username: string;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'user';
    joinedAt: Date;
}