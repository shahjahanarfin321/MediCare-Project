package com.ey.medicare.cart.service;

import com.ey.medicare.cart.entityVO.Cart;
import com.ey.medicare.cart.repository.CartRepository;
import com.ey.medicare.medicines.entity.Medicines;
import com.ey.medicare.medicines.repository.MedicineRepository;
import com.ey.medicare.users.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private MedicineRepository medicineRepository;

    @Autowired
    private UsersRepository usersRepository;

    public Cart addToCart(Long medicineId, Long userId, Integer quantity) {
        Cart cart = new Cart();
        Medicines medicine = medicineRepository.findByMedicineId(medicineId);
        cart.setMedicines(medicine);
        cart.setUserId(userId);
        cart.setQuantity(quantity);
        return cartRepository.save(cart);
    }

    public List<Cart> getCartByUserId(Long userId) {
        return cartRepository.findByUserId(userId);
    }
}
