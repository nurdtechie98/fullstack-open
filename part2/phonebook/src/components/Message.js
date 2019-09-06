import React from 'react'
import './index.css'

const Message = ({message}) =>{
    if(message[0]==='')
    return (<div></div>)
    else
    {
        if(message[1]===true)
        {
            return(<div className="message positive">
                        {message[0]}
                    </div>
            )
        }
        else
        {
            return(<div className="message negative">
                    {message[0]}
                    </div>
            )
        }
    }
}

export default Message