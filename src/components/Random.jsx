import React, {useEffect, useState} from 'react'
import Spinner from './Spinner';
import { IoIosLink } from "react-icons/io";

const Random = () => {
    const [gif, setGif] = useState(null);
    const [copiedId, setCopiedId] = useState(false);
    const [loading,setLoading] = useState(false);
    let apiKey = "eQw4D7MxUKTCxatAzmZlmoBvdLHqAxlN";
    let baseUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`;
    
    const fetchRandomGif = async () => 
    {
            setLoading(true); 
            let gifUrl = await fetch(baseUrl);
            let data = await gifUrl.json();
            setGif(data.data.images.fixed_height.url); 
            setLoading(false);   
            setCopiedId(false);
    }

    async function clickHandler()
    {
        fetchRandomGif();
    }

    useEffect(() => 
        {
            fetchRandomGif();
        },[])

  return (
    <>
    <div className='w-full mt-5'>
    <div className='w-1/2 w-full px-15 py-10 bg-[#EEE6CA] rounded-lg border flex flex-col items-center'>
      <h1 className='text-2xl text-center uppercase mb-5'>Random Gif</h1>
      <div className='flex flex-col items-center'>
      {
        loading ? (<Spinner/>) : (<img src={gif} className='max-w-[30rem]'/>)
      }
      <button className='text-xl mt-4 bg-[#f2f2f2] w-[10rem] p-2 rounded-md cursor-pointer hover:scale-110 duration-300 uppercase' onClick={clickHandler}>Generate</button>
      </div>
      </div>
      <button className='bottom-4 bg-white right-5 flex items-center gap-x-2 px-5 py-2 mt-2 rounded-xl cursor-pointer duration-300 text-sm' onClick={async () => {await navigator.clipboard.writeText(gif); setCopiedId(true)}}>{copiedId ? "Copied": "Copy"}{<IoIosLink/> }</button>
      </div>
    </>
  )
}

export default Random
