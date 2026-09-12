import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import './App.css'

function App() {
  // const [allNotes, createNote] = useState([]);
  const [allNotes, createNote] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(allNotes));
  }, [allNotes]);
  function getInputData(detail) {
    // console.log(detail);
    createNote((prev) => {
      return [...prev, detail];
    });
    console.log(allNotes);
  }

  function removeNote(id) {
    createNote((prevNotes) => {
      return prevNotes.filter((item) => item.id !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNotes={getInputData} />
      {/* <Note /> */}
      {allNotes.map((note) => {
        return (
          <Note
            id={note.id}
            key={note.id}
            title={note.title}
            content={note.content}
            onDelete={removeNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
