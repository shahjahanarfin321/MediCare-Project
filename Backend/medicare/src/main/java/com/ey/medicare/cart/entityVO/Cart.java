package com.ey.medicare.cart.entityVO;

import com.ey.medicare.medicines.entity.Medicines;
import jakarta.persistence.*;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartId;
    @ManyToOne
    @JoinColumn(name = "medicine_id")
    private Medicines medicines;

    private Long userId;

    private Integer quantity;

    private Boolean whetherOrdered;

    public Cart() {
    }

    public Cart(Medicines medicines, Long userId, Integer quantity) {
        this.medicines = medicines;
        this.userId = userId;
        this.quantity = quantity;
        this.whetherOrdered = null;
    }

//    public Cart(Medicines medicines, Long userId, Integer quantity) {
//        this.medicines = medicines;
//        this.userId = userId;
//        this.quantity = quantity;
//    }

    public Long getCartId() {
        return cartId;
    }

    public void setCartId(Long cartId) {
        this.cartId = cartId;
    }

    public Medicines getMedicines() {
        return medicines;
    }

    public void setMedicines(Medicines medicines) {
        this.medicines = medicines;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Boolean getWhetherOrdered() {
        return whetherOrdered;
    }

    public void setWhetherOrdered(Boolean whetherOrdered) {
        this.whetherOrdered = whetherOrdered;
    }
}

