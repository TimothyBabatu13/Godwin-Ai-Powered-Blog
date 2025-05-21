'use client';

import { blogPosts } from "@/lib/blog-data"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/formatDate";

export interface Article {
  id: number;
  title: string;
  slug: string;
  author: string;
  description: string;
  content: string;
  image: string;
  date: string;
  published: string;
  readTime: string;
  category: string;
}

interface postType {
    post: {
        id: string;
        title: string;
        description: string;
        date: string;
        readTime: string;
        slug: string;
        category: string;
        image: string;
        featured: boolean;
    }
}

const PostCard = ( { post } : postType) => {
    
    return(
        <Card
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
                <Link className="cursor-pointer" href={`/blog/${post.id}`}>
                  <Button variant="ghost" size="sm" className="group/btn cursor-pointer">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
    )
}

type handleFilterBlogType = 'all' | 'design' | 'development';

export const RegularPost = () => {

    const regularPosts = blogPosts.filter((post) => !post.featured);
    const [activeBlog, setIsActiveBlog] = useState<handleFilterBlogType>('all');
    const [regularPostData, setRegularPostData] = useState<typeof blogPosts>(regularPosts);

  
    const fetchData = async () => {
      // const params = {
      //   q: 'health',
      //   neural: 'True',
      // };
      // const uuu = `https://content.skoutwatch.com/api/v1/ai-search?${new URLSearchParams(params)}`;

      // console.log(uuu);

      const url =  await fetch(`https://content.skoutwatch.com/api/v1/`);
      const res =  await url.json();
      const data = res.map((item: Article) => ({
        ...item,
        date: formatDate(item.date)
      }))
      setRegularPostData(data)
    }

    useEffect(()=>{
      fetchData();
    }, [])

    const handleFilterBlog = (category : handleFilterBlogType) => {
        let data : null | typeof blogPosts = null
        if(category === 'all') {
            data = regularPosts
        }
        else if(category === 'design') {
            data = regularPosts.filter(post => post.category.toLowerCase() === 'design');
        }
        else {
            data = regularPosts.filter(post => post.category.toLowerCase() === 'development')
        }
        setIsActiveBlog(category)
        setRegularPostData(data);
    }
    return(
        <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <div className="hidden md:block h-px bg-gray-200 flex-grow mx-6"></div>
          <div className="flex gap-2">
            <Button 
                variant="outline" 
                size="sm" 
                className={`rounded-full cursor-pointer ${activeBlog === 'all' && 'bg-black text-white'}`}
                onClick={()=>handleFilterBlog('all')}
            >
              All
            </Button>
            <Button 
                variant="outline" 
                size="sm" 
                className={`rounded-full cursor-pointer ${activeBlog === 'design' && 'bg-black text-white'}`}
                onClick={()=>handleFilterBlog('design')}
            >
              Design
            </Button>
            <Button 
                variant="outline" 
                size="sm" 
                className={`rounded-full cursor-pointer ${activeBlog === 'development' && 'bg-black text-white'}`}
                onClick={()=>handleFilterBlog('development')}
            >
              Development
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPostData.map((post) => (
            <PostCard 
                post={post}
                key={post.id}
            />
          ))}
        </div>
      </section>
    )
}