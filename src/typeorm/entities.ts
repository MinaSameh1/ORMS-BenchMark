import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.Posts)
  @JoinColumn()
  Author: User;

  @OneToMany(() => Comment, (comment) => comment.Post)
  @JoinColumn()
  Comments: Comment[];

  @ManyToMany(() => Like, (like) => like.Post)
  @JoinColumn()
  Likes: Like[];
}

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.Comments)
  @JoinColumn()
  Author: User;

  @ManyToOne(() => Post, (post) => post.Comments)
  @JoinColumn()
  Post: Post;

  @ManyToMany(() => Like, (like) => like.Comment)
  @JoinColumn()
  Likes: Like[];
}

@Entity()
export class Like extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.Likes)
  @JoinColumn()
  Author: User;

  @ManyToMany(() => Post, (post) => post.Likes)
  @JoinColumn()
  Post: Post;

  @ManyToMany(() => Comment, (comment) => comment.Post)
  @JoinColumn()
  Comment: Comment;
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Post, (post) => post.Author)
  @JoinColumn()
  Posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.Author)
  @JoinColumn()
  Comments: Comment[];

  @OneToMany(() => Like, (like) => like.Author)
  @JoinColumn()
  Likes: Like[];
}
