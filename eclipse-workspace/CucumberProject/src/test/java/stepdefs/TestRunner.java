package stepdefs;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(
		
	//monochrome = true (it'll hide unsupported characters from console 	
	plugin = {"pretty","html:target/html-cucumber","json:target/cucumber.json"},// it'll Display steps involved in console 
	features="src/test/java/features",
	glue= "stepdefs",
	//tags= {"@WIP"} // To run work in progress scenario 
	// tags= {"@Sanity"} It'll execute only those features which has sanity tags in it 
	//tags= {"@Sanity and @Regression"} //It should have both tags to run 
	//tags= {"@Sanity or @Regression"} //It'll execute both tags sanity or regression 
	 //tags = {"@Calculator"} //It is feature level tag 
	//tags = {"not @WIP"} // Run all the scenarios except WIP
	tags = {"@Browser and not @WIP"} //Run all scenario from Browser except WIP
			
	)

public class TestRunner {

	
	
}
