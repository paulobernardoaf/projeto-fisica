var a = 0;
var x = [], y = [];
var n = 1;
PLOT = document.getElementById('mruPlot');
var equacao = undefined;

function MRU() {
    
    equacao = document.getElementById("equacao").value;
    console.log(equacao);

    // setInterval(function() {
    //         compute(equacao)
    //     }, 1000);

    // setInterval(function() {
        //     a = (a + Math.PI / 360) % (Math.PI * 2);
        //     console.log(a)
        // }, 1000);       
    compute1(equacao)
    Plotly.newPlot( PLOT, [{
        x: x,
        y: y,
        mode: 'markers'
     }], {
        xaxis: {range: [0, 500]},
        yaxis: {range: [0, 500]} 
    } );

    setInterval(function() {
        var value = compute1(equacao)
        console.log(value)
        Plotly.extendTraces(PLOT, {x: [[a-1]], y:[[value]]}, [0]);

        if(a > 1) {
            Plotly.relayout(PLOT, {
                xaxis: {
                    range: [0, a+1]
                }
            });
        }

        if(value > 500) {
            Plotly.relayout(PLOT,  {
                yaxis: {
                    range: [0, value+1]
                }
            })
        }

    }, 250)

    
    //requestAnimationFrame(anima);
}    


function anima() {
    update(equacao);
}

function update (equacao) {
    compute(equacao);
  
    Plotly.animate(PLOT, {
      data: [{x:x, y: y}]
    }, {
      transition: {
        duration: 1000
      },
      frame: {
        duration: 1000,
        redraw: true
      }
    });

    var lastX = x[x.length - 1];
    var lastY = y[y.length - 1];
    if(lastX > 50) {
        Plotly.relayout(PLOT, {
            xaxis: {
                range: [lastX-10, 2*lastX]
            }
        });
    }

    if(lastY > 50) {
        Plotly.relayout(PLOT,  {
            yaxis: {
                range: [0, 2*lastY]
            }
        })
    }
  
    requestAnimationFrame(anima);
  }

function compute1(equacao) {

    var novaEquacao = equacao.replace(/x/g, a);
    var value = eval(novaEquacao);
    x.push(a);
    y.push(eval(novaEquacao));

    console.log(x, y);
    
    a++;

    return value;
}

function compute(equacao) {
    console.log(novaEquacao)
    for(var i = 0; i< n; i++) {
        x[i] = a;
        var novaEquacao = equacao.replace(/x/g, x[i]);
        y[i] = eval(novaEquacao);
        a++;
    }
    

    console.log(x, y)

}
