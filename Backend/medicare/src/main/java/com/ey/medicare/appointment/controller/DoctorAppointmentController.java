package com.ey.medicare.appointment.controller;

import com.ey.medicare.appointment.entity.DoctorAppointment;
import com.ey.medicare.appointment.service.DoctorAppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/doctorappointment")
public class DoctorAppointmentController {
    @Autowired
    private DoctorAppointmentService appointmentService;

    @PostMapping("/create-appointment")
    public ResponseEntity<DoctorAppointment> createAppointment(@RequestBody DoctorAppointment appointment) {
        DoctorAppointment newAppointment = appointmentService.createAppointment(appointment);
        return ResponseEntity.status(HttpStatus.CREATED).body(newAppointment);
    }

    @GetMapping("/get-all-appointment")
    public List<DoctorAppointment> getAllDoctorAppointment() {
        return appointmentService.getAllDoctorAppointment();
    }
}
