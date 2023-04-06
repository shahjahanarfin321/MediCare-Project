package com.ey.medicare.healthconcerns.service;

import com.ey.medicare.healthconcerns.entity.HealthConcern;
import com.ey.medicare.healthconcerns.repository.HealthConcernRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HealthConcernService {
    private final HealthConcernRepository healthConcernRepository;

    @Autowired
    public HealthConcernService(HealthConcernRepository healthConcernRepository) {
        this.healthConcernRepository = healthConcernRepository;
    }

    public HealthConcern createHealthConcern(HealthConcern healthConcern) {
        return healthConcernRepository.save(healthConcern);
    }

    public List<HealthConcern> getAllHealthConcerns() {
        return healthConcernRepository.findAll();
    }

    public Optional<HealthConcern> getHealthConcernById(Long id) {
        return healthConcernRepository.findById(id);
    }
}


