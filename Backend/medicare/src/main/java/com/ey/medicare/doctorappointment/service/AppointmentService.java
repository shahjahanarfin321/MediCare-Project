package com.ey.medicare.doctorappointment.service;

import com.ey.medicare.doctorappointment.entity.Appointment;
import com.ey.medicare.doctorappointment.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public Appointment createAppointment(Appointment appointment) {
        // Set appointment date to one day after booking
        appointment.setAppointmentDate(LocalDate.now().plusDays(1));

        // Set appointment time to a random time between 9am to 6pm
        appointment.setAppointmentTime(LocalTime.of((int) (Math.random() * 9) + 9, 0));

        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    public List<Appointment> getAllAppointmentByUserId(Long userId) {
        return appointmentRepository.findAllByUserId(userId);
    }
}

