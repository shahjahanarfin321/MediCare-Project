package com.ey.medicare.medicines.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Medicines {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long medicineId;
    private String medicineName;
    private Long medicinePrice;
    private Long medicineStock;

    //No Args Constructor
    public Medicines() {
    }

    //All Args Constructor
    public Medicines(String medicineName, Long medicinePrice, Long medicineStock) {
        this.medicineName = medicineName;
        this.medicinePrice = medicinePrice;
        this.medicineStock = medicineStock;
    }

    // Getters
    public Long getMedicineId() {
        return medicineId;
    }

    public String getMedicineName() {
        return medicineName;
    }

    public Long getMedicinePrice() {
        return medicinePrice;
    }

    public Long getMedicineStock() {
        return medicineStock;
    }

    //Setters
    public void setMedicineId(Long medicineId) {
        this.medicineId = medicineId;
    }

    public void setMedicineName(String medicineName) {
        this.medicineName = medicineName;
    }

    public void setMedicinePrice(Long medicinePrice) {
        this.medicinePrice = medicinePrice;
    }

    public void setMedicineStock(Long medicineStock) {
        this.medicineStock = medicineStock;
    }
}
