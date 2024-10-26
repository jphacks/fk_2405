package com.github.jphacks.fk_2405.be_rest.api.v1.mission;

public class CreateMissionResponse {
    private int capacity;
    private String title;
    private long venue_id;

    public CreateMissionResponse(){
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public long getVenueId() {
        return venue_id;
    }

    public void setVenueId(long venue_id) {
        this.venue_id = venue_id;
    }
}
