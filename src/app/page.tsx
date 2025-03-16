import TaskCard from '@/components/TaskCard'
import { prisma } from '@/lib/prisma'

async function HomePage() {
  const tasks = await prisma.task.findMany()
  console.log(tasks)
  return (
    <div className='grid grid-cols-3 gap-4'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default HomePage
