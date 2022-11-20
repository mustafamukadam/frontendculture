Object keys can be string or symbol

## Different ways to create objects

1. literal
2. new Object()
3. static method on 'Object' class called create.
   Object.create(organism) // NOT normally used with empty object {}

# Check if property exists in object

1. 'key' in obj // returns true/false
2. Object.keys(obj).includes('key')
