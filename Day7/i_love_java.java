// "Find the word according to input. Ex. String input: I love Java number input : 3 Ouput : Java "

import java.util.Scanner;

public class i_love_java {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();
        String[] words = sentence.split(" ");
        if (number > 0 && number <= words.length) {
            System.out.println(words[number - 1]);
        } else {
            System.out.println("Invalid number");
        }
        scanner.close();
    }
}
