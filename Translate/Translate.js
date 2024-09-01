var client_id = 'JAsS3GfAyxu5tA3ybaZUOGYQL6cJA4Kc';
var client_secret = 'Y10ozePkLmIwrEzh';

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://api.chenosis.io/oauth/client/accesstoken?grant_type=client_credentials", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var accessToken = response.access_token;

        // Now that you have the token, make the translation request
        makeTranslationRequest(accessToken);
    }
};

xhr.send("client_id=" + client_id + "&client_secret=" + client_secret);
