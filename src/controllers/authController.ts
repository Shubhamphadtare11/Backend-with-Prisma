import prisma from '../db';

export const createUser = async (username: string, passwordHash: string) => {
  const user = await prisma.user.create({
    data: {
      username,
      passwordHash,
    },
  });
  return user;
};

export const findUserByUsername = async (username: string) => {
  const user = await prisma.user.findUnique({
    where: { username },
    include: { interests: true },
  });
  return user;
};
