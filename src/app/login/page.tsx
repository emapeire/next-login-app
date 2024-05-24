import { LoginForm } from '@/components/login'
import { Section } from '@/components/ui/section'

export default function LoginPage() {
  return (
    <div className='flex flex-col flex-1 w-full mx-auto md:max-w-xl'>
      <Section>
        <LoginForm />
      </Section>
    </div>
  )
}
