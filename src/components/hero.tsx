import Link from 'next/link'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'

export function Hero() {
  return (
    <Card className='shadow'>
      <CardHeader className='mb-16'>
        <CardTitle className='font-mono md:text-9xl text-7xl font-bold animate-pulse'>
          Hello,
          <br />
          world!
        </CardTitle>
        <CardDescription className='md:text-2xl text-xl text-pretty'>
          Welcome to the next generation of web development
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className='flex flex-col gap-4'>
          <Button asChild>
            <Link href='/login'>Login</Link>
          </Button>
          <Button asChild variant='outline'>
            <Link href='/signup'>Register</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
