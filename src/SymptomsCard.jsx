import { useState } from 'react';
import styles from './SymptomsCard.module.css';

const SymptomsCard = () => {
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkSymptoms();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Symptom Checker</h1>
      <form id={styles.symptomForm} onSubmit={handleSubmit}>
        <label htmlFor={styles.symptoms}>Enter your symptoms (separated by commas):</label>
        <textarea
          id={styles.symptoms}
          rows="6"
          placeholder="e.g., fever, cough, headache"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        ></textarea>
        <button type="submit" className={styles.symptomChecker}>Check Diagnosis</button>
      </form>
      <div className={styles.result}>{diagnosis}</div>
    </div>
  );
};

export default SymptomsCard;
