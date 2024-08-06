import books from './books.json'
import projects from './projects.json';

export type Project = typeof projects['digital'][number];
export type Book = typeof books[number];