package com.ey.medicare.appointment.repository;

import com.ey.medicare.appointment.entity.DoctorAppointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorAppointmentRepository extends JpaRepository<DoctorAppointment, Long> {
}
