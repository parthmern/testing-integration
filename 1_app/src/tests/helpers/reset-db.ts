
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// delete my db completely
// clear my db completely
export default async () => {
  await prisma.$transaction([
    prisma.request.deleteMany(),
  ])
}

