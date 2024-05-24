import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <div className='absolute top-8 right-8 z-10'>
      <ModeToggle />
    </div>
  )
}
