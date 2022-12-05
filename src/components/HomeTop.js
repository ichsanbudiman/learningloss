import '../css/HomeTop.css';
import {Link} from "react-router-dom";
function HomeTop() {
    return (
        <>
            <div className='top-wrapper'></div>
            <div className='top-container'>
                <h1>Lorem Ipsum</h1>
                <h1>Dolor sing amet</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum</p>
                <a onClick={()=>{alert('Under Constraction')}} className={'btn-home'}>Apa itu Learning Loss&nbsp;<i className="fa-solid fa-circle-arrow-right"></i></a>
                <Link className={'btn-home'} to={'/prediksi/ma'}>Mulai Prediksi &nbsp;<i className="fa-solid fa-circle-arrow-right"></i></Link>
            </div>

        </>
    );
}

export default HomeTop;