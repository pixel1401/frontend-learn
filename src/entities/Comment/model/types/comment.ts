import { User } from 'entities/User';

export interface Comment {
    id: string,
    user: User
    text: string,
}

export interface CommentSchema {
    isLoading : boolean,
    error?: string,
    data?: Comment[]
}
