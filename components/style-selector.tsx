import { ThumbnailStyle, thumbnailStyles } from '@/public/assets/assets';
import { ChevronDownIcon, CpuIcon, ImageIcon, PenToolIcon, SparkleIcon, SquareIcon } from 'lucide-react';
import React from 'react'
import Lable from './lable';

interface StyleSelectorProps {
    value: ThumbnailStyle;
    onChange: (value: ThumbnailStyle) => void;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export const StyleSelector = ({ value, onChange, isOpen, setIsOpen }: StyleSelectorProps) => {
    const styleDecription: Record<ThumbnailStyle, string> = {
        "Bold & Graphic": "High contrast, bold typography, striking visuals",
        "Minimalist": "Clean, simple, lots of white space",
        "Photorealistic": "Photo-based, natural looking",
        "Illustrated": "Hand-drawn, srtistic, creative",
        "Tech/Futuristic": "Futuristic, vibrant neon colors, and tech elements, Modern, sleek, tech-inspired",

    }
    const styleIcon: Record<ThumbnailStyle, React.ReactNode> = {
        "Bold & Graphic": <SparkleIcon className='h-4 w-4' />,
        "Minimalist": <SquareIcon className='h-4 w-4' />,
        "Photorealistic": <ImageIcon className='h-4 w-4' />,
        "Illustrated": <PenToolIcon className='h-4 w-4' />,
        "Tech/Futuristic": <CpuIcon className='h-4 w-4' />,

    }
    return (
        <div className='relative space-y-3 dark'>
            <Lable>Thumbnail Style</Lable>

            <button type='button' onClick={() => setIsOpen(!isOpen)} className='flex w-full items-center justify-between rounded-md border px-4 py-3 text-left transition bg-white/8  border-white/10 text-zinc-200  hover:bg-white/12'>
                <div className='space-y-1'>
                    <div className='flex items-center gap-3 font-medium'>
                        {styleIcon[value]}
                        <span>{value}</span>

                    </div>
                    <p className='text-sm text-zinc-400'>{styleDecription[value]}</p>
                </div>
                <ChevronDownIcon className={['h-5 w-5 text-zinc-400 transition-transform', isOpen ? 'rotate-180' : ''].join(' ')} />
            </button>

            {isOpen && (
                <div className='absolute left-0 right-0 z-50 mt-2 rounded-md border border-white/12 bg-black/20  backdrop-blur-3xl shadow-lg'>
                    {thumbnailStyles.map((style) => (
                        <button
                            key={style}
                            onClick={() => {
                                onChange(style);
                                setIsOpen(false);
                            }}
                            className={'flex w-full items-start gap-3 px-4 py-3 text-left transition hover:bg-white/30'}
                        >
                            <div className='mt-0.5'>{styleIcon[style]}</div>
                            <div>
                                <p className='font-medium'>{style}</p>
                                <p className='text-sm text-zinc-400'>{styleDecription[style]}</p>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}


