// "Reverse Decimal Number. Ex. Input : 123.45 Ouput : 453.21"
// package Day7;
import java.util.Scanner;
public class Reverse_Decimal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a decimal number: ");
        String input = scanner.nextLine();
        String raw = input.replace(".", "");
        String reversed = new StringBuilder(raw).reverse().toString();
        int decimalIndex = input.length() - input.indexOf('.') - 1;
        String result = reversed.substring(0, decimalIndex) + "." + reversed.substring(decimalIndex);
        System.out.println("Reversed Decimal: " + result);
        scanner.close();
    }
}
