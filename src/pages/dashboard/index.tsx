import AuthenticatedLayout from '../components/authenticated/Authenticated'

export default function DashboardPage() {
  return (
    <div className='text-black justify-center'>
      <div>INI DASHBOARD YAAAAAAAA</div>
    </div>
  )
}

DashboardPage.getLayout = function GetLayout(page: React.ReactNode) {
  return <AuthenticatedLayout>{page}</AuthenticatedLayout>
}

