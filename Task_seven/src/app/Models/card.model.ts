import { Comment as CommentModel } from './comment.model';

export interface Card{
    title: string;
    body: string;
    image: string;
    type: string;
    comments: CommentModel[];
    likes: number;
    id:number;
    userId:number;
}