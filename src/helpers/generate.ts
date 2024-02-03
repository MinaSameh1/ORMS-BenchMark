import { faker } from "@faker-js/faker";

export function generatePost(overrides?: any) {
  return {
    // id: faker.number.int(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    authorId: faker.number.int(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    ...overrides,
  };
}

export function generateComment(overrides?: any) {
  return {
    // id: faker.number.int(),
    postId: faker.number.int(),
    content: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    ...overrides,
  };
}

export function generateLike(overrides?: any) {
  return {
    // id: faker.number.int(),
    authorId: faker.number.int(),
    postId: faker.number.int(),
    commentId: faker.number.int(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    ...overrides,
  };
}
