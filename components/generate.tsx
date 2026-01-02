'use client'
import { IThumbnail } from '@/public/assets/assets';
import React, { useState } from 'react';
import SoftBackdrop from './soft-backdrop';
import Lable from './lable';

const Generate = ({id} : {id: string}) => {
    const [title,setTitle] = useState('');
    const [additionalDetails,setAdditionalDetails] = useState('');
    const [thumbnail,setThumbnail] = useState<IThumbnail | null>(null);
    const [loading,setLoading] = useState(false);

    console.log(id ? true : false)
    return (
        <>
           <SoftBackdrop/>
           <div className='h-screen'>
             <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8'>
                <div className='grid lg:grid-cols-[400px_1fr] gap-8'>
                    {/* LEFT PANAL */}
                    <LeftPanal id={id} loading={loading} title={title} setTitle={setTitle}  additionalDetails={additionalDetails} setAdditionalDetails={setAdditionalDetails} thumbnail={thumbnail} setThumbnail={setThumbnail}/>
                    {/* RIGHT PANAL */}
                    <div></div>
                </div>
             </div>
           </div>
        </>
    );
};

export default Generate;


interface LeftPanalProps {
    id: string;
    loading: boolean;
    title: string
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    additionalDetails: string;
    setAdditionalDetails: React.Dispatch<React.SetStateAction<string>>;
    thumbnail: IThumbnail | null;
    setThumbnail: React.Dispatch<React.SetStateAction<IThumbnail | null>>;
}

const LeftPanal = ({id,loading,title,setTitle,additionalDetails,setAdditionalDetails,thumbnail,setThumbnail} : LeftPanalProps ) => {
    return (
        <div className={`sppace-y-6 ${id && 'pointer-events-none'}`}>
          <div className='p-6 rounded-2xl bg-white/8 border border-white/12 shadow-xl space-y-6'>
              <div>
                <h2 className='text-xl font-bold text-zinc-100 mb-1'>Create tour thumbnail</h2>
                <p className='text-sm text-zinc-400'>Describe your vision and let AI bring it to life</p>
              </div>

              <div className='space-y-5'>
                     {/* title input */}
                    <div className='space-y-2'>
                        <Lable htmlFor='title'>Title or Topic</Lable>
                     <input type="text" value={title} id="" onChange={(e) => setTitle(e.target.value)} maxLength={100} placeholder='e.g., 10 Tips for Better Sleep' className='w-full px-4 py-3 rounded-lg border border-white/12  bg-black/20  text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-500' />
                     <div className='flex justify-end'><span className='text-sm text-zinc-400'>{title.length}/100</span></div>
                    </div>


                    {/* additional ratio seleter */}
                    {/* atyle seleter */}
                    {/* color  seleter */}

                    {/* details */}
                    <div className='space-y-2'>
                        <Lable htmlFor="additional prompts">Additional Prompts <span className='text-xs text-zinc-400'>(optional)</span></Lable>
                        <textarea value={additionalDetails} onChange={(e) => setAdditionalDetails(e.target.value)} rows={3} placeholder='Add any specific elements, mood, or style preferences...' className='w-full px-4 py-3 rounded-lg border border-white/10 bg-white/6  text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none'/>
                    </div>
              </div>

              {/* btn */}
              {!id && <button className='text-[15px] w-full py-3.5 rounded-xl font-medium bg-linear-to-b from-pink-500 to-pink-600 hover:from-pink-700 disabled:cursor-not-allowed transition-colors'>{loading ? 'Generating...' : 'Generate Thumbnail'}</button>}
          </div>
        </div>
    )
}