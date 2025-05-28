// "Create a function that accepts two arguments:the number of dice rolled, and the outcome of the roll. The function returns the number of possible combinations that could produce that outcome. The number of dice can vary from 1 to 6. Ex. User Input: 3 and 4. Output: 3 // 1 + 1 + 2, 1 + 2 + 1, 2 + 1 + 1 User Input: 6 and 20. Output: 4221"

package Day8;
import java.util.Scanner;

public class DiceCombinations {
    static int[][] memo;
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("Enter number of dice (1-6): ");
            int dice = scanner.nextInt();

            System.out.print("Enter target sum: ");
            int target = scanner.nextInt();

            memo = new int[dice + 1][target + 1];
            // Creates a table to store previously calculated results.
            // Size is [dice+1][target+1] because we count from 0.
            for (int i = 0; i <= dice; i++) {
                for (int j = 0; j <= target; j++) {
                    memo[i][j] = -1;
                    // Fills the memo table with -1 to show all values are uncalculated at the start.               
                    }
            }

            int result = countWays(dice, target);
            // to count no of combinations from the input
            System.out.println("Combinations: " + result);
        }
    }
     // function calls itself
    public static int countWays(int dice, int target) {
        if (dice == 0) return target == 0 ? 1 : 0;
        // If no dice are left:
        // If target is also 0 → this is 1 valid combination.
        // Otherwise → invalid → return 0.
        if (target < 0) return 0;
        // if target is negative return 0
        if (memo[dice][target] != -1) return memo[dice][target];

        int ways = 0;
        for (int i = 1; i <= 6; i++) {
            ways += countWays(dice - 1, target - i);
            // Try every face value from 1 to 6.
            // Reduce one die and subtract that face value from the target.
            // Add all possible combinations.
        }

        memo[dice][target] = ways;
        return ways;
    }
}
