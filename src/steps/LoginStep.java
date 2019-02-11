
package steps;
import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {
	
	@Before("@test")
	public void setUp() {
		System.out.println("launch the browser");
	}
	
	@After("@test")
	public void tearDown() {
		System.out.println("Quitting the browser");
	}
	
	@Before("@prodnew")
	public void setUpProd() {
		System.out.println("launch the browser in production");
	}
	
	@After("@prodnew")
	public void tearDownProd() {
		System.out.println("Quitting the browser in production");
	}
	
	@Given("^user navigates to facebook website$")
	public void user_navigates_to_facebook_website() throws Throwable {
		
		System.out.println("@Given--User navigates to facebook.com");
	    
	}

	@When("^user validates the homepage title$")
	public void user_validates_the_homepage_title() throws Throwable {
		
		System.out.println("@When--user validates the home page title");
	    
	}

	@Then("^user entered \"([^\"]*)\" username$")
	public void user_entered_valid_username(String username) throws Throwable {
		System.out.println("@Then--user entered  "+ username + " username");
	   
	}

	@And("^user entered \"([^\"]*)\" password$")
	public void user_entered_valid_password(String password) throws Throwable {
		System.out.println("@And--user entered "+ password + " password");
	    
	}

	@And("^user select the age category$")
	public void user_select_the_age_category(DataTable table) throws Throwable {
	    
		List<Map<String,String>> data = table.asMaps(String.class, String.class);
	    System.out.println("@And -user select the age catgeory :"+data.get(0).get("Age")+ "------selected loaction as:"+data.get(0).get("location"));
	}
	@Then("^user \\\"([^\\\"]*)\\\" sucessfully logged in$")
	public void user_shouldbe_sucessfully_logged_in(String validateLogin) throws Throwable {
		System.out.println("@Then--user " + validateLogin +" should be sucessfully logged in ");
	}
}
