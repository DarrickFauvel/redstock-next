"use server"
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()

export const getAllUsers = async () => {
  const allUsers = await prisma.user.findMany()
  return allUsers
}

export const createUser = async (data: {
  email: string
  name: string
  avatar: string
  role: string
}) => {
  await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      profile: {
        create: {
          avatar: data.avatar,
          role: data.role,
        },
      },
    },
  })
  revalidatePath("/")
}
