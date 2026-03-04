'use client'
import { AspectRatio, colorSchemes, IThumbnail, ThumbnailStyle } from '@/public/assets/assets';
import React, { useState } from 'react';
import SoftBackdrop from './soft-backdrop';
import Lable from './lable';
import AspectRatioSelector from './aspect-ratio-selector';
import { StyleSelector } from './style-selector';
import { ColorSchemeSelector } from './color-scheme-seletor';
import LeftPanal from './left-panal';
import { PreviewPanal } from './preview-panal';

const Generate = ({ id }: { id: string }) => {
    const [title, setTitle] = useState('');
    const [additionalDetails, setAdditionalDetails] = useState('');
    const [thumbnail, setThumbnail] = useState<IThumbnail | null>(null);
    const [loading, setLoading] = useState(false);
    const [aspectRatio, setAspectRatio] = useState<AspectRatio>('16:9');
    console.log(id ? true : false)
    return (
        <>
            <SoftBackdrop />
            <div className='h-screen'>
                <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8'>
                    <div className='grid lg:grid-cols-[400px_1fr] gap-8'>
                        {/* LEFT PANAL */}
                        <LeftPanal id={id} loading={loading} title={title} setTitle={setTitle} additionalDetails={additionalDetails} setAdditionalDetails={setAdditionalDetails} thumbnail={thumbnail} setThumbnail={setThumbnail} aspectRatio={aspectRatio} setAspectRatio={setAspectRatio} />
                        {/* RIGHT PANAL */}
                        <div>
                            <div className="p-6 rounded-2xl bg-white/8 border border-white/12 shadow-xl space-y-6">
                                <h2 className='text-lg font-semibold text-zinc-100 mb-4'>Preview</h2>
                                <PreviewPanal thumbnail={thumbnail} isLoading={loading} aspectRatio={aspectRatio} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Generate;



