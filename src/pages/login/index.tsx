import { useForm } from 'react-hook-form'
import ButtonBase from '../components/button/ButtonBase'
import CardBase from '../components/card/Card'
import InputBase from '../components/input/InputBase'
import Paragraf from '../components/typogrphy/Paragraf'
import { LoginPage } from '@/data/interface/login'

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    control,
    resetField,
    formState: { errors }
  } = useForm<LoginPage>()

  return (
    <>
      <main className='text-black flex w-full justify-center mt-32'>
        <div className='mt-8 flex flex-col'>
          <Paragraf variant='h1' className='text-center'>
            Selamat Datang
          </Paragraf>
          <CardBase className='mt-7 px-12'>
            <div className='flex flex-col p-6'>
              <div className='mt-2'>
                <InputBase variant='primary' label='Email' />
                <InputBase variant='primary' label='Password' type='password' />
              </div>
              <div className='text-center mt-7'>
                <ButtonBase className='px-44' variant='filled'>
                  Login
                </ButtonBase>
              </div>
            </div>
          </CardBase>
        </div>
      </main>
    </>
  )
}
