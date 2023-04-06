package com.ey.medicare.medicines.service;

import com.ey.medicare.medicines.entity.Medicines;
import com.ey.medicare.medicines.repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

    public void saveMedicineWithImage(String medicineName, Long medicinePrice, Long medicineStock,String imageLink) throws IOException {
        // Create a new Image object and set its properties
        Medicines medicines = new Medicines();
        medicines.setMedicineName(medicineName);
        medicines.setMedicinePrice(medicinePrice);
        medicines.setMedicineStock(medicineStock);
        medicines.setImageLink(imageLink);

        // Save the image to the database
        medicineRepository.save(medicines);
    }

    public Medicines updateMedicine(Long medicineId, Medicines updatedMedicine) {
        Medicines medicines = medicineRepository.findByMedicineId(medicineId);

        medicines.setMedicineName(updatedMedicine.getMedicineName());
        medicines.setMedicinePrice(updatedMedicine.getMedicinePrice());
        medicines.setMedicineStock(updatedMedicine.getMedicineStock());
        medicines.setImageLink((updatedMedicine.getImageLink()));

        return medicineRepository.save(medicines);
    }

    public void deleteMedicine(Long medicineId) {
        Medicines medicines = medicineRepository.findByMedicineId(medicineId);
        medicineRepository.delete(medicines);
    }
}
