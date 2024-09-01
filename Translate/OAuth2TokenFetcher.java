import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

public class OAuth2TokenFetcher {
    public static void main(String[] args) throws Exception {
        // Your access token
        String accessToken = "09kS20Sxs0xcuRGodAxYdgAHDwBf";
        
        // Example request parameters for translation
        String urlParameters = "Text=Hello&LanguageCode=en&TargetCode=af&TranslateID=chenosis-prod";

        // The URL for the translation API endpoint
        URL url = new URL("https://api.chenosis.io/botlhale/translate/getTranslation");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
        connection.setRequestProperty("Authorization", "Bearer " + accessToken); // Include the access token
        connection.setDoOutput(true);

        try (OutputStream os = connection.getOutputStream()) {
            byte[] input = urlParameters.getBytes(StandardCharsets.UTF_8);
            os.write(input, 0, input.length);
        }

        int responseCode = connection.getResponseCode();
        if (responseCode == HttpURLConnection.HTTP_OK) {
            try (Scanner scanner = new Scanner(connection.getInputStream(), StandardCharsets.UTF_8.name())) {
                String response = scanner.useDelimiter("\\A").next();
                System.out.println("Response: " + response);
            }
        } else {
            try (Scanner scanner = new Scanner(connection.getErrorStream(), StandardCharsets.UTF_8.name())) {
                String response = scanner.useDelimiter("\\A").next();
                System.out.println("Error Response: " + response);
            }
        }
    }
}
