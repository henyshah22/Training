// Write a program to find the Second biggest integer value in the given list of values.[98,32,72,94,75,73,92,36,28,34]

package Day8;
import java.util.Arrays;
class Secondlargest {
    static int getSecondLargest(int[] arr) {
        int n = arr.length;
        Arrays.sort(arr);
        for (int i = n - 2; i >= 0; i--) {
            
            if (arr[i] != arr[n - 1]) {
                return arr[i];
            }
        }
                return -1;
    }
    public static void main(String[] args) {
        int[] arr = { 98,32,72,94,75,73,92,36,28,34};
        System.out.println(getSecondLargest(arr));
    }
}