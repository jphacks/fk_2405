package com.github.jphacks.fk_2405.be_rest.api.v1.profile;

public class GetProfileResponse {
    private long profile_id;

    public GetProfileResponse(){
    }

    public long getProfileId() {
        return profile_id;
    }

    public void setProfileId(long profile_id){
        this.profile_id = profile_id;
    }
}
