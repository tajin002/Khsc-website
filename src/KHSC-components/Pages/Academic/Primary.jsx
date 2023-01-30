import React from 'react';
import { useTitle } from '../../../Hooks/UseTitle';

const Primary = () => {
    useTitle('primary')
    return (
        <div className='text-center'>
            <h1 className='text-blue-500 text-2xl'>Primary Level :</h1> <br />
            <p className='text-xl'>Class : One To Five</p>
        </div>
    );
};

export default Primary;