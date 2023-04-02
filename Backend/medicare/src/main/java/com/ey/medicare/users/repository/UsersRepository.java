package com.ey.medicare.users.repository;

import com.ey.medicare.users.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
    Users findByEmailAndPassword(String email, String password);
}
