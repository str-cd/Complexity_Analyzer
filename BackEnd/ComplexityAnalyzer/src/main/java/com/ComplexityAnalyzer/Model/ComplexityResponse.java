package com.ComplexityAnalyzer.Model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ComplexityResponse {

    @JsonProperty("Current_Time_Complexity")
    private String currentTimeComplexity;

    @JsonProperty("Current_Space_Complexity")
    private String currentSpaceComplexity;

    @JsonProperty("Optimal_Time_Complexity")
    private String optimalTimeComplexity;

    @JsonProperty("Optimal_Space_Complexity")
    private String optimalSpaceComplexity;


    public ComplexityResponse() {
    }

    public ComplexityResponse(String currentTimeComplexity, String currentSpaceComplexity, String optimalTimeComplexity, String optimalSpaceComplexity) {
        this.currentTimeComplexity = currentTimeComplexity;
        this.currentSpaceComplexity = currentSpaceComplexity;
        this.optimalTimeComplexity = optimalTimeComplexity;
        this.optimalSpaceComplexity = optimalSpaceComplexity;
    }

    public String getCurrentTimeComplexity() {
        return currentTimeComplexity;
    }

    public void setCurrentTimeComplexity(String currentTimeComplexity) {
        this.currentTimeComplexity = currentTimeComplexity;
    }

    public String getCurrentSpaceComplexity() {
        return currentSpaceComplexity;
    }

    public void setCurrentSpaceComplexity(String currentSpaceComplexity) {
        this.currentSpaceComplexity = currentSpaceComplexity;
    }

    public String getOptimalTimeComplexity() {
        return optimalTimeComplexity;
    }

    public void setOptimalTimeComplexity(String optimalTimeComplexity) {
        this.optimalTimeComplexity = optimalTimeComplexity;
    }

    public String getOptimalSpaceComplexity() {
        return optimalSpaceComplexity;
    }

    public void setOptimalSpaceComplexity(String optimalSpaceComplexity) {
        this.optimalSpaceComplexity = optimalSpaceComplexity;
    }
}
