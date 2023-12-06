import { Controller, useForm } from 'react-hook-form'
import ButtonBase from '../components/button/ButtonBase'
import CardBase from '../components/card/Card'
import InputBase from '../components/input/InputBase'
import Paragraf from '../components/typogrphy/Paragraf'
import { LoginPages } from '@/data/interface/login'
import Cookies from 'js-cookie'
import { useMutation } from '@tanstack/react-query'
import { postLoginAdmin } from '@/data/api/admin'
import { encryptedData } from '@/utils/encrypt'

export default function LoginPage() {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<LoginPages>()

  const mutation = useMutation({
    mutationFn: (value: LoginPages) => postLoginAdmin(value),
    onSuccess(data) {},
    onError(error) {}
  })

  const onSubmit = (data: LoginPages) => {
    console.log(data)

    mutation.mutate({
      email: encryptedData(data?.email),
      password: encryptedData(data?.password)
    })
  }
  // Cookies.set('token', data.data.token, {
  // 	secure: true,
  // });
  // Cookies.set('divisi', data.data.divisi, {
  // 	secure: true,
  // });
  // setTimeout(() => {
  // 	router.replace('/');
  // }, 500);

  return (
    <>
      <main className='text-black flex w-full justify-center mt-32'>
        <div className='mt-8 flex flex-col'>
          <Paragraf variant='h1' className='text-center'>
            Selamat Datang
          </Paragraf>
          <CardBase className='mt-7 px-12'>
            <div className='flex flex-col p-6'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-2'>
                  <Controller
                    control={control}
                    name='email'
                    render={({
                      field: { onChange, value },
                      fieldState: { error }
                    }) => {
                      return (
                        <InputBase
                          label='Email'
                          variant='primary'
                          error={errors.email !== undefined}
                          errorMessage={errors.email?.message}
                          onChange={onChange}
                        />
                      )
                    }}
                    rules={{
                      required: 'Email Harus Diisi',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Invalid Email'
                      }
                    }}
                  />
                  <Controller
                    control={control}
                    name='password'
                    render={({
                      field: { onChange, value },
                      fieldState: { error }
                    }) => {
                      return (
                        <InputBase
                          label='Password'
                          variant='primary'
                          type='password'
                          error={errors.password !== undefined}
                          errorMessage={errors.password?.message}
                          onChange={onChange}
                        />
                      )
                    }}
                    rules={{
                      required: 'Password Harus Diisi'
                    }}
                  />
                </div>
                <div className='text-center mt-7'>
                  <ButtonBase
                    type='submit'
                    className='px-44 mt-3'
                    variant='filled'>
                    Login
                  </ButtonBase>
                </div>
              </form>
            </div>
          </CardBase>
        </div>
      </main>
    </>
  )
}
