package com.ey.medicare.doctorappointment.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String appointmentCategory;

    private LocalDate appointmentDate;

    private LocalTime appointmentTime;

    private String mobileNo;

    private Long userId;

    // constructors, getters and setters


    public Appointment() {
    }

    public Appointment(String appointmentCategory, String mobileNo, Long userId) {
        this.appointmentCategory = appointmentCategory;
        this.mobileNo = mobileNo;
        this.userId = userId;
    }

    public Appointment(String appointmentCategory, LocalDate appointmentDate, LocalTime appointmentTime, String mobileNo, Long userId) {
        this.appointmentCategory = appointmentCategory;
        this.appointmentDate = appointmentDate;
        this.appointmentTime = appointmentTime;
        this.mobileNo = mobileNo;
        this.userId = userId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAppointmentCategory() {
        return appointmentCategory;
    }

    public void setAppointmentCategory(String appointmentCategory) {
        this.appointmentCategory = appointmentCategory;
    }

    public LocalDate getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(LocalDate appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public LocalTime getAppointmentTime() {
        return appointmentTime;
    }

    public void setAppointmentTime(LocalTime appointmentTime) {
        this.appointmentTime = appointmentTime;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
