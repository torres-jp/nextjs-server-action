import { TaskForm } from '@/app/new/task-form'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

async function TaskPageEdit({ params }: { params: { id: string } }) {
  const task = await prisma.task.findFirst({
    where: {
      id: parseInt(params.id),
    },
  })

  if (!task) {
    redirect('/')
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <TaskForm task={task} />
    </div>
  )
}

export default TaskPageEdit
