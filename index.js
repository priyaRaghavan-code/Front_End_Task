document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container", {
    chart: {
      height: 145,
      type: "line",
      width: 220,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ["12Am", "8Am", "4Am", "11Pm"],
    },
    yAxis: [
      {
        title: {
          text: "",
        },
      },
    ],
    title: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    colors: ["#808EAA", "#8933FF"],
    series: [
      {
        data: [6, 3, 5.3, 2.5],
      },
      {
        data: [10, 8, 10, 8],
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container1", {
    chart: {
      height: 145,
      type: "area",
      width: 220,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ["12Am", "8Am", "4Am", "11Pm"],
    },
    yAxis: [
      {
        title: {
          text: "",
        },
      },
    ],
    title: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    colors: ["#FFD2C1"],
    series: [
      {
        data: [8, 10, 6, 12],
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container2", {
    chart: {
      height: 145,
      type: "line",
      width: 220,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ["12Am", "8Am", "4Am", "11Pm"],
    },
    yAxis: [
      {
        title: {
          text: "",
        },
      },
    ],
    title: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    colors: ["#808EAA", "#8933FF"],
    series: [
      {
        data: [6, 3, 5.3, 2.5],
      },
      {
        data: [10, 8, 10, 8],
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container3", {
    chart: {
      height: 130,
      type: "line",
      width: 220,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ["12Am", "8Am", "4Am", "11Pm"],
    },
    yAxis: [
      {
        title: {
          text: "",
        },
      },
    ],
    title: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    colors: ["#808EAA", "#8933FF"],
    series: [
      {
        data: [6, 3, 5.3, 2.5],
      },
      {
        data: [10, 8, 10, 8],
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container4", {
    chart: {
      height: 130,
      type: "line",
      width: 220,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: ["12Am", "8Am", "4Am", "11Pm"],
    },
    yAxis: [
      {
        title: {
          text: "",
        },
      },
    ],
    title: {
      text: "",
    },
    legend: {
      enabled: false,
    },
    colors: ["#808EAA", "#8933FF"],
    series: [
      {
        data: [6, 3, 5.3, 2.5],
      },
      {
        data: [10, 8, 10, 8],
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container5", {
    chart: {
      //alignTicks: false,
      height: 100,
      type: "area",
      width: 180,
      // inverted: "true",
    },
    credits: {
      enabled: false,
    },
    yAxis: [
      {
        title: {
          text: "",
        },
      },
    ],
    title: {
      text: "",
    },
    legend: {
      layout: "vertical",
      backgroundColor: "#FFFFFF",
      floating: true,
      // align: "none",
      x: 70,
      verticalAlign: "top",
      y: 100,
    },
    colors: ["#4AD9C2"],
    series: [
      {
        data: [10, 8, 10, 8],
        // yAxis: 1,
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container6", {
    chart: {
      //alignTicks: false,
      height: 100,
      type: "area",
      width: 180,
      // inverted: "true",
    },
    credits: {
      enabled: false,
    },

    yAxis: [
      {
        title: {
          text: "",
        },
      },
    ],
    title: {
      text: "",
    },
    legend: {
      layout: "vertical",
      backgroundColor: "#FFFFFF",
      floating: true,
      // align: "none",
      x: 70,
      verticalAlign: "top",
      y: 100,
      enabled: false,
    },
    colors: ["#FFD2C1"],
    series: [
      {
        data: [10, 8, 10, 8],
        // yAxis: 1,
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container7", {
    chart: {
      //alignTicks: false,
      height: 100,
      type: "area",
      width: 180,
      // inverted: "true",
    },
    yAxis: [
      {
        title: {
          text: "",
        },
        gridLineWidth: 0,
      },
      {
        title: {
          text: "",
        },
        opposite: false,
      },
    ],
    title: {
      text: "",
    },
    legend: {
      layout: "vertical",
      backgroundColor: "#FFFFFF",
      floating: true,
      align: "none",
      x: 70,
      verticalAlign: "top",
      y: 100,
    },
    colors: [" #8933FF"],
    series: [
      {
        data: [10, 8, 10, 8],
        // yAxis: 1,
      },
    ],
  });
});
