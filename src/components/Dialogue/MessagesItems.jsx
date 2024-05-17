import React from 'react'

const MessagesItems = (props) => {
    let MessagesItem = props.messages.map(m => (< div key={m.id}> {m.message}</div >))
    return (
        <div>
            {MessagesItem}
        </div>
    )
}



export default MessagesItems;