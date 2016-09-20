package com.test.javaee.jsf.bean;

import javax.annotation.PostConstruct;
import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by DmitriyS on 9/19/2016.
 */
@ManagedBean
@ApplicationScoped
public class AutoComplete implements Serializable {
    private static final long serialVersionUID = 3003511853525550737L;

    private List<AutoCompleteItem> items = new ArrayList<>();

    @PostConstruct
    public void init() {
        String[] names = new String[] {
                "Arvada", "Colorado Springs", "Baltimore", "Brittany", "Bahamas",
                "Belgrade", "Boulder", "Bayou", "Brighton", "Buffalo", "Denver", "Dixie",
                "Evergreen", "Ft. Collins", "Los Angeles", "Los Lobos", "Las Vegas",
                "Loveland", "Vail"};
        items = new ArrayList<>();
        while (items.size() < names.length) {
            items.add(new AutoCompleteItem(names[items.size()]));
        }
    }

    public List<AutoCompleteItem> getLocations() {
        return items;
    }
}
