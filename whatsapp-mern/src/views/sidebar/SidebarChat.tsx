import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@material-ui/core'
export const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last message in the room</p>
            </div>
        </div>
    )
}
