// Write a program to remove whitespaces from a given String. (Without using any inbuilt functions) String - "WELCOME TO MV CLOUDS"

package Day8;
public class Remove_Whitespace {

    public static void main(String[] args) {
        String text = "WELCOME TO MV CLOUDS";
        String result = removeWhitespaces(text);
        System.out.println("Original String: " + text);
        System.out.println("Without Whitespaces: " + result);
    }

    public static String removeWhitespaces(String str) {
        char[] charArray = str.toCharArray();
        // Converts the input string into a character array.
        StringBuilder stringBuilder = new StringBuilder();

        for (char c : charArray) {
            if (c != ' ' && c != '\t' && c != '\n') {
                stringBuilder.append(c);
            }
        }
        return stringBuilder.toString();
    }
}