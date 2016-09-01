package com.test.javaee.jsf.util;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * Created by DmitriyS on 9/1/2016.
 */
public class SecurityUtils {

    public static String md5(String source) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] bytes = md.digest(source.getBytes("UTF-8"));
            return toString(bytes);
        } catch (UnsupportedEncodingException e) {
            e.fillInStackTrace();
            return null;
        } catch (NoSuchAlgorithmException e) {
            e.fillInStackTrace();
            return null;
        }
    }

    private static String toString( byte[] bytes ) {
        StringBuilder sb = new StringBuilder();
        for( int i=0; i<bytes.length; i++ ) {
            byte b = bytes[ i ];
            String hex = Integer.toHexString((int) 0x00FF & b);
            if (hex.length() == 1) {
                sb.append("0");
            }
            sb.append( hex );
        }
        return sb.toString();
    }
}
