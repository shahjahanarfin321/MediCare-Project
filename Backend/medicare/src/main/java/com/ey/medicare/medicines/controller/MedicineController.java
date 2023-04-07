package com.ey.medicare.medicines.controller;

import com.ey.medicare.medicines.entity.Medicines;
import com.ey.medicare.medicines.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("medicines")
public class MedicineController {
    @Autowired
    private MedicineService medicineService;

    @GetMapping("/all-medicines")
    private List<Medicines> getAllMedicinesList() {
        return medicineService.getAllMedicinesList();
    }

    @GetMapping("/")
    private Medicines getMedicineByMedicineId(@RequestParam Long medicineId) {
        return medicineService.getMedicineByMedicineId(medicineId);
    }

    @PostMapping("/save-medicine")
    private Medicines saveMedicine(@RequestBody Medicines medicines) {
        return medicineService.saveMedicine(medicines);
    }

    @PostMapping("/save-medicine-with-image")
    public ResponseEntity<String> saveMedicineWithImage(@RequestParam String medicineName,@RequestParam Long medicinePrice,@RequestParam Long medicineStock,@RequestParam String imageLink) throws IOException {
        // Call the service method to upload the image file
        medicineService.saveMedicineWithImage(medicineName,medicinePrice,medicineStock,imageLink);

        // Return a success response
        return ResponseEntity.ok("Image uploaded successfully");
    }

    @PutMapping("/update-medicine-details/{medicineId}")
    public Medicines updateMedicine(@PathVariable Long medicineId, @RequestBody Medicines updatedMedicine) {
        return medicineService.updateMedicine(medicineId, updatedMedicine);
    }

    @DeleteMapping("/delete-medicine")
    public void deleteMedicine(@RequestParam Long medicineId) {
        medicineService.deleteMedicine(medicineId);
        System.out.println("Deleted Medicine");
    }
}
