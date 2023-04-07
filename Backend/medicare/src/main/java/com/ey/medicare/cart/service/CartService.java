package com.ey.medicare.cart.service;

import com.ey.medicare.cart.entityVO.Cart;
import com.ey.medicare.cart.repository.CartRepository;
import com.ey.medicare.medicines.entity.Medicines;
import com.ey.medicare.medicines.repository.MedicineRepository;
import com.ey.medicare.users.repository.UsersRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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
//        List<Cart> carts = cartRepository.findByUserId(userId);
//        for (Cart cart : carts) {
//            if (cart.getMedicines().getMedicineId().equals(medicineId)) {
//                if(cart.getQuantity()<cart.getMedicines().getMedicineStock()) {
//                    cart.setQuantity(cart.getQuantity() + quantity);
//                }
//                else cart.setQuantity(Math.toIntExact(cart.getMedicines().getMedicineStock()));
//                return cartRepository.save(cart);
//            }
//        }
        Cart cart = new Cart();
        cart.setMedicines(medicine);
        cart.setUserId(userId);
        cart.setQuantity(quantity);
        cart.setWhetherOrdered(false);
        return cartRepository.save(cart);
    }

    public List<Cart> getCartByUserId(Long userId) {
        List<Cart> cartList= cartRepository.findByUserId(userId);
        return cartList.stream()
                .filter(cart -> cart.getWhetherOrdered() == null || !cart.getWhetherOrdered())
                .collect(Collectors.toList());
    }

    public void deleteCartByCartId(Long cartId) {
        Cart cart = cartRepository.findByCartId(cartId);
        cartRepository.delete(cart);
    }

    public void markAsOrdered(Long cartId) {
        Cart cart = cartRepository.findByCartId(cartId);
        cart.setWhetherOrdered(true);
        cartRepository.save(cart);
    }

    public Cart increaseCartQuantity(Long cartId) {
        Cart cart = cartRepository.findById(cartId)
                .orElseThrow(() -> new EntityNotFoundException("Cart not found with id " + cartId));
        int currentQuantity = cart.getQuantity();
        int newQuantity = currentQuantity + 1;
        cart.setQuantity(newQuantity);
        return cartRepository.save(cart);
    }

    public Cart decreaseCartQuantity(Long cartId) {
        Cart cart = cartRepository.findById(cartId)
                .orElseThrow(() -> new EntityNotFoundException("Cart not found with id " + cartId));
        int currentQuantity = cart.getQuantity();
        int newQuantity = currentQuantity - 1;
        cart.setQuantity(newQuantity);
        return cartRepository.save(cart);
    }
}
