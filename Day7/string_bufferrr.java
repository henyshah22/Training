//  Write a program to create a StringBuffer and Clear the StringBuffer using different methods of that.

public class string_bufferrr {
    public static void main(String[] args) {

        StringBuffer s = new StringBuffer();

        s.append("Hello");
        s.append(" ");
        s.append("world");

        String str = s.toString();
        System.out.println(str);
    }
}



// StringBuffer is a mutable sequence of characters.
// It is like a growable and modifiable string.
// You convert the mutable StringBuffer back into an immutable String object.
// StringBuffer modifies the same object without creating new ones.


