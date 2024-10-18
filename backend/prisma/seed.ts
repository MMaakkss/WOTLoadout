import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Delete all data before seeding (It is not required, but useful for reruns)
  await prisma.tankBuild.deleteMany()
  await prisma.user.deleteMany()

  const user1 = await prisma.user.create({
    data: {
      nickname: 'TankMaster',
      email: 'tankmaster@example.com',
      hashedPassword: 'hashedpassword123',
      role: 'USER',
      tankBuilds: {
        create: [
          {
            title: 'Heavy Armor Build',
          },
        ],
      },
    },
  })

  const user2 = await prisma.user.create({
    data: {
      nickname: 'AdminPro',
      email: 'adminpro@example.com',
      hashedPassword: 'adminhashedpassword123',
      role: 'ADMIN',
      tankBuilds: {
        create: [
          {
            title: 'Speed Build',
          },
        ],
      },
    },
  })

  console.log({ user1, user2 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
