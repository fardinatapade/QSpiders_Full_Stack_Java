let car  = {
    cname : "BMW",
    cimage : "https://cimg3.ibsrv.net/ibimg/hgm/1920x1080-1/100/749/2021-bmw-5-series_100749427.jpg",
    cprice : 7000000,
    isGoodCar : true
}
console.log(car);

// Updating Objects
car.cname = "Ferrari"
console.log(car);

// Adding key to object
car.cmodel = "Lamborgini"
console.log(car);

// Deleting keys from object
delete car.cimage;
console.log(car);

// Upadate existing key name
// Delete previous key because both keys are displaying delete car.cname 
car.cName = car.cname
delete car.cname 
console.log(car);
