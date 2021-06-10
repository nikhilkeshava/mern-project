import React, { Component } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

class SmoothGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      demo: [],
      optionsRadial: {
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24,
              },
            },
            track: {
              background: "#fff",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },

            dataLabels: {
              showOn: "always",
              name: {
                offsetY: -20,
                show: true,
                color: "#888",
                fontSize: "13px",
              },
              value: {
                formatter: function (val) {
                  return val;
                },
                color: "#111",
                fontSize: "30px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#ABE5A1"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Present Data"],
      },
      optionsRadial1: {
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24,
              },
            },
            track: {
              background: "#fff",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },

            dataLabels: {
              showOn: "always",
              name: {
                offsetY: -20,
                show: true,
                color: "#888",
                fontSize: "13px",
              },
              value: {
                formatter: function (val) {
                  return val;
                },
                color: "#111",
                fontSize: "30px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#ABE5A1"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Absent"],
      },
      optionsRadial2: {
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24,
              },
            },
            track: {
              background: "#fff",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },

            dataLabels: {
              showOn: "always",
              name: {
                offsetY: -20,
                show: true,
                color: "#888",
                fontSize: "13px",
              },
              value: {
                formatter: function (val) {
                  return val;
                },
                color: "#111",
                fontSize: "30px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#ABE5A1"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["HalfDay"],
      },

      seriesRadial: [],
      seriesRadial1: [76],
      seriesRadial2: [5],
      optionsBar: {
        chart: {
          stacked: true,
          stackType: "100%",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        dataLabels: {
          dropShadow: {
            enabled: true,
          },
        },
        stroke: {
          width: 0,
        },
        xaxis: {
          categories: ["Fav Color"],
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        fill: {
          opacity: 1,
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.35,
            gradientToColors: undefined,
            inverseColors: false,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [90, 0, 100],
          },
        },

        legend: {
          position: "bottom",
          horizontalAlign: "right",
        },
      },
      seriesBar: [
        {
          name: "blue",
          data: [32],
        },
        {
          name: "green",
          data: [41],
        },
        {
          name: "yellow",
          data: [12],
        },
        {
          name: "red",
          data: [65],
        },
      ],
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email"); //Or however you choose to get it

    axios
      .get("http://localhost:5007/api/counthalfday")
      .then((res) => {
        this.setState({
          seriesRadial2: [res.data],
        });
      })
      .catch((err) => {
        console.log("Api is wrong");
      });
    axios
      .get("http://localhost:5007/api/countpresent")
      .then((res) => {
        this.setState({
          seriesRadial: [res.data],
        });
      })
      .catch((err) => {
        console.log("Api is wrong");
      });
    axios
      .get("http://localhost:5007/api/demo")
      .then((res) => {
        this.setState({
          demo: res.data,
        });
      })
      .catch((err) => {
        console.log("Api is wrong", err);
      });
  }

  render() {
    const email = localStorage.getItem("email");
    const movies = this.state.demo.filter(
        (item) => item.status === "Present" && item.name === email
      ),
      moviesCount = movies.length;
    console.log("nikhil message", moviesCount);
    return (
      <div className="app">
        <div className="row">
          <div className="col radial-chart">
            <Chart
              options={this.state.optionsRadial}
              series={this.state.seriesRadial}
              type="radialBar"
              width="280"
            />
          </div>
          <div className="col radial-chart">
            <Chart
              options={this.state.optionsRadial1}
              series={this.state.seriesRadial1}
              type="radialBar"
              width="280"
            />
          </div>
          <div className="col radial-chart">
            <Chart
              options={this.state.optionsRadial2}
              series={this.state.seriesRadial2}
              type="radialBar"
              width="280"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SmoothGraph;
