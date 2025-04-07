import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Post {
  id: string
  title: string
  description: string
  date: string
  readTime: string
  slug: string
  category: string
  image: string
}

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="group">
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
            <div className="aspect-video overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <Badge variant="outline" className="self-start mb-2 rounded-full">
                {post.category}
              </Badge>
              <h3 className="font-bold text-lg mb-2 group-hover:text-gray-700 transition-colors">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{post.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xs text-gray-500">{post.readTime}</span>
                <span className="text-sm font-medium flex items-center text-gray-900 group-hover:translate-x-1 transition-transform">
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

