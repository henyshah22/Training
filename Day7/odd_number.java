// Write a program to check if a List of integers contains only odd numbers.
import java.util.Scanner;

public class odd_number {
    static boolean allOdd(int[] arr) {
        for (int num : arr) {
            if (num % 2 == 0) {
                return false;  
            }
        }
        return true;  
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter: ");
        String input = scanner.nextLine();
        String[] tokens = input.trim().split("\\s+");

        int[] arr = new int[tokens.length];
        for (int i = 0; i < tokens.length; i++) {
            arr[i] = Integer.parseInt(tokens[i]);
        }
        if (allOdd(arr)) {
            System.out.println("odd");
        } else {
            System.out.println("not odd");
        }

        scanner.close();
    }
}
