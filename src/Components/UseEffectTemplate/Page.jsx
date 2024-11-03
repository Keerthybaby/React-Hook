import React, { useEffect,useState } from "react";
import UseForm from "./useForm";
import Test from "./Test";

const Page = () => {
  const [value, handleChange] = UseForm({
    name: "",
    email: "",
  });

  const [showTest,setShowTest]=useState(true);

  // useEffect(()=>{
  //   console.log("Running");

  //  const test = ()=>{
  //     console.log("completed");

  //   }
  //   test();

  //   return ()=>{
  //     console.log("Unmount");
  //   }
  // },[value.name,value.email] );

 
  return (
    <div>
      {showTest ? <Test /> : null}
     
      <button onClick={()=>setShowTest(!showTest)}>Toggle</button>
      <form action="" autoComplete="off">
      <input
        type="text"
        name="name"
        value={value.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={value.email}
        onChange={handleChange}
      />
      </form>
    </div>
  );
};

export default Page;
