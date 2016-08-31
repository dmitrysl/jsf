package com.test.javaee.jsf.controller;

import com.test.javaee.jsf.model.ExampleModel;
import com.test.javaee.jsf.util.PagingInfo;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.context.FacesContext;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by DmitriyS on 8/30/2016.
 */
@ManagedBean(name = "exampleCtrl")
@SessionScoped
public class ExampleController implements Serializable {

    private static final long serialVersionUID = -1255199910215882924L;

    private ExampleModel exampleModel;

    private List<String> customerItems;
    private PagingInfo pagingInfo;
    private Boolean isNextVisible;

    public ExampleController() {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        Object obj = facesContext.getApplication().getELResolver().getValue(facesContext.getELContext(), null, "customerJpa");
        pagingInfo = new PagingInfo();
    }

    public String listSetup() {
        return "example_list";
    }

    public String detailSetup() {
        return "example_details";
    }

    public String next() {
        reset(false);
        getPagingInfo().nextPage();
        return "example_list";
    }

    public String prev() {
        reset(false);
        getPagingInfo().previousPage();
        return "example_list";
    }

    private void reset(boolean resetFirstItem) {
        customerItems = null;
        pagingInfo.setItemCount(-1);
        if (resetFirstItem) {
            pagingInfo.setFirstItem(0);
        }
    }

    private List<String> customersDb;
    private List<String> findCustomersDb(int limit, int offset) {
        if (customersDb == null) {
            customersDb = new ArrayList<>();
            while(customersDb.size() < 100) {
                customersDb.add("customer #" + (customersDb.size()+1));
            }
        }

        return customersDb.subList(offset, offset+limit);
    }
    private int getCustomerCount() {
        return 100;
    }

    public PagingInfo getPagingInfo() {
        if (pagingInfo.getItemCount() == -1) {
            pagingInfo.setItemCount(getCustomerCount());
        }
        return pagingInfo;
    }

    public List<String> getCustomerItems() {
        if (customerItems == null) {
            getPagingInfo();
            customerItems = findCustomersDb(pagingInfo.getBatchSize(), pagingInfo.getFirstItem());
        }
        return customerItems;
    }

    public Boolean getIsNextVisible() {
        return pagingInfo.getLastItem() + pagingInfo.getBatchSize() <= pagingInfo.getItemCount();
    }

    public Boolean getIsPreviousVisible() {
        return pagingInfo.getFirstItem() >= pagingInfo.getBatchSize();
    }

    public Boolean getIsRemainingVisible() {
        return pagingInfo.getLastItem() < pagingInfo.getItemCount();
    }
}
