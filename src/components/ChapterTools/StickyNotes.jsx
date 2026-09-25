import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const getStorageKey = (chapterId) =>
  `surgical_notes_${chapterId}`;

const StickyNotes = ({ chapterId }) => {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState("");

  /* Load saved note */
  useEffect(() => {
    const saved =
      localStorage.getItem(getStorageKey(chapterId)) || "";

    setNote(saved);
  }, [chapterId]);

  /* Save note automatically */
  const handleChange = (event) => {
    const value = event.target.value;

    setNote(value);

    localStorage.setItem(
      getStorageKey(chapterId),
      value
    );
  };

  /* Prevent page scrolling while mobile note is open */
  useEffect(() => {
    if (!open || window.innerWidth > 700) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Close with Escape */
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);

  return (
    <div className="sticky-notes-wrapper">

      {/* NOTES BUTTON */}

      <button
        type="button"
        className="chapter-tool-button"
        onClick={() => setOpen((current) => !current)}
        title="Open notes"
      >
        <span className="chapter-tool-icon">
          📝
        </span>

        <span>Notes</span>
      </button>


      {/* DESKTOP NOTE */}

      {open && window.innerWidth > 700 && (
        <div
          className="sticky-note"
          role="dialog"
          aria-label="My Notes"
        >
          <NoteContent
            note={note}
            handleChange={handleChange}
            onClose={() => setOpen(false)}
          />
        </div>
      )}


      {/* MOBILE NOTE */}

      {open &&
        window.innerWidth <= 700 &&
        createPortal(
          <div className="sticky-note-mobile-layer">

            <div
              className="sticky-note-backdrop"
              onClick={() => setOpen(false)}
            />

            <div
              className="sticky-note sticky-note-mobile"
              role="dialog"
              aria-modal="true"
              aria-label="My Notes"
            >
              <NoteContent
                note={note}
                handleChange={handleChange}
                onClose={() => setOpen(false)}
              />
            </div>

          </div>,
          document.body
        )}
    </div>
  );
};


/* =========================================================
   NOTE CONTENT
========================================================= */

const NoteContent = ({
  note,
  handleChange,
  onClose,
}) => {
  return (
    <>
      <div className="sticky-note-header">

        <strong>
          My Notes
        </strong>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close notes"
        >
          x
        </button>

      </div>
      <p className="sticky-imp-notes">This note will only be remain save in same device and broswer</p>
      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Write your notes here..."
        autoFocus
      />

      <span className="sticky-note-saved">
        ✓ Saved automatically
      </span>
    </>
  );
};

export default StickyNotes;