package com.github.jphacks.fk_2405.be_rest.api.v1.venue;

public class DeleteVenueResponse {
    private long venue_id;

    public DeleteVenueResponse(){
    }

    public long getVenueId() {
        return venue_id;
    }

    public void setVenueId(long venue_id){
        this.venue_id = venue_id;
    }
}
