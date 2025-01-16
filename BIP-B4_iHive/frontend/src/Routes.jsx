import App from "./App";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import IdeaPage from "./IdeaPage";
import IdeaSubmission from "./IdeaSubmission";
import FetchDataComponent from "./display";

function RoutePage(){
    return(
        <BrowserRouter>
    <Routes>
      <Route path = "/" element={<App />}></Route>
      <Route path="/idea" element={<IdeaPage />}></Route>
      <Route path="/submit" element={<IdeaSubmission />}></Route>
      <Route path="/display" element={<FetchDataComponent />}></Route>
    </Routes>
    </BrowserRouter>
    )
}

export default RoutePage