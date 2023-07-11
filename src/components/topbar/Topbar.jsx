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
                <input 
                    type="text" 
                    className="serchInput" 
                    placeholder="探し物は何ですか？" 
                />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarIconItem">1</div>
            <div className="topbarIconItem">2</div>
            <img src="/assets/person/1.jpeg" alt=""className="topbarimg" />
        </div>
    </div>
  )
}
