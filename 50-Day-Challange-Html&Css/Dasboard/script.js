const ctx = document.getElementById("linechart");
const ctx2 = document.getElementById("doughnutchart");
const ctx3 = document.getElementById("polararea");

Chart.defaults.color = "white";

let myChart = new Chart(ctx, {
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


document.getElementById("light_mode").addEventListener("click", function(){
      Chart.defaults.color = "#161616";
     
      document.getElementById("main").style.backgroundColor="#e1e0e0";
      document.getElementById("main_area").style.backgroundColor="white";
      document.getElementById("sidebar").style.backgroundColor="white";
      document.getElementById("sidebar").style.color="#161616";
      document.getElementById("main_area").style.color="#161616";


     let boxes = document.getElementsByClassName("box");
     for(let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor="#e1e0e0";
        boxes[i].style.color="#161616";
     }
     document.getElementById("dark_mode").parentElement.style.display="block";
     document.getElementById("light_mode").parentElement.style.display="none";
      
});
document.getElementById("dark_mode").addEventListener("click", function(){
      Chart.defaults.color = "white";
      document.getElementById("main").style.backgroundColor="#3d3d3d";
      document.getElementById("main_area").style.backgroundColor="#161616";
      document.getElementById("sidebar").style.backgroundColor="#161616";
      document.getElementById("sidebar").style.color="white";
      document.getElementById("main_area").style.color="white";


     let boxes = document.getElementsByClassName("box");
     for(let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor="#3d3d3d";
        boxes[i].style.color="white";
     }
     document.getElementById("dark_mode").parentElement.style.display="none";
     document.getElementById("light_mode").parentElement.style.display="block";
});