import React from "react";

const Form = ({ setInpurSearch, finalfinal }) => {
  const submitForm = (e) => {
    e.preventDefault();
    setInpurSearch(e.target.search.value);
    e.target.search.value = "";
  };
  // console.log(inpurSearch)
  return (
    <form className="input-form" onSubmit={submitForm}>
      <input
        list="lista"
        id="search"
        type="text"
        placeholder="Search Location..."
      />
      <datalist id="lista">
        {finalfinal.map((e) => (
          <option key={e.name} value={e.name} />
        ))}
      </datalist>
      <button>Search</button>
    </form>
  );
};

export default Form;
