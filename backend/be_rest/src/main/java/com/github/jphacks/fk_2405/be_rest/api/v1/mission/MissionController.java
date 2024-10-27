package com.github.jphacks.fk_2405.be_rest.api.v1.mission;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.github.jphacks.fk_2405.be_rest.api.v1.auth.LogoutResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/v1/missions")
public class MissionController {
    @PostMapping("create_mission")
    public ResponseEntity<CreateMissionResponse> createMission(@RequestBody CreateMissionRequest entity) {
        //TODO: process POST request

        CreateMissionResponse response = new CreateMissionResponse();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("select_mission")
    public ResponseEntity<SelectMissionResponse> selectMission(@RequestBody SelectMissionRequest entity) {
        //TODO: process POST request

        SelectMissionResponse response = new SelectMissionResponse();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("complete_mission")
    public ResponseEntity<CompleteMissionResponse> completeMission(@RequestBody CompleteMissionRequest entity) {
        //TODO: process POST request

        CompleteMissionResponse response = new CompleteMissionResponse();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<GetMissionResponse> getMission (
        @RequestParam(value = "available", required = false) Boolean available,
        @RequestParam(value = "venue_id", required = false) Long venue_id
    ) {
        GetMissionResponse response = new GetMissionResponse();
        response.setAvailable(available);
        response.setVenueId(venue_id);
        return new ResponseEntity<>(response, HttpStatus.OK); // レスポンスオブジェクトとHTTPステータスを返す
    }
}
