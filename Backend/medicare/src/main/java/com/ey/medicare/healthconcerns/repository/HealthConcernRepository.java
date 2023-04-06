package com.ey.medicare.healthconcerns.repository;

import com.ey.medicare.healthconcerns.entity.HealthConcern;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HealthConcernRepository extends JpaRepository<HealthConcern,Long> {
}
