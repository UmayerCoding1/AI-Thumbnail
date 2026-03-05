'use client'
import React, { useEffect, useState } from 'react'
import SoftBackdrop from './soft-backdrop'
import { AspectRatio, dummyThumbnails, IThumbnail } from '@/public/assets/assets'
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ArrowUpRight, DownloadIcon, TrashIcon } from 'lucide-react';
import Link from 'next/link';

const MyGenerate = () => {

    const navigate = useRouter();

    const aspectClasses = {
        '16:9': 'aspect-video',
        '9:16': 'aspect-[9/16]',
        '1:1': 'aspect-square',
    } as Record<AspectRatio, string>;
    const [thumbnails, setThumbnails] = useState<IThumbnail[]>([]);
    const [loading, setLoading] = useState(false);


    const fetchThumbnail = async () => {
        setLoading(true);
        setThumbnails(dummyThumbnails as unknown as IThumbnail[]);
        setLoading(false);

    }

    const handleDownload = (image_url: string) => {
        window.open(image_url, '_blank');
    };

    const handleDelete = async (id: string) => {
        console.log(id)
    }

    useEffect(() => {
        fetchThumbnail();
    }, [])

    return (
        <>
            <SoftBackdrop />
            <div className='mt-32 min-h-screen px-6 md:px-16 lg:px-24 xl:px-32'>
                {/* header */}
                <div className='mb-8'>
                    <h1 className='text-2xl font-bold text-zinc-200'>My Generations</h1>
                    <p className='text-sm text-zinc-400 mt-1'>View and manage all your AI-generated thumbnails</p>
                </div>

                {/* thumbnails grid */}
                {loading && (<div className='grid grid-col-1 md :grid-cols-2 lg:grid-cols-3 gap-6'>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className='rounded-2xl bg-white/6 border border-white/10 animate-pulse h-[260px]' />))}
                </div>)}


                {!loading && thumbnails.length === 0 && (
                    <div className='text-center py-24'>
                        <h3 className='text-lg font-semibold  text-zinc-200'>No thumbnails generated yet</h3>
                        <p className='text-sm text-zinc-400 mt-2'>Generate your first thumbnail to see it here</p>
                    </div>
                )}



                {!loading && thumbnails.length > 0 && (
                    <div className='columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 gap-8'>
                        {thumbnails.map((thumbnail) => {
                            const aspectClass = aspectClasses[thumbnail.aspect_ratio || '16:9'];
                            return (
                                <div key={thumbnail._id}
                                    onClick={() => navigate.push(`/generate/${thumbnail._id}`)}
                                    className='mb-8 group  relative cursor-pointer rounded-2xl bg-white/6 border border-white/10  transition shadow-xl break-inside-avoid'>

                                    <div className={cn('relative overflow-hidden rounded-t-2xl  bg-black/10', aspectClass)}>
                                        {thumbnail.image_url ? (
                                            <img src={thumbnail.image_url} alt={thumbnail.title} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' />
                                        ) : (
                                            <div className='w-full h-full flex items-center justify-center text-sm text-zinc-400'>{thumbnail.isGenerating ? 'Generating...' : 'No Image'}</div>
                                        )}

                                        {thumbnail.isGenerating && (
                                            <div className='absolute inset-0 flex items-center justify-center bg-black/50 text-sm font-medium text-white'>
                                                Generating...
                                            </div>
                                        )}



                                    </div>

                                    <div className='p-4 space-y-2'>
                                        <h3 className='text-sm font-semibold text-zinc-100 line-clamp-2'>{thumbnail.title}</h3>

                                        <div className='flex flex-wrap gap-2 text-xs text-zinc-400'>
                                            <span className='px-2 py-0.5 rounded-lg bg-white/8'>{thumbnail.style}</span>
                                            <span className='px-2 py-0.5 rounded-lg bg-white/8'>{thumbnail.color_scheme}</span>
                                            <span className='px-2 py-0.5 rounded-lg bg-white/8'>{thumbnail.aspect_ratio}</span>
                                        </div>
                                        <p className='text-sm text-zinc-500'>{new Date(thumbnail.createdAt!).toDateString()}</p>
                                    </div>


                                    <div onClick={(e) => e.stopPropagation()} className='absolute bottom-2 right-2 max-sm:flex sm:hidden group-hover:flex gap-1.5'>
                                        <TrashIcon className='size-6 bg-black/50 p-1 rounded hover:bg-pink-600 transition-colors cursor-pointer' onClick={() => handleDelete(thumbnail._id)} />
                                        <DownloadIcon className='size-6 bg-black/50 p-1 rounded hover:bg-pink-600 transition-colors cursor-pointer' onClick={() => handleDownload(thumbnail.image_url as string)} />
                                        <Link target='_blank' href={`/preview?thum_url=${thumbnail.image_url}&t=${thumbnail.title}`}>
                                            <ArrowUpRight className='size-6 bg-black/50 p-1 rounded hover:bg-pink-600 transition-colors cursor-pointer' /></Link>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                )}
            </div>
        </>
    )
}

export default MyGenerate
