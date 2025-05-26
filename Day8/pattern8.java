package Day8;
public class pattern8 {

    public static void printPattern(int n) {
        int totalRows = 2 * n + 1;
        
        for (int i = 0; i < totalRows; i++) {
            int rowNum = i <= n ? i : totalRows - 1 - i;  
            
            for (int s = 0; s < n - rowNum; s++) {
                System.out.print(" ");
            }
            
            if (rowNum == 0) {
                System.out.print("*");
            } else {
                for (int j = 0; j < rowNum; j++) {
                    System.out.print("*" + rowNum);
                }
                System.out.print("*");
            }
            
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int n = 4;  
        printPattern(n);
    }
}
