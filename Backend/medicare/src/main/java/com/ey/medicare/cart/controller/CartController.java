package com.ey.medicare.cart.controller;

import com.ey.medicare.cart.NotFoundException;
import com.ey.medicare.cart.entityVO.Cart;
import com.ey.medicare.cart.repository.CartRepository;
import com.ey.medicare.cart.service.CartService;
import com.ey.medicare.medicines.entity.Medicines;
import com.ey.medicare.medicines.service.MedicineService;
import com.ey.medicare.users.entity.Users;
import com.ey.medicare.users.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping("/add-medicine-to-cart")
    private Cart addToCart(@RequestParam Long medicineId,@RequestParam Long userId,@RequestParam Integer quantity) {
        return cartService.addToCart(medicineId,userId,quantity);
    }

    @GetMapping("/my-orders")
    private List<Cart> getCartByUserId(@RequestParam Long userId) {
        return cartService.getCartByUserId(userId);
    }

    @DeleteMapping("/delete-cart")
    private void deleteCartByCartId(@RequestParam Long cartId) {
        cartService.deleteCartByCartId(cartId);
    }

    @PutMapping("/{cartId}/markAsOrdered")
    public ResponseEntity<?> markAsOrdered(@PathVariable Long cartId) {
        cartService.markAsOrdered(cartId);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/increaseQuantity/{cartId}")
    public ResponseEntity<Cart> increaseCartQuantity(@PathVariable Long cartId) {
        Cart updatedCart = cartService.increaseCartQuantity(cartId);
        return ResponseEntity.ok(updatedCart);
    }

    @PutMapping("/decreaseQuantity/{cartId}")
    public ResponseEntity<Cart> decreaseCartQuantity(@PathVariable Long cartId) {
        Cart updatedCart = cartService.decreaseCartQuantity(cartId);
        return ResponseEntity.ok(updatedCart);
    }

    @GetMapping("/get-my-orders")
    private List<Cart> getMyOrders(@RequestParam Long userId) {
        return cartService.getMyOrders(userId);
    }
}

