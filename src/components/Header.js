import React from "react";
import "../css/stylesheet.css";

class Header extends React.Component{
    render() {
        return(
            <div className='header'>
                <div className='header-logo'>
                    <img src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/character_logo.svg' />
                </div>
                <div></div>
            </div>
        );
    }
}

export default Header;