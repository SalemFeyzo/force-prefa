// Force Prefabrik
// https://instantdb.com/dash?s=main&t=home&app=5262239d-8113-4701-9320-3b7fb5e40042

import { i } from "@instantdb/react";

const INSTANT_APP_ID = "5262239d-8113-4701-9320-3b7fb5e40042";

// Example entities and links (you can delete these!)
const graph = i.graph(
  INSTANT_APP_ID,
  {
    todos: i.entity({
      text: i.string(),
      done: i.boolean(),
      createdAt: i.number(),
    }),
    posts: i.entity({
      name: i.string(),
      content: i.string(),
    }),
    authors: i.entity({
      userId: i.string(),
      username: i.string().unique(),
    }),
    tags: i.entity({
      label: i.string(),
    }),
  },
  {
    authorTodos: {
      forward: {
        on: "authors",
        has: "many",
        label: "todos",
      },
      reverse: {
        on: "todos",
        has: "one",
        label: "author",
      },
    },
    authorPosts: {
      forward: {
        on: "authors",
        has: "many",
        label: "posts",
      },
      reverse: {
        on: "posts",
        has: "one",
        label: "author",
      },
    },
    postsTags: {
      forward: {
        on: "posts",
        has: "many",
        label: "tags",
      },
      reverse: {
        on: "tags",
        has: "many",
        label: "posts",
      },
    },
  },
);

export default graph;
