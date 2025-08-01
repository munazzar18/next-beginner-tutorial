
import {Card, CardContent, CardHeader} from "@/components/ui/card"

interface BlogCardProps {
    image: string, 
    title: string,
    description: string, 
    category: string
}

export function BlogCard({image , title, description, category} : BlogCardProps){
    return (
        <Card className="hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden bg-white dark:bg-zind-900 border border-zinc-200 dark:border-zinc-800">
            <div className="h-48 w-full overflow-hidden">
        <img 
        src={image}
        alt={title}
        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
            </div>
            <CardHeader>
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-full w-fit">
                    {category}
                </span>
            </CardHeader>
            <CardContent className="space-y-2">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-white line-clamp-2">
            {title}
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
            {description}
        </p>
            </CardContent>
            </Card>
    )
}