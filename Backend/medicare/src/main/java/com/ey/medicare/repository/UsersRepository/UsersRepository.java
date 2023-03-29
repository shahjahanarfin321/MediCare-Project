package com.ey.medicare.repository.UsersRepository;

import com.ey.medicare.entity.UsersEntity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
    Users findByEmailAndPassword(String email, String password);
}