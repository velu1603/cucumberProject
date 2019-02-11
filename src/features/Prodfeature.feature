@bvt @prodnew 
Feature: Login in production 
	In order to perform login in production
As a user
I want to enter correct username and password

Scenario Outline: In order to verify the login to facebook 
	Given user navigates to facebook website 
	When user validates the homepage title 
	Then user entered "<username> " username 
	And user entered "<password>" password 
	Then user "<loginType>" sucessfully logged in 
	
	
	Examples: 
		|username| password| loginType|
		|valid   |valid    |should     |
		|invalid |invalid   |should not    |
		
		
		
		
		
		
		
        