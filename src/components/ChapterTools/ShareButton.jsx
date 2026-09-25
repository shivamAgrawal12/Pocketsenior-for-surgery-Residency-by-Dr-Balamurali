import React, { useState } from "react";
import "./ChapterTools.css";

const ShareButton = ({ chapterTitle }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: chapterTitle,
          text: `Read ${chapterTitle}`,
          url,
        });

        return;
      }

      await navigator.clipboard.writeText(url);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  return (
    <button
      type="button"
      className="chapter-tool-button"
      onClick={handleShare}
      title="Share chapter"
    >
      <span className="chapter-tool-icon">🔗</span>

      <span>
        {copied ? "Link Copied" : "Share"}
      </span>
    </button>
  );
};

export default ShareButton;