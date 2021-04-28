package StepDefinition;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {

	public static WebDriver driver;
	
	//@tag 1
	@Given("^I want to give the url in  browser \"([^\"]*)\"$")
	public void i_want_to_give_the_url_in_browser(String url) {
	    
		System.setProperty("webdriver.chrome.driver","C://Users//CAjaykumarChanabathn//Downloads//chromedriver_win32//chromedriver.exe");
		   driver = new ChromeDriver();
		   driver.manage().window().maximize();	   
		   driver.get(url);
		   System.out.println(driver.getCurrentUrl());
		    
	}

	@When("^I enter the url login/home page should be displayed with signup button$")
	public void i_enter_the_url_login_home_page_should_be_displayed_with_signup_button() {
	 
	}

	@When("^I click on signup button$")
	public void i_click_on_signup_button() {
	 
	}

	@Then("^I verify the \"([^\"]*)\" in step$")
	public void i_verify_the_in_step(String arg1) {
	 
	}
//@tag2
	@Given("^I should  click on the signup button$")
	public void i_should_click_on_the_signup_button() {
	    
		driver.findElement(By.linkText("Sign up!")).click();
	}

	@When("^I click on sign up button registartion page gets displayed$")
	public void i_click_on_sign_up_button_registartion_page_gets_displayed() {
	 
	}

	@When("^I enter all the mandatory fields$")
	public void i_enter_all_the_mandatory_fields() {
	 
	}

	@When("^I enter  First name$")
	public void i_enter_First_name() {
		driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys("first name");  
	 
	}

	@When("^I enter Last name$")
	public void i_enter_Last_name() {
		driver.findElement(By.xpath("//input[@name='lastname']")).sendKeys("last name");
	 
	}

	@When("^I enter e-mail$")
	public void i_enter_e_mail() {
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys("abqa123@mail.com");
	 
	}

	
	@When("^I enter Username \"([^\"]*)\"$")
	public void i_enter_Username(String username) {
		driver.findElement(By.id("username")).sendKeys(username);
	   
	}
	
	@When("^I enter Pass$")
	public void i_enter_Pass() {
		driver.findElement(By.xpath("//input[@id='pass1']")).sendKeys("Abc@12322");
	 
	}

	@When("^I enter Confirm password$")
	public void i_enter_Confirm_password() {
		driver.findElement(By.xpath("//input[@id='pass2']")).sendKeys("Abc@12322");
	
	}

	@Then("^I click on register link$")
	public void i_click_on_register_link() {
		driver.findElement(By.xpath("//*[@name='submit']")).click();
	}
	 
	
//@tag3
	@Given("^I should  click on the dropdown button$")
	public void i_should_click_on_the_dropdown_button() {
		driver.findElement(By.xpath("//span[@class='caret']")).click();   
	 
	}

	@When("^I click on dropdown profile details gets displayed$")
	public void i_click_on_dropdown_profile_details_gets_displayed() {
	 
	}

	@When("^I view first and last name$")
	public void i_view_first_and_last_name() {
		String text= driver.findElement(By.xpath("//p[@class='name']")).getText();
		System.out.println(text);   
	 
	}

	@When("^I view email address$")
	public void i_view_email_address() {
		String email= driver.findElement(By.xpath("//*[@id='navbar']/ul[2]/li[2]/ul/li[1]/div/p")).getText();
		System.out.println(email);
	}

	@Then("^I click on home page$")
	public void i_click_on_home_page() {
		driver.get("http://elearningm1.upskills.in/index.php");
	 
	}
//@tag4
	@Given("^I should  click on the home page section$")
	public void i_should_click_on_the_home_page_section() {
		driver.findElement(By.xpath("//*[@id='navbar']/ul[1]/li[1]/a")).click();
	}

	@When("^click on compose option$")
	public void click_on_compose_option() {
		driver.findElement(By.linkText("Compose")).click();
	}

	@When("^I view new window opened$")
	public void i_view_new_window_opened() {
		   System.out.println("email window");  
	 
	}

	@When("^I enter details in send to field$")
	public void i_enter_details_in_send_to_field() throws InterruptedException {
		driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys("rav");
		Thread.sleep(4000);
		driver.findElement(By.xpath("//li[contains(text(),'raja sekhar')]")).click();
	}
	
	@When("^I enter subject$")
	public void i_enter_subject() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id='compose_message_title']")).sendKeys("Cucumber Test");  
	    Thread.sleep(5000);
	 
	}

	@When("^I enter Message$")
	public void i_enter_Message() {
		WebElement frame= driver.findElement(By.xpath("//iframe[@class='cke_wysiwyg_frame cke_reset']"));			
        driver.switchTo().frame(frame);
        driver.findElement(By.xpath("//body")).click();
        driver.findElement(By.xpath("//body/p")).sendKeys("sending text to read");  
        driver.switchTo().defaultContent();
	}

	

	@Then("^I click on send message$")
	public void i_click_on_send_message() {
	    
		driver.findElement(By.xpath("//*[@id='compose_message_compose']")).click();
		String message= driver.findElement(By.xpath("//*[@id='cm-content']/div/div[2]/div/div[1]")).getText();
		System.out.println(message);
		
	}


}
