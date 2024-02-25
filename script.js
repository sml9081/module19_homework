//Задание 1 

const student = {
    name: 'Sergey',
     surname: 'Ivanov',
     age: 40,
     position:'Designer'
    }
    function Obj_key (object){
        for (let key in object) {
            if (Object.hasOwnProperty.call(object, key)) {
                console.log(key)
            }
        }
    }
    
    Obj_key(student);
    
    // Задание 2 
    
    function Obj_str (string, object){
        for (let key in object) {
            if (key == string) {
                return true;
            }
            return false
        }
    }
    
    // Задание 3
    
    function newObj() {
        return Object.create(null)
    }
    
    
    
    //Задание 4
    function Devices(name, watt) {
        this.name = name ;
        this.watt = watt;
        this.Connect = false;
         
          } 
     Devices.prototype.plugOn = function () {
        console.log (this.name + ' plugg on ') ;
        this.Connect = true;
    }  
      Devices.prototype.getWatt = function () {
         return this.Connect ? this.watt : 0;
    }   
     
    const table_lamp = new  Devices ('lamp', 60)
    const computer = new  Devices('computer', 300)
    
      console.log (table_lamp.getWatt() + computer.getWatt()); 
      
      table_lamp.plugOn() 
       console.log ( table_lamp.getWatt() + computer.getWatt());
      computer.plugOn()
       console.log ( table_lamp.getWatt() + computer.getWatt());
    
    
    // Задание 5
    
    
    class El_Appliances {
    
    constructor(name,watt){ 
    this.name= name ; 
    this.watt= watt; 
    this.Connected = false; 
    }  
     
    plugOn () 
    {console.log (this.name + ' plugg ON ! ') ;
        this.Connected = true; 
    }
     
    getWatt() {
        
       return this.Connected ? this.watt : 0;
    }
    } 
    const phone = new El_Appliances  ('phone', 30)
    const tv = new  El_Appliances ('tv', 200)
    
      console.log (phone.getWatt() + tv.getWatt()); 
      
      phone.plugOn() 
       console.log ( tv.getWatt() + phone.getWatt());
      tv.plugOn()
       console.log ( tv.getWatt() + phone.getWatt());
    
    