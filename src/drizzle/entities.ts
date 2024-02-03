import { relations } from "drizzle-orm";
import {
  date,
  foreignKey,
  index,
  integer,
  pgTable,
  serial,
  text,
} from "drizzle-orm/pg-core";

export const Posts = pgTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    title: text("title"),
    content: text("content"),
    authorId: integer("author_id"),
    createdAt: date("created_at").defaultNow(),
    updatedAt: date("updated_at").defaultNow(),
  },
  (table) => ({
    Authors: foreignKey({
      columns: [table.authorId],
      foreignColumns: [table.id],
    }),
    AuthorsIdx: index("author_id").on(table.authorId),
  }),
);

export const Comments = pgTable(
  "comments",
  {
    id: serial("id").primaryKey(),
    postId: integer("post_id"),
    content: text("content"),
    createdAt: date("created_at").defaultNow(),
    updatedAt: date("updated_at").defaultNow(),
  },
  (table) => ({
    Posts: foreignKey({
      columns: [table.postId],
      foreignColumns: [table.id],
    }),
    PostsIdx: index("post_id").on(table.postId),
  }),
);

export const Likes = pgTable(
  "like",
  {
    id: serial("id").primaryKey(),
    authorId: integer("author_id"),
    postId: integer("post_id"),
    commentId: integer("comment_id"),
    createdAt: date("created_at").defaultNow(),
    updatedAt: date("updated_at").defaultNow(),
  },
  (table) => ({
    Posts: foreignKey({
      columns: [table.postId],
      foreignColumns: [table.id],
    }),
    PostsIdx: index("post_id").on(table.postId),
    Comments: foreignKey({
      columns: [table.commentId],
      foreignColumns: [table.id],
    }),
    CommentsIdx: index("comment_id").on(table.commentId),
    Users: foreignKey({
      columns: [table.authorId],
      foreignColumns: [table.id],
    }),
    UsersIdx: index("user_id").on(table.authorId),
  }),
);

export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  createdAt: date("created_at").defaultNow(),
  updatedAt: date("updated_at").defaultNow(),
});

export const UsersRelations = relations(Users, ({ many }) => ({
  posts: many(Posts, { relationName: "authorId" }),
  likes: many(Likes, { relationName: "authorId" }),
}));
