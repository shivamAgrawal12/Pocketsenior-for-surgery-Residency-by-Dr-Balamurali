import peripheral from '../assets/peripheral-vascular.jpg';
import stoma from '../assets/Stoma.jpeg';
import icd from '../assets/ICD.png';
import tube from '../assets/tube.jpg';
import diabetic from '../assets/diabetic-ulcer.jpg';


const shortcasestudy = [
    {
        chapterId: "1",
        chapter: "Chapter - 1",
        name: "PERIPHERAL VASCUALR DISEASE",
        image: peripheral,
        text: "My patient, 40-year-old male, resident of giridih, barber by occupation belonging to low socioeconomic group came with complaint of pain in the right leg for the last 2 years and blackish discoloration of the forefoot for the last one month",
        history_of_presenting_illness: [
                "He was apparently asymptomatic 2 years before after which he developed pain over his right leg over his calf region which was insidious in onset, gradually progressive, cramping in nature, aggravated on walking, and relieved on taking rest associated with burning sensation, initially pain was felt after walking for 1km, but recently he is feeling the pain after walking 500m. He used to take rest to	 relieve the pain. For the past one month there is history of spontaneous onset of pain during night which was relieved on hanging the foot down",
                "He noticed blackish discoloration initially over the tip of fifth toe of right foot which extended to involve the distal one third of the foot",
                "No history of trauma",
                "No history of loss of consciousness, transient black out and blurring of vision",
                "No history of chest pain, palpitation and breathlessness"
            ],
        past_history: [
                "There is no associated known systemic illness",
                "There is no previous surgical history"
            ],
        personal_history: [
                "Patient is addicted to smoking 4 to 5 cigarettes per day and tobacco for last 15 years",
                "Sleep cycle is disturbed due to spontaneous onset of pain during night",
                "Bowel and bladder movement normal",
                "No relevant family history"
            ],
        inspection: [
                "A black mummified appearance of the distal one third of the right foot with clear line of demarcation",
                "Slight pallor is present over the right foot compared to the left foot",
                "Loss of shininess, decreased hair in the dorsum of the both foot",
                "Rest of the lower limb and the contralateral lower limb is normal"
            ],
        palpation: [
                "The right foot is cold, rest of the right and opposite lower limb temperature is normal",
                "Dry gangrene felt as hard and shrivelled area over the distal one third of the dorsum of foot with line of demarcation 8 cm from the mid malleolus point with loss of sensation on the gangrenous part",
                "No associated crepitus",
                "Crossed leg test of right lower limb not present",
                "Femoral artery palpable, popliteal artery, anterior and posterior tibial artery, dorsalis pedis artery of the right lower limb not palpable",
                "On the other leg, dorsalis pedis artery not palpable, rest all palpable",
                "Capillary refilling time 10 seconds and burger test gave angle of 45 degree",
                "Reflex intact"
            ],
        summary:[
                "40-year-old male came with complaint of intermittent claudication and rest pain for the past 2 years with blackish discoloration of distal one third of right foot who has history of smoking for the past 15 years on examination, dry gangrene of distal one third of right foot with absent peripheral pulse proceeding towards the provisional diagnosis of peripheral arterial disease of the right lower limb",
            ],
    },  
    {
        chapterId: "2",
        chapter: "Chapter - 2",
        name: "STOMA",
        image: stoma,
        text: "My patient, 38-year-old male farmer from Hazaribagh belonging to low socio-economic status presented with stoma in situ over right lower abdomen for 7 days",
        history_of_presenting_illness: [
                "My patient was apparently well 12 days back when he complained of non-passage of stool and non-passage of flatus, for 5 days associated with abdominal distension and generalized pain abdomen",
                "He was admitted in RIMS Ranchi and has undergone emergency exploratory laparotomy 8 days back. Intra operative finding of strictures in distal ileum about 50cm proximal to IC Junction with a perforation of 0.5 * 0.5 cm",
                "For this, resection of the stricture segment of ileum done and an end ileostomy with mucus fistula(double barrel) was made in RIF 7 days back. Stoma started functioning from POD 2",
                "At present stoma is healthy and well-functioning. it has semi solid to liquid output of about 600 to 700ml",
                "There is History of altered bowel habit for 2 months"
            ],
        inspection: [
                "An exteriorised loop of bowel with 2 visible opening in right iliac fossa is present approx. 3 cm lateral and 2 cm below the umbilicus",
                "It is attached with stoma bag",
                "The stoma is protruding approximately 4cm above the skin level and multiple mucocutaneous sutures are present around it. Semi solid stool is coming out from the lateral opening",
                "Mucosa is pink and healthy",
                "Skin around the stomal opening is smooth and no excoriation or redness or discharge present",
                "No retraction or visible cough impulse present",
                "Stoma was covered by stoma bag which was 2-piece disposable and transparent"
            ],
        palpation: [
                "There is no local rise in temperature",
                "There is no tenderness",
                "Division stoma with 2 opening in right iliac fossa when finger could easily be insinuated",
                "Mucosa was moist with no evidence of bleeding",
                "Temperature of skin around the stoma was normal with no tenderness",
                "Temperature over all the quadrants is normal mild tenderness in present in the midline suture site",
                "No organomegaly present",
                "All hernial orifices are intact",
                "Renal angle tenderness absent"
            ],
        abdominal_examination: [
                "Abdomen is nether distended nor scaphoid",
                "Midline incision extending 6cm above the umbilicus and 3 cm below the umbilicus is present with suture in situ and the wound appeared healthy",
                "Scar present in left iliac fossa over the abdominal drain site",
                "No venous engorgement in seen"
            ],
        percusssion:["Tympanic note presents over the abdomen"],
        auscultation:["Normal bowel sound is present"],
        dre: [
                "Normal anal tone",
                "A 40 years old male with 2 exteriorised bowel loops protruding with one loop about 4cm above skin level and another 2cm above in right iliac fossa and with semisolid content",
                "So, my provisional diagnosis is an end ileostomy with mucus fistula (double barrel ileostomy) in a post operative case of intestinal perforation"
            ]
    },  
    {
        chapterId: "3",
        chapter: "Chapter - 3",
        name: "ICD",
        image: icd,
        text: "My patient 50 years old male, presented with intercostal drain in the right side of chest in situ for the last four days",
        history_of_presenting_illness: [
                "My patient was apparently asymptomatic 5 days before after which he sustained a penetrating trauma to right lower chest and presented with breathing difficulty",
                "He was resuscitated and evaluated and diagnosed with haemothorax on the right side along with 8 to 10th rib fracture",
                "He was managed by inserting intercostal drain at 5th intercostal space and was shifted to ot for the repair for diaphragmatic injury"
            ],
        local_examination: ["performed in the supine position with proper exposure of chest and abdomen"],
        inspection: [
                "Chest wall is symmetrical and elliptical in shape",
                "Respiratory rate is 18 per minute and is abdominothoracic",
                "Surgical wound site as well as stab wound site appears to be clean, dry and sutured",
                "Intercostal drain is fixed in the 5th intercostal space, anterior to mid axillary line connected to water seal bag having serosanguinous fluid of 50ml in last 24 hours with swing present. No active air leakage or bubbling noted",
                "No paradoxical chest wall movement",
                "There is no swelling or scar mark over the neck",
                "Trachea appears to be normal in position",
                "Neck veins not enlarged"
            ],
        palpation: [
                "No rise in the temperature",
                "Tenderness elicited over the region of 9th and 10th rib of right side anterolaterally and over the surgical wound site",
                "Chest is moving bilaterally symmetrical with equal expansion on the both sides",
                "No crepitus",
                "Tactile vocal fremitus is decreased over the right lower zone, normal elsewhere",
                "Trachea confirmed to be in the normal position"
            ],
        percussion: [
                "Normal resonant sound heard all over the chest except for the dull note over the right lobe"
            ],
        auscultation: [
                "Breath sound decreased over the right lower zone",
                "Normal vesicular breath sound heard over the rest of lung field ",
                "No added sound",
                "Vocal resonance: decreased over the right lower zone",
                "S1 S2 heard "
            ],
        summary:[
                "50-year-old male presented with a intercostal drainage over the right side of chest after sustaining a penetrating injury is diagnosed as right sided haemothorax along with diaphragmatic injury and liver laceration with ICD tube in situ in the 5th intercostal space and swing present."
            ]
    }, 
    {
        chapterId: "4",
        chapter: "Chapter - 4",
        name: "T TUBE",
        image: tube,
        text: "My patient, 47-year-old female resident of Deoghar, house wife, has presented with t tube and abdominal drain for the past 7 days",
        history_of_presenting_illness: [
                "She was apparently asymptomatic one month before after which she developed pain over the abdomen, which on evaluation diagnosed with cholelithiasis with choledocholithiasis",
                "She was admitted, optimised and operated 7 days before with open cholecystectomy with open choledochotomy + t tube.",
                "There are no presenting fresh complaints"
            ],
        inspection: [
                "Abdomen is nether distended nor scaphoid",
                "All quadrants moving equally with inspiration",
                "All quadrants move equally with respiration",
                "Sutured wound present over right upper quadrant with no active discharge associated",
                "A t tube fixed in right upper quadrant 5 below the right subcostal margin, 2cm medial to right midclavicular line connected to drainage which contain 100ml of bilious fluid for last 24 hours",
                "An abdominal drain of 32F placed in right upper quadrant 3cm below the right subcostal margin and 4 cm lateral to the right midclavicular line connected to drain bag containing 25ml of serosanguinous collection in last 24 hours",
                "No peri tubal soakage seen",
                "No skin changes present around the tubes",
                "Umbilicus is centrally placed and inverted"
            ],
        palpation: [
                "No raised temperature, abdomen is soft, mild tenderness over the wound site with no associated discharge or peri tubal leakage",
                "Inspectory findings are confirmed"
            ],
        percussion: [
                "No evidence of free fluid in peritoneum"
            ],
        auscultation: [
                "Normal bowel sound heard"
            ],
        summary:[
                "47-year-old female who had undergone open cholecystectomy with open choledochotomy and t tube placement 7 days before with t tube in situ for last 7 days with no presenting complaints"
            ]
    }, 
    {
        chapterId: "5",
        chapter: "Chapter - 5",
        name: "DIABETIC FOOT ULCER",
        image: diabetic,
        text: "My patient, 50 years old female, resident of Ranchi, homemaker by occupation belonging to low socioeconomic status presented to hospital with complaints of wound over her right foot for past one month",
        history_of_presenting_illness: [
                "She was apparently asymptomatic one month before after she sustained a trauma over the right foot, which formed a swelling on the outer aspect of the right foot. The swelling then burst and developed into a wound. Initially the wound was approximately 1*1 cm but has now progressed to an approximate size of 3*4cm",
                "History of foul-smelling pus from the wound in the last 3 weeks",
                "History of decreased sensation around her wound",
                "No history of associated pain, fever associated with the wound",
                "No history of difficulty walking or cramping sensation over her legs prior to the wound"
            ],
        past_history: [
                "Known case of Diabetes mellitus for past 3 years, on medication Taking Metformin 400mg",
                "Not a known case of HTN, TB, ASTHMA, EPILEPSY, COPD",
                "No surgical history in the past"
            ],
        personal_history: [
                "Mixed diet, adequate sleep, appetite, no addiction, no allergy"
            ],
        general_examination: [
                "Examination of the patients is within normal limits"
            ],
        inspection: [
                "A solitary irregular ulcer on the lateral aspect of the right foot occupying the fifth and fourth toe and extending up to the plantar aspect measuring 3*4 cm",
                "Ulcer has sloping, oedematous, inflamed edges",
                "Floor is covered with slough (devitalised tissue)",
                "Purulent discharge is noted",
                "Surrounding area is inflamed",
                "No dilated veins over the both lower limb, skin normal",
                "Rest of the lower limb is normal, left leg is normal"
            ],
        palpation: [
                "No local rise in temperature or tenderness elicited",
                "Depth of the ulcer is 0.5cm",
                "Base is made of subcutaneous tissue",
                "Ulcer is mobile and no induration noted",
                "Ulcer does not bleed on touch",
                "No loss of sensation in other parts of the right lower limb",
                "All joints are normal",
                "Left lower limb normal",
                "No enlarged inguinal lymph nodes",
                "No signs suggestive of vascular insufficiency on palpating Dorsalis pedis artery, post tibial popliteal artery and femoral artery bilaterally",
                "No signs suggestive of nerve lesions",
                "Other systemic examinations within normal limit"
            ],
        summary:[
                "An irregular ulcer measuring 3*4 cm is seen on the lateral aspect of the right foot that is extending to the plantar surface involving 4 and 5th toe, which has sloping, oedematous, inflamed edges, Floor covered with slough associated with Foul smelling purulent discharge. On palpation Base made of subcutaneous tissue, with no fixity and induration noted A 50-year-old female who is known case of diabetes mellitus with a chronic(>2weeks) non healing ulcer on outer aspect of the right foot."
            ]
    }
];

export default shortcasestudy;