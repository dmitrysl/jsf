package com.test.javaee.jsf.component.autocomplete;

import com.test.javaee.jsf.bean.AutoCompleteItem;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.component.UIInput;
import javax.faces.component.UISelectItems;
import javax.faces.component.UISelectOne;
import javax.faces.context.FacesContext;
import javax.faces.event.ValueChangeEvent;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by DmitriyS on 9/19/2016.
 */
@ManagedBean
@SessionScoped
public class AutoCompleteListener implements Serializable {
    private static final long serialVersionUID = 1164415438711180866L;

    private static final String completionItemsAttr = "completionItems";

    public void valueChanged(ValueChangeEvent event) {
        UIInput input = (UIInput) event.getSource();
        UISelectOne listbox = (UISelectOne) event.getComponent().findComponent("autocomplete-list");

        if (null != listbox) {
            Map<String, Object> attrs = listbox.getAttributes();
            UISelectItems items = (UISelectItems) listbox.getChildren().get(0);
            List<AutoCompleteItem> newItems = getNewItems((String) input.getValue(), getCompletionItems(listbox, items, attrs));
            items.setValue(newItems.toArray());
            setListboxStyle(newItems.size(), attrs);
        }
    }

    public void completionItemSelected(ValueChangeEvent event) {
        UISelectOne listbox = (UISelectOne) event.getSource();
        UIInput input = (UIInput) event.getComponent().findComponent("autocomplete-input");

        if (null != input) {
            input.setValue(listbox.getValue());
        }

        Map<String, Object> attrs = listbox.getAttributes();
        attrs.put("style", "display: none;");
    }

    private List<AutoCompleteItem> getNewItems(String inputValue, List<AutoCompleteItem> completionItems) {
        List<AutoCompleteItem> newItems = new ArrayList<>();

        for (AutoCompleteItem item : completionItems) {
            String s = item.getName().substring(0, item.getName().length() > inputValue.length() ? inputValue.length() : item.getName().length());
            if (s.equalsIgnoreCase(inputValue)) {
                newItems.add(item);
            }
        }
        return newItems;
    }

    private void setListboxStyle(int rows, Map<String, Object> attrs) {
        if (rows > 0) {
            Map<String, String> reqParams = FacesContext.getCurrentInstance().getExternalContext().getRequestParameterMap();
            attrs.put("style", "display: inline; position: absolute; left: " + reqParams.get("x") + "px; " + "top: " + reqParams.get("y") + "px");
        } else {
            attrs.put("style", "display: none;");
        }
    }

    private List<AutoCompleteItem> getCompletionItems(UISelectOne listbox, UISelectItems items, Map<String, Object> attrs) {
        List<AutoCompleteItem> completionItems = (List<AutoCompleteItem>) attrs.get(completionItemsAttr);
        if (null == completionItems) {
            completionItems = (List<AutoCompleteItem>) items.getValue();
            attrs.put(completionItemsAttr, completionItems);
        }
        return completionItems;
    }
}
