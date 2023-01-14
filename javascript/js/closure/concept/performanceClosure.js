//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#performance_considerations
/**
For instance, when creating a new object/class, methods should normally be associated to the object's prototype 
rather than defined into the object constructor. The reason is that whenever the constructor is called, 
the methods would get reassigned (that is, for every object creation).
Consider the following case:
 */
function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
    this.getName = function () {
      return this.name;
    };
  
    this.getMessage = function () {
      return this.message;
    };
  }
  
  /*
  Because the previous code does not take advantage of the benefits of using closures in this particular instance,
  we could instead rewrite it to avoid using closures as follows:
  */
  function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
  }
  MyObject.prototype.getName = function () {
    return this.name;
  };
  MyObject.prototype.getMessage = function () {
    return this.message;
  };
  
  