// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';
// import File1 from './components/file1/file1';
// import File2 from './components/file2/file2';
// import Header from './componentsUsingFunc/header';
// import Footer from './componentsUsingFunc/footer';

import CategoriesContainer from "./components/categoriesContainers/categoeies_containers";

import {Route,Routes}  from "react-router"
import CategoriesItems from "./components/categoriesItems/categories-items";
import About from "./components/about/about";
import ContactUs from "./components/ContactUs/conatactUs";







// class App extends Component{
// render(){
//     return(
//         <div>
//             <div>hello</div>
//             <Footer/>
//         </div>
//     )
// }
  
// } 
// react router is use for route pages for using need to insatall package 
{/* <CategoriesContainer/> */}
// export default App;
const App=()=>{
return(
<Routes>
    <Route path="/" element={<CategoriesItems/>} />
    <Route path="/about" element={<About/>}/>
    <Route path="/contactUs"  element={<ContactUs/>}/>

</Routes>

)



}
export default App;