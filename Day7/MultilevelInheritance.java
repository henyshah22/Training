// Write a program for Multilevel Inheritance using java programming language.

class Shape {
   public void display() {
      System.out.println("Inside display");
   }
}
class Rectangle extends Shape {
   public void area() {
      System.out.println("Inside area");
   }
}
class Cube extends Rectangle {
   public void volume() {
      System.out.println("Inside volume");
   }
}
public class MultilevelInheritance {
   public static void main(String[] arguments) {
      Cube cube = new Cube();
      cube.display();
      cube.area();
      cube.volume();
   }
}