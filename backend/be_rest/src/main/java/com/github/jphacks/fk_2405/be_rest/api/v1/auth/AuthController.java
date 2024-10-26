package com.github.jphacks.fk_2405.be_rest.api.v1.auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    @PostMapping("signup")
    public ResponseEntity<SignupResponse> signup(@RequestBody SignupRequest entity) {
        //TODO: process POST request

        SignupResponse response = new SignupResponse();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("login")
    public ResponseEntity<LoginResponse> login(@RequestBody SignupRequest entity) {
        //TODO: process POST request

        LoginResponse response = new LoginResponse();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("logout")
    public ResponseEntity<LogoutResponse> logout(String entity) {
        // ログアウト処理の実行

        LogoutResponse response = new LogoutResponse();
        //response.setSuccess(true);
        return new ResponseEntity<>(response, HttpStatus.OK); // レスポンスオブジェクトとHTTPステータスを返す
    }
}
