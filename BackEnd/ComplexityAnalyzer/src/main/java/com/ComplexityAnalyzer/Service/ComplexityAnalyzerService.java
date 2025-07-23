package com.ComplexityAnalyzer.Service;

import com.ComplexityAnalyzer.Model.ComplexityRequest;
import com.ComplexityAnalyzer.Model.ComplexityResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;
import java.util.Objects;

@Service
public class ComplexityAnalyzerService {

    private final WebClient webClient ;

    @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public ComplexityAnalyzerService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.build();
    }

    public ComplexityResponse generateComplexityReport(ComplexityRequest complexityRequest){

        //Building the Prompt
            String prompt = buildPrompt(complexityRequest);

        //Craft a request
        Map<String, Object> requestBody = Map.of(
                "contents", new Object[] {
                        Map.of(
                                "parts", new Object[] {
                                        Map.of("text", prompt)
                                }
                        )
                }
        );


        //Do Request and Get Response

        String response = webClient.post()
                .uri(geminiApiUrl)
                .header("Content-Type","application/json")
                .header("X-goog-api-key" ,geminiApiKey)
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .block();


        //Return response

        System.out.println(response);

        return extractComplexityResponse(response);
    }

    private ComplexityResponse extractComplexityResponse(String response) {
        try {
            ObjectMapper mapper = new ObjectMapper();

            // Step 1: Parse the full Gemini response
            JsonNode root = mapper.readTree(response);
            String textBlock = root
                    .path("candidates")
                    .get(0)
                    .path("content")
                    .path("parts")
                    .get(0)
                    .path("text")
                    .asText();

            // Step 2: Clean the markdown wrapping (```json ... ```)
            String jsonOnly = textBlock
                    .replace("```json", "")
                    .replace("```", "")
                    .trim();

            // Step 3: Parse the cleaned JSON to your DTO
            return mapper.readValue(jsonOnly, ComplexityResponse.class);

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

    private String buildPrompt(ComplexityRequest complexityRequest) {
        StringBuilder prompt = new StringBuilder();

        prompt.append("You are a code complexity analyzer. Given the following code, return the analysis with exactly the following keys:\n\n");
        prompt.append("{\n");
        prompt.append("  \"Current_Time_Complexity\": \"\",\n");
        prompt.append("  \"Current_Space_Complexity\": \"\",\n");
        prompt.append("  \"Optimal_Time_Complexity\": \"\",\n");
        prompt.append("  \"Optimal_Space_Complexity\": \"\"\n");
        prompt.append("}\n\n");
        prompt.append("Fill in the correct values for each field.\n\n");
        prompt.append("Code:\n");
        prompt.append(complexityRequest.getCode()).append("\n\n");
        prompt.append("Code is in:\n");
        prompt.append(complexityRequest.getLanguage()).append("\n");

        // Escape for JSON: replace double quotes and newlines
        return prompt.toString()
                .replace("\"", "\\\"")     // escape double quotes
                .replace("\n", "\\n");     // escape newlines
    }



}
