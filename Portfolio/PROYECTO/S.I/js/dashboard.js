
(function ($) {
  $.fn.countTo = function (options) {
    options = options || {};
    
    return $(this).each(function () {
      // set options for current element
      var settings = $.extend({}, $.fn.countTo.defaults, {
        from:            $(this).data('from'),
        to:              $(this).data('to'),
        speed:           $(this).data('speed'),
        refreshInterval: $(this).data('refresh-interval'),
        decimals:        $(this).data('decimals')
      }, options);
      
      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;
      
      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};
      
      $self.data('countTo', data);
      
      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);
      
      // initialize the element with the starting value
      render(value);
      
      function updateTimer() {
        value += increment;
        loopCount++;
        
        render(value);
        
        if (typeof(settings.onUpdate) == 'function') {
          settings.onUpdate.call(self, value);
        }
        
        if (loopCount >= loops) {
          // remove the interval
          $self.removeData('countTo');
          clearInterval(data.interval);
          value = settings.to;
          
          if (typeof(settings.onComplete) == 'function') {
            settings.onComplete.call(self, value);
          }
        }
      }
      
      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };
  
  $.fn.countTo.defaults = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };
  
  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
  formatter: function (value, options) {
    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
  }
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
  var $this = $(this);
  options = $.extend({}, options || {}, $this.data('countToOptions') || {});
  $this.countTo(options);
  }
});





$(function () {
    /* ChartJS
     * -------
     * Data and config for chartjs
     */
    var data = {
        labels: ["Chorizos", "Jamones", "Salchichas", "Costillas", "Tocinetas", "Mortadela"],
        datasets: [{
            label: 'Ventas productos - mes',
            data: [32, 12, 3, 25, 40, 18],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
    var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    };
    var doughnutData ={
      datasets: [{
        data: [32, 12, 3, 25, 40, 18],
        backgroundColor: ['#d9534f','#36a2eb','#5cb85c','#ff8000','#808080', '#000000']
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
          'Chorizos',
          'Jamones',
          'Salchichas',
          'Costillas',
          'Tocinetas',
          'Mortadela',
      ]
    };
    var doughnutOptions = {
      responsive: true,
      animation: {
          animateScale: true,
          animateRotate: true
      }
    };

    var areaData = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            fill: 'origin',      // 0: fill to 'origin'
            fill: '+2',          // 1: fill to dataset 3
            fill: 1,             // 2: fill to dataset 1
            fill: false,         // 3: no fill
            fill: '-2'          // 4: fill to dataset 2
        }]
    };

    var areaOptions = {
        plugins: {
            filler: {
                propagate: true
            }
        }
    }
    // Get context with jQuery - using jQuery's .get() method.
    if($("#barChart").length) {
      var barChartCanvas = $("#barChart").get(0).getContext("2d");
      // This will get the first returned node in the jQuery collection.
      var barChart = new Chart(barChartCanvas, {
        type: 'bar',
        data: data,
        options: options
      });
    }

    if($("#lineChart").length) {
      var lineChartCanvas = $("#lineChart").get(0).getContext("2d");
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }

    if($("#doughnutChart").length) {
      var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");
      var doughnutChart = new Chart(doughnutChartCanvas, {
        type: 'doughnut',
        data: doughnutData,
        options: doughnutOptions
      });
    }

    if($("#areaChart").length) {
      var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
      var areaChart = new Chart(areaChartCanvas, {
        type:'line',
        data: areaData,
        options: areaOptions
      });
    }

  });

// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
      datasets: [
        {
          label: "Mes",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#21610B","#A901DB","#3B240B","#3B0B0B","#B40431","#04B486","#5882FA"],
          data: [2478,5267,2734,1784,2433,3554,1534,2755,2865,3977,5433,8987]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Ventas totales por mes'
      }
    }
});

//mixed
new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Punto 1", "Punto2", "Punto3", "Punto4", "Punto5"],
      datasets: [
        {
          label: "",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [14778,13367,10574,11784,12033]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Ventas sucursarles'
      }
    }
});
// ---------formulario realizar pedido-----//




function alerta1() {
 swal({
  title: "¿Está seguro?",
  text: "¿Está seguro que quiere guardar los cambios?",
  icon: "warning",

  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("¡Se han guardado los cambios con éxito", {
      icon: "success",
    });
  } 
});

}
function alerta2() {
 swal({
  title: "Sesión cerrada",
  icon: "success",

})
   }
