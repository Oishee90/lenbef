import React, { useState } from "react";

const RecommendationLetter = ({ letter }) => {
  // State for storing the recommendation text

  return (
    <div className="overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {/* Header */}
      <div dangerouslySetInnerHTML={{ __html: letter.letter }} />
    </div>
  );
};

export default RecommendationLetter;
