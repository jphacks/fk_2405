package com.github.jphacks.fk_2405.be_rest.api.v1.profile;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/v1/profiles")
public class ProfileController {
    @PostMapping("create_profile")
    public ResponseEntity<CreateProfileResponse> createProfile(@RequestBody CreateProfileRequest entity) {
        //TODO: process POST request

        CreateProfileResponse response = new CreateProfileResponse();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<GetProfileResponse> getPlofile (
        @RequestParam(value = "profile_id", required = false) long profile_id
    ) {
        GetProfileResponse response = new GetProfileResponse();
        response.setProfileId(profile_id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
