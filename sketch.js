

let sementes = [];

function setup() {

  createCanvas(600, 400); // Cria o canvas

  background(150, 200, 100); // Cor de fundo (parece um campo)


}

function draw() {

  background(150, 200, 100); // Redezenha o campo

  Plantas ();

}
// funcao das plantas e da semente 
function Plantas (){
  
  for (let i = 0; i < sementes.length; i++) {

    let s = sementes[i];

    let tempoCrescimento = millis() - s.tempoPlantio;

    if (tempoCrescimento > 5000) {

      // Após 5 segundos, a planta cresce

      fill(34, 139, 34);

      ellipse(s.x, s.y, 30, 50); // Desenha uma planta grande

    } else {

      fill(139, 69, 19);

      ellipse(s.x, s.y, 10, 10); // Desenha uma semente

    }

  }

}

// Quando o usuário clica na tela, planta uma semente

function mousePressed() {

  let novaSemente = {

    x: mouseX,

    y: mouseY,

    tempoPlantio: millis()

  };

  sementes.push(novaSemente); // Adiciona a nova semente à lista
}