import java.util.Scanner;

public class Encryt_Decrypt {

    public static String encrypt(String text) {
        String result = "";
        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            int originalAscii = (int) c;
            int encryptedAscii = originalAscii + 5;
            char encryptedChar = (char) encryptedAscii;

            System.out.println("Encrypting char '" + c + "' (ASCII: " + originalAscii + ") to '"
                    + encryptedChar + "' (ASCII: " + encryptedAscii + ")");

            result = result + encryptedChar;
        }
        return result;
    }

    public static String decrypt(String text) {
        String result = "";
        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            int encryptedAscii = (int) c;
            int decryptedAscii = encryptedAscii - 5;
            char decryptedChar = (char) decryptedAscii;

            // Print ASCII values and chars
            System.out.println("Decrypting char '" + c + "' (ASCII: " + encryptedAscii + ") to '"
                    + decryptedChar + "' (ASCII: " + decryptedAscii + ")");

            result = result + decryptedChar;
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter: ");
        String original = scanner.nextLine();

        String encrypted = encrypt(original);
        System.out.println("Encrypted: " + encrypted);

        String decrypted = decrypt(encrypted);
        System.out.println("Decrypted: " + decrypted);

        scanner.close();
    }
}
