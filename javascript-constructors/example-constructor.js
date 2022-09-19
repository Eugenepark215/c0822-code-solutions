function ExampleConstructor() {
  console.log(ExampleConstructor);
  console.log(typeof ExampleConstructor);
}

var anExampleConstructor = new ExampleConstructor();
console.log(anExampleConstructor);

var instanceOfExample = anExampleConstructor instanceof ExampleConstructor;
console.log(instanceOfExample);
