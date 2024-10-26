package com.github.jphacks.fk_2405.be_rest.api.v1.auth;

public class SignupResponse {
    private String user_id;
    private String username;
    private String full_name;
    private String email;
    private String password;
    private Boolean is_admin;

    public SignupResponse(){
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}
