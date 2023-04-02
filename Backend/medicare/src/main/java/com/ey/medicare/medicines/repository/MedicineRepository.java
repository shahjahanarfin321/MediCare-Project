package com.ey.medicare.medicines.repository;

import com.ey.medicare.medicines.entity.Medicines;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineRepository extends JpaRepository<Medicines,Long> {
}
