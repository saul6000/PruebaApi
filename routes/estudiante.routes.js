module.exports = app => {
    const Estudiante = require("../controllers/estudiante.controller");
  
    var router = require("express").Router();
   
    // http://localhost:8080/api/estudiantes/listado
    router.get("/listado", Estudiante.getEstudiantes);

    //guardar un estudiante
     // http://localhost:8080/api/estudiantes/guardar
  router.post("/guardar", Estudiante.guardar);
    app.use('/api/estudiantes',router);
  // filtra por instrumento de evaluación
 

  
};
  