import Login from "../../components/login/login"
import Signup from "../../components/signup/signup"


const Home = () => {
 return (
  <div className="w-full h-[100vh] h-screen overflow-hidden">
    <div className="border-2 border-slate-800 bg-slate-800 text-white p-5 font-semibold text-center">
      Wellcome to Smart Gym Platform</div>
      <div className="w-full h-[100%] flex bg-cover bg-[url(https://static.vecteezy.com/system/resources/thumbnails/056/157/720/small_2x/dynamic-fitness-advertisement-showcases-unique-geolocation-pin-crafted-from-gym-weights-and-kettlebells-set-in-dark-industrial-style-gym-bright-lighting-highlights-equipment-s-details-photo.jpeg)]">
      <div className="w-full lg:flex">


        <Login/>
        <Signup/>


        


      </div>
        
      </div>
    </div>
    
)
}

export default Home