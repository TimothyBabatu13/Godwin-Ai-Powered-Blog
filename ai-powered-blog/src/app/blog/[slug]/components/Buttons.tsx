'use client';

import { Button } from "@/components/ui/button";
import { Bookmark, Share2 } from "lucide-react";

export const ShareButton = () => {
    const handleShare = () => {
        navigator.share({title: '', text: '', url: ''})
    }
    return(
        <Button 
            onClick={handleShare} 
            variant="outline" 
            size="sm" 
            className="rounded-full cursor-pointer"
        >
            <Share2 className="h-4 w-4 mr-2" />
            Share
      </Button>
    )
}

export const BookMarkButton = () => {
    const handleBookMark = () => {
        console.log('...bookmarking')
        return;
    }
    return(
        <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full cursor-pointer"
            onClick={handleBookMark}
        >
            <Bookmark className="h-4 w-4 mr-2" />
            Save
      </Button>
    )
}