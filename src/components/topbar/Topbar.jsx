import { Chat, Notifications, Search } from "@mui/icons-material";
import "./Topbar.css";
import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext"

export default function Topbar() {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER 
    const { user } = useContext(AuthContext)
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <Link to="/">
                <span className="logo">RealSNS</span>
            </Link>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className="searchIcon" />
                <input 
                    type="text" 
                    className="serchInput" 
                    placeholder="探し物は何ですか？" 
                />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarItemIcons">
                <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">2</span>
                </div>
            <Link to={`/profile/${user.username}`}>
            <img src={user.profilePicture 
                ? PUBLIC_FOLDER + user.profilePicture 
                : PUBLIC_FOLDER + "/person/noAvatar.png"} 
                alt=""className="topbarimg" />
            </Link>
            </div>
        </div>
    </div>
  )
}
