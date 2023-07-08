import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopicsCovered from "./Pages/TopicsCovered";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/topiccovered" element={<TopicsCovered/>}></Route>
     </Routes>
     <Home/>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
