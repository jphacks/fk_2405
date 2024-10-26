package com.github.jphacks.fk_2405.be_rest.api.v1.requests;

public class CompleteRequestRequest {
    private long request_id;
    private boolean is_completed;

    public CompleteRequestRequest(){
    }

    public long getRequestId() {
        return request_id;
    }

    public void setRequestId(long request_id) {
        this.request_id = request_id;
    }

    public boolean getIsCompleted() {
        return is_completed;
    }

    public void setComment(boolean is_completed) {
        this.is_completed = is_completed;
    }
}
