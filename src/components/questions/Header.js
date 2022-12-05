import React, {useEffect, useState} from "react";
import "../../css/QuestionHeader.css";

function Header({questions, indextActiveQuestion,setIndexActiveQuestion}) {
    let category = '';
    let modal = '';
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (isOpen) {
            const elementModal = document.getElementById('modal')
            elementModal.style.display = "block";
        }
    }, [isOpen]);
    if (questions.length > 0) {
        category = questions[indextActiveQuestion].questionCategory;
    }

    function handleModalClick() {
        setIsOpen(!isOpen);
    }
    function selectCategory(index){

        setIndexActiveQuestion(index)
        setIsOpen(!isOpen)
    }

    if (isOpen) {
        modal = (
            <div id='modal' className='modal'>
                <div className='modal-inner'>
                    <div className="index-table-wrapper">
                        <div className="table-head">
                            <span className="id-column">ID</span>
                            <span>Item</span>
                        </div>
                        <ul className="table-body" style={{paddingLeft:0}}>
                            {questions.map((question,index)=>{
                                return (
                                    <li onClick={()=>{selectCategory(index)}}>
                                        <div className="item-data">
                                            <span className="id-column">{index+1}</span>
                                            <span className="name-column">{question.questionCategory}</span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>


                    <button  onClick={() => {
                        handleModalClick()
                        }} className='modal-close-btn'>Tutup
                    </button>
                </div>
            </div>
        );
    }


    return (
        <div className='header'>
            <div className='header-logo'>
                <img
                    src={process.env.PUBLIC_URL +'/images/kemenag.png'}/>
            </div>
            <span className='header-nav' style={{float: "left", height: '100%'}} onClick={handleModalClick}>
                    <span className='intro-to-page-list'>
                        Learning loss
                        <i className="fa-solid fa-circle-chevron-right"></i>
                        Prediksi
                        <i className="fa-solid fa-circle-chevron-right"></i>
                        {category}
                        <i className="fa-solid fa-circle-chevron-down"></i>
                    </span>
                </span>
            <div className='header-home'>
                <a href={'/'}>Home</a>
            </div>
            <div className={'button-close'}>
                {modal}
            </div>


        </div>
    );

}

export default Header;