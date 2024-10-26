package com.github.jphacks.fk_2405.be_rest.api.v1.auth;

public class SignupResponse {
    private String user_id;
    private String username;
    private String full_name;
    private String email;
    private String password;
    private boolean is_admin;

    public SignupResponse(){
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFullName() {
        return full_name;
    }

    public void setFullName(String full_name) {
        this.full_name = full_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean getIsAdmin() {
        return is_admin;
    }

    public void setPassword(boolean is_admin) {
        this.is_admin = is_admin;
    }

}
