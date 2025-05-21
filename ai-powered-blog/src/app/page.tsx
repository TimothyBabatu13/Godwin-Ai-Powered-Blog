import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FeaturedPosts } from "@/components/featured-post"
import { RegularPost } from "@/components/regular-post"

export default  function Home() {  
  
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
      <FeaturedPosts />

      {/* Latest Posts */}
      <RegularPost />

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

