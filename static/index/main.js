
function update(_for,value) {

  _for.data.datasets[0].percent = value;


  _for.data.datasets[0].data = [value, 100 - value];

 
  _for.update();
}

function getDoughnutColor(percent) {
  if (percent > 37) {
    return 'red';  
  } else if (percent > 40) {
    return '#ff9800';  
  } else {
    return '#4caf50';  
  }
}

var temp = new Chart('temp', {
  type: 'doughnut',
  data: {
    datasets: [{
      label: 'Africa / Population (millions)',
      percent: 45,
      backgroundColor: function(context) {
      
        var percent = context.dataset.percent;
        return [getDoughnutColor(percent)]
      },
    }]
  },
  plugins: [{
      beforeInit: (chart) => {
        const dataset = chart.data.datasets[0];
        chart.data.labels = [dataset.label];
        dataset.data = [dataset.percent, 100 - dataset.percent];
      }
    },
    {
      beforeDraw: (chart) => {
        var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;
        ctx.restore();
        var fontSize = (height / 150).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = "#9b9b9b";
        ctx.textBaseline = "middle";
        
        
        var text = chart.data.datasets[0].percent + " C",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
        ctx.fillText(text, textX, textY);
        
       
        var icon = new Image();
        icon.src = '/static/temp.svg'; 
        
        icon.onload = function() {
          var iconWidth = 40; 
          var iconHeight = 40; 
          var iconX = Math.round((width - iconWidth) / 2); 
          var iconY = textY + fontSize * 20; 
          
        
          ctx.drawImage(icon, iconX, iconY, iconWidth, iconHeight);
        };

        ctx.save();
      }
    }
  ],
  options: {
    responsive: false,
    animation: {
      duration: 0
    },
    maintainAspectRatio: false,
    cutoutPercentage: 85,
    rotation: Math.PI / 2,
    legend: {
      display: false,
    },
    tooltips: {
      filter: tooltipItem => tooltipItem.index == 0
    }
  }
});







var humidity = new Chart('humidity', {
  type: 'doughnut',
  data: {
    datasets: [{
      label: 'Africa / Population (millions)',
      percent: 60,
      backgroundColor: ['#5283ff']
    }]
  },
  plugins: [{
      beforeInit: (chart) => {
        const dataset = chart.data.datasets[0];
        chart.data.labels = [dataset.label];
        dataset.data = [dataset.percent, 100 - dataset.percent];
      }
    },
    {
      beforeDraw: (chart) => {
        var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;
        ctx.restore();
        var fontSize = (height / 150).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = "#9b9b9b";
        ctx.textBaseline = "middle";
        
      
        var text = chart.data.datasets[0].percent + " %",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
        ctx.fillText(text, textX, textY);
      
        var icon = new Image();
        icon.src = '/static/hyg.svg'; 
        
        icon.onload = function() {
          var iconWidth = 40;
          var iconHeight = 40;
          var iconX = Math.round((width - iconWidth) / 2); 
          var iconY = textY + fontSize * 20;
          
        
          ctx.drawImage(icon, iconX, iconY, iconWidth, iconHeight);
        };

        ctx.save();
      }
    }
  ],
  options: {
    responsive: false,
    animation: {
      duration: 0
    },
    maintainAspectRatio: false,
    cutoutPercentage: 85,
    rotation: Math.PI / 2,
    legend: {
      display: false,
    },
    tooltips: {
      filter: tooltipItem => tooltipItem.index == 0
    }
  }
});




var light = new Chart('light', {
  type: 'doughnut',
  data: {
    datasets: [{
      label: 'Africa / Population (millions)',
      percent: 60,
      backgroundColor: ['#5283ff']
    }]
  },
  plugins: [{
      beforeInit: (chart) => {
        const dataset = chart.data.datasets[0];
        chart.data.labels = [dataset.label];
        dataset.data = [dataset.percent, 100 - dataset.percent];
      }
    },
    {
      beforeDraw: (chart) => {
        var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;
        ctx.restore();
        var fontSize = (height / 150).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = "#9b9b9b";
        ctx.textBaseline = "middle";
        
       
        var text = chart.data.datasets[0].percent + " %",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
        ctx.fillText(text, textX, textY);
        
      
        var icon = new Image();
        icon.src = '/static/light.svg'; 
        
        icon.onload = function() {
          var iconWidth = 40;
          var iconHeight = 40;
          var iconX = Math.round((width - iconWidth) / 2);
          var iconY = textY + fontSize * 20; 
          
          
          ctx.drawImage(icon, iconX, iconY, iconWidth, iconHeight);
        };

        ctx.save();
      }
    }
  ],
  options: {
    responsive: false,
    animation: {
      duration: 0
    },
    maintainAspectRatio: false,
    cutoutPercentage: 85,
    rotation: Math.PI / 2,
    legend: {
      display: false,
    },
    tooltips: {
      filter: tooltipItem => tooltipItem.index == 0
    }
  }
});



var battry = new Chart('battry', {
  type: 'doughnut',
  data: {
    datasets: [{
      label: 'Africa / Population (millions)',
      percent: 60,
      backgroundColor: ['#5283ff']
    }]
  },
  plugins: [{
      beforeInit: (chart) => {
        const dataset = chart.data.datasets[0];
        chart.data.labels = [dataset.label];
        dataset.data = [dataset.percent, 100 - dataset.percent];
      }
    },
    {
      beforeDraw: (chart) => {
        var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;
        ctx.restore();
        var fontSize = (height / 150).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = "#9b9b9b";
        ctx.textBaseline = "middle";
        
        
        var text = chart.data.datasets[0].percent + " C",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
        ctx.fillText(text, textX, textY);
        
        
        var icon = new Image();
        icon.src = '/static/battry.svg'; 
        
        icon.onload = function() {
          var iconWidth = 40; 
          var iconHeight = 40; 
          var iconX = Math.round((width - iconWidth) / 2);
          var iconY = textY + fontSize * 20;
          
          
          ctx.drawImage(icon, iconX, iconY, iconWidth, iconHeight);
        };

        ctx.save();
      }
    }
  ],
  options: {
    responsive: false,
    animation: {
      duration: 0
    },
    maintainAspectRatio: false,
    cutoutPercentage: 85,
    rotation: Math.PI / 2,
    legend: {
      display: false,
    },
    tooltips: {
      filter: tooltipItem => tooltipItem.index == 0
    }
  }
});