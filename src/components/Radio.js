import React from 'react';

const Radio = ({ doSortBy }) => {
    const onChange = (e) => {
        doSortBy(e.target.name);
    };

    return (
        <div className='radioButtons'>
            <div className='left'>
                <input name='name' onChange={onChange} type='radio' />
                <label>&nbsp;&nbsp;Sort by name</label>
            </div>
            <div className='right'>
                <input name='birth' onChange={onChange} type='radio' />
                <label>&nbsp;&nbsp;Sort by age</label>
            </div>
        </div>
    );
};

export default Radio;
