import React from 'react';
import { useTitle } from '../../../Hooks/UseTitle';

const College = () => {
    useTitle('College')
    return (
        <div className='text-center'>
            <h1 className='text-blue-500 text-2xl'>Higher Secondary Level :</h1> <br />
            <p className='text-xl'>Class : Eleven To Twelve</p>
        </div>
    );
};

export default College;