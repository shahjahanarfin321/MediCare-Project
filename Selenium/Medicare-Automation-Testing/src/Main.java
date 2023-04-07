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

        // Find the login button and click it
        WebElement loginButton = driver.findElement(By.linkText("Login"));
        loginButton.click();

        // Wait for the email input to appear
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement emailInput = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("form2Example1")));

        // Enter the email and password
        emailInput.sendKeys("arfin@gmail.com");
        WebElement passwordInput = driver.findElement(By.id("form2Example2"));
        passwordInput.sendKeys("arfin123@");

        // Submit the form
        WebElement submitButton = driver.findElement(By.xpath("//button[@type='submit']"));
        submitButton.click();

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

        // Wait for 5 seconds
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

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

        // Navigate to the "My Lab Test" page
        WebElement profileDropdown = driver.findElement(By.linkText("Profile"));
        profileDropdown.click();

        WebElement myAppointment = driver.findElement(By.linkText("My Appointment"));
        myAppointment.click();

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }


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
        mobileField.sendKeys("1234567890");

        WebElement pincodeField = driver.findElement(By.id("formPincode"));
        pincodeField.sendKeys("123456");

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

        // Navigate to the "My Lab Test" page
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








        // Close the browser
        driver.quit();
    }
}




//public class Main {
//    public static void main(String[] args) {
//        System.setProperty("webdriver.chrome.driver","C:\\Users\\Shahjahan Arfin\\Desktop\\Selenium\\browserdrivers\\chromedriver.exe");
//        WebDriver driver = new ChromeDriver();
//        System.out.println("Hello world!");
//        driver.get("http://www.google.com");
//        driver.quit();
//    }
//}