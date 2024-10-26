package com.github.jphacks.fk_2405.be_rest.api.v1.mission;

public class CompleteMissionRequest {
    private String user_id;
    private long mission_id;
    private boolean completed;

    public CompleteMissionRequest(){
    }

    public String getUserId() {
        return user_id;
    }

    public void setUserId(String user_id) {
        this.user_id = user_id;
    }

    public long getMission() {
        return mission_id;
    }

    public void setTitle(long mission_id) {
        this.mission_id = mission_id;
    }

    public boolean getCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
