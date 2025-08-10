package com.cognizant.country.model;

public class Country {
    private String code;
    private String name;

    public Country() {
        System.out.println("Inside Country Constructor.");
    }

    public String getCode() {
        System.out.println("Getting country code.");
        return code;
    }

    public void setCode(String code) {
        System.out.println("Setting country code.");
        this.code = code;
    }

    public String getName() {
        System.out.println("Getting country name.");
        return name;
    }

    public void setName(String name) {
        System.out.println("Setting country name.");
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country{" + "code='" + code + '\'' + ", name='" + name + '\'' + '}';
    }
}
