// Array of symptoms and corresponding diagnoses
const diagnoses = [
    // Existing diagnoses
    {
        symptoms: ['fever', 'cough'],
        diagnosis: 'You might have a respiratory infection like the flu or a common cold.'
    },
    {
        symptoms: ['headache', 'nausea'],
        diagnosis: 'You might be experiencing a migraine or another headache disorder.'
    },
    {
        symptoms: ['chest pain', 'shortness of breath'],
        diagnosis: 'These could be symptoms of a serious condition such as a heart problem.'
    },
    // Additional diagnoses
    {
        symptoms: ['sore throat', 'fever'],
        diagnosis: 'You might have an infection like strep throat or another type of throat infection.'
    },
    {
        symptoms: ['fatigue', 'muscle aches'],
        diagnosis: 'These symptoms may indicate chronic fatigue syndrome or fibromyalgia.'
    },
    {
        symptoms: ['runny nose', 'sneezing'],
        diagnosis: 'These are common symptoms of allergies or a common cold.'
    },
    {
        symptoms: ['abdominal pain', 'diarrhea'],
        diagnosis: 'You might be experiencing a gastrointestinal issue like food poisoning or an infection.'
    },
    {
        symptoms: ['joint pain', 'swelling'],
        diagnosis: 'These symptoms might indicate arthritis or another joint condition.'
    },
    {
        symptoms: ['shortness of breath', 'wheezing'],
        diagnosis: 'These could be symptoms of asthma or another respiratory issue.'
    },
    {
        symptoms: ['dizziness', 'blurred vision'],
        diagnosis: 'These symptoms could be related to a condition affecting your balance or vision.'
    },
    {
        symptoms: ['nausea', 'vomiting'],
        diagnosis: 'These symptoms may be due to a stomach bug or other digestive issue.'
    },
    {
        symptoms: ['persistent cough', 'weight loss'],
        diagnosis: 'These symptoms could indicate a more serious condition like tuberculosis or cancer.'
    },
    {
        symptoms: ['skin rash', 'itching'],
        diagnosis: 'You might be experiencing an allergic reaction or another skin condition.'
    },
    {
        symptoms: ['confusion', 'memory loss'],
        diagnosis: 'These symptoms might indicate a neurological condition such as dementia.'
    },
    {
        symptoms: ['leg swelling', 'pain'],
        diagnosis: 'These symptoms might be related to a vascular issue like a blood clot.'
    },
    {
        symptoms: ['chills', 'sweats'],
        diagnosis: 'These could be symptoms of an infection or fever-related illness.'
    },
    {
        symptoms: ['breast tenderness', 'lump'],
        diagnosis: 'These symptoms might indicate a breast issue that should be evaluated.'
    },
    {
        symptoms: ['frequent urination', 'thirst'],
        diagnosis: 'You might be experiencing diabetes or another metabolic condition.'
    },
    {
        symptoms: ['persistent headaches', 'vision changes'],
        diagnosis: 'These symptoms might be related to a neurological issue affecting your head or vision.'
    },
    {
        symptoms: ['difficulty swallowing', 'pain'],
        diagnosis: 'These symptoms might be related to esophageal or throat issues.'
    },
    {
        symptoms: ['persistent back pain', 'numbness'],
        diagnosis: 'These symptoms might indicate a spinal or nerve issue.'
    },
    {
        symptoms: ['irregular heartbeat', 'dizziness'],
        diagnosis: 'These symptoms could be related to a heart condition or another cardiovascular issue.'
    }
];

function checkSymptoms() {
    const symptomsInput = document.getElementById('symptoms').value.toLowerCase().split(',').map(s => s.trim());
    const resultDiv = document.getElementById('result');

    console.log('Symptoms Input:', symptomsInput); // Debugging

    // Find a diagnosis that matches the entered symptoms
    let diagnosis = 'Based on the symptoms entered, a specific diagnosis could not be determined. It\'s best to consult a healthcare provider for an accurate diagnosis.';

    for (const entry of diagnoses) {
        console.log('Checking entry:', entry.symptoms); // Debugging
        const hasAnySymptom = entry.symptoms.some(symptom => symptomsInput.includes(symptom));
        console.log('Has any symptom:', hasAnySymptom); // Debugging
        if (hasAnySymptom) {
            diagnosis = entry.diagnosis;
            break;
        }
    }

    console.log('Diagnosis:', diagnosis); // Debugging
    resultDiv.textContent = diagnosis;
}
