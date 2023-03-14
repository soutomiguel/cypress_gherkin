Feature: Login page
    Scenario: Success Login
        Given A user enter to the login page
        When A user enters the username "standard_user"
        And A user enters the password "secret_sauce"
        And A user clicks on the login button
        Then A user will be logged in