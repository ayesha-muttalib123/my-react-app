import File1 from "../file1/file1";

const { Component } = require("react");

class File2 extends Component{
    constructor()
    {
        super();
        this.state={
        
        }
    }

render(){

    return(

        <div>
           <h2>hello this is file2</h2>
           <File1  b={'Hello From file2'}/>

        </div>
    )
}



}

export default File2;