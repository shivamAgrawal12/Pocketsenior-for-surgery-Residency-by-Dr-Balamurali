import React, {
  useEffect,
  useState,
} from "react";

const BOOKMARK_STORAGE_KEY =
  "surgical_residency_bookmarks";

const BOOKMARK_UPDATED_EVENT =
  "surgical-residency-bookmark-updated";

const BookmarkButton = ({
  chapterId,
  chapterTitle,
}) => {
  const [bookmarked, setBookmarked] =
    useState(false);

  /* =========================================
     LOAD BOOKMARK STATUS
  ========================================= */

  const loadBookmarkStatus = () => {
    try {
      const saved =
        JSON.parse(
          localStorage.getItem(
            BOOKMARK_STORAGE_KEY
          )
        ) || [];

      const exists = saved.some(
        (item) =>
          String(item.id) ===
          String(chapterId)
      );

      setBookmarked(exists);
    } catch (error) {
      console.error(
        "Bookmark load failed:",
        error
      );

      setBookmarked(false);
    }
  };

  /* =========================================
     INITIAL LOAD
     + LISTEN FOR MENU UPDATES
  ========================================= */

  useEffect(() => {
    // Initial state
    loadBookmarkStatus();

    // Same-tab updates
    const handleBookmarkUpdate = () => {
      loadBookmarkStatus();
    };

    window.addEventListener(
      BOOKMARK_UPDATED_EVENT,
      handleBookmarkUpdate
    );

    // Other-tab updates
    const handleStorage = (event) => {
      if (
        event.key === BOOKMARK_STORAGE_KEY
      ) {
        loadBookmarkStatus();
      }
    };

    window.addEventListener(
      "storage",
      handleStorage
    );

    return () => {
      window.removeEventListener(
        BOOKMARK_UPDATED_EVENT,
        handleBookmarkUpdate
      );

      window.removeEventListener(
        "storage",
        handleStorage
      );
    };
  }, [chapterId]);

  /* =========================================
     TOGGLE BOOKMARK
  ========================================= */

  const toggleBookmark = () => {
    try {
      const saved =
        JSON.parse(
          localStorage.getItem(
            BOOKMARK_STORAGE_KEY
          )
        ) || [];

      /* ===============================
         REMOVE
      =============================== */

      if (bookmarked) {
        const updated = saved.filter(
          (item) =>
            String(item.id) !==
            String(chapterId)
        );

        localStorage.setItem(
          BOOKMARK_STORAGE_KEY,
          JSON.stringify(updated)
        );

        setBookmarked(false);

        window.dispatchEvent(
          new CustomEvent(
            BOOKMARK_UPDATED_EVENT
          )
        );

        return;
      }

      /* ===============================
         ADD
      =============================== */

      const currentPath =
        window.location.hash
          ? window.location.hash.replace(
              /^#/,
              ""
            )
          : window.location.pathname;

      const bookmark = {
        id: chapterId,
        title: chapterTitle,
        path: currentPath,
        savedAt:
          new Date().toISOString(),
      };

      const updated = [
        ...saved,
        bookmark,
      ];

      localStorage.setItem(
        BOOKMARK_STORAGE_KEY,
        JSON.stringify(updated)
      );

      setBookmarked(true);

      window.dispatchEvent(
        new CustomEvent(
          BOOKMARK_UPDATED_EVENT
        )
      );

    } catch (error) {
      console.error(
        "Bookmark failed:",
        error
      );
    }
  };

  /* =========================================
     UI
  ========================================= */

  return (
    <button
      type="button"
      className={`chapter-tool-button ${
        bookmarked ? "active" : ""
      }`}
      onClick={toggleBookmark}
      title={
        bookmarked
          ? "Remove bookmark"
          : "Bookmark chapter"
      }
    >
      <span className="chapter-tool-icon">
        {bookmarked ? "★" : "☆"}
      </span>

      <span>
        {bookmarked
          ? "Bookmarked"
          : "Bookmark"}
      </span>
    </button>
  );
};

export default BookmarkButton;