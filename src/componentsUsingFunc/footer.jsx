import Header from "./header";
const Footer=()=>{
    const  name="Hamza";
// render function khud hi krta hai 
return(
    <div>
<Header p={name}  />
<Header nam={"Abbas"} />
<Header nam="Ali" />
<Header nam="Abdullah" />
</div>
)

}

export default Footer;