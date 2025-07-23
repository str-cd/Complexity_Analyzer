package com.ComplexityAnalyzer.Controller;

import com.ComplexityAnalyzer.Model.ComplexityRequest;
import com.ComplexityAnalyzer.Model.ComplexityResponse;
import com.ComplexityAnalyzer.Service.ComplexityAnalyzerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/complexity")
@CrossOrigin("*")
public class ComplexityAnalyzerController {

   @Autowired
   private ComplexityAnalyzerService complexityAnalyzerService;

   @PostMapping("/getComplexityReport")
   public ResponseEntity<ComplexityResponse> generateComplexity(@RequestBody ComplexityRequest complexityRequest){
       ComplexityResponse complexityResponse = complexityAnalyzerService.generateComplexityReport(complexityRequest);
       return new ResponseEntity<>(complexityResponse, HttpStatus.OK);
   }


}
