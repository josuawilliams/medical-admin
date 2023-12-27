import toast from 'react-hot-toast'

export const ToastSuccess = (message: string) => {
  toast(message, {
    duration: 3000,
    position: 'top-right',
    style: {
      backgroundColor: '#b2ffb2'
    },
    icon: '✅'
  })
}

export const ToastError = (message: string) => {
  toast(message, {
    duration: 3000,
    position: 'top-right',
    style: {
      backgroundColor: '#ff9999'
    },
    icon: '❌'
  })
}
