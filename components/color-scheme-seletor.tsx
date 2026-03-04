
import React from 'react'
import Lable from './lable';
import { colorSchemes } from '@/public/assets/assets';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ColorSchemeSelectorProps {
    value: string;
    onChange: (color: string) => void;
}

export const ColorSchemeSelector = ({ value, onChange }: ColorSchemeSelectorProps) => {
    return (
        <div className='space-y-3'>
            <Lable>Color Scheme</Lable>


            <div className='grid grid-cols-6 gap-3'>
                {colorSchemes.map((scheme) => (
                    <button key={scheme.id} onClick={() => onChange(scheme.id)} className={cn(
                        "relative rounded-lg transition-all",
                        value === scheme.id && "ring-2 ring-pink-500"
                    )} title={scheme.name}>
                        <div className='flex h-10 rounded-lg '>
                            {scheme.colors.map((color) => (
                                <div key={color} className='flex-1' style={{ backgroundColor: color }} />
                            ))}
                        </div>
                        {value === scheme.id && (
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <CheckIcon className='h-5 w-5 text-white' />
                            </div>
                        )}
                    </button>
                ))}
            </div>
            <p className='text-xs text-zinc-400'>Selected: {colorSchemes.find((scheme) => scheme.id === value)?.name}</p>
        </div>
    )
}
