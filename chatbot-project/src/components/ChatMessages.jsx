import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'

export function ChatMessages({ chatMessages }) {
    const chatMessageRef = useRef(null);
    useEffect(() => {
        const containerElement = chatMessageRef.current;
        if (containerElement) {
            containerElement.scrollTop = containerElement.scrollHeight;
        }
    }, [chatMessages]);

    return (
        <div className='chat-message-container'
            ref={chatMessageRef}>
            {
                chatMessages.map((chatMessage) => {
                    return (
                        <ChatMessage
                            message={chatMessage.message}
                            sender={chatMessage.sender}
                            key={chatMessage.key}
                        />
                    );
                })
            }
        </div>
    );
}

