import React, { useEffect, useState } from "react";
import UseForm from "./useForm";
import Counter from "./Counter";

const Page = () => {
  const [value, handleChange] = UseForm({
    name: "",
    email: "",
  });

  console.log("parent")

  return (
    <div>
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

      <Counter />
    </div>
  );
};

export default Page;
