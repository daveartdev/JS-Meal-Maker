const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],   
  },
  
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains (){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
  },
  
  set appetizers(appetizers){
    this._course.appetizers =  appetizers;
  },
  set mains(mains) {
    this._course.mains =  mains;
  },  
  set desserts(desserts){
    this._course.desserts =  desserts;
  },
  
  get courses(){
    return{
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price of your meal is $${totalPrice}.`;
   }
};

menu.addDishToCourse('appetizers', 'Hot Wings', 6.99);
menu.addDishToCourse('appetizers', 'Mozzarella Sticks', 6.99);
menu.addDishToCourse('appetizers', 'Chips and Salsa', 6.99);

menu.addDishToCourse('mains', 'Pizza', 8.99);
menu.addDishToCourse('mains', 'Burger', 8.99);
menu.addDishToCourse('mains', 'Nachos', 8.99);

menu.addDishToCourse('desserts', 'Ice cream', 4.99);
menu.addDishToCourse('desserts', 'Cake', 4.99);
menu.addDishToCourse('desserts', 'Cheesecake', 4.99);


let meal = menu.generateRandomMeal();
console.log(meal); 