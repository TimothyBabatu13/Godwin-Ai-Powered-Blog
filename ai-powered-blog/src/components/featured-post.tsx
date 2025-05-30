import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/blog-data"

interface Post {
  id: string
  title: string
  description: string
  date: string
  readTime: string
  slug: string
  category: string
  image: string
  featured?: boolean
}

export default function FeaturedPost({ post }: { post: Post }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-xl">
      <div className="relative aspect-video md:aspect-auto md:h-full overflow-hidden">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
        <Badge className="absolute top-4 left-4 bg-white text-gray-900 hover:bg-gray-100">{post.category}</Badge>
      </div>
      <div className="p-8">
        <div className="text-sm text-gray-500 mb-2">
          {post.date} • {post.readTime}
        </div>
        <h3 className="text-3xl font-bold mb-4 leading-tight">{post.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{post.description}</p>
        <Link className="cursor-pointer" href={`/blog/${post.slug}`}>
          <Button className="group cursor-pointer rounded-full bg-gray-900 hover:bg-gray-800">
            Read Article
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export const FeaturedPosts = () => {
  const featuredPost = blogPosts.find((post) => post.featured)
  return (
    <>
      {featuredPost && (
      <section id="featured--post" className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Featured Post</h2>
          <div className="h-px bg-gray-200 flex-grow mx-6"></div>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
            View All
          </Link>
        </div>
        <FeaturedPost post={featuredPost} />
      </section>
  )}
    </>
  )
}