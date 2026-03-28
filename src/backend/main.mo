import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";

actor {
  type Product = {
    name : Text;
    description : Text;
    price : Nat;
    discountedPrice : Nat;
    category : Category;
    imageUrl : Text;
  };

  module Product {
    public func compare(p1 : Product, p2 : Product) : Order.Order {
      Text.compare(p1.name, p2.name);
    };
  };

  public type Category = {
    #shawl;
    #suit;
    #lawn;
  };

  var nextProductId = 0;

  let products = Map.empty<Nat, Product>();

  // Core functionality: Add product
  public shared ({ caller }) func addProduct(product : Product) : async Nat {
    products.add(nextProductId, product);
    nextProductId += 1;
    nextProductId - 1;
  };

  func getProductsArraySorted(category : ?Category) : [Product] {
    products.values().toArray().filter(
      func(product) {
        switch (category) {
          case (null) { true };
          case (?cat) { product.category == cat };
        };
      }
    ).sort();
  };

  // Core functionality: Get products
  public query ({ caller }) func getProducts(category : ?Category) : async [Product] {
    getProductsArraySorted(category);
  };

  // Core functionality: Get product by id
  public query ({ caller }) func getProductById(productId : Nat) : async ?Product {
    products.get(productId);
  };

  // Core functionality: Update product
  public shared ({ caller }) func updateProduct(productId : Nat, product : Product) : async () {
    if (not products.containsKey(productId)) {
      Runtime.trap("Product does not exist");
    };
    products.add(productId, product);
  };
};
