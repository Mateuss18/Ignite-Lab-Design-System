import './styles/global.css';
import { Logo } from './Logo'
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100 sm:p-2'>
      <header className='flex flex-col items-center'>
        <Logo className='sm:h-20 lg:h-28 h-30' />
        
        <Heading size="lg" className='mt-4 sm:mt-1 sm:text-lg lg:mt-2 '>
          O.F.O.s
        </Heading>
        <Text size="lg" className='text-gray-400 mt-1 sm:text-md sm:mt-0'>
          Eles estão por toda parte..
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10 sm:mt-4 lg:mt-7">
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type="email" id="email" placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </label>

          <label htmlFor="password" className='flex flex-col gap-3'>
            <Text className='font-semibold'>Sua senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>

              <TextInput.Input type="password" id="email" placeholder='*********' />
            </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size="sm" className='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4 lg:mt-2">
          Entrar na comunidade
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8 lg:mt-6'>
        <Text asChild size='sm'>
          <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="" className="text-gray-400 underline hover:text-gray-200 pb-5">Não possui uma? Crie agora mesmo</a>
        </Text>
      </footer>
    </div>
  )
}