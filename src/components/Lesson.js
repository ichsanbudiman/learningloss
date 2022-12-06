import React from "react";
import '../css/HomeSchools.css'

class Lesson extends React.Component {
    listDataVisualisasi = {
        sebaranMi: "https://app.powerbi.com/view?r=eyJrIjoiNzQwN2JkZWYtNGViOC00YjgyLTg4OWUtNGYxNWRjZTBjYTZlIiwidCI6IjY3N2VlYjU2LWYyZGYtNDY3NS05ZTBjLWNjZDYwMGE5MTU4MCIsImMiOjEwfQ%3D%3D&pageName=ReportSection1151f22f958c71eea6d0",
        sebaranMts: "https://app.powerbi.com/view?r=eyJrIjoiNzQwN2JkZWYtNGViOC00YjgyLTg4OWUtNGYxNWRjZTBjYTZlIiwidCI6IjY3N2VlYjU2LWYyZGYtNDY3NS05ZTBjLWNjZDYwMGE5MTU4MCIsImMiOjEwfQ%3D%3D&pageName=ReportSectionbb272577da5a7d07874d",
        sebaranMa: "https://app.powerbi.com/view?r=eyJrIjoiNzQwN2JkZWYtNGViOC00YjgyLTg4OWUtNGYxNWRjZTBjYTZlIiwidCI6IjY3N2VlYjU2LWYyZGYtNDY3NS05ZTBjLWNjZDYwMGE5MTU4MCIsImMiOjEwfQ%3D%3D&pageName=ReportSection",
        learningLossMi: "https://app.powerbi.com/view?r=eyJrIjoiNzQwN2JkZWYtNGViOC00YjgyLTg4OWUtNGYxNWRjZTBjYTZlIiwidCI6IjY3N2VlYjU2LWYyZGYtNDY3NS05ZTBjLWNjZDYwMGE5MTU4MCIsImMiOjEwfQ%3D%3D&pageName=ReportSectiond57e7822d0765848dd50",
        learningLossMts: "https://app.powerbi.com/view?r=eyJrIjoiNzQwN2JkZWYtNGViOC00YjgyLTg4OWUtNGYxNWRjZTBjYTZlIiwidCI6IjY3N2VlYjU2LWYyZGYtNDY3NS05ZTBjLWNjZDYwMGE5MTU4MCIsImMiOjEwfQ%3D%3D&pageName=ReportSectionb5913cb15d540cc6ca61",
        learningLossMa:"https://app.powerbi.com/view?r=eyJrIjoiNzQwN2JkZWYtNGViOC00YjgyLTg4OWUtNGYxNWRjZTBjYTZlIiwidCI6IjY3N2VlYjU2LWYyZGYtNDY3NS05ZTBjLWNjZDYwMGE5MTU4MCIsImMiOjEwfQ%3D%3D&pageName=ReportSectionc1aaa1f0665348109705"
    }

    constructor(properties) {
        super(properties);
        this.state = {modalIsOpen: false, iframe: ''};
    }

    handleClick(url) {
        this.setState({modalIsOpen: !this.state.modalIsOpen});
        this.setState({iframe: url});
    }


    render() {
        let modal = '';
        if (this.state.modalIsOpen) {
            modal = (
                <div id={'modal-home'} style={{display: "block"}} className='modal'>
                    <div className='home-modal-inner'>
                        <div className='home-modal-header'><i onClick={() => {
                            this.handleClick()
                        }} className="fa-solid fa-circle-xmark"></i></div>
                        <div className='home-modal-introduction'>
                            <iframe title="Data Visualization" width="1055" height="584.5"
                                    src={this.state.iframe}
                                    frameBorder="0" allowFullScreen="true"></iframe>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <>
                <div className='schools-container'>
                    <div className='list-card'>
                        <div className='lesson-card'>
                            <div className='lesson-item'>
                                <div className={'image mi'}></div>
                                <h4 className={'title'}>Madrasah Ibtidaiyah</h4>
                                <p className={'description'}>Total responden untuk siswa Madrasah Ibtidaiyah adalah sebanyak <b>38.326</b> siswa,
                                    dengan pembagian <b>19.554</b> siswa laki-laki dan <b>18.772</b> siswa perempuan.
                                    Keseluruhan data didapatkan dari sekolah Negeri dan Swasta dengan presentase sekolah Negeri sebanyak <b>91.85%</b> dan sekolah Swasta sebanyak <b>81.5%</b>.
                                    Berdasarkan hasil penilaian, Kalimantan utara menjadi daerah dengan nilai rata-rata PAI tertinggi yaitu <b>72.19</b>.
                                    <b>Selain Kalimantan Utara, DKI Jakarta, dan Bali</b>, pada provinsi lain terindikasi terjadi <i>Learning Loss</i>

                                </p>
                            </div>
                            <div className={'detail-lesson-item'}>
                                <a onClick={() => {
                                    this.handleClick(this.listDataVisualisasi.sebaranMi)
                                }} className={'btn-detail'}>Sebaran data &nbsp;<i className="fa-solid fa-chart-pie"></i></a>
                                <a onClick={()=>{
                                    this.handleClick(this.listDataVisualisasi.learningLossMi)
                                }} className={'btn-detail'}>Learning Loss &nbsp;<i
                                    className="fa-solid fa-square-poll-vertical"></i></a>
                            </div>
                        </div>
                        <div className='lesson-card'>
                            <div className='lesson-item'>
                                <div className={'image mts'}></div>
                                <h4 className={'title'}>Madrasah Tsanawiyah</h4>
                                <p className={'description'}>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum</p>
                            </div>
                            <div className={'detail-lesson-item'}>
                                <a onClick={() => {
                                    this.handleClick(this.listDataVisualisasi.sebaranMts)
                                }} className={'btn-detail'}>Sebaran data &nbsp;<i className="fa-solid fa-chart-pie"></i></a>
                                <a onClick={()=>{
                                    this.handleClick(this.listDataVisualisasi.learningLossMts)
                                }}className={'btn-detail'}>Learning Loss &nbsp;<i
                                    className="fa-solid fa-square-poll-vertical"></i></a>
                            </div>
                        </div>
                        <div className='lesson-card'>
                            <div className='lesson-item'>
                                <div className={'image ma'}></div>
                                <h4 className={'title'}>Madrasah Aliyah</h4>
                                {/*<img src={this.props.image} alt={this.props.name}/>*/}
                                <p className={'description'}>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem IpsumLorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum</p>
                            </div>
                            <div className={'detail-lesson-item'}>
                                <a onClick={() => {
                                    this.handleClick(this.listDataVisualisasi.sebaranMa)
                                }} className={'btn-detail'}>Sebaran data &nbsp;<i className="fa-solid fa-chart-pie"></i></a>
                                <a onClick={()=>{
                                    this.handleClick(this.listDataVisualisasi.learningLossMa)
                                }}className={'btn-detail'}>Learning Loss &nbsp;<i
                                    className="fa-solid fa-square-poll-vertical"></i></a>
                            </div>
                        </div>
                    </div>
                    {console.log('modal is open:' + this.state.modalIsOpen)}
                    {console.log(modal)}
                    {modal}
                </div>
            </>


        );
    }
}

export default Lesson;