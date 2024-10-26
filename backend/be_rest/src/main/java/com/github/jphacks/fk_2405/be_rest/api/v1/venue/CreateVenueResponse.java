package com.github.jphacks.fk_2405.be_rest.api.v1.venue;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Calendar;

public class CreateVenueResponse {
    private String title;
    private String place;
    private String password;
    private Date start_time;
    private Date end_time;
    private int talk_time_limit;

    public CreateVenueResponse(){
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getStartTime() {
        return start_time;
    }

    public void setStartTime(Date start_time) {
        this.start_time = start_time;
    }

    /*
    public void setStartTime(int year, int month, int day){
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.YEAR, year);
        calendar.set(Calendar.MONTH, month);
        calendar.set(Calendar.DAY_OF_MONTH, day);
        start_time = calendar.getTime();
    } 
    */

    public Date getEndTime() {
        return end_time;
    }

    public void setEnd(Date end_time) {
        this.end_time = end_time;
    }

    public int getTalkTimeLimit() {
        return talk_time_limit;
    }

    public void setTalkTimeLimit(int talk_time_limit) {
        this.talk_time_limit = talk_time_limit;
    }
}
