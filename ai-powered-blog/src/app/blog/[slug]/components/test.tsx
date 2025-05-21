'use client';

import { useEffect } from "react";

const Test = () => {
    const fetchData = async () => {
        const url =  await fetch(`https://content.skoutwatch.com/api/v1/search/7/`);
        const r = await url.json();
        console.log(r)

    }
    useEffect(()=>{
        fetchData()
    }, [])
  return (
    <div>test</div>
  )
}

export default Test