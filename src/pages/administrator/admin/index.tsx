import AuthenticatedLayout from '../../components/authenticated/Authenticated'

export default function DashboardPage() {
  return (
    <div className='text-black justify-center'>
      <div>INI HALAMAN ADMIN YAAAAAAAA</div>
    </div>
  )
}

DashboardPage.getLayout = function GetLayout(page: React.ReactNode) {
  return <AuthenticatedLayout title={'Admin'}>{page}</AuthenticatedLayout>
}
