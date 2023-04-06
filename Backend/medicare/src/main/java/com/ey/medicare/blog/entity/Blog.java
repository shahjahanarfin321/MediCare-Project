package com.ey.medicare.blog.entity;

import jakarta.persistence.*;

@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String description;

    private String category;

    private String imageLink;

    // constructors, getters, and setters


    public Blog() {
    }

    public Blog(String title, String description, String category,String imageLink) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.imageLink = imageLink;
    }


    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }


    public String getCategory() {
        return category;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }
}

