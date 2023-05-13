package junits;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import code.Calculator;

public class CalculatorTest {
	
	//@Disabled
	@DisplayName("Two positive number test")
	@Tag("Regression")
	@Test
	public void test1() {

		int result = Calculator.add(5, 5);

		Assertions.assertEquals(10, result);
	}
	
	@Tag("Regression")
	@Tag("Sanity")
	@DisplayName("One positive and one negative number test")
	@Test
	public void test2() {

		int result = Calculator.add(-4, 5);

		Assertions.assertEquals(1, result);
	}
	
	@RepeatedTest(3)
	@DisplayName("Two positive number test where result is not matching")
	//@Test
					// when RepeatedTest is given remove @Test
	public void test3() {

		int result = Calculator.add(4, 5);

		Assertions.assertNotEquals(10, result);
	}

	@CustomAnnotation
	public void test4() {
		int result = Calculator.add(11, 5);

		Assertions.assertNotEquals(10, result);
	}
}

