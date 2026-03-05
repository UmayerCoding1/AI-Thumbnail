'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { yt_html } from '@/public/assets/assets';
const YtPreview = () => {
    const searchParams = useSearchParams();
    const thumbnailUrl = searchParams.get('thum_url');
    const title = searchParams.get('t');
    const new_html = yt_html.replace("%%THUMBNAIL_URL%%", thumbnailUrl!).replace("%%TITLE%%", title!);
    return (
        <div className='fixed inset-0 z-100 bg-black'>
            <iframe srcDoc={new_html} width='100%' height='100%' allowFullScreen />
        </div>
    );
};

export default YtPreview;