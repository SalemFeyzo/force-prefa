/* eslint-disable import/no-anonymous-default-export */
export default {
  authors: {
    bind: ["isAuthor", "auth.id == data.userId"],
    allow: {
      view: "true",
      create: "isAuthor",
      update: "isAuthor",
      delete: "isAuthor",
    },
  },
  todos: {
    bind: ["isAuthor", "auth.id in data.ref('author.userId')"],
    allow: {
      view: "isAuthor",
      create: "isAuthor",
      update: "isAuthor",
      delete: "isAuthor",
    },
  },
  products: {
    bind: ["isAuthor", "auth.id in data.ref('author.userId')"],
    allow: {
      view: "true",
      create: "isAuthor",
      update: "isAuthor",
      delete: "isAuthor",
    },
  },
  tags: {
    bind: ["isOwner", "auth.id in data.ref('products.author.userId')"],
    allow: {
      view: "true",
      create: "isOwner",
      update: "isOwner",
      delete: "isOwner",
    },
  },
  images: {
    bind: ["isOwner", "auth.id in data.ref('products.author.userId')"],
    allow: {
      view: "true",
      create: "isOwner",
      update: "isOwner",
      delete: "isOwner",
    },
  },
  $files: {
    bind: ["isAuthor", "auth.id in data.ref('author.userId')"],
    allow: {
      view: "isAuthor",
      create: "isAuthor",
      update: "isAuthor",
      delete: "isAuthor",
    },
  },
};
