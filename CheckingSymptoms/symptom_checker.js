// Array of symptoms and corresponding diagnoses
const diagnoses = [
    {
        symptoms: ['fever', 'cough'],
        diagnosis: 'You might have the flu or a common cold. Consider visiting a healthcare provider.'
    },
    {
        symptoms: ['headache', 'nausea'],
        diagnosis: 'You might be experiencing a migraine. Ensure you stay hydrated and consult a healthcare provider if necessary.'
    },
    {
        symptoms: ['chest pain', 'shortness of breath'],
        diagnosis: 'These could be symptoms of a serious condition such as a heart problem. Seek immediate medical attention.'
    }
    // Add more symptom-diagnosis pairs as needed
];

function checkSymptoms() {
    const symptomsInput = document.getElementById('symptoms').value.toLowerCase().split(',').map(s => s.trim());
    const resultDiv = document.getElementById('result');

    console.log('Symptoms Input:', symptomsInput); // Debugging

    // Find a diagnosis that matches the entered symptoms
    let diagnosis = 'Based on the symptoms entered, a specific diagnosis could not be determined. It\'s best to consult a healthcare provider for an accurate diagnosis.';

    for (const entry of diagnoses) {
        console.log('Checking entry:', entry.symptoms); // Debugging
        const hasAllSymptoms = entry.symptoms.every(symptom => symptomsInput.includes(symptom));
        console.log('Has all symptoms:', hasAllSymptoms); // Debugging
        if (hasAllSymptoms) {
            diagnosis = entry.diagnosis;
            break;
        }
    }

    console.log('Diagnosis:', diagnosis); // Debugging
    resultDiv.textContent = diagnosis;
}
