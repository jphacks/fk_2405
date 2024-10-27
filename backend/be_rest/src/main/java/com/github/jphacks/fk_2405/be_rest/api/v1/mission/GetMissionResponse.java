package com.github.jphacks.fk_2405.be_rest.api.v1.mission;

public class GetMissionResponse {
    private boolean available;
    private long venue_id;

    public GetMissionResponse(){
    }

    public boolean getAvailable() {
        return available;
    }

    public void setAvailable(boolean available){
        this.available = available;
    }

    public long getVenueId() {
        return venue_id;
    }

    public void setVenueId(long venue_id){
        this.venue_id = venue_id;
    }
}
