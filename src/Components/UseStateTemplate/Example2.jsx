import React, { useState } from 'react';

const Example2 = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");

  console.log(name);
  console.log(email);

  return (
    <div>
      <input type="text" name="name" value={name} onChange={(event)=>setName(event.target.value)} />
      <input type="text" name="email" value={email} onChange={(event)=>setEmail(event.target.value)} />
      
    </div>
  );
};

export default Example2;