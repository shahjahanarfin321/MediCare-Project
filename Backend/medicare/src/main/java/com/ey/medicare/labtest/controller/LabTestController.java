package com.ey.medicare.labtest.controller;

import com.ey.medicare.labtest.entity.LabTest;
import com.ey.medicare.labtest.service.LabTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/lab-tests")
public class LabTestController {
    @Autowired
    private LabTestService labTestService;

    @PostMapping("/create-lab-test")
    public ResponseEntity<LabTest> saveLabTest(@RequestBody LabTest labTest) {
        LabTest savedLabTest = labTestService.saveLabTest(labTest);
        return new ResponseEntity<>(savedLabTest, HttpStatus.CREATED);
    }

    @GetMapping("/get-lab-test/{userId}")
    public ResponseEntity<List<LabTest>> getAllLabTestsByUserId(@PathVariable Long userId) {
        List<LabTest> labTests = labTestService.getAllLabTestsByUserId(userId);
        return new ResponseEntity<>(labTests, HttpStatus.OK);
    }
}

