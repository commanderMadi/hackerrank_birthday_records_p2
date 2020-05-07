import React from 'react';

const Table = ({ sortBy }) => {
    const people = [
        {
            name: 'John Sina',
            birth: '11/30/2011',
        },
        {
            name: 'Barcy Washington',
            birth: '09/16/1992',
        },
        {
            name: 'Peter Parker',
            birth: '01/16/1992',
        },
        {
            name: 'Jimmy Shergil',
            birth: '12/12/2001',
        },
        {
            name: 'Alexander Alfred',
            birth: '02/09/1891',
        },
        {
            name: 'Krishna Gupta',
            birth: '12/01/1982',
        },
        {
            name: 'Sania Mirza',
            birth: '11/30/2011',
        },
        {
            name: 'Lata Pathak',
            birth: '10/31/1999',
        },
    ];

    const compareDates = () => {
        return people.sort((a, b) => {
            return new Date(a.birth) - new Date(b.birth);
        });
    };

    const compareNames = () => {
        return people.sort((a, b) => {
            const person1 = a.name.toLowerCase();
            const person2 = b.name.toLowerCase();
            return person1 < person2 ? -1 : person1 > person2 ? 1 : 0;
        });
    };

    return (
        <div className='table-div'>
            <table className='table table-striped table-bordered table-hover full-width'>
                <thead>
                    <tr>
                        <th className='course-name'>Person Name</th>
                        <th className='duration'>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {!sortBy &&
                        people.map((person) => {
                            return (
                                <tr key={person.name}>
                                    <td>{person.name}</td>
                                    <td>{person.birth}</td>
                                </tr>
                            );
                        })}
                    {sortBy === 'name' &&
                        compareNames().map((person) => {
                            return (
                                <tr key={person.name}>
                                    <td>{person.name}</td>
                                    <td>{person.birth}</td>
                                </tr>
                            );
                        })}
                    {sortBy === 'birth' &&
                        compareDates().map((person) => {
                            return (
                                <tr key={person.name}>
                                    <td>{person.name}</td>
                                    <td>{person.birth}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
