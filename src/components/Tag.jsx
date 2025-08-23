import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import { IoIosLink } from "react-icons/io";


const Tag = () => {
  const [gif, setGif] = useState(null);
  const [keyword,setKeyword] = useState('cats');
  const [copiedId, setCopiedId] = useState(false);
  const [loading,setLoading] = useState(false);
  let apiKey = "eQw4D7MxUKTCxatAzmZlmoBvdLHqAxlN";
  let baseUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${keyword}`;

   const fetchRandomGif = async () => 
      {
              setLoading(true); 
              let gifUrl = await fetch(baseUrl);
              let payload = await gifUrl.json();
              setGif(payload.data.images.fixed_height_downsampled.url); 
              setLoading(false);
              setCopiedId(false);
      }
  
      const clickHandler = async () =>  fetchRandomGif();
  
      useEffect(() => {fetchRandomGif()},[])
  

  
  return (
    <>
    <div className='w-full h-full'>
    <div className='w-1/2 w-full max-h-[70%] px-15 py-10 bg-[#F5FAE1] rounded-lg border flex flex-col items-center'>
      <h1 className='text-2xl text-center uppercase  mb-5'>Random {keyword} Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} className='max-w-[30rem]'/>)
      }
      <div className='flex flex-col'>
      <input type="text" placeholder='Enter the text here' className='bg-white mt-4 rounded-md p-3 text-center' value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
      <button className='text-xl mt-4 bg-[#f2f2f2] w-[20rem] p-2 rounded-md cursor-pointer hover:scale-110 duration-300 text-black uppercase' onClick={clickHandler}>Generate</button>
      </div>
      </div>
      <button className='bottom-4 bg-white right-5 flex items-center gap-x-2 px-5 py-2 mt-2 rounded-xl cursor-pointer duration-300 text-sm' onClick={async () => {await navigator.clipboard.writeText(gif); setCopiedId(true)}}>{copiedId ? "Copied": "Copy"}{<IoIosLink/> }</button>
      
    </div>
    </>
  )
}

export default Tag
