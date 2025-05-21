
import { notFound } from "next/navigation"
import { ArrowLeft, Bookmark, Calendar, Clock, Share2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import RelatedPosts from "@/components/related-posts"
import { BookMarkButton, ShareButton } from "./components/Buttons"
import { CREATOR, TITLE, WEBSITE_URL } from "@/lib/metadata"
import { Article } from "@/components/regular-post"
import { formatDate } from "@/lib/formatDate"
// import AIChatComponent from "@/components/ai-chat-component"


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const fetchData = async (id: string) => {
    const url = `https://content.skoutwatch.com/api/v1/search/${id}/`;
    const fectch = await fetch(url);
    const res = await fectch.json();
    return res as Article
  }

  const post = await fetchData(slug);
  return{
     title: `${post?.title} | ${TITLE}`,
      description: post?.description,
      twitter: {
        card: 'summary_large_image',
        title: post?.title,
        description: post?.description,
        siteId: '',
        creator: CREATOR,
        images: ''
      },
      openGraph : {
        title: `${post?.title} | ${TITLE}`,
        description: post?.description,
        url: WEBSITE_URL,
        siteName: TITLE,
        locale: 'en_US',
        type: 'website',
        images: ''
      },
  }
}

export async function generateStaticParams() {
  const url = await fetch('https://content.skoutwatch.com/api/v1/')
  const posts = await url.json() as Array<Article>;
 
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {


  const { slug } = await params

  const fetchData = async (id: string) => {
    const url = `https://content.skoutwatch.com/api/v1/search/${id}/`;
    const fectch = await fetch(url);
    const res = await fectch.json() as Article;
    const data: Article = {
      ...res,
      date: formatDate(res.date)
    }
    return data
  }

  const post = await fetchData(slug);

  if (!post) {
    notFound()
  }

  // Find related posts (same category or shared tags)
  // const relatedPosts = blogPosts
  //   .filter(
  //     (p) => p.id !== post.id && (p.category === post.category || p.tags?.some((tag) => post.tags?.includes(tag))),
  //   )
  //   .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-10 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <Link className="cursor-pointer" href="/">
            <Button variant="ghost" className="mb-8 pl-0 cursor-pointer hover:bg-transparent group">
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
                  src={"/placeholder.svg"}
                  alt={post.author}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <div className="font-medium">{post.author}</div>
                  {/* <div className="text-sm text-gray-500">{post.author.role}</div> */}
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
            <ShareButton id={slug}/>
            <BookMarkButton id={slug}/>
          </div>

          <article>
            <div
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-gray-900 prose-a:font-medium blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <div className="mt-8 pt-6 border-t">
            {/* <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div> */}
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
      {/* {relatedPosts.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
            <RelatedPosts posts={relatedPosts} />
          </div>
        </section>
      )} */}
    </div>
  )
}

