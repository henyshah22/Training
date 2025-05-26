// "Reverse Decimal Number. Ex. Input : 123.45 Ouput : 453.21"

public class Revere_Decimal {
    public static void main(String[] args) {
        String input = "123.45";

        String raw = input.replace(".", "");
        String reversed = new StringBuilder(raw).reverse().toString();

        String result = reversed.substring(0, 3) + "." + reversed.substring(3);

        System.out.println(result); 
    }
}
