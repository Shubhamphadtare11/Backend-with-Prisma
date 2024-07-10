import prisma from '../db';

export const getAllCategories = async () => {
  const categories = await prisma.category.findMany();
  return categories;
};

export const getCategoriesByPage = async (page: number, pageSize: number) => {
  const skip = (page - 1) * pageSize;
  const categories = await prisma.category.findMany({
    skip,
    take: pageSize,
  });
  return categories;
};
