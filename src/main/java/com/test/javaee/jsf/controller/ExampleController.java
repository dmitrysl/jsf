package com.test.javaee.jsf.controller;

import com.test.javaee.jsf.model.ExampleModel;
import com.test.javaee.jsf.model.User;
import com.test.javaee.jsf.service.UserService;
import com.test.javaee.jsf.util.PagingInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.SessionScoped;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;
import javax.servlet.ServletContext;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.util.*;

/**
 * Created by DmitriyS on 8/30/2016.
 */
@ManagedBean(name = "exampleCtrl")
@SessionScoped
public class ExampleController implements Serializable {

    private static final long serialVersionUID = -1255199910215882924L;

//    @Autowired
//    private UserService userService;

    @ManagedProperty("#{userService}")
    private UserService userService;

    private ExampleModel exampleModel;

    @ManagedProperty("#{user}")
    private User user;

    @ManagedProperty("#{login}")
    private Login login;

    private List<Customer> customerItems;
    private PagingInfo pagingInfo;
    private Boolean isNextVisible;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Login getLogin() {
        return login;
    }

    public void setLogin(Login login) {
        this.login = login;
    }

    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    public ExampleController() {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        Object obj = facesContext.getApplication().getELResolver().getValue(facesContext.getELContext(), null, "customerJpa");
        pagingInfo = new PagingInfo();
        ExternalContext externalContext = FacesContext.getCurrentInstance().getExternalContext();
        ServletContext servletContext = (ServletContext) externalContext.getContext();
        WebApplicationContextUtils.getRequiredWebApplicationContext(servletContext)
                .getAutowireCapableBeanFactory()
                .autowireBean(this);
    }

    @PostConstruct
    public void init() {
        ExternalContext externalContext = FacesContext.getCurrentInstance().getExternalContext();
        ServletContext servletContext = (ServletContext) externalContext.getContext();
        WebApplicationContextUtils.getRequiredWebApplicationContext(servletContext)
                .getAutowireCapableBeanFactory()
                .autowireBean(this);
    }

    public String save() {
        user.setId(null);
        if (user.getRole() == null) return "";
        userService.addUser(user);
        user = new User();
        FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("User added!"));
        return "welcome";
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

    private String sortByIdDirection = "asc";
    private String sortByNameDirection = "asc";
    private List<Customer> customersDb;
    private List<Customer> findCustomersDb(int limit, int offset) {
        if (customersDb == null) {
            customersDb = new ArrayList<>();
            while(customersDb.size() < 100) {
                customersDb.add(new Customer(customersDb.size()+1, "customer #" + (customersDb.size()+1), customersDb.size()%4==0));
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

    public void sortById() {
        if (sortByNameDirection.equals("desc")) {
            sortByIdDirection = "desc";
        }
        if (sortByIdDirection.equals("asc")) {
            Collections.sort(customersDb, (o1, o2) -> Integer.compare(o2.getId(), o1.getId()));
            customerItems = null;
            sortByIdDirection = "desc";
        } else {
            Collections.sort(customersDb, (o1, o2) -> Integer.compare(o1.getId(), o2.getId()));
            customerItems = null;
            sortByIdDirection = "asc";
        }
    }

    public void sortByName() {
        if (sortByIdDirection.equals("desc")) {
            sortByNameDirection = "desc";
        }
        if (sortByNameDirection.equals("asc")) {
            Collections.sort(customersDb, (o1, o2) -> o2.getName().compareToIgnoreCase(o1.getName()));
            customerItems = null;
            sortByNameDirection = "desc";
        } else {
            Collections.sort(customersDb, (o1, o2) -> o1.getName().compareToIgnoreCase(o2.getName()));
            customerItems = null;
            sortByNameDirection = "asc";
        }
    }

    public List<Customer> getCustomerItems() {
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

    public void removeCustomer(Customer customer) {
//        Iterator<Customer> iter = customersDb.iterator();
//
//        while (iter.hasNext()) {
//            Customer cust = iter.next();
//            if (cust.getId() == customer.getId()) {
//                iter.remove();
//                break;
//            }
//        }
    }

    public class Customer {
        private int id;
        private String name;
        private boolean isEditable;

        public Customer() {
        }

        public Customer(int id, String name, boolean isEditable) {
            this.id = id;
            this.name = name;
            this.isEditable = isEditable;
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public boolean isEditable() {
            return isEditable;
        }

        public void setEditable(boolean editable) {
            isEditable = editable;
        }
    }
}
