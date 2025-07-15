import { Injectable } from '@angular/core';
import { Post } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

   posts: Post[] = [
      {
        id: 'viwnxn1',
        title: 'Welcome to our blog!',
        description: 'Explore our latest posts and updates. Discover new insights and ideas over many topics.',
        content: 'This is a sample post content. Here you can write about various topics, share your thoughts, and engage with your audience.',
        author: 'Clairedebs',
        createdAt:  new Date(Date.now() - 86400000),
        slug:'welcome-to-our-blog',
        tags: ['welcome', 'blog', 'introduction'],
        like: 95,
        status: 'draft'
      },
      {
        id: 'viwnxn2',
        title: 'Understanding Angular Components',
        description: 'A deep dive into Angular components and how they work together to build dynamic applications.',
        content: '',
        author: 'John Doe',
        createdAt:  new Date(Date.now() - 86400000),
        slug:'welcome-to-our-blog',
        tags: ['angular', 'components', 'development'],
        like: 95,
        status: 'published'
      },
      {
        id: 'viwnxn3',
        title: 'First step in HTML',
        description: 'Walk in the world of HTML and learn the basics of web development.',
        content: '',
        author: 'Jean Dupont',
        createdAt:  new Date(Date.now() - 86400000),
        slug:'welcome-to-our-blog',
        tags: ['HTML', 'web development', 'basics'],
        like: 95,
        status: 'published'
      },
      {
        id: 'viwnxn4',
        title: 'Learn POO basics',
        description: 'Discover the principles of Object-Oriented Programming and how to apply them in your projects.',
        content: '',
        author: 'Jean Dupont',
        createdAt:  new Date(Date.now() - 86400000),
        slug:'welcome-to-our-blog',
        tags: ['POO', 'programming', 'basics'],
        like: 95,
        status: 'published'
      }
    ]

  getBlog(): Post[]{
    return this.posts;
  }
}
