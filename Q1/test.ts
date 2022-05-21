
    
         class Rect
         {
             width:number ;
             length:number ;
         
             constructor(_width:number , _length:number)
             {
                  this.width = _width ;
                  this.length = _length
             }
                 calcCircumference()
                 {
                     return (this.width + this.length) *2
                 }
         
                 static WhoAmI()
                 {
                     console.log("I am rectangle")
                 }
         }
 
     class Square extends Rect
     {
         constructor(width2:number , length2:number) 
         {
            super(width2,length2)

         }

        calcCircumference()
                 {
                     return this.width*4
                 }
         
                 static WhoAmI()
                 {
                     console.log("I am square")
                 }

     }
         
 let r1 = new Rect(3,4)
let s1 = new Square(3,3) 