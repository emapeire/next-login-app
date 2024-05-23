import Link from 'next/link'
import { Button } from './ui/button'

export function Hero() {
  return (
    <>
      <h1 className='font-mono text-4xl h-20 font-bold animate-pulse'>
        Hello, world!
      </h1>

      <div className='flex gap-x-4'>
        <Button asChild>
          <Link href='/login'>Login</Link>
        </Button>
        <Button asChild>
          <Link href='/signup'>Register</Link>
        </Button>
      </div>
    </>
  )
}
