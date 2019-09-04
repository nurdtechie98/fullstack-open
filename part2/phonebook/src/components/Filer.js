import React from 'react'

const Filter= ({filterVal,handleFilterChange})=>(
    <div>
        filter shown with <input value={filterVal} onChange={handleFilterChange} />
    </div>
)

export default Filter