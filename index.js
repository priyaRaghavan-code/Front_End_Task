document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container", {
    chart: {
      //alignTicks: false,
      height: 150,
      type: "line",
      width: 150,
      // inverted: "true",
    },
    yAxis: {
      categories: ["12Am", "8Am", "4Am", "11Pm"],
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
    colors: ["#808EAA", "#8933FF"],
    series: [
      {
        data: [1, 5, 2, 6, 3],
        yAxis: 1,
      },
      {
        data: [2.9, 6.5, 7.4, 8, 3],
        yAxis: 1,
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container1", {
    chart: {
      //alignTicks: false,
      height: 150,
      type: "line",
      width: 150,
      // inverted: "true",
    },
    yAxis: {
      categories: ["12Am", "8Am", "4Am", "11Pm"],
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
    colors: ["#808EAA", "#8933FF"],
    series: [
      {
        data: [1, 5, 2, 6, 3],
        yAxis: 1,
      },
      {
        data: [2.9, 6.5, 7.4, 8, 3],
        yAxis: 1,
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container2", {
    chart: {
      //alignTicks: false,
      height: 150,
      type: "line",
      width: 150,
      // inverted: "true",
    },
    yAxis: {
      categories: ["12Am", "8Am", "4Am", "11Pm"],
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
    colors: ["#808EAA", "#8933FF"],
    series: [
      {
        data: [1, 5, 2, 6, 3],
        yAxis: 1,
      },
      {
        data: [2.9, 6.5, 7.4, 8, 3],
        yAxis: 1,
      },
    ],
  });
});
