var a = 0;
var x = [], y = [];
var n = 1;
PLOT = document.getElementById('mruPlot');
var velocidade = undefined;
var posInicial = undefined;
var flag = 0;
var req = undefined;

function MRU() {
    
    velocidade = parseFloat(document.getElementById("velocidade").value);
    posInicial = parseFloat(document.getElementById("posInicial").value);
    console.log(velocidade);

    if(flag == 0) {
        flag = 1;
      }  else {
        console.log(flag)
        Plotly.purge(PLOT);
        cancelAnimationFrame(req);
        x = [];
        y = [];
        a = 0;
      }

    compute()
    
    Plotly.newPlot( PLOT, [{
        x: x,
        y: y,
        mode: 'markers'
     }], {
        xaxis: {range: [0, 50]},
        yaxis: {range: [0, 50]} 
    } );

    req = requestAnimationFrame(update);
}    

function update () {

    compute();
  
    Plotly.animate(PLOT, {
      data: [{x:x, y: y}]
    }, {
      transition: {
        duration: 0
      },
      frame: {
        duration: 0,
        redraw: false
      }
    });

    if(a > 0) {
        Plotly.relayout(PLOT, {
            xaxis: {
                range: [0, a+40]
            }
        })
    }

    if(y[0] > 0) {
        Plotly.relayout(PLOT, {
        yaxis: {
                range: [0, y[0]+40]
            }
        })
    }

    if(y[0] < 0) {
        Plotly.relayout(PLOT, {
        yaxis: {
                range: [y[0]-40, 0]
            }
        })
    }



    req = requestAnimationFrame(update);
}

function compute() {
    //console.log(velocidade)
    for(var i = 0; i< n; i++) {
        x[i] = a;
        y[i] = posInicial + (velocidade * a);
        a++;
    }

    console.log(x, y)

}
