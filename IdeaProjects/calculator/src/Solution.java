abstract class Calculator {
    abstract int add(int a, int b);
}

class Adder extends Calculator {
    @Override
    int add(int a, int b) {
        System.out.println("Adding integers: " + a + " " + b);
        return a + b;
    }
}

abstract class Multiplier extends Calculator { // Add the "extends Calculator" here
    int multiply(int a, int b, Calculator calculator) {
        int result = 0;
        for (int i = 0; i < b; i++) {
            result = calculator.add(result, a);
        }
        return result;
    }
}

public class Solution {
    public static void main(String[] args) {
        Adder adder = new Adder();
        Multiplier multiplier = new Multiplier() {
            @Override
            int add(int a, int b) {
                return 0;
            }
        };

        java.util.Scanner scan = new java.util.Scanner(System.in);
        int a = scan.nextInt();
        int b = scan.nextInt();

        System.out.println("Testing Addition");
        int sum = adder.add(a, b);
        System.out.println("Sum = " + sum);

        System.out.println("Testing Multiplication");
        int product = multiplier.multiply(a, b, adder);
        System.out.println("Product = " + product);
    }
}
