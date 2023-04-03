package com.ey.medicare.cart.repository;

import com.ey.medicare.cart.entityVO.Cart;
import com.ey.medicare.medicines.entity.Medicines;
import com.ey.medicare.users.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

    List<Cart> findByUserId(Long userId);
}
