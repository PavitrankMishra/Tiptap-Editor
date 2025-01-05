import React, { useState } from "react";
import styles from "./App.module.css";
import EditorContent from "./EditorContent";
import Toolbar from "./Toolbar";

function App() {
  // useState used to store the state
  const [editor, setEditor] = useState(null);
  const [notes, setNotes] = useState([]);

  const handleEditorReady = (editorInstance) => {
    setEditor(editorInstance);
  };

  // Helps to save notes in the array
  const handleSaveNote = () => {
    if (editor) {
      const newNote = editor.getHTML();
      console.log(newNote);
      setNotes((prevNotes) => [...prevNotes, newNote]); //Using spread operator that helps to add data of a new note in the array
      editor.commands.clearContent(); // Clears the content in the editor when clicked on Save Note
    } else {
      console.log("Editor is not ready yet");
    }
  };

  return (
    <>
      <div className={styles.app}>
        <p className={styles.heading}>Tiptap Editor</p>
        <Toolbar editor={editor} /> {/* Add a toolbar to the editor */}
        <EditorContent onEditorReady={handleEditorReady} />{" "}
        {/* Creates a space for writing content */}
        <button className={styles.saveButton} onClick={handleSaveNote}>
          Save Note
        </button>{" "}
        {/* Button to save the content in editor as a note*/}
      </div>
      {/* Generates a note if the notes array is not empty and if the notes array is empty than it will render a p element  */}
      <div className={styles.parentContainer}>
        {notes.length > 0 ? ( //Checks if the notes state is not empty
          notes.map((note, index) => ( // map method that traverse through each element in array 
            <div key={index} className={styles.notesContainer}>
              <h1>Note: {index + 1}</h1>
              <hr></hr>
              <div
                dangerouslySetInnerHTML={{ __html: note }} //It helps to render the content as it is formatted in the editor 
                className={styles.data}
              />
            </div>
          ))
        ) : (
          <p className={styles.notes}>Enter some data to store a note.</p>
        )}
      </div>
    </>
  );
}

export default App;
