import '../css/HomeTop.css';
import {Link} from "react-router-dom";
function HomeTop() {
    return (
        <>
            <div className='top-wrapper'></div>
            <div className='top-container'>
                <h1>Deteksi dan Mitigasi</h1>
                <h1>Learning loss</h1>
                <p>Deteksi dan Mitigasi Learning loss pada pendidikan agama Islam di madrasah dengan pedekatan Sains Data </p>
                <a onClick={()=>{alert('Under Constraction')}} className={'btn-home'}>Apa itu Learning Loss&nbsp;<i className="fa-solid fa-circle-arrow-right"></i></a>
                <Link className={'btn-home'} to={'/prediksi/ma'}>Mulai Prediksi &nbsp;<i className="fa-solid fa-circle-arrow-right"></i></Link>
            </div>

        </>
    );
}

export default HomeTop;