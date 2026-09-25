import React from "react";
import BookmarkButton from "./BookmarkButton";
import StickyNotes from "./StickyNotes";
import ShareButton from "./ShareButton";
import "./ChapterTools.css";

const ChapterTools = ({
  chapterId,
  chapterTitle,
}) => {
  return (
    <div className="chapter-tools">

      <div className="chapter-tools-bar">

        <BookmarkButton
          chapterId={chapterId}
          chapterTitle={chapterTitle}
        />

        <StickyNotes
          chapterId={chapterId}
        />

        <ShareButton
          chapterTitle={chapterTitle}
        />

      </div>

    </div>
  );
};

export default ChapterTools;