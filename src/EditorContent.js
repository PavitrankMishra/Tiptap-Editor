import React, { useState, useEffect } from "react";
import { useEditor, EditorContent as TipTapEditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Strike from "@tiptap/extension-strike";
import Highlight from "@tiptap/extension-highlight";
import styles from "./EditorContent.module.css";

const EditorContent = ({ onEditorReady }) => {
  const [content, setContent] = useState(
    "Hi, I am a TipTap editor built with React! Feel free to start typing your text. You can either delete the existing content or simply continue writing below it."
  );
  // Specifies the features or formatting options available
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      Italic,
      Underline,
      Heading,
      BulletList,
      OrderedList,
      Link,
      Image,
      Strike,
      ListItem,
      Highlight,
    ],
    content: content,
    onUpdate: ({ editor }) => {
      const newContent = editor.getHTML();
      setContent(newContent);
    },
  });

  // It helps identify that the editor instance is ready and is avaibale for interaction
  useEffect(() => {
    if (onEditorReady) {
      onEditorReady(editor);
    }
  }, [editor, onEditorReady]);

  return (
    <div className={styles.tiptapEditor}>
      <TipTapEditorContent
        editor={editor}
        className={styles.ProseMirror}
      ></TipTapEditorContent>
    </div>
  );
};

export default EditorContent;
