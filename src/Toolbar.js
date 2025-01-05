import React from "react";
import styles from "./Toolbar.module.css";

const Toolbar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className={styles.toolbar}>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        <span>B</span> {/* Generates a bold font */ }
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
      >
        <span>I</span> {/* Generates an italic font */ }
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
      >
        <span className={styles.underline}>U</span> {/* Gives an underline on the text */ }
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
      >
        <span>S</span> {/* Generates a strik on the text */ }
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        disabled={!editor.can().chain().focus().toggleHighlight().run()}
      >
        <span>H</span> {/* Highlights the text */ }
      </button>
      {[1, 2, 3].map((level) => (
        <button
          key={level}
          onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
          disabled={
            !editor.can().chain().focus().toggleHeading({ level }).run()
          }
        >
          <span>H{level}</span> {/* Provides different heading size functionality */ }
        </button>
      ))}

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
      >
        <span>UL</span> {/* Provides a bullet to a list item */ }
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
      >
        <span>OL</span> {/* Provides a number to the list item */ }
      </button>
    </div>
  );
};

export default Toolbar;
