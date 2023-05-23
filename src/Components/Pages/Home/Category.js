import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    return (
        <div className='text-center'>
            <h3 className='normal-case text-xl'>CATEGORY</h3>
            <Link className='btn my-6' to='/category'>View All</Link>
        </div>
    );
};

export default Category;