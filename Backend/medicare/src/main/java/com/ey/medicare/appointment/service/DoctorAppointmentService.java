package com.ey.medicare.appointment.service;

import com.ey.medicare.appointment.entity.DoctorAppointment;
import com.ey.medicare.appointment.repository.DoctorAppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorAppointmentService {
    @Autowired
    private DoctorAppointmentRepository appointmentRepository;

    public DoctorAppointment createAppointment(DoctorAppointment appointment) {
        return appointmentRepository.save(appointment);
    }

    public List<DoctorAppointment> getAllDoctorAppointment() {
        return appointmentRepository.findAll();
    }
}

