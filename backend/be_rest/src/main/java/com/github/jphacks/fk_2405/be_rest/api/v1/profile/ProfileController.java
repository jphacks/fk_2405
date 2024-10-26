package com.github.jphacks.fk_2405.be_rest.api.v1.profile;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/v1/profiles")
public class ProfileController {
    @PostMapping("create_profile")
    public ResponseEntity<CreateProfileResponse> signup(@RequestBody CreateProfileRequest entity) {
        //TODO: process POST request

        CreateProfileResponse response = new CreateProfileResponse();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
