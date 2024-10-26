package com.github.jphacks.fk_2405.be_rest.api.v1.mission;

public class SelectMissionResponse {
    private String user_id;
    private long mission_id;

    public SelectMissionResponse(){
    }

    public String getUseId() {
        return user_id;
    }

    public void setUserId(String user_id) {
        this.user_id = user_id;
    }

    public long getMissionId() {
        return mission_id;
    }

    public void setMissionId(long mission_id) {
        this.mission_id = mission_id;
    }
}
