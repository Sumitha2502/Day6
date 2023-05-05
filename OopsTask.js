//1) The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie
{
    constructor(title,studio,rating){
        this.a=title
        this.b=studio
        this.c=rating
    }
}
    let obj1=new Movie("PS2","Lyca Productions","PG13")
    var obj2=new Movie("bahubali","studio","R");
    console.log(obj1,obj2)

    // Output:
    // Movie { a: 'PS2', b: 'Lyca Productions', c: 'PG13' } Movie { a: 'bahubali', b: 'studio', c: 'R' }

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie
{
    constructor(title,studio,rating="PG"){
        this.a=title
        this.b=studio
        this.c=rating
    }
}
    let obj3=new Movie("PS2","Lyca Productions","R")
    var obj4=new Movie("bahubali","studio");
    console.log(obj3,obj4)

    // Output:
    // Movie { a: 'PS2', b: 'Lyca Productions', c: 'R' } Movie { a: 'bahubali', b: 'studio', c: 'PG' }

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie
{
    constructor(title,studio,rating)
    {
        this.t=title
        this.s=studio
        this.r=rating
    }
}
    let movie=new Movie("Casino Royale","Eon Productions","PG13")
    console.log(movie)
    console.log(movie.r)

    // Output:
    // Movie { t: 'Casino Royale', s: 'Eon Productions', r: 'PG13' }
    // PG13
  
//2)Convert the UML diagram to Typescript class

    class Circle
    {
        constructor(radius,color){
            this.r=radius
            this.c=color
        }
        Circle(){
            console.log("This is circle")
        }
        Circle(radius){
            console.log("method overriding")
        }
        Circle(radius,color){
            console.log(this.r,this.c+'final method overriding which accepts by javascripot')
        }
        getRadius(){
            console.log("Radius of the circle is "+ this.r)
        }
        setRadius(newRadius){
            this.r=newRadius
        }
        getColor(){
            console.log("Color of the circle is "+ this.c)
        }
        setColor(newColor){
            this.c=newColor
        }
        getArea(){
            console.log("Area of a circle is "+ (Math.PI*Math.pow(this.r,2)))
        }
        getCircumference(){
            console.log("Circumference of a circle is "+ (2*Math.PI*this.r))
        }
    }
       
       let circle1=new Circle(2,"red")
       circle1.getRadius()
       circle1.setRadius(3)
       circle1.getColor()
       circle1.setColor("Purple")
       circle1.getArea()
       circle1.getCircumference()

       // Output:
       // Radius of the circle is 2
       // Color of the circle is red
       // Area of a circle is 28.274333882308138
       // Circumference of a circle is 18.84955592153876
       
       
    
    
    
   



