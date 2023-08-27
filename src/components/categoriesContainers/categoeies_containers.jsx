


// class App extends Component{
// render(){
//     return(
//         <div>
//             <div>hello</div>
//             <Footer/>
//         </div>
//     )
// }

import CategoriesItems from "../categoriesItems/categories-items";
import '../scss/categories.scss'


  
// } 

// export default App;
const CategoriesContainer=()=>{

    const categories=[
        {
            id:1,
            title:"Denim",
            imageUrl:"https://th.bing.com/th/id/OIP.LokeRnIudzdTatydNvvW-wHaLH?pid=ImgDet&rs=1"
                },
        {
            id:2,
            title:"Shirt",
            imageUrl:"https://th.bing.com/th/id/OIP.V7zcNppTgPIEjsDpqmIQkwHaHa?pid=ImgDet&rs=1"

        },

        {
            id:3,
            title:"Pants",
            imgageUrl:"https://th.bing.com/th/id/OIP.k62mUY6A0WmMr1OkFgj64AHaJW?pid=ImgDet&rs=1"
            
        },
        {
            id:4,
            title:"Wallet",
            imageUrl:"https://th.bing.com/th/id/OIP.V7zcNppTgPIEjsDpqmIQkwHaHa?pid=ImgDet&rs=1"

        },
        {
            id:5,
            title:"Pants",
            imageUrl:"https://th.bing.com/th/id/OIP.V7zcNppTgPIEjsDpqmIQkwHaHa?pid=ImgDet&rs=1"

        },
        
        
    ]
//you dont need to render in function
 {/* //jhan map kroge wha kkey den alazmi hai  */}
         
return(
    // or you can give like this else.title key is for 
    //uniqueness id pr hi id bnao
    <div  className="categories-container">
    {categories.map((category)=>(
        //category me poora array ajaega age jakr sirf utna lega jitna chye hai
 <CategoriesItems  key={category.id} category={category}/>
           ))}
  
         
    </div>
)
}
export default CategoriesContainer;