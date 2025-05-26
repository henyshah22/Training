package Day8;
public class pattern1 {
    public static void main(String[] args) {
        int height = 5;  
        
        for (int i = 1; i <= height; i++) {
            for (int j = 1; j <= i; j++) {
                if (j == 1 || j == i || i == height) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}
