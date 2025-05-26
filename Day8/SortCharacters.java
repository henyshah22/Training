// Write a program to sort the given list of characters in alphabetical order. ()

package Day8;
import java.util.Arrays;

public class SortCharacters {
    public static void main(String[] args) {
        char[] charArray = {'d', 'b', 'c', 'a', 'e'};

        Arrays.sort(charArray);

        System.out.print("Sorted Char: ");
        for (char c : charArray) {
            System.out.print(c + " ");
        }
    }
}
