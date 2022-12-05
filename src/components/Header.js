import React from "react";
import '../css/HomeHeader.css';

class Header extends React.Component {


    render() {
        return (
            <div  className='home-header'>
                <div className='home-header-logo'>
                    <img alt={'header-img'} className={'home-header-img'}
                        src={process.env.PUBLIC_URL +'/images/logogabunglpdpkemenag-1.png'}/>
                </div>

                <div>
                    <ul style={{float:'right',lineHeight:'48px'}}>
                        <li style={{float:'left',paddingRight:'20px',listStyle:"none",color:'white', fontSize:'14px',fontFamily:"'Helvetica Neue'"}}>Tentang</li>
                        <li style={{float:'left',paddingRight:'20px',listStyle:"none",color:'white', fontSize:'14px',fontFamily:"'Helvetica Neue'"}}>Hubungi Kami</li>
                        <li style={{float:'left',paddingRight:'80px',listStyle:"none",color:'white', fontSize:'14px',fontFamily:"'Helvetica Neue'"}}>Home</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;