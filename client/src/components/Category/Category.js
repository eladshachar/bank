import React from 'react'
import './Category.css'

export default function Category(props) {

    const filterByCategory = () => {
        props.filterByCategory(props.category.name)
        props.updateCategory(props.updateCategory)
    }
    
    
    return(
        <div className='category-container' onClick={filterByCategory}>
            <div className='name'>{props.category.name}</div>
            <div className='total'>Total Spent: ${props.category.sum}</div>
        </div>
    )
}