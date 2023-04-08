import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class Main {
    public static void main(String[] args) {
        // Set the path of the ChromeDriver executable
        System.setProperty("webdriver.chrome.driver","C:\\Users\\Shahjahan Arfin\\Desktop\\Selenium\\browserdrivers\\chromedriver.exe");

        // Launch the Chrome browser
        WebDriver driver = new ChromeDriver();

        // Navigate to the website
        driver.get("http://localhost:3000");

        // Maximize the window
        driver.manage().window().maximize();



        //Login Test

        // Find the login button and click it
        WebElement loginButton = driver.findElement(By.linkText("Login"));
        loginButton.click();

        // Wait for the email input to appear
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement emailInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("form2Example1")));

        // Wait for 2 seconds
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Enter the email and password
        emailInput.sendKeys("arfin@gmail.com");

        // Wait for 2 seconds
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        WebElement passwordInput = driver.findElement(By.id("form2Example2"));
        passwordInput.sendKeys("arfin123@");

        // Submit the form
        WebElement submitButton = driver.findElement(By.xpath("//button[@type='submit']"));
        submitButton.click();

        //Login Ends here



        //Add medicine To cart

        // Wait for the Medicines page to load
        WebElement medicinesHeading = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[text()='Medicines']")));

        // Wait for 5 seconds
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        //Click on add to cart button
        WebElement addToCartBtn = driver.findElement(By.xpath("//button[text()='Add to Cart']"));
        addToCartBtn.click();

        // Wait for 5 seconds
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Wait for the alert to appear and accept it
        WebDriverWait alertWait = new WebDriverWait(driver, Duration.ofSeconds(10));
        Alert alert = alertWait.until(ExpectedConditions.alertIsPresent());
        String alertText = alert.getText();
        System.out.println("Alert text: " + alertText);
        alert.accept();

        //Go to cart to confirm oder
        WebElement cartButton = driver.findElement(By.linkText("Cart"));
        cartButton.click();

        wait = new WebDriverWait(driver, Duration.ofSeconds(5));
        WebElement confirmButton = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("#confirmYourOrder")));


        confirmButton = driver.findElement(By.id("confirmYourOrder"));
        confirmButton.click();

        // Wait for 5 seconds
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // Wait for the alert to appear and accept it
        alertWait = new WebDriverWait(driver, Duration.ofSeconds(5));
        alert = alertWait.until(ExpectedConditions.alertIsPresent());
        alertText = alert.getText();
        System.out.println("Alert text: " + alertText);
        alert.accept();

        // Navigate to the "My Orders" page
        WebElement profileDropdown = driver.findElement(By.linkText("Profile"));
        profileDropdown.click();

        WebElement myOrders = driver.findElement(By.linkText("My Orders"));
        myOrders.click();

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        //Medicine Added to cart ends here





        //Testing for creating the new doctor appointment

        //Go to health Test
        WebElement doctorAppointment = driver.findElement(By.linkText("Doctor Appointment"));
        doctorAppointment.click();

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Click on the "Doctor" card
        WebElement doctortestCard = driver.findElement(By.id("doctorname"));
        doctortestCard.click();

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Fill out the form and submit
        WebElement mobileNumber = driver.findElement(By.id("mobilenumber"));
        mobileNumber.sendKeys("9876907654");
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        WebElement confirmAppointment = driver.findElement(By.xpath("//button[text()='Confirm Appointment']"));
        confirmAppointment.click();

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Wait for the alert to appear and accept it
        alert = alertWait.until(ExpectedConditions.alertIsPresent());
        alertText = alert.getText();
        System.out.println("Alert text: " + alertText);
        alert.accept();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Navigate to the "My Appointment" page
        profileDropdown = driver.findElement(By.linkText("Profile"));
        profileDropdown.click();

        WebElement myAppointment = driver.findElement(By.linkText("My Appointment"));
        myAppointment.click();

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        //Doctor appointment ends here


        //Testing for creating and seeing the health test

        //Go to health Test
        WebElement healthTest = driver.findElement(By.linkText("Health Test"));
        healthTest.click();

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Click on the "Heamoglobin Test" card
        WebElement hbTestCard = driver.findElement(By.xpath("//h4[text()='Heamoglobin Test']"));
        hbTestCard.click();

        // Fill out the form and submit
        WebElement nameField = driver.findElement(By.id("formName"));
        nameField.sendKeys("John Doe");

        WebElement mobileField = driver.findElement(By.id("formMobile"));
        mobileField.sendKeys("7845796583");

        WebElement pincodeField = driver.findElement(By.id("formPincode"));
        pincodeField.sendKeys("761008");

        WebElement agreedCheckbox = driver.findElement(By.id("formAgreed"));
        agreedCheckbox.click();

        WebElement bookNowButton = driver.findElement(By.xpath("//button[text()='Book Now']"));
        bookNowButton.click();

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Wait for the alert to appear and accept it
        alert = alertWait.until(ExpectedConditions.alertIsPresent());
        alertText = alert.getText();
        System.out.println("Alert text: " + alertText);
        alert.accept();
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Navigate to the "My Profile" page
        profileDropdown = driver.findElement(By.linkText("Profile"));
        profileDropdown.click();

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        WebElement myLabTestLink = driver.findElement(By.linkText("My Lab Test"));
        myLabTestLink.click();

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        //Lab test automation ends here


        //Navigating and exploring health library

        WebElement healthLibrary = driver.findElement(By.linkText("Health Library"));
        healthLibrary.click();

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        //explored health library ends here


        //Health Concerns starts

        WebElement healthConcerns = driver.findElement(By.linkText("Health Concerns"));
        healthConcerns.click();

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        WebElement askQustion = driver.findElement(By.xpath("//button[text()='Ask a question']"));
        askQustion.click();

        WebElement askQuestioninput = driver.findElement(By.id("yourQuestion"));
        askQuestioninput.sendKeys("I want to have some test related concerns could you help");

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        //hit  the submit button
        WebElement submitQuestion = driver.findElement(By.xpath("//button[text()='Submit']"));
        submitQuestion.click();

        //Health Concern ends here


        //Logout starts here

        // Navigate to the "My Profile" page
        profileDropdown = driver.findElement(By.linkText("Profile"));
        profileDropdown.click();

        WebElement logout = driver.findElement(By.linkText("Logout"));
        logout.click();

        //Logout ends here



        //Admin login starts

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Find the "Admin Login" link and click it
        WebElement adminLoginLink = driver.findElement(By.linkText("click here"));
        adminLoginLink.click();

        // Wait for the email input to appear
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        emailInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("form2Example1")));

        // Wait for 2 seconds
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Enter the email and password
        emailInput.sendKeys("admin@gmail.com");

        // Wait for 2 seconds
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        passwordInput = driver.findElement(By.id("form2Example2"));
        passwordInput.sendKeys("admin");

        // Wait for 2 seconds
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Submit the form
        submitButton = driver.findElement(By.xpath("//button[@type='submit']"));
        submitButton.click();

        //Admin login ends here



        //Visit manage product and edit an entry

        wait = new WebDriverWait(driver, Duration.ofSeconds(5));
        WebElement manageProduct = wait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText("Manage Product")));

        manageProduct = driver.findElement(By.linkText("Manage Product"));
        manageProduct.click();

        // Wait for 2 seconds
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        WebElement editButton = driver.findElement(By.xpath("//button[text()='Edit']"));
        editButton.click();

        // Wait for 2 seconds
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Fill out the form and submit
        WebElement medicinePrice = driver.findElement(By.id("medicinePrice"));
        medicinePrice.clear();
        medicinePrice.sendKeys("40");

        // Wait for 2 seconds
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        WebElement medicineStock = driver.findElement(By.id("medicineStock"));
        medicineStock.clear();
        medicineStock.sendKeys("15");

        // Wait for 2 seconds
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        WebElement updateButton = driver.findElement(By.xpath("//button[text()='Update']"));
        updateButton.click();

        // Wait for the alert to appear and accept it
        alertWait = new WebDriverWait(driver, Duration.ofSeconds(3));
        alert = alertWait.until(ExpectedConditions.alertIsPresent());
        alertText = alert.getText();
        System.out.println("Alert text: " + alertText);
        alert.accept();

        // Wait for 2 seconds
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        manageProduct = driver.findElement(By.linkText("Manage Product"));
        manageProduct.click();

        //Manage Product ends here


        // Close the browser
        driver.quit();
    }
}