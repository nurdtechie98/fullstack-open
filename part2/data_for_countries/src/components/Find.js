import React from 'react'

const Find = ({filter,handleChange})=>(
        <form>
            find countries <input value={filter} onChange={handleChange} />
        </form>
)

export default Find