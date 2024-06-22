import React from 'react'

const Jobs = ({result}) => {
  return (
    <>
    <div>
    <h3 className='text-lg font-bold md-2'>{result.length} Jobs</h3>
    </div>
    <section>{result}</section>
    </>
  );
};

export default Jobs