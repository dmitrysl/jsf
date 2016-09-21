package com.test.javaee.jsf.filter;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.io.File;
import java.io.IOException;
import java.util.*;

/**
 * Created by DmitriyS on 9/21/2016.
 */
@WebFilter(urlPatterns = "/upload/*", initParams = {
        @WebInitParam(name = "sizeThreshold", value = "1024"),
})
public class UploadFilter implements Filter {
    private static final String sizeThresholdParam = "sizeThreshold";
    private static final String repositoryPathParam = "repositoryPath";
    private int sizeThreshold = -1;
    private String repositoryPath;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        repositoryPath = filterConfig.getInitParameter(repositoryPathParam);
        try {
            String sizeThresholdParamValue = filterConfig.getInitParameter(sizeThresholdParam);
            if (null != sizeThresholdParamValue) {
                sizeThreshold = Integer.parseInt(sizeThresholdParamValue);
            }
        } catch (NumberFormatException ex) {
            ServletException servletException = new ServletException();
            servletException.initCause(ex);
            throw servletException;
        }
    }

    @Override
    public void doFilter(ServletRequest servletRequest,
                         ServletResponse servletResponse,
                         FilterChain filterChain)
            throws IOException, ServletException {

        if (!(servletRequest instanceof HttpServletRequest)) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }

        HttpServletRequest request = (HttpServletRequest) servletRequest;

        boolean isMultipartContent = ServletFileUpload.isMultipartContent(request);

        if (!isMultipartContent) {
            filterChain.doFilter(servletRequest, servletResponse);
            return;
        }

        DiskFileItemFactory factory = new DiskFileItemFactory();
        if (sizeThreshold >= 0) {
            factory.setSizeThreshold(sizeThreshold);
        }
        if (null != repositoryPath) {
            factory.setRepository(new File(repositoryPath));
        }

        ServletFileUpload upload = new ServletFileUpload(factory);

        try {
            List<FileItem> items = upload.parseRequest(request);
            final Map<String, String[]> map = new HashMap<>();
            for (FileItem item : items) {
                if (item.isFormField()) {
                    map.put(item.getFieldName(), new String[] {item.getString()});
                } else {
                    request.setAttribute(item.getFieldName(), item);
                }
            }

            filterChain.doFilter(new HttpServletRequestWrapper(request) {
                @Override
                public Map<String, String[]> getParameterMap() {
                    return map;
                }

                @Override
                public String[] getParameterValues(String name) {
                    return getParameterMap().get(name);
                }

                @Override
                public String getParameter(String name) {
                    String[] params = getParameterValues(name);
                    if (null == params) return null;
                    return params[0];
                }

                @Override
                public Enumeration<String> getParameterNames() {
                    return Collections.enumeration(getParameterMap().keySet());
                }
            }, servletResponse);
        } catch (FileUploadException ex) {
            ServletException servletException = new ServletException();
            servletException.initCause(ex);
            throw servletException;
        }
    }

    @Override
    public void destroy() {

    }
}
