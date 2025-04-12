import React from "react";
import { formatText } from "../../utils/formatText.jsx";
import "./RichTextDisplay.css";
const RichTextDisplay = ({ content }) => {
  const formattedContent = formatText(content); // Process the content

  return (
    <div
      className="rich-text-content"
      dangerouslySetInnerHTML={{ __html: formattedContent }} // Inject the sanitized HTML
    />
  );
};

export default RichTextDisplay;
