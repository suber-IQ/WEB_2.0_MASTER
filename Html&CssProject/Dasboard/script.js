const ctx = document.getElementById("linechart");
const ctx2 = document.getElementById("doughnutchart");
const ctx3 = document.getElementById("polararea");

Chart.defaults.color = "white"

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [20, 30, 12, 35, 40, 29,23],
        borderWidth: 1,
      },
      {
        label: "Customers",
        data: [25, 40, 62, 35, 20, 35,30],
        borderWidth: 1,
      },
      {
        label: "Sales",
        data: [40, 59, 15, 62, 55, 32,67],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [20, 30, 12, 35, 40, 29,23],
        borderWidth: 1,
      },
      
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
new Chart(ctx3, {
  type: "polarArea",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [20, 30, 12, 35, 40, 29,23],
        borderWidth: 1,
      },
      
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});