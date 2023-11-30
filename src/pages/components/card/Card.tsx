import { Card } from '@material-tailwind/react'
interface PropsCardBase {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}
export default function CardBase({
  children,
  className,
  onClick
}: PropsCardBase) {
  return (
    <Card onClick={onClick} className={`shadow-card ${className}`}>
      {children}
    </Card>
  )
}
