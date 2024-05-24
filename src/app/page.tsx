import { Section } from '@/components/ui/section'
import { Hero } from '@/components/hero'

export default function Home() {
  return (
    <div className='flex flex-col flex-1 w-full mx-auto md:max-w-xl'>
      <Section>
        <Hero />
      </Section>
    </div>
  )
}
