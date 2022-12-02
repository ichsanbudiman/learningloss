import React from "react";

class Lesson extends React.Component{
    constructor(propertie) {
        super(propertie);
        this.state={modalIsOpen:false};
    }
    handleClick(){
        if(this.state.modalIsOpen){
            this.setState({modalIsOpen:false})
        }else{
            this.setState({modalIsOpen:true})
        }
    }

    render() {
        let modal = '';
        if(this.state.modalIsOpen){
            modal = (
                <div className='modal'>
                <div className='modal-inner'>
                    <div className='modal-header'></div>
                    <div className='modal-introduction'>
                        {/* Tampilkan nama pelajaran */}
                        <h2>{this.props.name}</h2>

                        {/* Tampilkan pengantar pelajaran */}
                        <p>{this.props.introduction}</p>
                    </div>
                    <button onClick={()=>{this.handleClick()}} className='modal-close-btn'>
                        Tutup
                    </button>
                </div>
            </div>
            );
        }

        return(
                <div className='lesson-card'>
                    <div onClick={()=>{this.handleClick()}} className='lesson-item'>
                        <p>{this.props.name}</p>
                        <img src={this.props.image} alt={this.props.name}/>
                    </div>
                    {modal}
                </div>


        );
    }
}

export default Lesson;