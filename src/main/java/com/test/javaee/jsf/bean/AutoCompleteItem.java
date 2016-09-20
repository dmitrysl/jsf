package com.test.javaee.jsf.bean;

import java.io.Serializable;
import java.util.UUID;

/**
 * Created by DmitriyS on 9/20/2016.
 */
public class AutoCompleteItem implements Serializable {
    private static final long serialVersionUID = 5298269955637943921L;

    private String id;
    private String name;
    private String description;

    public AutoCompleteItem() {
    }

    public AutoCompleteItem(String name) {
        this.id = UUID.randomUUID().toString();
        this.name = name;
    }

    public AutoCompleteItem(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public AutoCompleteItem(String id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
