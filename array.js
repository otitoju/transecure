var data = [
    {
      id: 1,
      guestroom: "101",
      image: "assets/images/AMADEO Elite - Cloud based hotel solutionpng.png",
      guestname: "Peter Smith",
      checkedin_date: "09/02/2022 02:41",
      checkedout_date: "10/02/2022 02:41",
    },
    {
      id: 2,
      guestroom: "102",
      image: "assets/images/AMADEO ST50.png",
      guestname: "Guest 102",
      checkedin_date: "09/02/2022 02:41",
      checkedout_date: "10/02/2022 02:41",
    },
    {
      id: 3,
      guestroom: "103",
      image: "assets/images/i-LOCK_application.jpg",
      guestname: "Paul macati",
      checkedin_date: "09/02/2022 02:41",
      checkedout_date: "10/02/2022 02:41",
    },
    {
      id: 4,
      guestroom: "104",
      image: "assets/images/AMADEO ST50E.png",
      guestname: "Jorge Schmitt",
      checkedin_date: "09/02/2022 02:41",
      checkedout_date: "10/02/2022 02:41",
    },
  ]

//   checkin = [
//     {
//         id: 5,
//         guestroom: "104",
//         image: "assets/images/AMADEO ST50E.png",
//         guestname: "Jorge Schmitt",
//         checkedin_date: "09/02/2022 02:41",
//         checkedout_date: "10/02/2022 02:41",
//       },
//   ]

function removeCategory(index) {
    return data.splice(index, 1);
}

// function returnUpdatedCheckInList() {
//     display()
//     console.log(...checkin)
// }

// function display() {
//     let index = data[0].id
    
//     // for(let i = 0; i < data.length; i++) {
//     //     console.log()
//     // }
//     // const remove = removeCategory(index)
//     // console.log(data)
//     let arr = [
//         { name:"string 1", value:"this", other: "that" },
//         { name:"string 2", value:"this", other: "that" },
//         { name:"string 3", value:"this", other: "that" },
//         { name:"string 4", value:"this", other: "that" }

//     ];

//     let checkinArr = [
//         { name:"string 5", value:"this", other: "that" },
//         { name:"string 6", value:"this", other: "that" }
//     ]
    
//     let obj = data.find((o, i) => {
//         if (o.id === 3) {
//             checkinArr.push(data[i])
//             checkin.push(data[i])
//             removeCategory(i, 1)
//             return true; // stop searching
//         }
//     });

//     // console.log(checkinArr)
//     // console.log(data)
// }


// function nestedTime() {
//   setTimeout(() => {
//     console.log("First")
//     setTimeout(() => {
//       console.log("second")
//     }, 5000)
//   },3000)
// }

// nestedTime()

// function shuffle(array) {
//   var currentIndex = array.length
//   var randomIndex;
//   var getFirstIndex = 0
//   while(currentIndex != 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex)
//     currentIndex--

//     [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
//   }

//   getFirstIndex = array[0]
//   console.log(getFirstIndex)
//   return array

// }

// var arr = [2, 45, 67, 5, 8]
// shuffle(data)
//console.log(arr)
//console.log()

