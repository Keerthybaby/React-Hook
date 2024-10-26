import React from "react";
import UseForm from "./useForm";

const page = () => {
  const [value, handleChange] = UseForm({
    name: "",
    email: "",
  });

  console.log(value.name)
  console.log(value.email)
  return (
    <div>
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
    </div>
  );
};

export default page;
