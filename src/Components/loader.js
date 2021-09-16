import React from "react";
import Loader from "react-loader-spinner";

class Lodr extends React.Component{
    render(){
        return (<Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
            style={{margin:'25% 45%'}}
          />)
    }
}

export default Lodr