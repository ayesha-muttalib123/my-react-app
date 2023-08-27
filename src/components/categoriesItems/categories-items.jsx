
import '../scss/categories.scss'

const CategoriesItems=({category})=>{
    const {title,imageUrl}=category
    return(
     
      
            <div  className="category-container">
                {/* selfclosing div tag  */}
 <div className="background-image" style={{backgroundImage:'url(${imageUrl})'}} />

            <div className="category-body-conatiner">
                <h2>
                    {title}
                </h2>
               <p>Shop Now</p>
            </div>


        
  
         
    </div>
    )
}

export default CategoriesItems;