import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CarserviceService } from '../carservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Cars: any;
  showFilter = false;
  Makers :any[] = [
    'Maruti',
      'Volkswagen',
      'Kia',
      'Hyundai',
      'Tata',
      'Mahindra',
      'Honda',
      'Renault',
      'Toyota',
      'Citroen',
      'Skoda',
      'MG Motor',
      'Land Rover',
      'Mercedes-Benz',
      'Audi',
      'Tesla',
      'BMW India',
  ];
  Years :any[] = [
    2021,
    2022,
    2023,
    2024
  ];
  prices: any[] = [
    400000,
    500000,
    1000000,
    1500000,
    2500000,
    3000000,
    3500000,
    4000000,
    4500000,
    5000000,
    5500000,
    6000000,
    6500000,
    7000000,
    7500000,
    8000000,
    8500000,
    9000000,
    9500000,
    10000000
  ];
  models: any[] = [
    '4 seater',
    '4 seater EV',
    '4 seater hatchback',
    '4 seater sedan',
    '4 seater SUV',
    '8 seater SUV',
  ];
  carList: any[] = [];

  // uncommert this code to use the hardcoded data in case the JSON server is not working
  // carList: any[] = [
  //   {
  //     "Maker": "Maruti",
  //     "Price": 780000,
  //     "Year": 2022,
  //     "Name": "Maruti Ertiga",
  //     "Model": "9 seater",
  //     "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ertiga/10293/1697697779799/front-left-side-47.jpg"
  //   },
  //   {
  //     "Maker": "Tata",
  //     "Price": 650000,
  //     "Year": 2023,
  //     "Name": "Tata Tiago",
  //     "Model": "4 seater",
  //     "Image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/39345/tiago-exterior-right-front-three-quarter-27.jpeg?isig=0&q=80"
  //   },
  //   {
  //     "Maker": "Hyundai",
  //     "Price": 750000,
  //     "Year": 2022,
  //     "Name": "Hyundai Grand i10",
  //     "Model": "4 seater",
  //     "Image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/26859/grand-i10-exterior-right-front-three-quarter.jpeg?q=80"
  //   },
  //   {
  //     "Maker": "Maruti",
  //     "Price": 450000,
  //     "Year": 2021,
  //     "Name": "Maruti Wagon R",
  //     "Model": "4 seater",
  //     "Image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/112947/wagon-r-2022-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
  //   },
  //   {
  //     "Maker": "Mahindra",
  //     "Price": 850000,
  //     "Year": 2024,
  //     "Name": "Mahindra XUV300",
  //     "Model": "4 seater SUV",
  //     "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/XUV300/10770/1690267108916/side-view-(left)-90.jpg"
  //   },
  //   {
  //     "Maker": "Honda",
  //     "Price": 650000,
  //     "Year": 2022,
  //     "Name": "Honda Amaze",
  //     "Model": "4 seater sedan",
  //     "Image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/45951/amaze-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
  //   },
  //   {
  //     "Maker": "Renault",
  //     "Price": 550000,
  //     "Year": 2024,
  //     "Name": "Renault Kwid",
  //     "Model": "4 seater hatchback",
  //     "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Renault/KWID/10076/1705905595853/front-left-side-47.jpg"
  //   },
  //   {
  //     "Maker": "Kia",
  //     "Price": 950000,
  //     "Year": 2023,
  //     "Model": "4 seater SUV",
  //     "Name": "Kia Seltos",
  //     "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos-2023/8709/1688465684023/front-left-side-47.jpg"
  //   },
  //   {
  //     "Maker": "Toyota",
  //     "Price": 850000,
  //     "Year": 2022,
  //     "Model": "4 seater hatchback",
  //     "Name": "Toyota Glanza",
  //     "Image": "https://imgd.aeplcdn.com/1200x900/n/cw/ec/112839/glanza-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"
  //   },
  //   {
  //     "Maker": "Citroen",
  //     "Price": 750000,
  //     "Year": 2024,
  //     "Model": "4 seater hatchback",
  //     "Name": "Citroen C3",
  //     "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Citroen/C3/9894/1710232743367/front-left-side-47.jpg"
  //   },
  //   {
  //     "Maker": "Skoda",
  //     "Price": 850000,
  //     "Year": 2022,
  //     "Model": "4 seater sedan",
  //     "Name": "Skoda Rapid",
  //     "Image": "https://imgd.aeplcdn.com/664x374/cw/ec/23512/Skoda-Rapid-Right-Front-Three-Quarter-83269.jpg?v=201711021421&q=80"
  //   },
  //   {
  //     "Maker": "Volkswagen",
  //     "Price": 950000,
  //     "Year": 2023,
  //     "Model": "4 seater sedan",
  //     "Name": "Volkswagen Virtus",
  //     "Image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80"
  //   },
  //   {
  //     "Maker": "MG Motor",
  //     "Price": 8500000,
  //     "Year": 2024,
  //     "Model": "8 seater SUV",
  //     "Name": "MG Hector",
  //     "Image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80"
  //   },
  //   {
  //     "Maker": "Land Rover",
  //     "Price": 8000000,
  //     "Year": 2024,
  //     "Model": "8 seater SUV",
  //     "Name": "Range Rover Evoque",
  //     "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Land-Rover/Range-Rover-Evoque/10339/1706685461792/front-left-side-47.jpg?impolicy=resize&imwidth=420"
  //   },
  //   {
  //     "Maker": "Mercedes-Benz",
  //     "Price": 7000000,
  //     "Year": 2023,
  //     "Model": "8 seater SUV",
  //     "Name": "GLE-Class",
  //     "Image": "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/163317/gle-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80"
  //   },
  //   {
  //     "Maker": "Audi",
  //     "Price": 6500000,
  //     "Year": 2024,
  //     "Model": "8 seater SUV",
  //     "Name": "Q5",
  //     "Image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/53591/q5-exterior-right-front-three-quarter-36.jpeg?isig=0&q=80"
  //   },
  //   {
  //     "Maker": "Tesla",
  //     "Price": 9000000,
  //     "Year": 2024,
  //     "Model": "4 seater EV",
  //     "Name": "Model S",
  //     "Image": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tesla/Model-S/5252/1611840999494/front-left-side-47.jpg"
  //   },
  //   {
  //     "Maker": "MG Motor",
  //     "Price": 2500000,
  //     "Year": 2024,
  //     "Model": "4 seater EV",
  //     "Name": "ZS EV",
  //     "Image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/110437/zs-ev-exterior-right-front-three-quarter-69.jpeg?isig=0&q=80"
  //   },
  //   {
  //     "Maker": "Hyundai",
  //     "Price": 4500000,
  //     "Year": 2024,
  //     "Model": "4 seater EV",
  //     "Name": "Kona Electric",
  //     "Image": "https://imgd.aeplcdn.com/1200x900/n/cw/ec/29580/kona-electric-exterior-right-front-three-quarter-162254.jpeg?isig=0&q=80"
  //   },
  //   {
  //     "Maker": "BMW India",
  //     "Price": 7500000,
  //     "Year": 2022,
  //     "Model": "4 seater EV",
  //     "Name": "X5",
  //     "Image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/152681/x5-facelift-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80"
  //   },
  //   {
  //     "Maker": "Tata",
  //     "Price": 1800000,
  //     "Year": 2024,
  //     "Model": "4 seater EV",
  //     "Name": "Nexon EV Max",
  //     "Image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/121341/nexon-ev-max-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80"
  //   },
  //   {
  //     "Segment": "Luxury SUV",
  //     "Maker": "Land Rover",
  //     "Price": 6000000,
  //     "Year": 2023,
  //     "Model": "8 seater SUV",
  //     "Name": "Jaguar F-Pace",
  //     "Image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/56265/f-pace-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
  //   },
  //   {
  //     "Maker": "Mahindra",
  //     "Price": 1600000,
  //     "Year": 2025,
  //     "Model": "8 seater SUV",
  //     "Name": "XUV400 Electric",
  //     "Image": "https://stimg.cardekho.com/images/cms/carnewsimages/editorimages/643ce6102bf95.jpg?impolicy=resize&imwidth=420"
  //   },
  //   {
  //     "Maker": "Kia",
  //     "Price": 7000000,
  //     "Year": 2024,
  //     "Model": "4 seater EV",
  //     "Name": "EV6",
  //     "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/EV6/8947/1654159762071/front-left-side-47.jpg"
  //   },
  //   {
  //     "Maker": "Volkswagen",
  //     "Price": 6000000,
  //     "Year": 2024,
  //     "Model": "4 seater EV",
  //     "Name": "ID.4",
  //     "Image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230427035712_vw_id4_gtx_profile.jpg&w=700&c=1"
  //   },
  //   {
  //     "Origin": "United States",
  //     "Maker": "Ford",
  //     "Price": 5000000,
  //     "Year": 2024,
  //     "Model": "4 seater",
  //     "Name": "Mustang Mach-E",
  //     "Image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Ford/Mustang-Mach-E/8599/1631273636169/front-left-side-47.jpg"
  //   },
  //   {
  //     "Maker": "Stellantis",
  //     "Price": 2000000,
  //     "Year": 2024,
  //     "Model": "4 seater EV",
  //     "Name": "Fiat 500e",
  //     "Image": "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/fiat-500e-front-quarter-turning.jpg?itok=k4z0dJ4W"
  //   }
  // ];
  
  selectedMaker: any;
  selectedYear: string = '';
  selectedModel: string = '';
  selectedPrice: string = '';
  temcar: any;
  filtercar: any[] = [];

  constructor(private http : HttpClient,private carservice: CarserviceService, private snackBar: MatSnackBar, private toastr: ToastrService) {
    this.Cars = this.carList;
  }


  ngOnInit() {
    
    this.carservice.getCarList().subscribe((res:any) => {
      console.log(res);
      this.carList = res;
      this.Cars = this.carList;
      this.toastr.success('Car list fetched successfully', 'Close', {
        timeOut: 2000,
      });
    }, (err) => {
      console.log(err);
      this.toastr.error('Error fetching car list Please check the JSON server', 'Close');
    });
  }

  getFilteredCars(){
    console.log(this.selectedMaker, this.selectedYear, this.selectedModel);
    let filteredCars = this.carList;
    if(this.selectedMaker){
      filteredCars = filteredCars.filter((car: { Maker: any; }) => car.Maker === this.selectedMaker);
    }
    if(this.selectedYear){
      filteredCars = filteredCars.filter((car: { Year: any; }) => car.Year === this.selectedYear);
    }
    if(this.selectedModel){
      filteredCars = filteredCars.filter((car: { Model: any; }) => car.Model === this.selectedModel);
    }
    if(this.selectedPrice){
      filteredCars = filteredCars.filter((car: { Price: any; }) => car.Price <= this.selectedPrice);
    }
    this.Cars = filteredCars;
    this.toastr.success('Car list filtered successfully', 'Close', {
      timeOut: 2000,
    });
  }

  onClose(){
    this.showFilter = false;
    this.selectedMaker = '';
    this.selectedYear = '';
    this.selectedModel = '';
    this.selectedPrice = '';
    this.Cars = this.carList;
    this.toastr.warning('Filter Cleared', 'Close', {
      timeOut: 1000,
    });
  }

}
