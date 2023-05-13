package junits;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import code.StringFunctions;

public class StringFunctionTest {

	@Test
	public void test1() {
		
		/* Method 1
		String str1 = "madam";
		Boolean flag = StringFunctions.isPalindrome(str1);
		Assertions.assertTrue(flag); */
		
		//Method 2
		Assertions.assertTrue(StringFunctions.isPalindrome("madam"));
	}
	
	@Test
	public void test2() {
		Assertions.assertFalse(StringFunctions.isPalindrome("Joy"));
	}
	
	
}
