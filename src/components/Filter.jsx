import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';

function Filter() {
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <div className="filter">
            <input 
                type="text" 
                placeholder="Search by name or color..." 
                onChange={handleFilterChange} 
            />
        </div>
    );
}

export default Filter;