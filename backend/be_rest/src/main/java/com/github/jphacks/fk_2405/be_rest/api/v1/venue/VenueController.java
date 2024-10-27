package com.github.jphacks.fk_2405.be_rest.api.v1.venue;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/v1/venues")
public class VenueController {
    @PostMapping("create_venue")
    public ResponseEntity<CreateVenueResponse> createVenue(@RequestBody CreateVenueRequest entity) {
        //TODO: process POST request

        CreateVenueResponse response = new CreateVenueResponse();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PutMapping("edit_venue")
    public ResponseEntity<EditVenueResponse> editVenue(@RequestBody EditVenueRequest entity) {
        // 処理実行

        EditVenueResponse response = new EditVenueResponse();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
