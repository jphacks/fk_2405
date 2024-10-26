package com.github.jphacks.fk_2405.be_rest.api.v1.matching;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/v1/matchings")
public class MatchingController {
    @PostMapping("complete_matching")
    public ResponseEntity<CompleteMatchingResponse> signup(@RequestBody CompleteMatchingRequest entity) {
        //TODO: process POST request

        CompleteMatchingResponse response = new CompleteMatchingResponse();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
