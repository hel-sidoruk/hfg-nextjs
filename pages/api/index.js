import prisma from '../../lib/prisma'
prisma.trainers.findMany().then(res => console.log(res))
