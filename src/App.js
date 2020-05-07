import React, { useState } from 'react';
import Radio from './components/Radio';
import Table from './components/Table';

const App = () => {
    const [sortBy, setSortBy] = useState('');

    const doSortBy = (parameter) => {
        if (parameter === 'name') {
            console.log('I ran!');
            setSortBy('name');
        } else {
            setSortBy('birth');
        }
    };

    return (
        <div className='container-fluid'>
            <center>
                <h1>Birthday Records</h1>
            </center>
            <Radio sortBy={sortBy} doSortBy={doSortBy} />
            <Table sortBy={sortBy} />
        </div>
    );
};

export default App;
