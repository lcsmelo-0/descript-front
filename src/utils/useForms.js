import { useState } from "react";

const UseForms = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    company_name: "",
    password: "",
    phone: "",
    disability: "",
    job: "",
    company_type: "",
    department: "",
    address: "",
    cnpj: "",
    url: "",
    employees: "",
    customers: ""
  });
  const change = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    inputs,
    change
  };
};

export default UseForms;
