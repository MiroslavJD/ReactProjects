import React from 'react'
import {useNavigate,Link,Navigate} from "react-router-dom";



function ProductList() {
  const navigate = useNavigate();
  return (
    <div>
      Add product{" "}
       <button
       onClick={()=>{
        navigate("/product/create");
      }}
      >
        Add product{" "}
      </button>
    </div>
  );
}

export default ProductList;
