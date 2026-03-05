'use client'
import { useEffect, useState } from "react";
import { AspectRatio, IThumbnail, ThumbnailStyle, colorSchemes, dummyThumbnails } from "@/public/assets/assets";
import Lable from "./lable";
import AspectRatioSelector from "./aspect-ratio-selector";

import { ColorSchemeSelector } from "./color-scheme-seletor";
import { StyleSelector } from "./style-selector";


interface LeftPanalProps {
    id: string;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    title: string
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    additionalDetails: string;
    setAdditionalDetails: React.Dispatch<React.SetStateAction<string>>;
    thumbnail: IThumbnail | null;
    setThumbnail: React.Dispatch<React.SetStateAction<IThumbnail | null>>;
    aspectRatio: AspectRatio;
    setAspectRatio: React.Dispatch<React.SetStateAction<AspectRatio>>;
}
const LeftPanal = ({ id, loading, setLoading, title, setTitle, additionalDetails, setAdditionalDetails, thumbnail, setThumbnail, aspectRatio, setAspectRatio }: LeftPanalProps) => {

    const [colorSchemeId, setColorSchemeId] = useState<string>(colorSchemes[0].id);
    const [style, setStyle] = useState<ThumbnailStyle>('Bold & Graphic');

    const [styleDropdownOpen, setStyleDropdownOpen] = useState(false);

    const handleGenerate = async () => { };

    const fetchThumbnail = async () => {
        if (id) {
            const thumbnail: any = dummyThumbnails.find((thumbnail) => thumbnail._id === id);
            setThumbnail(thumbnail);
            setAdditionalDetails(thumbnail.user_prompt);
            setTitle(thumbnail.title);
            setAspectRatio(thumbnail.aspect_ratio);
            setColorSchemeId(thumbnail.color_scheme);
            setStyle(thumbnail.style);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (id) {
            fetchThumbnail();
        }
    }, [id])

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


                    {/* aspect ratio selector */}
                    <AspectRatioSelector value={aspectRatio} onChange={setAspectRatio} />
                    {/* style seleter */}
                    <StyleSelector value={style} onChange={setStyle} isOpen={styleDropdownOpen} setIsOpen={setStyleDropdownOpen} />
                    {/* color scheme selector */}
                    <ColorSchemeSelector value={colorSchemeId} onChange={setColorSchemeId} />
                    {/* details */}


                    <div className='space-y-2'>
                        <Lable htmlFor="additional prompts">Additional Prompts <span className='text-xs text-zinc-400'>(optional)</span></Lable>
                        <textarea value={additionalDetails} onChange={(e) => setAdditionalDetails(e.target.value)} rows={3} placeholder='Add any specific elements, mood, or style preferences...' className='w-full px-4 py-3 rounded-lg border border-white/10 bg-white/6  text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none' />
                    </div>
                </div>

                {/* btn */}
                {!id && <button onClick={handleGenerate} className='text-[15px] w-full py-3.5 rounded-xl font-medium bg-linear-to-b from-pink-500 to-pink-600 hover:from-pink-700 disabled:cursor-not-allowed transition-colors'>{loading ? 'Generating...' : 'Generate Thumbnail'}</button>}
            </div>
        </div>
    )
}

export default LeftPanal
