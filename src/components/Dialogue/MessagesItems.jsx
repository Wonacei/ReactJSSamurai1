import React from 'react'

const MessagesItems = (props) => { props.messages.map(m => (< div > {m.message}</div >)) }

export default MessagesItems;