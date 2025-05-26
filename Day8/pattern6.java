package Day8;

public class pattern6 {

    public static void printHourglass(int n) {
        for (int row = 0; row < n; row++) {
            for (int col = 0; col < n; col++) {
                if (col == 0 || col == n - 1) {
                    System.out.print("*");
                } else if (col == row || col == n - row - 1) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int n = 9;
        printHourglass(n);
    }
}

