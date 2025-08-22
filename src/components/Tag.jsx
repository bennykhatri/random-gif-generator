import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const Tag = () => {
  const [gif, setGif] = useState(null);
  const [keyword,setKeyword] = useState('cats');
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
      }
  
      const clickHandler = async () =>  fetchRandomGif();
  
      useEffect(() => {fetchRandomGif()},[])
  

  
  return (
    <div className='w-1/2 w-full max-h-[40%] px-15 py-10 bg-blue-500 rounded-lg border flex flex-col items-center'>
      <h1 className='text-3xl text-center uppercase underline mb-5'>Random {keyword} Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} className='max-w-[30rem]'/>)
      }
      <div className='flex flex-col'>
      <input type="text" placeholder='Enter the text here' className='bg-white mt-4 rounded-md p-3 text-center' value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
      <button className='text-xl mt-4 bg-blue-300 w-[20rem] p-2 rounded-md cursor-pointer hover:scale-110 duration-300 text-black uppercase' onClick={clickHandler}>Generate</button>
      </div>
      </div>
  )
}

export default Tag
