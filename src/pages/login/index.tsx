import { useForm } from 'react-hook-form'
import ButtonBase from '../components/button/ButtonBase'
import CardBase from '../components/card/Card'
import InputBase from '../components/input/InputBase'
import Paragraf from '../components/typogrphy/Paragraf'
import { LoginData, LoginPages } from '@/data/interface/login'
import { ResponseData } from '../../data/interface'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { postLoginAdmin } from '@/data/api/admin'
import { encryptedData } from '@/utils/encrypt'
import { useRouter } from 'next/router'
import { ToastError, ToastSuccess } from '@/data/atom/toast/Toast'

const LoginPage = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginPages>()

  const { mutate: loginMutate, isLoading } = useMutation(
    (value: LoginPages) => postLoginAdmin(value),

    {
      onSuccess(data: ResponseData<LoginData>) {
        Cookies.set('token', data.data.admin_token, {
          secure: true
        })
        Cookies.set('divisi', data.data.divisi, {
          secure: true
        })
        ToastSuccess(data.message)
        router.replace('/')
      },
      onError(error: any) {
        ToastError(error.message)
      }
    }
  )
  const onSubmit = (data: LoginPages) => {
    loginMutate({
      email: encryptedData(data?.email),
      password: encryptedData(data?.password)
    })
  }

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
                  <InputBase
                    label='Email'
                    variant='primary'
                    register={register('email', {
                      required: 'Email Wajib Diisi',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Invalid Email'
                      }
                    })}
                    error={errors.email !== undefined}
                    errorMessage={errors.email?.message}
                  />
                  <InputBase
                    label='Password'
                    variant='primary'
                    type='password'
                    register={register('password', {
                      required: 'Password Harus Diisi'
                    })}
                    error={errors.password !== undefined}
                    errorMessage={errors.password?.message}
                  />
                </div>
                <div className='text-center mt-3'>
                  <ButtonBase
                    type='submit'
                    className='px-44 mt-3'
                    variant='filled'
                    isLoading={isLoading}>
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

export default LoginPage
