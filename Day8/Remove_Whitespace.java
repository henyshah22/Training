// Write a program to remove whitespaces from a given String. (Without using any inbuilt functions) String - "WELCOME TO MV CLOUDS"

package Day8;
import java.util.Scanner;
public class Remove_Whitespace {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter: ");
        String text = scanner.nextLine();
        String result = removeWhitespaces(text);
        System.out.println("Output: " + result);
        scanner.close();
    }
    public static String removeWhitespaces(String str) {
        String result = "";
        for (int i = 0; i < str.length(); i++) {
            char currentChar = str.charAt(i);
            if (currentChar != ' ' && currentChar != '\t' && currentChar != '\n') {
                result += currentChar; 
            }
        }
        return result;
    }
}
