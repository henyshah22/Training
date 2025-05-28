// Write a program to sort the given list of characters in alphabetical order. ()

package Day8;
import java.util.Arrays;
import java.util.Scanner;
public class SortCharacters {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter: ");
        String input = scanner.nextLine();
        char[] charArray = input.toCharArray();
        Arrays.sort(charArray);
        System.out.print("Sorted: ");
        for (char c : charArray) {
            System.out.print(c + " ");
        }
        scanner.close();
    }
}
