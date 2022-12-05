import React from "react";
import Lesson from "./Lesson";
import HomeTop from "./HomeTop";

class Main extends React.Component{
    render() {
        return(
            <div className='main-wrapper'>
                <div className='main'>
                    <HomeTop/>
                    <Lesson/>
                </div>
            </div>
        );
    }
}

export default Main;