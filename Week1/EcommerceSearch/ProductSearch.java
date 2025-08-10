import java.util.Arrays;
import java.util.Comparator;

public class ProductSearch {

    public static Product linearSearch(Product[] products, String name){
        for (Product p : products){
            if (p.productName.equalsIgnoreCase(name)){
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String name){
        int left =0, right =products.length - 1;
        while (left <= right){
            int mid =(left + right) / 2;
            int cmp =products[mid].productName.compareToIgnoreCase(name);
            if (cmp ==0)
                return products[mid];
            else if (cmp < 0)
                left =mid+1;
            else
                right =mid-1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products ={
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Footwear"),
            new Product(3, "Watch", "Accessories"),
            new Product(4, "Phone", "Electronics"),
            new Product(5, "T-Shirt", "Apparel")
        };

        System.out.println("🔍 Linear Search:");
        Product result1 =linearSearch(products, "Phone");
        System.out.println(result1 !=null ? "Found: " + result1 : "Not Found");

        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        System.out.println("\n🔍 Binary Search:");
        Product result2 =binarySearch(products, "Phone");
        System.out.println(result2 !=null ? "Found: " + result2 : "Not Found");
    }
}
