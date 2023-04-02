package com.ey.medicare.medicines.controller;

import com.ey.medicare.medicines.service.MedicineService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("medicines")
public class MedicineController {
    private MedicineService medicineService;
}
