const responses = [
    { keywords: ['hello', 'hi'], response: 'Hello! How can I assist you today?' },
    { keywords: ['how are you', 'how do you do'], response: 'I am just a bot, but I am doing well! How about you?' },
    { keywords: ['what is your name', 'who are you'], response: 'I am a chatbot created to help you with your questions.' },
    { keywords: ['bye', 'goodbye'], response: 'Goodbye! Have a great day!' },
    { keywords: [], response: 'Sorry, I did not understand that. Could you please rephrase?' }
];

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const message = userInput.value.trim();

    if (message === "") return;

    appendMessage('user', message);
    userInput.value = "";

    const response = getBotResponse(message);
    appendMessage('bot', response);
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + sender;
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    for (const entry of responses) {
        if (entry.keywords.some(keyword => userMessage.toLowerCase().includes(keyword))) {
            return entry.response;
        }
    }
    return responses[responses.length - 1].response; // Default response
}
