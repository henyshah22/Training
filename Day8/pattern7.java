package Day8;
public class pattern7 {
    
    public static void printPattern(int n) {
        for (int i = 0; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("*" + i);
            }
            System.out.print("*");            
            System.out.println();
        }
    }
    public static void main(String[] args) {
        int n = 4;
        printPattern(n);
    }
}
