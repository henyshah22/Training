// "Find the word according to input. Ex. String input: I love Java number input : 3 Ouput : Java "

public class i_love_java {
    public static void main(String[] args) {
        String sentence = "I love Java";
        int number = 3;

        String[] words = sentence.split(" ");
        if (number > 0 && number <= words.length) {
            System.out.println(words[number - 1]);
        } else {
            System.out.println("Invalid number");
        }
    }
}
