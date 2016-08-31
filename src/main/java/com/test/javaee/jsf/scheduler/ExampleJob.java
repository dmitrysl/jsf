package com.test.javaee.jsf.scheduler;

import org.quartz.DisallowConcurrentExecution;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

/**
 * Created by DmitriyS on 8/30/2016.
 */
@DisallowConcurrentExecution
public class ExampleJob implements Job {
    @Override
    public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        System.out.println("JSF 2 + Quartz 2 example");
    }
}
