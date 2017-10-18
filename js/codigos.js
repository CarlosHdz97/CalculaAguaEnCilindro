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
          this.error = "El contenedor tiene más agua de la posible";
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
          this.error = "El contenedor tiene más agua de la posible";
        }
      }
    }
    else{
      this.error = "Ingrese números positivos";
    }
  }
  getDiametro(){
    return this.diametro;
  }
  setDiametro(diametro){
    if (diametro>0){
      this.diametro = diametro;
      this.error =" ";
    }
    else {
      return this.error ="Ingrese un número positivo";
    }
  }
  getAlturaCilindro(){
    return this.alturaCilindro;
  }
  setAlturaCilindro(alturaCilindro){
    if(alturaCilindro>0){
      this.alturaCilindro = alturaCilindro;
      this.error =" ";
    }
    else {
      return this.error ="Ingrese un número positivo";
    }
  }
  getAlturaAgua(){
    return this.alturaAgua;
  }
  setAlturaAgua(alturaAgua){
    if(alturaAgua>0){
      if(this.posicion=="vertical"){
        if(alturaAgua<=this.alturaCilindro){
          this.alturaAgua = alturaAgua;
          this.error =" ";
        }
        else{
          this.error ="El contenedor tiene más agua de la posible";
        }
      }
      else{
        if(alturaAgua<=this.diametro){
          this.alturaAgua = alturaAgua;
          this.error =" ";
        }
        else{
          this.error ="El contenedor tiene más agua de la posible";
        }
      }
    }
  }
  getPosicion(){
    return this.posicion;
  }
  setPosicion(posicion){
    if(posicion=="vertical"){
      if(this.alturaAgua<=this.alturaCilindro){
        this.posicion = posicion;
        this.error =" ";
      }
      else{
        this.error ="El contenedor tiene más agua de la posible";
      }
    }
    else{
      if(this.alturaAgua<=this.diametro){
        this.posicion = posicion;
        this.error =" ";
      }
      else{
        this.error ="El contenedor tiene más agua de la posible";
      }
    }
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
  var salidaLitros= document.getElementById("salidaLitros"),
  form = document.getElementById("formulario"),
  alturaCilindro = form["alturaTinaco"],
  diametro = form["diametro"],
  alturaAgua = form["alturaAgua"],
  posicion = form["posicion"];
  cilindro = new Cilindro(parseFloat(diametro.value),parseFloat(alturaCilindro.value),parseFloat(alturaAgua.value),posicion.value);
  if (cilindro.error){
    salidaLitros.textContent = cilindro.error;
    let ocultos = document.getElementsByClassName("shadow"),
    article = document.getElementById("alerta");
    for (var i=0; i<ocultos.length; i++){
      ocultos[i].removeAttribute("hidden");
      }
    article.className="message is-danger";
  }
  else{
    let article = document.getElementById("alerta");
    article.className="message is-dark";
    salidaLitros.textContent="El volumen en litros es: "+ cilindro.volumenAgua().toFixed(2);
    let ocultos = document.getElementsByClassName("shadow");
    for (var i=0; i<ocultos.length; i++){
      ocultos[i].removeAttribute("hidden");
    }
    alturaCilindro.addEventListener("input",function(){
        cilindro.setAlturaCilindro(alturaCilindro.value);
        if (cilindro.error!==" "){
          borrarCanvas();
          let article = document.getElementById("alerta");
          article.className="message is-danger";
          salidaLitros.textContent = cilindro.error;
        }
        else{
          borrarCanvas();
          let article = document.getElementById("alerta");
          article.className="message is-dark";
          salidaLitros.textContent="El volumen en litros es: "+ cilindro.volumenAgua().toFixed(2);

          init(cilindro.getDiametro(),cilindro.getAlturaCilindro(),divisor(cilindro));

        }
    });
    diametro.addEventListener("input",function(){
        cilindro.setDiametro(diametro.value);
        if (cilindro.error!==" "){
          borrarCanvas();
          let article = document.getElementById("alerta");
          article.className="message is-danger";
          salidaLitros.textContent = cilindro.error;
        }
        else{
          borrarCanvas();
          let article = document.getElementById("alerta");
          article.className="message is-dark";
          salidaLitros.textContent="El volumen en litros es: "+ cilindro.volumenAgua().toFixed(2);
          init(cilindro.getDiametro(),cilindro.getAlturaCilindro(),divisor(cilindro));
        }
    });
    alturaAgua.addEventListener("input",function(){
        cilindro.setAlturaAgua(alturaAgua.value);
        if (cilindro.error!==" "){
          borrarCanvas();
          let article = document.getElementById("alerta");
          article.className="message is-danger";
          salidaLitros.textContent = cilindro.error;
        }
        else{
          borrarCanvas();
          let article = document.getElementById("alerta");
          article.className="message is-dark";
          salidaLitros.textContent="El volumen en litros es: "+ cilindro.volumenAgua().toFixed(2);
          init(cilindro.getDiametro(),cilindro.getAlturaCilindro(),divisor(cilindro));
        }
    });
    form.addEventListener("change",function(){
        cilindro.setPosicion(posicion.value);
        if (cilindro.error!==" "){
          borrarCanvas();
          let article = document.getElementById("alerta");
          article.className="message is-danger";
          salidaLitros.textContent = cilindro.error;
        }
        else{
          borrarCanvas();
          let article = document.getElementById("alerta");
          article.className="message is-dark";
          salidaLitros.textContent="El volumen en litros es: "+ cilindro.volumenAgua().toFixed(2);
          init(cilindro.getDiametro(),cilindro.getAlturaCilindro(),divisor(cilindro));
        }
    });
    document.getElementById("submit").setAttribute("disabled",false);
    var camera, scene, renderer;
    var geometry, material, mesh;
    init(cilindro.getDiametro(),cilindro.getAlturaCilindro(),divisor(cilindro));
    animate();
  }
}

function init(diametro,altura,divisor) {
  var div = document.getElementById("referencia");
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
	camera.position.z = 1;
	scene = new THREE.Scene();
  console.log((diametro/2)/divisor,(diametro/2)/divisor, altura/divisor);
	geometry = new THREE.CylinderGeometry( (diametro/2)/divisor,(diametro/2)/divisor, altura/divisor,40,);
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

function divisor(objeto){
  let diametro = objeto.getDiametro(),
  altura = objeto.getAlturaCilindro();
  if(diametro>=altura){
    return diametro*2;
  }
  else{
    return altura*2;
  }
}


function borrarCanvas(){
  var canvas = document.getElementsByTagName("canvas");
  for (var index = 0; index < canvas.length; index++) {
    canvas[index].parentNode.removeChild(canvas[index]);
  }
}
