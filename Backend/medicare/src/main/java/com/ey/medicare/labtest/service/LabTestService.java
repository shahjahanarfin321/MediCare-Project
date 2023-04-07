package com.ey.medicare.labtest.service;

import com.ey.medicare.labtest.entity.LabTest;
import com.ey.medicare.labtest.repository.LabTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LabTestService {
    @Autowired
    private LabTestRepository labTestRepository;

    public LabTest saveLabTest(LabTest labTest) {
        return labTestRepository.save(labTest);
    }

    public List<LabTest> getAllLabTestsByUserId(Long userId) {
        return labTestRepository.findByUserId(userId);
    }
}

