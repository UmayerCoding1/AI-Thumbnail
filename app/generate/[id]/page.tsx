// import { useSearchParams } from 'next/navigation';
import Generate from '@/components/generate';
import React from 'react';

const page =async ({params} : {params: Promise<{id: string}>}) => {
   const {id} = await params;

  
    return (
        <div>
            <Generate id={id} />
        </div>
    );
};

export default page;