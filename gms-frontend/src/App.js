import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import {Routes,Route,useNavigate} from "react-router-dom"
import Dashboard from './pages/Dashboard/dashboard';
import Members from './pages/Members/Members';
import Slidebar from './components/Slidebar/Slidebar';
import{useState,useEffect} from "react";
import GeneralUser from './pages/GeneralUser/GeneralUser';
import MemberDetail from "./pages/MemberDetail/MemberDetail";




function App() {
  const navigate = useNavigate();
  const [isLogin,setIsLogin] = useState(false)

  useEffect(()=>{
    let isLogedIn = sessionStorage.getItem("isLogin")
    if(isLogedIn){
    setIsLogin(true)
   
    }
    else{
       navigate("/")
    }

  },[sessionStorage.getItem("isLogin")])
  return (
    <div className="flex">
      {isLogin && <Slidebar/>}
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/Members" element={<Members/>}/>
       <Route path="/specific/:page" element={<GeneralUser/>}/>
       <Route path="/member/:id" element={<MemberDetail/>}/>
      
      </Routes>
   
   
    </div>
  );
}

export default App;
