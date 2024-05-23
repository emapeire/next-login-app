import { SignUpForm } from '@/components/signup'
import { Section } from '@/components/ui/section'

export default function SignUpPage() {
  return (
    <div className='flex flex-col flex-1'>
      <Section>
        <SignUpForm />
      </Section>
    </div>
  )
}
