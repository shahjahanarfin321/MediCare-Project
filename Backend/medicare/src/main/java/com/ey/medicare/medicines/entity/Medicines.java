package com.ey.medicare.medicines.entity;

import jakarta.persistence.*;

@Entity
public class Medicines {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long medicineId;
    private String medicineName;
    private Long medicinePrice;
    private Long medicineStock;

    @Lob
    private byte[] imageData;

    //No Args Constructor
    public Medicines() {
    }

    //All Args Constructor
    public Medicines(String medicineName, Long medicinePrice, Long medicineStock) {
        this.medicineName = medicineName;
        this.medicinePrice = medicinePrice;
        this.medicineStock = medicineStock;
    }
    public Medicines(String medicineName, Long medicinePrice, Long medicineStock, byte[] imageData) {
        this.medicineName = medicineName;
        this.medicinePrice = medicinePrice;
        this.medicineStock = medicineStock;
        this.imageData = imageData;
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

    public byte[] getImageData() {
        return imageData;
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

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }
}
