package com.ey.medicare.medicines.service;

import com.ey.medicare.medicines.entity.Medicines;
import com.ey.medicare.medicines.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicineService {
    @Autowired
    private MedicineRepository medicineRepository;

    public List<Medicines> getAllMedicinesList() {
        return medicineRepository.findAll();
    }

    public Medicines getMedicineByMedicineId(Long medicineId) {
        return medicineRepository.findByMedicineId(medicineId);
    }

    public Medicines saveMedicine(Medicines medicines) {
        return medicineRepository.save(medicines);
    }

    public Optional<Object> findByMedicineId(Long medicineId) {
        return Optional.ofNullable(medicineRepository.findByMedicineId(medicineId));
    }
}
