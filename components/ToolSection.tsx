import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface ToolSectionProps {
  id: string
  title: string
  description: string
  icon: string
}

const ToolSection = ({ id, title, description, icon }: ToolSectionProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="pb-0">
        <div className="w-12 h-12 mb-4 rounded-full bg-blue-100 flex items-center justify-center">
          <Image src={icon} alt={title} width={24} height={24} />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full mt-4" variant="outline">Try {title}</Button>
      </CardContent>
    </Card>
  )
}

export default ToolSection

