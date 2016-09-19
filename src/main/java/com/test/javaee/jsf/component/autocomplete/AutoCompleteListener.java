package com.test.javaee.jsf.component.autocomplete;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.component.UIInput;
import javax.faces.component.UISelectItems;
import javax.faces.component.UISelectOne;
import javax.faces.context.FacesContext;
import javax.faces.event.ValueChangeEvent;
import javax.faces.view.facelets.FaceletContext;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by DmitriyS on 9/19/2016.
 */
@ManagedBean
@SessionScoped
public class AutoCompleteListener {
    private static final String completionItemsAttr = "completionItems";

    public void valueChanged(ValueChangeEvent event) {
        UIInput input = (UIInput) event.getSource();
        UISelectOne listbox = (UISelectOne) event.getComponent().findComponent("autocomplete-list");

        if (null != listbox) {
            Map<String, Object> attrs = listbox.getAttributes();
            UISelectItems items = (UISelectItems) listbox.getChildren().get(0);
            List<String> newItems = getNewItems((String) input.getValue(), getCompletionItems(listbox, items, attrs));
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

    private List<String> getNewItems(String inputValue, String[] completionItems) {
        List<String> newItems = new ArrayList<>();

        for (String item : completionItems) {
            String s = item.substring(0, inputValue.length());
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

    private String[] getCompletionItems(UISelectOne listbox, UISelectItems items, Map<String, Object> attrs) {
        String[] completionItems = (String[]) attrs.get(completionItemsAttr);
        if (null == completionItems) {
            completionItems = (String[]) items.getValue();
            attrs.put(completionItemsAttr, completionItems);
        }
        return completionItems;
    }
}
