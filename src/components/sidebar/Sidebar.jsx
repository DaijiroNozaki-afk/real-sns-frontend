import React from 'react'
import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <Home className="sidebarIcon" />
                    <span className="sidebarListItem">ホーム</span>
                </li>
                <li className="sidebarListItem">
                    <Search className="sidebarIcon" />
                    <span className="sidebarListItem">検索</span>
                </li>
                <li className="sidebarListItem">
                    <Notifications className="sidebarIcon" />
                    <span className="sidebarListItem">通知</span>
                </li>
                <li className="sidebarListItem">
                    <MessageRounded className="sidebarIcon" />
                    <span className="sidebarListItem">メッセージ</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon" />
                    <span className="sidebarListItem">ブックマーク</span>
                </li>
                <li className="sidebarListItem">
                    <Person className="sidebarIcon" />
                    <span className="sidebarListItem">プロフィール</span>
                </li>
                <li className="sidebarListItem">
                    <Settings className="sidebarIcon" />
                    <span className="sidebarListItem">設定</span>
                </li>
            </ul>
            <hr className='sidebarHr' />
            <ul className="sidebarFirendList">
                <li className="sidebarFriend">
                    <img src="/assets/person/2.jpeg" alt="" className='sidebarFriendImg' />
                    <span className="sidebarFriendName">Shin Code</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
