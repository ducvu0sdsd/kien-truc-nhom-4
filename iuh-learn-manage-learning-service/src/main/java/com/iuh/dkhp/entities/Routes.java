package com.iuh.dkhp.entities;

public enum Routes {
    AUTH("http://localhost:8081"),
    OTHER("http://localhost:8082");

    private final String value;

    Routes(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
