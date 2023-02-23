function porcentaje(preneto) {
    //const estados = {"ut" : 6.65/100,"nv": 8.00/100,"tx":6.25/100,"al":4.00/100,"ca":8.25/100 };
    
    if(preneto<1000){
        return 0
    }if(preneto>=1000 && preneto<3000){
        return 3/100
    }if(preneto>=3000 && preneto<7000){
        return 5/100
    }
    if(preneto>=7000 && preneto<10000){
        return 10/100
    }if(preneto>=10000 && preneto<30000){
        return 15/100
    }
  }
  
  export default porcentaje;