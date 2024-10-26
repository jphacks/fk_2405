package com.github.jphacks.fk_2405.be_rest.api.v1.matching;

public class CompleteMatchingResponse {
    private long venue_id;
    private String user_id;
    private String partner_id;
    private long item_id;

    public CompleteMatchingResponse(){
    }

    public long getVenueId() {
        return venue_id;
    }

    public void setVenueId(long venue_id) {
        this.venue_id = venue_id;
    }

    public String getUserId() {
        return user_id;
    }

    public void setUserId(String user_id) {
        this.user_id = user_id;
    }

    public String getPartnerId() {
        return partner_id;
    }

    public void setPartner(String partner_id) {
        this.partner_id = partner_id;
    }

    public long getItemId() {
        return item_id;
    }

    public void setItemId(long item_id) {
        this.item_id = item_id;
    }
}
