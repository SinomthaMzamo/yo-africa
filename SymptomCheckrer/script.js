document.addEventListener('DOMContentLoaded', () => {
    const symptomForm = document.getElementById('symptomForm');
    const resultsDiv = document.getElementById('results');

    // Replace with the path to your JSON file
    fetch('SymptomCheckrer/diagnosis.json')
        .then(response => response.json())
        .then(data => {
            symptomForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const symptomInput = document.getElementById('symptom').value.toLowerCase();

                // Find matching diagnosis
                const results = data.filter(item => item.Issue.Name.toLowerCase().includes(symptomInput));

                // Clear previous results
                resultsDiv.innerHTML = '';

                if (results.length > 0) {
                    results.forEach(result => {
                        const div = document.createElement('div');
                        div.className = 'result-item';

                        div.innerHTML = `
                            <h3>${result.Issue.Name}</h3>
                            <p><strong>Accuracy:</strong> ${result.Issue.Accuracy}%</p>
                            <p><strong>ICD:</strong> ${result.Issue.Icd}</p>
                            <p><strong>ICD Name:</strong> ${result.Issue.IcdName}</p>
                            <p><strong>Professional Name:</strong> ${result.Issue.ProfName}</p>
                            <p><strong>Ranking:</strong> ${result.Issue.Ranking}</p>
                            <p><strong>Specialisations:</strong> ${result.Specialisation.map(s => s.Name).join(', ')}</p>
                        `;

                        resultsDiv.appendChild(div);
                    });
                } else {
                    resultsDiv.innerHTML = '<p>No results found for the given symptom.</p>';
                }
            });
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
});
