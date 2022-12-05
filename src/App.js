import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './components/App';
import Question from './components/questions/App'
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/prediksi/:jenjang'} element={<Question/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;