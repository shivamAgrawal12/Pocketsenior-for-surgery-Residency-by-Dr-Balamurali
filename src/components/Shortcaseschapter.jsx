import { useParams } from "react-router-dom";
import shortcasesData from "./shortcases";
import wrong from "../assets/break.gif";
import "./Style.css";

const ShortcaseChapter = () => {
  const { id } = useParams();

  const chapter = shortcasesData.find(
    (item) => String(item.chapterId) === String(id)
  );

  if (!chapter) {
    return (
      <div id="no-rec">
        <div id="no-record">
          <img src={wrong} alt="Not Found" id="no-record-img" />
          <h2 id="no-record-para">No Chapter Found</h2>
        </div>
      </div>
    );
  }

  return (
    <div id="chapter-detail">
      <h1 className="chapter-name">
        <span id="about-heading-span">~</span> {chapter.name}
        <span id="about-heading-span"> ~</span>
      </h1>

      <div className="chapter-info">

        <div className="chapter-main">
          {chapter.image && (
            <img src={chapter.image} alt={chapter.name} className="chapter-image" />
          )}

          {chapter.text && <p className="chapter-text">{chapter.text}</p>}
        </div>

        <div className="chapter-dscrb">
          {chapter.history_of_presenting_illness?.length > 0 && (
            <div className="chapter-history-of-presenting-illness">
              <ul>
                {chapter.history_of_presenting_illness.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.past_history?.length > 0 && (
            <div className="chapter-past-history">
              <ul>
                {chapter.past_history.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.personal_history?.length > 0 && (
            <div className="chapter-personal-history">
              <ul>
                {chapter.personal_history.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.abdominal_examination?.length > 0 && (
            <div className="chapter-abdominal-examination">
              <ul>
                {chapter.abdominal_examination.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.general_examination?.length > 0 && (
            <div className="chapter-general-examination">
              <ul>
                {chapter.general_examination.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.local_examination?.length > 0 && (
            <div className="chapter-local-examination">
              <ul>
                {chapter.local_examination.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.inspection?.length > 0 && (
            <div className="chapter-inspection">
              <ul>
                {chapter.inspection.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.palpation?.length > 0 && (
            <div className="chapter-palpation">
              <ul>
                {chapter.palpation.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.percussion?.length > 0 && (
            <div className="chapter-percussion">
              <ul>
                {chapter.percussion.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.auscultation?.length > 0 && (
            <div className="chapter-auscultation">
              <ul>
                {chapter.auscultation.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}
          
          {chapter.dre?.length > 0 && (
            <div className="chapter-dre">
              <ul>
                {chapter.dre.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.summary?.length > 0 && (
            <div className="chapter-summary">
              <ul>
                {chapter.summary.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ShortcaseChapter;
