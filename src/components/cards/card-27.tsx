import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Placeholder = {
  title: <div className="bg-foreground h-6 max-w-20 w-full rounded-md" />,
  content: <div className="bg-foreground h-20 w-full rounded-md" />,
}

export const Card_27 = () => {
  return (
    <div className="border-4 rounded-xl dark:border-card border-muted p-[3px]">
      <Card className="rounded-md bg-muted dark:bg-card shadow-none">
        <CardHeader>
          <CardTitle>{Placeholder.title}</CardTitle>
        </CardHeader>
        <CardContent>{Placeholder.content}</CardContent>
      </Card>
    </div>
  )
}
