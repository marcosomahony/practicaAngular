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
}
