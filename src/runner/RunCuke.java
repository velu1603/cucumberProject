package runner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features= {"src/features"},
glue= {"steps"},
monochrome=true,
tags= {"@test,@prodnew"},
plugin= {"pretty","html:target/cucumber"}
		//"com.cucumber.listener.ExtentCucumberFormatter:target/report.html"}
		)
public class RunCuke extends AbstractTestNGCucumberTests {
	
	
	
	
	
	

}
