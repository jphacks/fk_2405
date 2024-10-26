package com.github.jphacks.fk_2405.be_rest.api.v1.profile;

public class CreateProfileRequest {
    private String user_id;
    private long venue_id;
    private String title;

    public CreateProfileRequest(){
    }

    public String getUserId() {
        return user_id;
    }

    public void setUserId(String user_id) {
        this.user_id = user_id;
    }

    public long getVenueId() {
        return venue_id;
    }

    public void setVenueId(long venue_id) {
        this.venue_id = venue_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
