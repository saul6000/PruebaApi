module.exports = app => {
    const Materia = require("../controllers/materia.controller");
  
    var router = require("express").Router();
   
    // http://localhost:8080/api/materia/getmateria
    router.get("/getmateria", Materia.getmateria);

    // http://localhost:8080/api/materia/saludos
    router.get("/saludos", Materia.saludos);
    //guardar un estudiante
     // http://localhost:8080/api/materia/guardar
     router.post("/guardar", Materia.guardarMateria);
  //router.post("/guardar", Estudiante.guardar);
    app.use('/api/materia',router);
  // filtra por instrumento de evaluación
 

  
};
  