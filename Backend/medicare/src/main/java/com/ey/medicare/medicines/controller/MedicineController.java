package com.ey.medicare.medicines.controller;

import com.ey.medicare.medicines.entity.Medicines;
import com.ey.medicare.medicines.service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("medicine")
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
}
