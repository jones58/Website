"use client";

import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import ComponentLayout from "../componentLayout";
import communityEnergyValues from "./communityEnergy.json";

const options: ApexOptions = {
  chart: {
    fontFamily: "Barlow, sans-serif",
    type: "donut",
  },
  colors: ["#16a34a", "#b91c1c"],
  labels: ["Community", "Grid"],
  legend: {
    show: false,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 250,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const CommunityEnergyChart = () => {
  let communityGridEnergy: number =
    communityEnergyValues.communityGridEnergy.initialValue;
  let communityCommunityEnergy: number =
    communityEnergyValues.communityCommunityEnergy.initialValue;
  let series = [communityGridEnergy, communityCommunityEnergy];

  return (
    <ComponentLayout>
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="flex items-center justify-between text-3xl font-semibold text-neutral-800">
            Your Community's Energy
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartFour" className="mx-auto flex justify-center">
          <ReactApexChart options={options} series={series} type="donut" />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#4d991b]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-neutral-800 ">
              <span> Grid </span>
              <span> {communityGridEnergy}%</span>
            </p>
          </div>
        </div>
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#16a34a]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-neutral-800 ">
              <span> Community </span>
              <span> {communityCommunityEnergy}%</span>
            </p>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default CommunityEnergyChart;
