function Cat(name, age, breed, color, isMale){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
    this.isMale = isMale;
}

const cat1 = new Cat('Barsik', 5, 'British', 'blur', true);

const cat2 = new Cat('Murka', 3, 'British', 'blur', false);


cat1.girfriend = cat2;

cat1.girfriend.name;

cat1.girfriend.name = 'Murka love'

console.log(cat1.girfriend.name);
