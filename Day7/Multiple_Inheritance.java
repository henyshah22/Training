//  Write a Java Program to Implement the functionality of multiple inheritance into the program.

interface Parent1 {
    void fun();
}

interface Parent2 {
    void fun();
}

class Multiple_Inheritance implements Parent1, Parent2 {
    public void fun() {
        System.out.println("Test class overriding fun()");
    }

    public static void main(String[] args) {
        Multiple_Inheritance t = new Multiple_Inheritance();
        t.fun();
    }
}
