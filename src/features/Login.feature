@sanity @test 
Feature: Login 
	In order to perform login 
As a user
I want to enter correct username and password

Scenario Outline: In order to verify the login to facebook 
	Given user navigates to facebook website 
	When user validates the homepage title 
	Then user entered "<username> " username 
	And user entered "<password>" password 
	And user select the age category 
		|Age     |location|
		|below 18|India   |
		|above 18|UK      |
	Then user "<loginType>" sucessfully logged in 
	
	
	Examples: 
		|username| password| loginType|
		|valid   |valid    |should     |
		|invalid |invalid   |should not    |
		
		
		
		
		
		
		
        