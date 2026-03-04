'use client';

import { cn } from "@/lib/utils";
import { AspectRatio, IThumbnail } from "@/public/assets/assets";
import { ImageIcon, Loader2Icon } from "lucide-react";

interface PreviewPanalProps {
    thumbnail: IThumbnail | null;
    isLoading: boolean;
    aspectRatio: AspectRatio;
}

export const PreviewPanal = ({ thumbnail, isLoading, aspectRatio }: PreviewPanalProps) => {
    const aspectClasses = {
        '16:9': 'aspect-video',
        '9:16': 'aspect-[9/16]',
        '1:1': 'aspect-square',
    } as Record<AspectRatio, string>;

    const onDownload = () => {
        if (!thumbnail?.image_url) return;
        window.open(thumbnail.image_url, '_blank');
    }
    return (
        <div className="relative mx-auto w-full max-w-2xl" >
            <div className={cn('relative overflow-hidden ', aspectClasses[aspectRatio])}>
                {isLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/25">
                        <Loader2Icon className="size-8 animate-spin text-zinc-400" />
                        <div className="text-center">
                            <p className="text-sm font-medium text-zinc-200">AI is creating your thumbnail...</p>
                            <p className="text-xs text-zinc-400">This may take a few seconds</p>
                        </div>
                    </div>
                )}

                {!isLoading && thumbnail?.image_url && (
                    <div className="group relative h-full w-full">
                        <img src={thumbnail.image_url} alt={thumbnail.title} className="w-full h-full object-cover" />


                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button onClick={onDownload} className="px-4 py-2 bg-white text-black rounded-lg">Download</button>
                        </div>
                    </div>
                )}



                {!isLoading && !thumbnail?.image_url && (
                    <div className="absolute inset-0 m-2 flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-white/20 bg-black/25">
                        <div className="max-sm:hidden flex size-20 items-center justify-center rounded-full bg-white/10 ">
                            <ImageIcon className="size-10 text-white opacity-50" />
                        </div>

                        <div className="px-4 text-center">
                            <p className="font text-zinc-400">Generate your first thumbnail</p>
                            <p className="mt-1 text-xs text-zinc-400">Fill out the form and click Generate</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
