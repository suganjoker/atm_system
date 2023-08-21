abstract class Food {
    double proteins;
    double fats;
    double carbs;
    double tastyScore;

    abstract void getMacroNutrients();

    void getType(String type) {
        System.out.println(type);
    }

    void getTaste() {
        System.out.println("Taste: " + tastyScore);
    }
}

class Egg extends Food {
    int tastyScore = 7;
    String type = "non-vegetarian";

    Egg(double proteins, double fats, double carbs) {
        this.proteins = proteins;
        this.fats = fats;
        this.carbs = carbs;
    }

    @Override
    void getMacroNutrients() {
        System.out.println("An egg has " + proteins + " gms of protein, " + fats + " gms of fats and " + carbs + " gms of carbohydrates.");
    }

    @Override
    void getType(String type) {
        System.out.println("Egg is " + this.type);
    }
}

class Bread extends Food {
    int tastyScore = 8;
    String type = "vegetarian";

    Bread(double proteins, double fats, double carbs) {
        this.proteins = proteins;
        this.fats = fats;
        this.carbs = carbs;
    }

    @Override
    void getMacroNutrients() {
        System.out.println("A slice of bread has " + proteins + " gms of protein, " + fats + " gms of fats and " + carbs + " gms of carbohydrates.");
    }

    @Override
    void getType(String type) {
        System.out.println("Bread is " + this.type);
    }
}

public class Main {
    public static void main(String[] args) {

        Egg egg = new Egg(6.3, 5.3, 0.6);
        egg.getMacroNutrients();
        egg.getTaste();
        egg.getType("non-vegetarian");

        System.out.println();


        Bread bread = new Bread(4.0, 1.1, 13.8);
        bread.getType("vegetarian");
        bread.getMacroNutrients();
        bread.getTaste();
    }
}
