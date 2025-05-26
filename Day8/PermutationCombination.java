// Write a java program to calculate the permutation and combination of a 2 numbers.

package Day8;
import java.util.Scanner;

public class PermutationCombination {

    public static long factorial(int n) {
        if (n == 0) {
            return 1;
        }
        long fact = 1;
        for (int i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }

    // nPr=n!(n−r)!nPr = \frac{n!}{(n-r)!}nPr=(n−r)!n!​.
    public static long permutation(int n, int r) {
        return factorial(n) / factorial(n - r);
    }

    // nCr=n!r!(n−r)!nCr = \frac{n!}{r!(n-r)!}nCr=r!(n−r)!n!​.
    public static long combination(int n, int r) {
        return factorial(n) / (factorial(r) * factorial(n - r));
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter value for n: ");
        int n = scanner.nextInt();

        System.out.print("Enter value for r: ");
        int r = scanner.nextInt();

        long perm = permutation(n, r);
        System.out.println(n + "P" + r + " = " + perm);

        long comb = combination(n, r);
        System.out.println(n + "C" + r + " = " + comb);

        scanner.close();
    }
}