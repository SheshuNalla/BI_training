import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import SearchBar from "@/components/SearchBar";
function App() {

  const [showSidebar, setshowSidebar] = useState(true);

  useEffect(() => {
  const handleResize = () => {
    console.log("Window width:", window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <button onClick = {() => setshowSidebar(!showSidebar)}>
        Toggle Sidebar
      </button> 

      <div>
        {showSidebar && <Sidebar/>}
        <Dashboard/>
      </div>
    </>
  )
}

export default App;