import { Prisma } from '@prisma/client';

export interface UserCreateInput {
  username: string;
  passwordHash: string;
}

export type User = Prisma.UserCreateInput;

export type UserWithInterests = Prisma.UserInclude & {
  interests: Prisma.CategoryUncheckedCreateNestedManyWithoutUsersInput;
};
