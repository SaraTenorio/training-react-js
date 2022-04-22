import React from 'react'
import MessageInput from './MessageInput'
import MessageView from './MessageView'

export default function Chat() {
    return (
        <section className='chat'>
            <h2>My Chat Basic</h2>
            <article className='message-view'>
                <MessageView /></article>
            <article className='message-input'>
                <MessageInput /></article>
        </section>
    )
}