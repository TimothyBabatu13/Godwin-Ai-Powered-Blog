import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FeaturedPost from "@/components/featured-post"

// Sample blog data - in a real app, this would come from a database or CMS
const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    description: "Learn how to build modern web applications with Next.js",
    date: "April 1, 2025",
    readTime: "5 min read",
    slug: "getting-started-with-nextjs",
    category: "Development",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: "2",
    title: "The Power of AI in Web Development",
    description: "Discover how AI is transforming the way we build websites",
    date: "April 2, 2025",
    readTime: "7 min read",
    slug: "ai-in-web-development",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: "3",
    title: "Responsive Design Best Practices",
    description: "Tips and tricks for creating responsive websites that work on any device",
    date: "April 3, 2025",
    readTime: "6 min read",
    slug: "responsive-design-best-practices",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: "4",
    title: "The Future of Web Animation",
    description: "Exploring the latest trends in web animation and interactive experiences",
    date: "April 4, 2025",
    readTime: "8 min read",
    slug: "future-of-web-animation",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: "5",
    title: "Building Accessible Web Applications",
    description: "How to ensure your web applications are accessible to everyone",
    date: "April 5, 2025",
    readTime: "9 min read",
    slug: "building-accessible-web-applications",
    category: "Development",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: "6",
    title: "Performance Optimization Techniques",
    description: "Strategies to make your websites faster and more efficient",
    date: "April 6, 2025",
    readTime: "7 min read",
    slug: "performance-optimization-techniques",
    category: "Development",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
]

const featuredPost = blogPosts.find((post) => post.featured)
const regularPosts = blogPosts.filter((post) => !post.featured)

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
              Insights & Inspiration
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Exploring the intersection of design, technology, and creativity through thoughtful articles and insights.
            </p>
            <div className="flex items-center justify-center gap-4 place-items-center">
              <Link href={'#featured--post'} 
                className="rounded-full inline-block text-center p-4 bg-gray-900 hover:bg-gray-800 text-white"
              >
                Latest Articles
              </Link>
              <Link href={'#subscription'} className="rounded-full inline-block p-4 bg-gray-900 hover:bg-gray-800 text-white">
                Subscribe
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gray-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-gray-100 rounded-full opacity-70 blur-3xl"></div>
      </section>

      {/* Featured Post */}
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

      {/* Latest Posts */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <div className="h-px bg-gray-200 flex-grow mx-6"></div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              All
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Design
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Development
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="rounded-full text-xs font-medium px-3">
                    {post.category}
                  </Badge>
                  <div className="text-xs text-gray-500">{post.date}</div>
                </div>
                <CardTitle className="text-xl font-bold leading-tight transition-colors group-hover:text-gray-700">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <CardDescription className="text-gray-600 line-clamp-2">{post.description}</CardDescription>
              </CardContent>
              <CardFooter className="pt-0 flex justify-between items-center">
                <div className="text-sm text-gray-500">{post.readTime}</div>
                <Link className="cursor-pointer" href={`/blog/${post.slug}`}>
                  <Button variant="ghost" size="sm" className="group/btn cursor-pointer">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section id="subscription" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest articles and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <Button className="rounded-full bg-gray-900 hover:bg-gray-800">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

