package com.github.jphacks.fk_2405.be_rest.api.v1.auth;

public class LoginResponse {
    //private String user_id;
    private String username;
    private String password;
    
    public LoginResponse(){
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
