package com.test.javaee.jsf.bean;

import javax.faces.bean.ApplicationScoped;

/**
 * Created by DmitriyS on 9/19/2016.
 */
@ApplicationScoped
public class AutoComplete {
    public String[] getLocations() {
        return new String[] {
                "Arvada", "Colorado Springs", "Baltimore", "Brittany", "Bahamas",
                "Belgrade", "Boulder", "Bayou", "Brighton", "Buffalo", "Denver", "Dixie",
                "Evergreen", "Ft. Collins", "Los Angeles", "Los Lobos", "Las Vegas",
                "Loveland", "Vail"
        };
    }
}
