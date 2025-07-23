package com.ComplexityAnalyzer.Model;

public class ComplexityRequest {

    private String code;
    private String language;

    public ComplexityRequest() {
    }

    public ComplexityRequest(String code, String language) {
        this.code = code;
        this.language = language;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }
}
