
export const common = {
  chart: {
    type: 'spline',
    height: 400,
    panning: true,
    scrollablePlotArea: {
      minWidth: 300,
      scrollPositionX: 1
    },
    animation: {
      duration: 1500,
      easing: 'easeOutBounce'
    }
  },
  scrollbar: {
    enabled: true
  },
  credits: {
    enabled: false
  },
  colors: ['#00B533', '#FFB436'],
  description: ['Payme, Yandex', "Vaucher, Cashback"],
  title: {
    text: null
  },
  yAxis: {
    title: null,
    categories: ['0', '500K', '1M', '5M', '10M', '15M', '20M', '25M'],
  },
  xAxis: {
    type: 'time',
    tickLength: 0,
    lineWidth: 0,
    endOnTick: false,
    scrollbar: {
      enabled: true
    },
    min: 0,
    max: 6,
    categories: ['1.08', '2.08', '3.08', '4.08', '5.08', '6.08', '7.08', '8.08', '9.08', '10.08', '11.08', '12.08',]
  },
  subtitle: {
    position: 'fixed',
    // text: "Sotib olgan va <br> ro'yhatdan o'tganlar",
    align: 'left',
    fontSize: '14px',
    fontweight: 700,
    marginLeft: '10px',
    x: -10
  },
  legend: {
    enabled: true,
    itemMarginBottom: 28,
    useHTML: true,
    symbolWidth: 0,
    symbolHeight: 0,
    verticalAlign: 'top',
    labelFormatter() {
      const { name, color, userOptions: { description } } = this;
      return `
      <div class="custom-legend">
        <div class="custom-legend-shape" style="background: ${color}">
        </div>
        <div class="legend-wrapper">
          <div>
            ${name}
          </div>
          <div class='legend-description'>
          ${description}
          </div>
          </div>
      </div>`;
    },
    itemStyle: {
      fontWeight: '500',
      fontSize: '13px',
      color: '#181C32'
    },
    itemDistance: 8,
    padding: 0,
    align: 'center'
  },
  series: [
    {
      name: 'Real pull',
      description: 'Payme, Yandex',
      data: [1, 2, 3, 2.4, 1, 5, 2, 6, 4, 3, 7, 5]
    },
    {
      name: 'No Real pull',
      description: 'Vaucher, Cashback',
      data: [3.2, 1.2, 3.2, 2, 5, 7, 2, 4, 6, 7, 1, 6]
    }
  ]
}

export const options = [common, common]

// tooltip: {
//   shared: true,
//   formatter() {
//     const { points } = this;
//     const tmp = [];
//     for (let i = 0; i < points.length; i += 1) {
//       tmp.push(`<div class="custom-spline-tooltip-item"><span class="tooltip-shape" style="border: 2px solid ${points[i].color};"></span> $${numberFormat(points[i].y)} </div>`);
//     }
//     return `<div class="custom-spline-tooltip">${tmp.join('')}</div>`;
//   },
//   padding: 0,
//   borderRadius: 4,
//   borderWidth: 0,
//   shadow: false,
//   useHTML: true
// },