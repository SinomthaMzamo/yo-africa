import { useState } from 'react';
import styles from './SymptomsCard.module.css';
import DRemedies from './DRemedies'; // Assuming Dremedies is the component you want to render

const SymptomsCard = () => {
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const [showDremedies, setShowDremedies] = useState(false); // State to control the visibility of Dremedies

  const checkSymptoms = () => {
    const symptomsInput = symptoms.toLowerCase().split(',').map(s => s.trim());
    
    const diagnoses = [
      { symptoms: ['fever', 'cough'], diagnosis: 'You might have a respiratory infection like the flu or a common cold.' },
      { symptoms: ['headache', 'nausea'], diagnosis: 'You might be experiencing a migraine or another headache disorder.' },
      { symptoms: ['chest pain', 'shortness of breath'], diagnosis: 'These could be symptoms of a serious condition such as a heart problem.' },
      { symptoms: ['sore throat', 'fever'], diagnosis: 'You might have an infection like strep throat or another type of throat infection.' },
      { symptoms: ['fatigue', 'muscle aches'], diagnosis: 'These symptoms may indicate chronic fatigue syndrome or fibromyalgia.' },
      { symptoms: ['runny nose', 'sneezing'], diagnosis: 'These are common symptoms of allergies or a common cold.' },
      { symptoms: ['abdominal pain', 'diarrhea'], diagnosis: 'You might be experiencing a gastrointestinal issue like food poisoning or an infection.' },
      { symptoms: ['joint pain', 'swelling'], diagnosis: 'These symptoms might indicate arthritis or another joint condition.' },
      { symptoms: ['shortness of breath', 'wheezing'], diagnosis: 'These could be symptoms of asthma or another respiratory issue.' },
      { symptoms: ['dizziness', 'blurred vision'], diagnosis: 'These symptoms could be related to a condition affecting your balance or vision.' },
      { symptoms: ['nausea', 'vomiting'], diagnosis: 'These symptoms may be due to a stomach bug or other digestive issue.' },
      { symptoms: ['persistent cough', 'weight loss'], diagnosis: 'These symptoms could indicate a more serious condition like tuberculosis or cancer.' },
      { symptoms: ['skin rash', 'itching'], diagnosis: 'You might be experiencing an allergic reaction or another skin condition.' },
      { symptoms: ['confusion', 'memory loss'], diagnosis: 'These symptoms might indicate a neurological condition such as dementia.' },
      { symptoms: ['leg swelling', 'pain'], diagnosis: 'These symptoms might be related to a vascular issue like a blood clot.' },
      { symptoms: ['chills', 'sweats'], diagnosis: 'These could be symptoms of an infection or fever-related illness.' },
      { symptoms: ['breast tenderness', 'lump'], diagnosis: 'These symptoms might indicate a breast issue that should be evaluated.' },
      { symptoms: ['frequent urination', 'thirst'], diagnosis: 'You might be experiencing diabetes or another metabolic condition.' },
      { symptoms: ['persistent headaches', 'vision changes'], diagnosis: 'These symptoms might be related to a neurological issue affecting your head or vision.' },
      { symptoms: ['difficulty swallowing', 'pain'], diagnosis: 'These symptoms might be related to esophageal or throat issues.' },
      { symptoms: ['persistent back pain', 'numbness'], diagnosis: 'These symptoms might indicate a spinal or nerve issue.' },
      { symptoms: ['irregular heartbeat', 'dizziness'], diagnosis: 'These symptoms could be related to a heart condition or another cardiovascular issue.' }
    ];
    
    let foundDiagnosis = 'Based on the symptoms entered, a specific diagnosis could not be determined. It\'s best to consult a healthcare provider for an accurate diagnosis.';
    
    for (const entry of diagnoses) {
      const hasAnySymptom = entry.symptoms.some(symptom => symptomsInput.includes(symptom));
      if (hasAnySymptom) {
        foundDiagnosis = entry.diagnosis;
        break;
      }
    }

    setDiagnosis(foundDiagnosis);
    setLoading(false);
    setSuggestionsVisible(true);
    setShowDremedies(true); // Show Dremedies component after form submission
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    checkSymptoms();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Symptom Checker</h1>
      <p className={styles.intro}>Enter your symptoms below, and we'll provide a possible diagnosis along with helpful resources.</p>
      <form id={styles.symptomForm} className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor={styles.symptoms} className={styles.label}>Describe Your Symptoms:</label>
        <textarea
          id={styles.symptoms}
          className={styles.input}
          rows="4"
          placeholder="e.g., fever, cough, headache"
          aria-label="Enter your symptoms here"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        ></textarea>
        <button type="submit" className={styles.btn}>Check Diagnosis</button>
      </form>
      {loading && <div id={styles.loading} className={styles.loading}>Checking...</div>}
      <div id={styles.result} className={styles.result}>{diagnosis}</div>
      {suggestionsVisible && (
        <div id={styles.suggestions} className={styles.suggestions}>
          <p>Next steps:</p>
          <ul>
            <li><a href="#" id={styles.locatorLink} className={styles.suggestionLink}>Find nearby doctors and clinics</a></li>
            <li><a href="#" id={styles.remediesLink} className={styles.suggestionLink}>Explore home remedies</a></li>
          </ul>
        </div>
      )}
      {showDremedies && <DRemedies />} {/* Render the Dremedies component conditionally */}
    </div>
  );
};

export default SymptomsCard;
