class Cilindro{
  constructor(diametro,alturaCilindro,alturaAgua,posicion){
    if (diametro>0 && alturaCilindro>0 && alturaAgua>0){
      if(posicion=="vertical"){
        if(alturaCilindro>=alturaAgua){
          this.diametro = diametro;
          this.alturaCilindro = alturaCilindro;
          this.alturaAgua = alturaAgua;
          this.posicion = posicion;
        }
        else{
          console.log("El contenedor tiene más agua de la posible");
        }
      }
      else{
        if(diametro>=alturaAgua){
          this.diametro = diametro;
          this.alturaCilindro = alturaCilindro;
          this.alturaAgua = alturaAgua;
          this.posicion = posicion;
        }
        else{
          console.log("El contenedor tiene más agua de la posible");
        }
      }
    }
    else{
      console.log("Ingrese números positivos");
    }
  }
  getDiametro(){
    return this.diametro;
  }
  setDiametro(diametro){
    this.diametro = diametro;
    return this.diametro;
  }
  getAlturaCilindro(){
    return this.alturaCilindro;
  }
  setAlturaCilindro(alturaCilindro){
    this.alturaCilindro = alturaCilindro;
    return this.alturaCilindro;
  }
  getAlturaAgua(){
    return this.alturaAgua;
  }
  setAlturaAgua(alturaAgua){
    this.alturaAgua = alturaAgua;
    return this.alturaAgua;
  }
  getPosicion(posicion){
    this.posicion = posicion;
    return this.posicion;
  }
  setPosicion(){
    return this.posicion;
  }
  areaCirculo(){
    return Math.PI* Math.pow((this.diametro/2),2);
  }
  volumenCilindro(){
    return this.areaCirculo()*this.alturaCilindro;
  }
  volumenAgua(){
    if(this.posicion=="vertical"){
      let volumen = this.areaCirculo()*this.alturaAgua;
      let agua = 0.001*volumen;
      return agua;
    }
    else{
      let angulo = 2*(Math.acos(1-(this.alturaAgua/(this.diametro/2)))/(Math.PI/180));
      let area = (Math.pow((this.diametro/2),2)/2)*(((angulo*Math.PI)/180)-(Math.sin((angulo*Math.PI)/180)));
      let volumen = area*this.alturaCilindro;
      let agua = 0.001*volumen;
      return agua;
    }
  }
}
function calcular(){
  var div = document.getElementById("ciclindro");
  var salidaLitros= document.getElementById("salidaLitros"),
  form = document.getElementById("formulario"),
  alturaCilindro = form["alturaTinaco"],
  diametro = form["diametro"],
  alturaAgua = form["alturaAgua"],
  posicion = form["posicion"];
  console.log(diametro.value,alturaCilindro.value,alturaAgua.value,posicion.value);
  nuevo = new Cilindro(parseInt(diametro.value),parseInt(alturaCilindro.value),parseInt(alturaAgua.value),posicion.value);
  salidaLitros.textContent="El volumen en litros es: "+ nuevo.volumenAgua().toFixed(2);
  alturaCilindro.setAttribute("disabled", false);
  diametro.setAttribute("disabled", false);
  alturaAgua.setAttribute("disabled", false);
  document.getElementById("1").disabled = true;
  document.getElementById("2").disabled = true;
  document.getElementById("editarNav").hidden = false;

  var camera, scene, renderer;
  var geometry, material, mesh;

  init();
  animate();
}

function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;

	scene = new THREE.Scene();

	geometry = new THREE.CylinderGeometry( 0.2, 0.2, .7,40,);
	material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

}

function animate() {

	requestAnimationFrame( animate );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;

	renderer.render( scene, camera );
}
