import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Cars: any;
  constructor() {
    this.Cars = [

      {
        "Maker": "Maruti",
        "Price": '₹ 7.81 - ₹ 10.59 Lakh*',
        "Year": 2022,
        "Model": "Maruti Ertiga",
        "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ertiga/10293/1697697779799/front-left-side-47.jpg"
      },
      {
        "Maker": "Tata",
        "Price": "₹ 4.20 Lakh - ₹ 8.50 Lakh*",
        "Year": 2023,
        "Model": "Tata Tiago",
        "Image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/39345/tiago-exterior-right-front-three-quarter-27.jpeg?isig=0&q=80"
      },
      {
        "Maker": "Hyundai",
        "Price": "₹ 6.00 Lakh - ₹ 12.00 Lakh*",
        "Year": 2022,
        "Model": "Hyundai Grand i10",
        "Image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/26859/grand-i10-exterior-right-front-three-quarter.jpeg?q=80"
      },
      {
        "Maker": "Maruti",
        "Price": "₹ 4.80 Lakh - ₹ 8.80 Lakh*",
        "Year": 2021,
        "Model": "Maruti Wagon R",
        "Image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/112947/wagon-r-2022-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
      },
      {
        "Maker": "Mahindra",
        "Price": "₹ 9.50 Lakh - ₹ 16.00 Lakh*",
        "Year": 2024,
        "Model": "Mahindra XUV300",
        "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/XUV300/10770/1690267108916/side-view-(left)-90.jpg"
      },
      {
        "Maker": "Honda",
        "Price": "₹ 8.00 Lakh - ₹ 14.00 Lakh*",
        "Year": 2022,
        "Model": "Honda Amaze",
        "Image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/45951/amaze-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
      },
      {
        "Maker": "Renault",
        "Price": "₹ 5.00 Lakh - ₹ 10.00 Lakh*",
        "Year": 2024,
        "Model": "Renault Kwid",
        "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Renault/KWID/10076/1705905595853/front-left-side-47.jpg"
      },
      {
        "Maker": "Kia",
        "Price": "₹ 10.00 Lakh - ₹ 18.00 Lakh*",
        "Year": 2023,
        "Model": "Kia Seltos",
        "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos-2023/8709/1688465684023/front-left-side-47.jpg"
      },
      {
        "Maker": "Toyota",
        "Price": "₹ 8.50 Lakh - ₹ 15.00 Lakh*",
        "Year": 2022,
        "Model": "Toyota Glanza",
        "Image": "https://imgd.aeplcdn.com/1200x900/n/cw/ec/112839/glanza-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"
      },
      {
        "Maker": "Citroen",
        "Price": "₹ 10.00 Lakh - ₹ 17.00 Lakh*",
        "Year": 2024,
        "Model": "Citroen C3",
        "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Citroen/C3/9894/1710232743367/front-left-side-47.jpg"
      },
      {
        "Maker": "Skoda",
        "Price": "₹ 12.00 Lakh - ₹ 20.00 Lakh*",
        "Year": 2022,
        "Model": "Skoda Rapid",
        "Image": "https://imgd.aeplcdn.com/664x374/cw/ec/23512/Skoda-Rapid-Right-Front-Three-Quarter-83269.jpg?v=201711021421&q=80"
      },
      {
        "Maker": "Volkswagen",
        "Price": "₹ 10.00 Lakh - ₹ 18.00 Lakh*",
        "Year": 2023,
        "Model": "Volkswagen Virtus",
        "Image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80"
      },
      {
        "Maker": "MG Motor",
        "Price": "₹ 14.00 Lakh - ₹ 22.00 Lakh*",
        "Year": 2024,
        "Model": "MG Hector",
        "Image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80"
      },
      {
        "Segment": "Luxury SUV",
        "Maker": "Land Rover",
        "Price": "₹ 80.00 Lakh - ₹ 2.00 Crore*",
        "Year": 2024,
        "Model": "Range Rover Evoque",
        "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Land-Rover/Range-Rover-Evoque/10339/1706685461792/front-left-side-47.jpg?impolicy=resize&imwidth=420"
      },
      {
        "Segment": "Luxury SUV",
        "Maker": "Mercedes-Benz",
        "Price": "₹ 70.00 Lakh - ₹ 1.50 Crore*",
        "Year": 2023,
        "Model": "GLE-Class",
        "Image": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/163317/gle-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80"
      },
      {
        "Segment": "Luxury SUV",
        "Maker": "Audi",
        "Price": "₹ 65.00 Lakh - ₹ 1.20 Crore*",
        "Year": 2024,
        "Model": "Q5",
        "Image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/53591/q5-exterior-right-front-three-quarter-36.jpeg?isig=0&q=80"
      },
      {
        "Segment": "Electric Vehicle",
        "Maker": "Tesla",
        "Price": "₹ 90.00 Lakh - ₹ 1.80 Crore*",
        "Year": 2024,
        "Model": "Model S",
        "Image": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tesla/Model-S/5252/1611840999494/front-left-side-47.jpg"
      },
      {
        "Segment": "Electric Vehicle",
        "Maker": "MG Motor",
        "Price": "₹ 25.00 Lakh - ₹ 30.00 Lakh*",
        "Year": 2024,
        "Model": "ZS EV",
        "Image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/110437/zs-ev-exterior-right-front-three-quarter-69.jpeg?isig=0&q=80"
      },
      {
        "Segment": "Electric Vehicle",
        "Maker": "Hyundai",
        "Price": "₹ 45.00 Lakh - ₹ 55.00 Lakh*",
        "Year": 2024,
        "Model": "Kona Electric",
        "Image": "https://imgd.aeplcdn.com/1200x900/n/cw/ec/29580/kona-electric-exterior-right-front-three-quarter-162254.jpeg?isig=0&q=80"
      },
      {
        "Segment": "Luxury SUV",
        "Maker": "BMW India",
        "Price": "₹ 75.00 Lakh - ₹ 1.60 Crore*",
        "Year": 2022,
        "Model": "X5",
        "Image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/152681/x5-facelift-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80"
      },
      {
        "Segment": "Electric Vehicle",
        "Maker": "Tata",
        "Price": "₹ 18.00 Lakh - ₹ 22.00 Lakh*",
        "Year": 2024,
        "Model": "Nexon EV Max",
        "Image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/121341/nexon-ev-max-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80"
      },
      {
        "Segment": "Luxury SUV",
        "Maker": "Land Rover",
        "Price": "₹ 60.00 Lakh - ₹ 1.00 Crore*",
        "Year": 2023,
        "Model": "Jaguar F-Pace",
        "Image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/56265/f-pace-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
      },
      {
        "Segment": "Electric Vehicle",
        "Maker": "Mahindra",
        "Price": "₹ 16.00 Lakh - ₹ 20.00 Lakh*",
        "Year": 2025,
        "Model": "XUV400 Electric",
        "Image": "https://stimg.cardekho.com/images/cms/carnewsimages/editorimages/643ce6102bf95.jpg?impolicy=resize&imwidth=420"
      },
      {
        "Origin": "South Korea",
        "Maker": "Kia",
        "Price": "(approx. ₹ 21.75 Lakh - ₹ 34.50 Lakh)",
        "Year": 2024,
        "Model": "EV6",
        "Segment": "Electric Vehicle",
        "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/EV6/8947/1654159762071/front-left-side-47.jpg"
      },
      {
        "Origin": "Germany",
        "Maker": "Volkswagen",
        "Price": "(approx. ₹ 26.25 Lakh - ₹ 37.50 Lakh)",
        "Year": 2024,
        "Model": "ID.4",
        "Segment": "Electric Vehicle",
        "Image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230427035712_vw_id4_gtx_profile.jpg&w=700&c=1"
      },
      {
        "Origin": "United States",
        "Maker": "Ford",
        "Price": "(approx. ₹ 18.75 Lakh - ₹ 30.00 Lakh)",
        "Year": 2024,
        "Model": "Mustang Mach-E",
        "Segment": "Electric Crossover",
        "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Ford/Mustang-Mach-E/8599/1631273636169/front-left-side-47.jpg"
      },
      {
        "Origin": "Italy",
        "Maker": "Stellantis",
        "Price": "(approx. ₹ 26.25 Lakh - ₹ 39.38 Lakh)",
        "Year": 2024,
        "Model": "Fiat 500e",
        "Segment": "Electric City Car",
        "Image": "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/fiat-500e-front-quarter-turning.jpg?itok=k4z0dJ4W"
      }
    ]
  }

  ngOnInit() {
    this.getfilter();
  }

  getfilter(){
    // Create an empty array to store the unique car details
    const carDetails: any[] = [];

    // Iterate over each car in the Cars array
    for (const car of this.Cars) {
      // Extract the maker, model, and year properties from each car
      const { Maker, Model, Year } = car;

      // Check if the car details already exist in the carDetails array
      const isDuplicate = carDetails.some((detail) => {
        return detail.Maker === Maker && detail.Model === Model && detail.Year === Year;
      });

      // If the car details are not already in the carDetails array, add them
      if (!isDuplicate) {
        // Create an object with the maker, model, and year properties
        const carInfo = {
          Maker,
          Model,
          Year
        };

        // Push the carInfo object to the carDetails array
        carDetails.push(carInfo);
      }
    }

    // Print the carDetails array to the console
    console.log(carDetails);
  }

}
