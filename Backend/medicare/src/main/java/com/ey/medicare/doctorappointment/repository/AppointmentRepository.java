package com.ey.medicare.doctorappointment.repository;

import com.ey.medicare.doctorappointment.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findAllByUserId(Long userId);
}

