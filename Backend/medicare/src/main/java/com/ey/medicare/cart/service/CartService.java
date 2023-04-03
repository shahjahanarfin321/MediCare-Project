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
        Medicines medicine = medicineRepository.findByMedicineId(medicineId);
        if (quantity < 1) {
            quantity = 1; // Setting the minimum quantity to 1
        }
        List<Cart> carts = cartRepository.findByUserId(userId);
        for (Cart cart : carts) {
            if (cart.getMedicines().getMedicineId().equals(medicineId)) {
                if(cart.getQuantity()<cart.getMedicines().getMedicineStock()) {
                    cart.setQuantity(cart.getQuantity() + quantity);
                }
                else cart.setQuantity(Math.toIntExact(cart.getMedicines().getMedicineStock()));
                return cartRepository.save(cart);
            }
        }
        Cart cart = new Cart();
        cart.setMedicines(medicine);
        cart.setUserId(userId);
        cart.setQuantity(quantity);
        return cartRepository.save(cart);
    }


//    public Cart addToCart(Long medicineId, Long userId, Integer quantity) {
//        Cart cart = new Cart();
//        Medicines medicine = medicineRepository.findByMedicineId(medicineId);
//        cart.setMedicines(medicine);
//        cart.setUserId(userId);
//        cart.setQuantity(quantity);
//        return cartRepository.save(cart);
//    }

    public List<Cart> getCartByUserId(Long userId) {
        return cartRepository.findByUserId(userId);
    }
}
