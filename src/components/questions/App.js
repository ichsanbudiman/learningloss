import React, {useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Main} from "./Main";
import "../../css/style-options.css";
import axios from "axios";


function App(){
    const[questionsStore, setQuestions] = useState([])
    const [indexActiveQuestion,setIndexActiveQuestion] = useState(0);
    useEffect(()=>{
        fetchQuestion();
    },[])

    function fetchQuestion() {
        axios
            .get('http://localhost:3000/questions')
            .then((res) => {
                setQuestions(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

        return (

            <div>
                <Header questions={questionsStore} indextActiveQuestion={indexActiveQuestion} setIndexActiveQuestion={setIndexActiveQuestion}/>
                <Main questions={questionsStore} setQuestions={setQuestions} indexActiveQuestion={indexActiveQuestion} setIndexActiveQuestion={setIndexActiveQuestion} />
                <Footer/>
            </div>
        );


}

export default App;