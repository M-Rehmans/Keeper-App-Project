import React, { useState } from "react";

function CreateArea({ addNotes }) {
  const [inputData, setInputs] = useState({
    title: "",
    content: "",
  });
  function handleInputs(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [name]: value,
      };
    });
  }

  function submitInputs(event) {
    event.preventDefault();
    if (inputData.title.trim() === "" || inputData.content.trim() === "") {
      return;
    }
    const finalNoteData = {
      ...inputData,
      id: Date.now(),
    };
    addNotes(finalNoteData);
    // console.log(inputData);
    setInputs({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form onSubmit={submitInputs}>
        <input
          onChange={handleInputs}
          name="title"
          placeholder="Title"
          value={inputData.title}
        />
        <textarea
          onChange={handleInputs}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputData.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
