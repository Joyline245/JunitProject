package junits;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import code.Calculator;

public class AnnotationExample {
	
	@BeforeAll
	public static void Beforeall() {
		System.out.println("Before All");
	}
	
	@BeforeEach
	public void Beforejunit() {
		System.out.println("Before Junit");
	}
		
	@Test
	public void test1() {

		int result = Calculator.add(5, 5);

		Assertions.assertEquals(10, result);
	}
	
	@Test
	public void test2() {

		int result = Calculator.add(-4, 5);

		Assertions.assertEquals(1, result);
	}
	
	@AfterEach
	public void Afterjunit() {
		System.out.println("After Junit");
	}
	
	@AfterAll
	public static void Afterall() {
		System.out.println("After All");
	}
	
}