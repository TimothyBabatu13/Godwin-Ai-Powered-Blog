import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import RelatedPosts from "@/components/related-posts"
// import AIChatComponent from "@/components/ai-chat-component"


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
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Next.js is a powerful React framework that makes building web applications easier and more efficient. It provides a great developer experience with features like server-side rendering, static site generation, and more.</p>
      
      <h2>Why Next.js?</h2>
      <p>Next.js solves many common problems in React development:</p>
      <ul>
        <li>Server-side rendering for better SEO and performance</li>
        <li>Automatic code splitting for faster page loads</li>
        <li>Simple client-side routing</li>
        <li>API routes for backend functionality</li>
        <li>Built-in CSS and Sass support</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js app, run the following command:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This will set up a new Next.js project with all the necessary configurations. Once the installation is complete, you can start the development server:</p>
      <pre><code>cd my-app
npm run dev</code></pre>
      
      <h2>Pages and Routing</h2>
      <p>Next.js uses a file-based routing system. Files in the pages directory automatically become routes. For example:</p>
      <ul>
        <li>pages/index.js → /</li>
        <li>pages/about.js → /about</li>
        <li>pages/blog/[slug].js → /blog/:slug</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Next.js is an excellent choice for building modern web applications. It provides a great developer experience while ensuring your applications are performant and SEO-friendly.</p>
    `,
    author: {
      name: "Alex Johnson",
      role: "Senior Developer",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    tags: ["Next.js", "React", "JavaScript", "Web Development"],
  },
  {
    id: "2",
    title: "The Power of AI in Web Development",
    description: "Discover how AI is transforming the way we build websites",
    date: "April 2, 2025",
    readTime: "7 min read",
    slug: "ai-in-web-development",
    category: "Technology",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Artificial Intelligence (AI) is revolutionizing the way we build and interact with websites. From automated design to personalized user experiences, AI is changing what's possible in web development.</p>
      
      <h2>AI-Powered Design</h2>
      <p>AI tools can now generate website layouts, color schemes, and even entire designs based on simple prompts. This is making design more accessible and efficient.</p>
      
      <h2>Personalization</h2>
      <p>AI algorithms can analyze user behavior and preferences to create personalized experiences. This includes content recommendations, custom layouts, and targeted messaging.</p>
      
      <h2>Chatbots and Virtual Assistants</h2>
      <p>AI-powered chatbots can provide instant customer support, answer questions, and guide users through your website. They're becoming increasingly sophisticated and can handle complex interactions.</p>
      
      <h2>Accessibility</h2>
      <p>AI tools can help identify and fix accessibility issues, making websites more inclusive for all users. This includes automatic alt text generation, color contrast checking, and more.</p>
      
      <h2>The Future</h2>
      <p>As AI continues to evolve, we can expect even more innovative applications in web development. From voice interfaces to predictive analytics, the possibilities are endless.</p>
    `,
    author: {
      name: "Samantha Lee",
      role: "AI Specialist",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    tags: ["AI", "Machine Learning", "Web Development", "Future Tech"],
  },
  {
    id: "3",
    title: "Responsive Design Best Practices",
    description: "Tips and tricks for creating responsive websites that work on any device",
    date: "April 3, 2025",
    readTime: "6 min read",
    slug: "responsive-design-best-practices",
    category: "Design",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Responsive design is essential in today's multi-device world. Here are some best practices to ensure your websites look great and function well on any screen size.</p>
      
      <h2>Mobile-First Approach</h2>
      <p>Start designing for mobile devices first, then progressively enhance the experience for larger screens. This ensures a solid foundation and prevents overcomplicated designs.</p>
      
      <h2>Flexible Grids</h2>
      <p>Use relative units like percentages instead of fixed pixels for layout elements. This allows your design to adapt to different screen sizes.</p>
      
      <h2>Media Queries</h2>
      <p>Use CSS media queries to apply different styles based on device characteristics like screen width, height, and orientation.</p>
      
      <h2>Responsive Images</h2>
      <p>Optimize images for different screen sizes to improve loading times and visual quality. Use the srcset attribute and picture element for more control.</p>
      
      <h2>Touch-Friendly Interfaces</h2>
      <p>Design with touch in mind. Use appropriately sized touch targets (at least 44x44 pixels) and consider touch gestures in your interaction design.</p>
      
      <h2>Testing</h2>
      <p>Test your designs on actual devices whenever possible. Emulators and responsive design tools are helpful, but nothing beats seeing how your site performs on real hardware.</p>
    `,
    author: {
      name: "Michael Chen",
      role: "UX Designer",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    tags: ["Responsive Design", "CSS", "Mobile", "UX Design"],
  },
]

export default async function BlogPost({ params }: { params: {
  slug: string
} }) {

  const param =  params
  const slug =  param.slug;

  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  // Find related posts (same category or shared tags)
  const relatedPosts = blogPosts
    .filter(
      (p) => p.id !== post.id && (p.category === post.category || p.tags?.some((tag) => post.tags?.includes(tag))),
    )
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <Link href="/">
            <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to all posts
            </Button>
          </Link>

          
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4" variant="outline">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center">
                <img
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-gray-500">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>

              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 -mt-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end mb-6 space-x-2">
            <Button variant="outline" size="sm" className="rounded-full">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>

          <article>
            <div
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-gray-900 prose-a:font-medium"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <div className="mt-8 pt-6 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Have questions about this article?</h2>
            <p className="text-gray-600 mb-6">
              Chat with our AI assistant to learn more about {post.title} or ask any related questions.
            </p>
            {/* <AIChatComponent postTitle={post.title} postContent={post.content} /> */}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
            <RelatedPosts posts={relatedPosts} />
          </div>
        </section>
      )}
    </div>
  )
}

