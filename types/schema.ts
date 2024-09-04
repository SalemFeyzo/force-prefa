import type { InstantObject } from "@instantdb/core";
// import type { UUID } from "crypto";

export interface Todo extends InstantObject {
    text: string;
    done: boolean;
    createdAt: number;
}
export interface Author extends InstantObject {
    userId: string;
    username: string;
}

export interface Post extends InstantObject {
    name: string;
    content: string;
}
export interface Tag extends InstantObject {
    label: string;
}
export default interface Schema {
    authors: Author[];
    todo: Todo[];
    posts: Post[];
    tags: Tag[];
}
