const dataset = [
  {
    data: {
      name: "Wiegand and Sons",
      description: "Electronics",
      amountAvailable: "$3.39",
      valueSinceBought: "$90.35B",
      date: "3/5/2023",
    },
  },
  {
    data: {
      name: "Zboncak, Kessler and Lakin",
      description: "Home",
      amountAvailable: "$0.29",
      valueSinceBought: "$12.5B",
      date: "2/25/2023",
    },
  },
  {
    data: {
      name: "Goodwin, Borer and Schuppe",
      description: "Tools",
      amountAvailable: "$7.76",
      valueSinceBought: "$11.96B",
      date: "8/21/2022",
    },
  },
  {
    data: {
      name: "Thompson Inc",
      description: "Garden",
      amountAvailable: "$5.94",
      valueSinceBought: "n/a",
      date: "5/23/2022",
    },
  },
  {
    data: {
      name: "Satterfield Inc",
      description: "Automotive",
      amountAvailable: "$3.58",
      valueSinceBought: "$2.34B",
      date: "7/15/2022",
    },
  },
  {
    data: {
      name: "Batz LLC",
      description: "Industrial",
      amountAvailable: "$4.88",
      valueSinceBought: "$20.32B",
      date: "6/14/2022",
    },
  },
  {
    data: {
      name: "Hermiston Inc",
      description: "Automotive",
      amountAvailable: "$1.29",
      valueSinceBought: "$4.5B",
      date: "12/3/2022",
    },
  },
  {
    data: {
      name: "Pacocha and Sons",
      description: "Beauty",
      amountAvailable: "$9.04",
      valueSinceBought: "$12.15B",
      date: "6/10/2022",
    },
  },
  {
    data: {
      name: "Rath Inc",
      description: "Beauty",
      amountAvailable: "$9.51",
      valueSinceBought: "$1.63B",
      date: "9/2/2022",
    },
  },
  {
    data: {
      name: "Schultz-Kassulke",
      description: "Outdoors",
      amountAvailable: "$1.39",
      valueSinceBought: "$1.54B",
      date: "11/24/2022",
    },
  },
  {
    data: {
      name: "Green LLC",
      description: "Books",
      amountAvailable: "$2.93",
      valueSinceBought: "$3.61B",
      date: "1/15/2023",
    },
  },
  {
    data: {
      name: "Goyette Inc",
      description: "Kids",
      amountAvailable: "$8.48",
      valueSinceBought: "$317.23M",
      date: "4/2/2022",
    },
  },
  {
    data: {
      name: "Fay-Hilpert",
      description: "Outdoors",
      amountAvailable: "$0.03",
      valueSinceBought: "n/a",
      date: "8/26/2022",
    },
  },
  {
    data: {
      name: "Gerhold Inc",
      description: "Grocery",
      amountAvailable: "$7.94",
      valueSinceBought: "n/a",
      date: "11/19/2022",
    },
  },
  {
    data: {
      name: "Kirlin-Jakubowski",
      description: "Sports",
      amountAvailable: "$6.35",
      valueSinceBought: "$267.54M",
      date: "9/17/2022",
    },
  },
  {
    data: {
      name: "Mayer-Herzog",
      description: "Toys",
      amountAvailable: "$3.72",
      valueSinceBought: "$327.09M",
      date: "7/14/2022",
    },
  },
  {
    data: {
      name: "Thiel and Sons",
      description: "Electronics",
      amountAvailable: "$9.41",
      valueSinceBought: "$536.92M",
      date: "4/24/2022",
    },
  },
  {
    data: {
      name: "Ortiz-Sporer",
      description: "Grocery",
      amountAvailable: "$3.07",
      valueSinceBought: "$250.05M",
      date: "5/1/2022",
    },
  },
  {
    data: {
      name: "Reilly, Lynch and Kling",
      description: "Beauty",
      amountAvailable: "$3.50",
      valueSinceBought: "$3.9B",
      date: "10/3/2022",
    },
  },
  {
    data: {
      name: "Satterfield-Klocko",
      description: "Movies",
      amountAvailable: "$1.39",
      valueSinceBought: "$107.35M",
      date: "5/8/2022",
    },
  },
  {
    data: {
      name: "Parisian-Rippin",
      description: "Automotive",
      amountAvailable: "$6.86",
      valueSinceBought: "$389.62M",
      date: "5/31/2022",
    },
  },
  {
    data: {
      name: "Turcotte Inc",
      description: "Baby",
      amountAvailable: "$8.78",
      valueSinceBought: "$3.68B",
      date: "8/28/2022",
    },
  },
  {
    data: {
      name: "Jerde, Moore and Watsica",
      description: "Computers",
      amountAvailable: "$8.36",
      valueSinceBought: "$1.56B",
      date: "7/15/2022",
    },
  },
  {
    data: {
      name: "Larson-King",
      description: "Tools",
      amountAvailable: "$3.31",
      valueSinceBought: "$296.84M",
      date: "3/4/2023",
    },
  },
  {
    data: {
      name: "Schowalter Group",
      description: "Tools",
      amountAvailable: "$6.19",
      valueSinceBought: "$496.43M",
      date: "1/14/2023",
    },
  },
  {
    data: {
      name: "Adams Group",
      description: "Baby",
      amountAvailable: "$6.27",
      valueSinceBought: "$22.42B",
      date: "11/21/2022",
    },
  },
  {
    data: {
      name: "Fisher-Lubowitz",
      description: "Garden",
      amountAvailable: "$5.33",
      valueSinceBought: "$1.32B",
      date: "11/29/2022",
    },
  },
  {
    data: {
      name: "Koelpin-Howell",
      description: "Beauty",
      amountAvailable: "$4.55",
      valueSinceBought: "$8.93B",
      date: "12/20/2022",
    },
  },
  {
    data: {
      name: "Nader Group",
      description: "Garden",
      amountAvailable: "$2.00",
      valueSinceBought: "$1.15B",
      date: "11/14/2022",
    },
  },
  {
    data: {
      name: "Mosciski, Powlowski and Osinski",
      description: "Movies",
      amountAvailable: "$9.77",
      valueSinceBought: "$198.43M",
      date: "9/14/2022",
    },
  },
  {
    data: {
      name: "Reichel LLC",
      description: "Clothing",
      amountAvailable: "$9.56",
      valueSinceBought: "$1.9B",
      date: "6/22/2022",
    },
  },
  {
    data: {
      name: "Cartwright LLC",
      description: "Clothing",
      amountAvailable: "$7.27",
      valueSinceBought: "n/a",
      date: "10/12/2022",
    },
  },
  {
    data: {
      name: "Wolff Group",
      description: "Music",
      amountAvailable: "$9.75",
      valueSinceBought: "$1.25B",
      date: "4/10/2022",
    },
  },
  {
    data: {
      name: "Sanford, Windler and Keebler",
      description: "Baby",
      amountAvailable: "$7.13",
      valueSinceBought: "$73.79M",
      date: "2/18/2023",
    },
  },
  {
    data: {
      name: "Zboncak, Mertz and Nolan",
      description: "Outdoors",
      amountAvailable: "$5.89",
      valueSinceBought: "$350.52M",
      date: "12/7/2022",
    },
  },
  {
    data: {
      name: "Reynolds-Lowe",
      description: "Jewelry",
      amountAvailable: "$9.86",
      valueSinceBought: "$2.26B",
      date: "3/9/2023",
    },
  },
  {
    data: {
      name: "Rosenbaum, Jast and Ortiz",
      description: "Electronics",
      amountAvailable: "$6.10",
      valueSinceBought: "n/a",
      date: "2/17/2023",
    },
  },
  {
    data: {
      name: "Harvey-Jacobson",
      description: "Grocery",
      amountAvailable: "$3.81",
      valueSinceBought: "n/a",
      date: "6/24/2022",
    },
  },
  {
    data: {
      name: "McCullough Inc",
      description: "Music",
      amountAvailable: "$5.42",
      valueSinceBought: "$332.05M",
      date: "11/3/2022",
    },
  },
  {
    data: {
      name: "Jones, Rippin and Emard",
      description: "Electronics",
      amountAvailable: "$6.99",
      valueSinceBought: "$66.87B",
      date: "2/28/2023",
    },
  },
  {
    data: {
      name: "Kirlin Group",
      description: "Movies",
      amountAvailable: "$8.31",
      valueSinceBought: "$27.57M",
      date: "6/16/2022",
    },
  },
  {
    data: {
      name: "Quigley LLC",
      description: "Health",
      amountAvailable: "$9.69",
      valueSinceBought: "$96.49B",
      date: "11/20/2022",
    },
  },
  {
    data: {
      name: "Emard, Hoeger and Purdy",
      description: "Health",
      amountAvailable: "$4.14",
      valueSinceBought: "$235.9M",
      date: "11/9/2022",
    },
  },
  {
    data: {
      name: "Bergnaum Inc",
      description: "Kids",
      amountAvailable: "$2.63",
      valueSinceBought: "$3.57B",
      date: "10/3/2022",
    },
  },
  {
    data: {
      name: "Treutel, Abshire and Veum",
      description: "Health",
      amountAvailable: "$4.24",
      valueSinceBought: "$1.5B",
      date: "4/21/2022",
    },
  },
  {
    data: {
      name: "Nicolas-Mayer",
      description: "Grocery",
      amountAvailable: "$4.82",
      valueSinceBought: "$2.65B",
      date: "6/8/2022",
    },
  },
  {
    data: {
      name: "McClure-Simonis",
      description: "Games",
      amountAvailable: "$9.99",
      valueSinceBought: "$727.12M",
      date: "2/21/2023",
    },
  },
  {
    data: {
      name: "Pfeffer Inc",
      description: "Movies",
      amountAvailable: "$7.43",
      valueSinceBought: "n/a",
      date: "6/29/2022",
    },
  },
  {
    data: {
      name: "Pacocha, Weissnat and Jenkins",
      description: "Home",
      amountAvailable: "$3.81",
      valueSinceBought: "$8.99B",
      date: "8/22/2022",
    },
  },
  {
    data: {
      name: "Hane-Schuppe",
      description: "Grocery",
      amountAvailable: "$8.50",
      valueSinceBought: "n/a",
      date: "9/9/2022",
    },
  },
];

module.exports = dataset;
