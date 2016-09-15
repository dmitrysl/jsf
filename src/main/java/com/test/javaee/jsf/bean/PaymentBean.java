package com.test.javaee.jsf.bean;

import javax.enterprise.context.Conversation;
import javax.enterprise.context.ConversationScoped;
import javax.enterprise.context.SessionScoped;
import javax.inject.Inject;
import javax.inject.Named;
import java.io.Serializable;

/**
 * Created by DmitriyS on 9/14/2016.
 */
@Named("payment")
@SessionScoped
//@ConversationScoped
public class PaymentBean implements Serializable {
    private static final long serialVersionUID = -1676840243235620507L;

//    @Inject
//    private Conversation conversation;

    // Control start and end of conversation
//    public void start() {
//        conversation.begin();
//    }
//
//    public void end() {
//        conversation.end();
//    }

//    public Conversation getConversation() {
//        return conversation;
//    }
//
//    public void setConversation(Conversation conversation) {
//        this.conversation = conversation;
//    }

    private Amount amount = new Amount();
    private CreditCard creditCard = new CreditCard();

    public Amount getAmount() {
        return amount;
    }

    public void setAmount(Amount amount) {
        this.amount = amount;
    }

    public CreditCard getCreditCard() {
        return creditCard;
    }

    public void setCreditCard(CreditCard creditCard) {
        this.creditCard = creditCard;
    }
}
