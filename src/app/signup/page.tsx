import { SignUpForm } from '@/components/signup'
import { Section } from '@/components/ui/section'

export default function SignUpPage() {
  return (
    <div className='flex flex-col flex-1 w-full mx-auto md:max-w-xl'>
      <Section>
        <SignUpForm />
      </Section>
    </div>
  )
}
