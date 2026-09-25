/** CHAPTER SECTION HELPERS **/

const EXCLUDED_KEYS = new Set([
  "chapterId",
  "chapter",
  "name",
  "complete_name",
  "image",
  "text",
]);


/** FORMAT SECTION TITLE **/

export const formatSectionTitle = (key) => {
  const titleMap = {
    dre: "Digital Rectal Examination",

    cns: "Central Nervous System Examination",

    pr: "Per Rectal Examination",

    per_abdomen_examination: "Per Abdomen Examination",

    per_vaginal_examination: "Per Vaginal Examination",

    bimanual_examination: "Bimanual Examination",

    general_examination: "General Examination",

    local_examination: "Local Examination",

    systemic_examination: "Systemic Examination",

    respiratory_system: "Respiratory System",

    cardiovascular: "Cardiovascular System",

    history_of_presenting_illness: "History of Presenting Illness",

    menstrual_and_obstetric_history: "Menstrual and Obstetric History",

    differntial_diagnosis: "Differential Diagnosis",

    differential_diagnosis: "Differential Diagnosis",

    abdominal_examination: "Abdominal Examination",

    per_abdomen: "Per Abdomen Examination",
  };

  if (titleMap[key]) {
    return titleMap[key];
  }

  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};


/** GET CHAPTER SECTIONS DYNAMICALLY **/

export const getChapterSections = (chapter) => {
  if (!chapter) {
    return [];
  }

  return Object.entries(chapter)
    .filter(([key, value]) => {

      /* Ignore metadata */
      if (EXCLUDED_KEYS.has(key)) {
        return false;
      }

      /* Ignore empty values */
      if (
        value === null ||
        value === undefined ||
        value === ""
      ) {
        return false;
      }

      /* Accept arrays */
      if (Array.isArray(value)) {
        return value.length > 0;
      }

      /* Accept strings such as `pr: "WNL"` */
      if (typeof value === "string") {
        return value.trim().length > 0;
      }

      return false;
    })
    .map(([key, content]) => ({
      key,
      title: formatSectionTitle(key),
      content,
    }));
};