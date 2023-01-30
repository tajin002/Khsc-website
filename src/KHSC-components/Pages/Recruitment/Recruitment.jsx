import React from 'react';
import { useTitle } from '../../../Hooks/UseTitle';

const Recruitment = () => {
    useTitle('Recruitment');
    return (
        <div>
            <h1 className='text-center text-4xl mt-10 text-red-500'>No ongoing circular available!</h1>
        </div>
    );
};

export default Recruitment;