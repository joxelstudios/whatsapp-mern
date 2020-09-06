import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@material-ui/core'

interface ISidebarChatProps {
    avatar: string,
    roomName: string,
    lastMessage: string,
}
export const SidebarChat = ({avatar, roomName, lastMessage}: ISidebarChatProps) => {
    return (
        <div className="sidebarChat">
            <Avatar src={avatar}/>
            <div className="sidebarChat__info">
                <h2>{roomName}</h2>
                <p>{lastMessage}</p>
            </div>
        </div>
    )
}
