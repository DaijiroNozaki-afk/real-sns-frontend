import { Chat, Notifications, Search } from "@mui/icons-material";
import "./Topbar.css";
import React from 'react'

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">RealSNS</span>
        </div>
        <div className="topbarCenter">
            <div className="serachbar">
                <Search className="searchIcon" />
                <input 
                    type="text" 
                    className="serchInput" 
                    placeholder="探し物は何ですか？" 
                />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Notifications />
                <span className="topbarIconBadge">2</span></div>
            <img src="/assets/person/1.jpeg" alt=""className="topbarimg" />
        </div>
    </div>
  )
}
