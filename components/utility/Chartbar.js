export const barLegends = [
  { title: 'Views', color: 'bg-teal-600' },
//   { title: 'Bags', color: 'bg-purple-600' },
]


export const barOptions = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'views',
        backgroundColor: '#0694a2',
        // borderColor: window.chartColors.red,
        // borderWidth: 1,
        data: [0, 0, 0, 0, 0, 0, 0],
      },
    //   {
    //     label: 'Bags',
    //     backgroundColor: '#7e3af2',
    //     // borderColor: window.chartColors.blue,
    //     borderWidth: 1,
    //     data: [66, 33, 43, 12, 54, 62, 84],
    //   },
    ],
  },
  options: {
    responsive: true,
  },
  legend: {
    display: false,
  },
}


export const doughnutLegends = [
  { title: 'Shirts', color: 'bg-blue-500' },
  { title: 'Shoes', color: 'bg-teal-600' },
  { title: 'Bags', color: 'bg-purple-600' },
]

export const doughnutOptions = {
  data: {
    datasets: [
      {
        data: [33, 33, 33],
        
        backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2'],
        label: 'Dataset 1',
      },
    ],
    labels: ['Shoes', 'Shirts', 'Bags'],
  },
  options: {
    responsive: true,
    cutoutPercentage: 80,
  },
  legend: {
    display: false,
  },
}