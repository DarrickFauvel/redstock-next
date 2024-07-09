"use server"
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()

type RoleEnum = "User" | "Admin" | "Demo"

export const getAllUsers = async () => {
  const allUsers = await prisma.user.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      profile: true,
    },
  })
  return allUsers
}

export const getSingleUser = async (id: number) => {
  const singleUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      profile: true,
    },
  })
  return singleUser
}

export const createUser = async (data: {
  email: string
  name: string
  avatar: string
  role: RoleEnum
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

export const updateUser = async (data: {
  id: number
  email: string
  name: string
  avatar: string
  role: RoleEnum
}) => {
  await prisma.user.update({
    where: {
      id: data.id,
    },
    data: {
      email: data.email,
      name: data.name,
      profile: {
        update: {
          avatar: data.avatar,
          role: data.role,
        },
      },
    },
  })
  revalidatePath("/")
}
