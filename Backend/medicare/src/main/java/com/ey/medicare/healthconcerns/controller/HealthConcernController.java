package com.ey.medicare.healthconcerns.controller;

import com.ey.medicare.healthconcerns.entity.HealthConcern;
import com.ey.medicare.healthconcerns.service.HealthConcernService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/healthconcern")
public class HealthConcernController {
    @Autowired
    private HealthConcernService healthConcernService;


    @PostMapping("/create-concerns")
    public ResponseEntity<HealthConcern> createHealthConcern(@RequestBody HealthConcern healthConcern) {
        HealthConcern createdHealthConcern = healthConcernService.createHealthConcern(healthConcern);
        return ResponseEntity.ok(createdHealthConcern);
    }

    @GetMapping("/get-all-concerns")
    public ResponseEntity<List<HealthConcern>> getAllHealthConcerns() {
        List<HealthConcern> healthConcerns = healthConcernService.getAllHealthConcerns();
        return ResponseEntity.ok(healthConcerns);
    }

    @GetMapping("/get-concerns-by-id/{id}")
    public ResponseEntity<HealthConcern> getHealthConcernById(@PathVariable Long id) {
        Optional<HealthConcern> healthConcern = healthConcernService.getHealthConcernById(id);
        return healthConcern.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
}