import { Prisma } from '@prisma/client';

export type Category = Prisma.CategoryCreateInput;

export type CategoryWithUsers = Prisma.CategoryInclude & {
  users: Prisma.UserUncheckedCreateNestedManyWithoutInterestsInput;
};
