package com.test.javaee.jsf.model;

import java.util.Date;

/**
 * Created by DmitriyS on 8/30/2016.
 */
public class ExampleModel {
    private Long id;
    private String name;
    private boolean isSelected;
    private Date createdAt;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isSelected() {
        return isSelected;
    }

    public void setSelected(boolean selected) {
        isSelected = selected;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof ExampleModel)) return false;
        ExampleModel object = (ExampleModel) obj;
        return this.id != null && object.id != null && this.id.equals(object.id);
    }
}
