import React from 'react';

const ImportantLink = () => {
    return (
        <div>
            <div className='mt-10 lg:mt-52'>
                <h1 className="text-xl text-white text-center font-bold bg-[#0E528E] rounded-lg p-1">
                    IMPORTANT LINK
                </h1>
                
                <div className="divide-y divide-gray-700 mt-5 text-gray-500 font-bold text-lg">
                    <a href="https://dhakaeducationboard.gov.bd/" target="_blank" rel="noopener noreferrer">
                        <h1>শিক্ষা মন্ত্রণালয়</h1>
                    </a>
                    
                    <a href="http://www.dpe.gov.bd/" target="_blank" rel="noopener noreferrer">
                        <h1 className='mt-2'>মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর</h1>
                    </a>
                    <a href="https://www.teachers.gov.bd/" target="_blank" rel="noopener noreferrer">
                        <h1 className='mt-2'>ঢাকা শিক্ষা বোর্ড</h1>
                    </a>
                    <a href="http://www.banbeis.gov.bd/" target="_blank" rel="noopener noreferrer">
                        <h1 className='mt-2'>প্রাথমিক শিক্ষা অধিদপ্তর</h1>
                    </a>
                    <a href="http://www.nctb.gov.bd/" target="_blank" rel="noopener noreferrer">
                        <h1 className='mt-2'>শিক্ষক বাতায়ন</h1>
                    </a>
                    <a href="http://www.moedu.gov.bd/" target="_blank" rel="noopener noreferrer">
                        <h1 className='mt-2'>ব্যানবেইস</h1>
                    </a>
                    <a href="http://www.dshe.gov.bd/" target="_blank" rel="noopener noreferrer">
                        <h1 className='mt-2'>এনসিটিবি</h1>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ImportantLink;