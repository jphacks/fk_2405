package com.github.jphacks.fk_2405.be_rest.api.v1.requests;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/v1/requests")
public class RequestController {
    @PostMapping("create_request")
    public ResponseEntity<CreateRequestResponse> signup(@RequestBody CreateRequestRequest entity) {
        //TODO: process POST request

        CreateRequestResponse response = new CreateRequestResponse();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
