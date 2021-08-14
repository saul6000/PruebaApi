const { materias } = require("../models");
const db = require("../models");
const Materia = db.materias;


//Msg Bienvenida
exports.saludos = (req, res) => {
  res.send({status: true, mensaje:"Bienvenidos... a materia la base de datos mas confiable sobre materias"});
}
//Listado de materia
exports.getmateria = (req, res) => {
  const cod_materia = req.query.cod_materia; 
  let condicion = cod_materia ? {cod_materia: cod_materia}:{};
  Materia.find(condicion).then( data => {
    res.send(data);
  }).catch( err => {
    res.status(500).send(
      {status:false, mensaje: err.message}
    )
  });
 
}
//guardar Materia
exports.guardarMateria = (req,res)=> {
  const cod_materia= req.body.cod_materia;
  const nombre_materia = req.body.nombre_materia;
  const profesor=req.body.profesor;
  const duracion_a_la_semana=req.body.duracion_a_la_semana;
  const fecha_inicio= req.body.fecha_inicio;
  const materia = new materias({
      "cod_materia":cod_materia,
      "nombre_materia":nombre_materia,
      "profesor":profesor,
      "duracion_a_la_semana":duracion_a_la_semana,
      "fecha_inicio":fecha_inicio
  });
  materia.save(materia).then( data =>{
      res.send(data);
  }).
  catch( err => {
      res.status(500).send({
      mensaje:
          err.message || "Error al guardar datos en la colección de materias..."
      });
    });
}