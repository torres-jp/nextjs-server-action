import Link from 'next/link'
import { ModeToggle } from './theme-dark'
import { buttonVariants } from './ui/button'

function Navbar() {
  return (
    <nav className='flex justify-between py-5'>
      <h1 className='font-bold text-3xl text-gray-800 dark:text-gray-100'>
        NEXT-ACTIONS
      </h1>
      <div className='flex gap-x-2 items-center mt-2'>
        <Link href='/new' className={buttonVariants({ variant: 'secondary' })}>
          Create Task
        </Link>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar
