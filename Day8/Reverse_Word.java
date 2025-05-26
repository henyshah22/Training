// "Write a java program to reverse each word in a given string. (Ex. ""My name is Khan"" => ""Khan is name My"")"

package Day8;
import java.util.regex.Pattern; 
public class Reverse_Word { 

    static String reverseWords(String str) 
    { 
        Pattern pattern = Pattern.compile("\\s"); 
        String[] temp = pattern.split(str); 
        String result = ""; 
        for (int i = 0; i < temp.length; i++) { 
            if (i == temp.length - 1) 
                result = temp[i] + result; 
            else
                result = " " + temp[i] + result; 
        } 
        return result; 
    } 
    public static void main(String[] args) 
    { 
        String s = "My name is Khan"; 
        System.out.println(reverseWords(s)); 
    } 
}