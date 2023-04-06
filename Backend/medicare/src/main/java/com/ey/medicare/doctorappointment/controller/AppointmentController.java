package com.ey.medicare.doctorappointment.controller;

import com.ey.medicare.doctorappointment.entity.Appointment;
import com.ey.medicare.doctorappointment.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/appointment")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/create-appointment")
    public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment) {
        Appointment createdAppointment = appointmentService.createAppointment(appointment);
        return ResponseEntity.ok(createdAppointment);
    }

    @GetMapping("/get-all-appointment")
    public List<Appointment> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }

    @GetMapping("/get-all-appointment-by-userId")
    public List<Appointment> getAllAppointmentByUserId(@RequestParam Long userId) {
        return appointmentService.getAllAppointmentByUserId(userId);
    }
}

