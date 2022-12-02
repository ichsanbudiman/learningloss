import React from "react";
import "../css/stylesheet.css";

class Footer extends React.Component{
    render(){
        return( <div className='footer'>
            <div className='footer-inner'>
                <div className='footer-logo'>
                    <img src='http://if.uinsgd.ac.id/wp-content/uploads/2016/08/h4.png' />
                    <p>Deteksi “Learning Loss” Akibat Pandemi</p>
                </div>
                <ul className='footer-list'>
                    <li>PELAYANAN</li>
                    <li>BANTUAN</li>
                    <li>HUBUNGI KAMI</li>
                </ul>

            </div>
        </div>);
    }
}

export default Footer;