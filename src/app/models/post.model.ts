<<<<<<< HEAD
export interface Post  {
    title: string;
    author: string;
    image: string;
    content: string;
=======
export interface PostIf {
    title: string;
    author: string;
    content: string;
    img: string;
}

export class Post implements PostIf {
    constructor (
        public title: string,
        public author: string,
        public content: string,
        public img: string
    ) { }
>>>>>>> 5a4871dfd55a0159d80342120c1b0ae552fe76fa
}
