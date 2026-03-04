import React from 'react';
import Lable from './lable';
import { RectangleHorizontal, RectangleVertical, Square } from 'lucide-react';
import { aspectRatios, type AspectRatio } from '@/public/assets/assets';
import { cn } from '@/lib/utils';

const AspectRatioSelector = ({ value, onChange }: { value: AspectRatio, onChange: (value: AspectRatio) => void }) => {
    const iconMap = {
        '16:9': <RectangleHorizontal className='size-6' />,
        '1:1': <Square className='size-6' />,
        '9:16': <RectangleVertical className='size-6' />
    } as Record<AspectRatio, React.ReactNode>
    return (
        <div className='space-y-3 dark'>
            <Lable htmlFor='aspect-ratio'>Aspect Ratio</Lable>

            <div className='flex flex-wrap gap-2'>
                {aspectRatios.map((ratio) => {
                    const selected = value === ratio;
                    return (
                        <button
                            key={ratio}
                            onClick={() => onChange(ratio)}
                            type='button'
                            className={cn(
                                "flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm transition border-white/10 ",
                                selected ? "bg-white/10" : "hover:bg-white/10"
                            )}
                        >
                            {iconMap[ratio]}
                            < span className='tracking-wider' > {ratio}</span>
                        </button>
                    )
                })}
            </div >
        </div >
    );
};

export default AspectRatioSelector;