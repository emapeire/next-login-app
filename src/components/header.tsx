import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <div className='fixed top-6 right-6 z-10'>
      <ModeToggle />
    </div>
  )
}
