export class Quotes {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public blogger:string,
        public datePosted: Date,
        public upvote: number,
        public downvote: number,
    ){}
    
}
