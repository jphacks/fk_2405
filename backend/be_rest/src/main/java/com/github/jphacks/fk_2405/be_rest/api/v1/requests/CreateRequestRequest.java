package com.github.jphacks.fk_2405.be_rest.api.v1.requests;

public class CreateRequestRequest {
    private long venue_id;
    private String from_user_id;
    private String to_user_id;
    private String comment;

    public CreateRequestRequest(){
    }

    public long getVenueId() {
        return venue_id;
    }

    public void setVenueId(long venue_id) {
        this.venue_id = venue_id;
    }

    public String getFromUserId() {
        return from_user_id;
    }

    public void setFromUserId(String from_user_id) {
        this.from_user_id = from_user_id;
    }

    public String getToUserId() {
        return to_user_id;
    }

    public void setToUserId(String to_user_id) {
        this.to_user_id = to_user_id;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
