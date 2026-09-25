import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

const BOOKMARK_STORAGE_KEY =
  "surgical_residency_bookmarks";

const BOOKMARK_UPDATED_EVENT =
  "surgical-residency-bookmark-updated";

const BookmarkMenu = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [open, setOpen] = useState(false);

  const bookmarkMenuRef = useRef(null);

  const navigate = useNavigate();

  /** LOAD BOOKMARKS **/

  const loadBookmarks = () => {
    try {
      const saved =
        JSON.parse(
          localStorage.getItem(
            BOOKMARK_STORAGE_KEY
          )
        ) || [];

      setBookmarks(
        Array.isArray(saved)
          ? saved
          : []
      );
    } catch (error) {
      console.error(
        "Failed to load bookmarks:",
        error
      );

      setBookmarks([]);
    }
  };

  /** INITIAL LOAD + LISTEN FOR UPDATES **/

  useEffect(() => {
    loadBookmarks();

    // Same-tab bookmark updates
    const handleBookmarkUpdate = () => {
      loadBookmarks();
    };

    window.addEventListener(
      BOOKMARK_UPDATED_EVENT,
      handleBookmarkUpdate
    );

    // Other-tab localStorage updates
    const handleStorage = (event) => {
      if (
        event.key ===
        BOOKMARK_STORAGE_KEY
      ) {
        loadBookmarks();
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
  }, []);

  /** CLOSE WHEN CLICKING OUTSIDE **/

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event) => {
      if (
        bookmarkMenuRef.current &&
        !bookmarkMenuRef.current.contains(
          event.target
        )
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, [open]);

  /** OPEN BOOKMARK **/

  const handleBookmarkClick = (
    bookmark
  ) => {
    if (!bookmark?.path) {
      return;
    }

    setOpen(false);

    navigate(bookmark.path);

    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    });
  };

  /** REMOVE SINGLE BOOKMARK **/

  const removeBookmark = (
    event,
    id
  ) => {
    event.stopPropagation();

    const updated = bookmarks.filter(
      (item) =>
        String(item.id) !==
        String(id)
    );

    localStorage.setItem(
      BOOKMARK_STORAGE_KEY,
      JSON.stringify(updated)
    );

    setBookmarks(updated);

    window.dispatchEvent(
      new CustomEvent(
        BOOKMARK_UPDATED_EVENT
      )
    );
  };

  /** REMOVE ALL BOOKMARKS **/

  const clearAll = () => {
    localStorage.removeItem(
      BOOKMARK_STORAGE_KEY
    );

    setBookmarks([]);

    window.dispatchEvent(
      new CustomEvent(
        BOOKMARK_UPDATED_EVENT
      )
    );
  };

  /** UI **/

  return (
    <div
      className="bookmark-menu-wrapper"
      ref={bookmarkMenuRef}
    >
      {/* NAVBAR BOOKMARK BUTTON */}

      <button
        type="button"
        className={`navbar-bookmark-button ${
          open ? "active" : ""
        } ${
          bookmarks.length > 0
            ? "has-bookmarks"
            : ""
        }`}
        onClick={() =>
          setOpen(
            (value) => !value
          )
        }
        aria-label="Bookmarked chapters"
        title="Bookmarked chapters"
      >
        <span className="navbar-bookmark-icon">
          {bookmarks.length > 0
            ? "★"
            : "☆"}
        </span>

        {bookmarks.length > 0 && (
          <span className="bookmark-count">
            {bookmarks.length}
          </span>
        )}
      </button>

      {/* BOOKMARK MENU */}

      {open && (
        <div className="bookmark-menu">
          {/* HEADER */}

          <div className="bookmark-menu-header">
            <div>
              <strong>
                Bookmarked Chapters
              </strong>

              <span>
                {bookmarks.length} saved
              </span>
            </div>

            <button
              type="button"
              className="bookmark-close"
              onClick={() =>
                setOpen(false)
              }
              aria-label="Close bookmarks"
            >
              ×
            </button>
          </div>

          {/* EMPTY STATE */}

          {bookmarks.length === 0 ? (
            <div className="bookmark-empty">
              <div className="bookmark-empty-icon">
                ☆
              </div>

              <strong>
                No bookmarks yet
              </strong>

              <p>
                Bookmark a chapter to
                access it quickly from
                here.
              </p>
            </div>
          ) : (
            <>
              {/* BOOKMARK LIST */}

              <div className="bookmark-list">
                {bookmarks.map(
                  (bookmark) => (
                    <div
                      className="bookmark-item"
                      key={String(
                        bookmark.id
                      )}
                      onClick={() =>
                        handleBookmarkClick(
                          bookmark
                        )
                      }
                    >
                      <div className="bookmark-item-icon">
                        ★
                      </div>

                      <div className="bookmark-item-content">
                        <strong>
                          {bookmark.title}
                        </strong>

                        <span>
                          Open chapter →
                        </span>
                      </div>

                      <button
                        type="button"
                        className="bookmark-remove"
                        onClick={(
                          event
                        ) =>
                          removeBookmark(
                            event,
                            bookmark.id
                          )
                        }
                        title="Remove bookmark"
                        aria-label={`Remove ${bookmark.title}`}
                      >
                        ×
                      </button>
                    </div>
                  )
                )}
              </div>

              {/* REMOVE ALL */}

              <button
                type="button"
                className="bookmark-clear"
                onClick={clearAll}
              >
                Remove All Bookmarks
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BookmarkMenu;