import { useParams } from "react-router-dom";
import loncasesData from "./longcases"; // ✅ Keep consistent naming
import wrong from "../assets/break.gif";
import "./Style.css";

const LongcaseChapter = () => {
  const { id } = useParams();

  const chapter = loncasesData.find(
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
          {chapter.complete_name && <p className="chapter-text">{chapter.complete_name}</p>}

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

          {chapter.family_history?.length > 0 && (
            <div className="chapter-family_history">
              <ul>
                {chapter.family_history.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.medical_history?.length > 0 && (
            <div className="chapter-medical-history">
              <ul>
                {chapter.medical_history.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.menstrual_history?.length > 0 && (
            <div className="chapter-menstrual-history">
              <ul>
                {chapter.menstrual_history.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.surgical_history?.length > 0 && (
            <div className="chapter-surgical-history">
              <ul>
                {chapter.surgical_history.map((step, index) => (
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

          {chapter.menstrual_and_obstetric_history?.length > 0 && (
            <div className="chapter-menstrual-and-obstetric-history">
              <ul>
                {chapter. menstrual_and_obstetric_history.map((step, index) => (
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

          {chapter.proctoscopic_examination?.length > 0 && (
            <div className="chapter-proctoscopic-examination">
              <ul>
                {chapter.proctoscopic_examination.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.per_abdomen_examination?.length > 0 && (
            <div className="chapter-per-abdomen-examination">
              <ul>
                {chapter.per_abdomen_examination.map((step, index) => (
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

          {chapter.cns?.length > 0 && (
            <div className="chapter-cns">
              <ul>
                {chapter.cns.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.per_vaginal_examination?.length > 0 && (
            <div className="chapter-per-vaginal-examination">
              <ul>
                {chapter.per_vaginal_examination.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.bimanual_examination?.length > 0 && (
            <div className="chapter-bimanual-examination">
              <ul>
                {chapter.bimanual_examination.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.systemic_examination?.length > 0 && (
            <div className="chapter-systemic-examination">
              <ul>
                {chapter.systemic_examination.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.respiratory_system?.length > 0 && (
            <div className="chapter-respiratory-system">
              <ul>
                {chapter.respiratory_system.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {chapter.cardiovascular?.length > 0 && (
            <div className="chapter-cardiovascular">
              <ul>
                {chapter.cardiovascular.map((step, index) => (
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

          {chapter.differntial_diagnosis?.length > 0 && (
            <div className="chapter-differntial-diagnosis">
              <ul>
                {chapter.differntial_diagnosis.map((step, index) => (
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

export default LongcaseChapter;
