import { LoginForm } from '@/components/login'
import { Section } from '@/components/ui/section'

export default function LoginPage() {
  return (
    <div className='flex flex-col flex-1'>
      <Section>
        <LoginForm />
      </Section>
    </div>
  )
}
