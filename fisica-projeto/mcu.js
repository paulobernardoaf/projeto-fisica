var a = 0;
var x = [], y = [];
var raio = 1;
var n = 1;
PLOT = document.getElementById('mcuPlot');
var flag = 0;
var req = undefined;

function MCU() {

    raio = parseFloat(document.getElementById("raio").value);
        
    compute(x, y, raio)        
    
    if(flag == 0) {
      flag = 1;
    }  else {
      console.log(flag)
      Plotly.purge(PLOT);
      cancelAnimationFrame(req);
    }

    var aux = raio + raio/3;

    Plotly.react( PLOT, [{
        x: x,
        y: y, mode: 'markers'
     }], {
        xaxis: {range: [-aux, +aux]},
        yaxis: {range: [-aux, +aux]} 
    });
    
    req = requestAnimationFrame(anima);
}    


function anima() {
    update(x, y, raio, PLOT);
}

function update (x, y, raio, PLOT) {
    compute(x, y, raio);
  
    Plotly.animate(PLOT, {
      data: [{x: x, y: y}]
    }, {
      transition: {
        duration: 0
      },
      frame: {
        duration: 0,
        redraw: false
      }
    });
  
    req = requestAnimationFrame(anima);
  }

function compute(x, y, raio) {

    for(var i = 0; i < n; i++) {
        a = (a + Math.PI / 360) % (Math.PI * 2);
        x[i] = raio * Math.sin(a);
        y[i] = raio * Math.cos(a);
    }
}
