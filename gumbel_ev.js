
document.addEventListener('DOMContentLoaded', function () {
  const carBrandsDropdown = document.getElementById('carBrands');
  const carModelsDropdown = document.getElementById('carModels');
  const selectedBrandInfo = document.getElementById('selectedBrand');
  const selectedModelInfo = document.getElementById('selectedModel');
  const selectedPowerInfo = document.getElementById('selectedPower');
  const redirectButton = document.getElementById('redirectButton');

  const data = [
    {
      "MARKA": "Marka Seçiniz",
      "MODEL": "Marka Seçiniz",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
    {
      "MARKA": "Abarth",
      "MODEL": "Abarth 500e",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Abarth",
      "MODEL": "Abarth 500e Convertible",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Acura",
      "MODEL": "Acura ZDX A-Spec RWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Acura",
      "MODEL": "Acura ZDX Type S",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Aiways",
      "MODEL": "Aiways U5 63 kWh",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Aiways",
      "MODEL": "Aiways U6 63 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Aspark",
      "MODEL": "Aspark Owl",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi e-tron 50 quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi e-tron 55 quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi e-tron GT quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi e-tron GT RS",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi e-tron S quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi e-tron Sportback 50 quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi e-tron Sportback 55 quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi e-tron Sportback S quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q4 e-tron 35",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q4 e-tron 40",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q4 e-tron 45",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q4 e-tron 45 quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q4 e-tron 45 quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q4 e-tron 50 quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q4 e-tron 55 quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q4 e-tron Sportback 35",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q4 e-tron Sportback 40",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q4 e-tron Sportback 45 quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q4 e-tron Sportback 50 quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q8 e-tron 50 quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q8 e-tron 55 quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q8 e-tron Sportback 50 quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q8 e-tron Sportback 55 quattro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q8 e-tron Sportback SQ8",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Audi",
      "MODEL": "Audi Q8 e-tron SQ8",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW i3",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW i3 s",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW i4 eDrive35",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW i4 eDrive40",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW i4 M50",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW i4 xDrive40",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW i5 eDrive40",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW i5 M60 xDrive",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW i7 eDrive50",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW i7 M70 xDrive",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW i7 xDrive60",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW iX M60",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW iX xDrive40",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW iX xDrive50",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW iX1 eDrive20",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW iX1 xDrive30",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW iX2 xDrive30",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BMW",
      "MODEL": "BMW iX3",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BYD",
      "MODEL": "BYD Atto 3",
      "AC ŞARJ GÜCÜ": "7 kW"
     },
     {
      "MARKA": "BYD",
      "MODEL": "BYD Dolphin 45 kWh Active",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "BYD",
      "MODEL": "BYD Dolphin 45 kWh Boost",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "BYD",
      "MODEL": "BYD Dolphin 60 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BYD",
      "MODEL": "BYD Han",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "BYD",
      "MODEL": "BYD Seal AWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BYD",
      "MODEL": "BYD Seal RWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "BYD",
      "MODEL": "BYD Seal RWD Standard Range",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "BYD",
      "MODEL": "BYD Tang AWD 86 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Cadillac",
      "MODEL": "Cadillac Escalade IQ AWD",
      "AC ŞARJ GÜCÜ": "19.2 kW"
     },
     {
      "MARKA": "Cadillac",
      "MODEL": "Cadillac Lyriq AWD",
      "AC ŞARJ GÜCÜ": "11.5 kW"
     },
     {
      "MARKA": "Cadillac",
      "MODEL": "Cadillac Lyriq RWD ",
      "AC ŞARJ GÜCÜ": "11.5 kW"
     },
     {
      "MARKA": "Chevrolet",
      "MODEL": "Chevrolet Bolt EUV 65 kWh",
      "AC ŞARJ GÜCÜ": "11.5 kW"
     },
     {
      "MARKA": "Chevrolet",
      "MODEL": "Chevrolet Bolt EV 65 kWh",
      "AC ŞARJ GÜCÜ": "11.5 kW"
     },
     {
      "MARKA": "Citroën",
      "MODEL": "Citroën AMI 5,5 kWh",
      "AC ŞARJ GÜCÜ": "2.3 kW"
     },
     {
      "MARKA": "Citroën",
      "MODEL": "Citroën AMI Cargo",
      "AC ŞARJ GÜCÜ": "2.3 kW"
     },
     {
      "MARKA": "Citroën",
      "MODEL": "Citroën ë-Berlingo M 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Citroën",
      "MODEL": "Citroën ë-Berlingo XL 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Citroën",
      "MODEL": "Citroën ë-C3",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Citroën",
      "MODEL": "Citroën ë-C4 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Citroën",
      "MODEL": "Citroën Ë-C4 X 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Cupra",
      "MODEL": "Cupra Born 58 kWh 150 kW",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Cupra",
      "MODEL": "Cupra Born 58 kWh 170 kW",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Cupra",
      "MODEL": "Cupra Born 77 kWh 170 kW",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Cupra",
      "MODEL": "Cupra Tavascan Endurance",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Cupra",
      "MODEL": "Cupra Tavascan VZ",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Dacia",
      "MODEL": "Dacia Spring Cargo",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Dacia",
      "MODEL": "Dacia Spring Electric 45",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Dacia",
      "MODEL": "Dacia Spring Extreme Electric 65",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "DS",
      "MODEL": "DS 3 Crossback E-Tense 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "DS",
      "MODEL": "DS 3 E-TENSE",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Elaris",
      "MODEL": "Elaris Beo 72 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Elaris",
      "MODEL": "Elaris Beo 86 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Fiat",
      "MODEL": "Fiat 500e 3+1 42 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Fiat",
      "MODEL": "Fiat 500e Cabrio 24 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Fiat",
      "MODEL": "Fiat 500e Cabrio 42 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Fiat",
      "MODEL": "Fiat 500e Hatchback 24 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Fiat",
      "MODEL": "Fiat 500e Hatchback 42 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Fiat",
      "MODEL": "Fiat 600e 54 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Fiat",
      "MODEL": "Fiat E-Ulysse L2 50 kWh",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Fiat",
      "MODEL": "Fiat E-Ulysse L2 75 kWh",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Fiat",
      "MODEL": "Fiat E-Ulysse L3 50 kWh",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Fiat",
      "MODEL": "Fiat E-Ulysse L3 75 kWh",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Fisker",
      "MODEL": "Fisker Ocean Extreme",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Fisker",
      "MODEL": "Fisker Ocean One",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Fisker",
      "MODEL": "Fisker Ocean Sport",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Fisker",
      "MODEL": "Fisker Ocean Ultra",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Ford",
      "MODEL": "Ford F-150 Lightning Extended Range",
      "AC ŞARJ GÜCÜ": "19.2 kW"
     },
     {
      "MARKA": "Ford",
      "MODEL": "Ford F-150 Lightning Standard Range",
      "AC ŞARJ GÜCÜ": "11.3 kW"
     },
     {
      "MARKA": "Ford",
      "MODEL": "Ford Mustang Mach-E Extended Range AWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Ford",
      "MODEL": "Ford Mustang Mach-E Extended Range RWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Ford",
      "MODEL": "Ford Mustang Mach-E GT",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Ford",
      "MODEL": "Ford Mustang Mach-E Standard Range AWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Ford",
      "MODEL": "Ford Mustang Mach-E Standard Range RWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Genesis",
      "MODEL": "Genesis G80 Electrified",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Genesis",
      "MODEL": "Genesis GV60 2WD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Genesis",
      "MODEL": "Genesis GV60 AWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Genesis",
      "MODEL": "Genesis GV60 Performance AWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Genesis",
      "MODEL": "Genesis GV70",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "HiPhi",
      "MODEL": "HiPhi X 4-seater",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "HiPhi",
      "MODEL": "HiPhi X 6-seater",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "HiPhi",
      "MODEL": "HiPhi Z 120 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Honda",
      "MODEL": "Honda e 100 kW",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Honda",
      "MODEL": "Honda e 113 kW Advance",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Honda",
      "MODEL": "Honda e:Ny1 68 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Hongqi",
      "MODEL": "Hongqi E-HS9 120 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Hongqi",
      "MODEL": "Hongqi E-HS9 84 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Hongqi",
      "MODEL": "Hongqi E-HS9 99 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Hyundai",
      "MODEL": "Hyundai Ioniq 5 Long Range AWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Hyundai",
      "MODEL": "Hyundai Ioniq 5 Long Range RWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Hyundai",
      "MODEL": "Hyundai Ioniq 5 N",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Hyundai",
      "MODEL": "Hyundai Ioniq 5 Standard Range RWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Hyundai",
      "MODEL": "Hyundai Ioniq 6 Long Range AWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Hyundai",
      "MODEL": "Hyundai Ioniq 6 Long Range RWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Hyundai",
      "MODEL": "Hyundai Ioniq 6 Standard Range RWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Hyundai",
      "MODEL": "Hyundai Ioniq Electric 38 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Hyundai",
      "MODEL": "Hyundai Kona Electric 100 kW",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Hyundai",
      "MODEL": "Hyundai Kona Electric 150 kW",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Hyundai",
      "MODEL": "Hyundai Kona Electric Long Range",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Hyundai",
      "MODEL": "Hyundai Kona Electric Standard Range",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Jac",
      "MODEL": "Jac iEV7S 40 kWh",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Jaguar",
      "MODEL": "Jaguar I-PACE EV400",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Jeep",
      "MODEL": "Jeep Avenger",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Kia",
      "MODEL": "Kia e-Niro 39 kWh",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Kia",
      "MODEL": "Kia e-Niro 64 kWh",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Kia",
      "MODEL": "Kia EV6 GT",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Kia",
      "MODEL": "Kia EV6 Long Range AWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Kia",
      "MODEL": "Kia EV6 Long Range RWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Kia",
      "MODEL": "Kia EV6 Standard Range RWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Kia",
      "MODEL": "Kia EV9 AWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Kia",
      "MODEL": "Kia EV9 RWD Long Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Kia",
      "MODEL": "Kia EV9 RWD Standard Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Kia",
      "MODEL": "Kia Niro EV",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Kia",
      "MODEL": "Kia Soul EV 39 kWh",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Kia",
      "MODEL": "Kia Soul EV 64 kWh",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Lexus",
      "MODEL": "Lexus RZ 450e",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Lexus",
      "MODEL": "Lexus UX 300e 150 kW",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Lightyear",
      "MODEL": "Lightyear 0",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Lordstown",
      "MODEL": "Lordstown Endurance",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Lotus",
      "MODEL": "Lotus Eletre",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Lotus",
      "MODEL": "Lotus Eletre Eletre R",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Lotus",
      "MODEL": "Lotus Eletre Eletre S",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Lotus",
      "MODEL": "Lotus Evija",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Lucid",
      "MODEL": "Lucid Air Dream Edition Performance",
      "AC ŞARJ GÜCÜ": "19.2 kW"
     },
     {
      "MARKA": "Lucid",
      "MODEL": "Lucid Air Dream Edition Range",
      "AC ŞARJ GÜCÜ": "19.2 kW"
     },
     {
      "MARKA": "Lucid",
      "MODEL": "Lucid Air Grand Touring",
      "AC ŞARJ GÜCÜ": "19.2 kW"
     },
     {
      "MARKA": "Lucid",
      "MODEL": "Lucid Air Grand Touring Performance",
      "AC ŞARJ GÜCÜ": "19.2 kW"
     },
     {
      "MARKA": "Lucid",
      "MODEL": "Lucid Air Pure",
      "AC ŞARJ GÜCÜ": "19.2 kW"
     },
     {
      "MARKA": "Lucid",
      "MODEL": "Lucid Air Pure AWD",
      "AC ŞARJ GÜCÜ": "19.2 kW"
     },
     {
      "MARKA": "Lucid",
      "MODEL": "Lucid Air Sapphire",
      "AC ŞARJ GÜCÜ": "19.2 kW"
     },
     {
      "MARKA": "Lucid",
      "MODEL": "Lucid Air Touring",
      "AC ŞARJ GÜCÜ": "19.2 kW"
     },
     {
      "MARKA": "Maserati",
      "MODEL": "Maserati GranTurismo Folgore",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Maserati",
      "MODEL": "Maserati Grecale Folgore",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Maxus",
      "MODEL": "Maxus MIFA9 90 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Maxus",
      "MODEL": "Maxus T90 EV 89 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mazda",
      "MODEL": "Mazda MX-30 105 kW",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQA 250",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQA 250",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQA 250+",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQA 250+",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQA 300 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQA 300 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQA 350 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQA 350 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQB 250",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQB 250+",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQB 250+",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQB 300 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQB 300 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQB 350 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQB 350 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQC 400 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQE 300",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQE 350",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQE 350 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQE 43 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQE 53 4MATIC+",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQE SUV 350 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQE SUV 350+",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQE SUV 43 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQE SUV 500 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQE SUV 53 4MATIC+",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQS 350",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQS 450 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQS 450+",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQS 500 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQS 580 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQS AMG 53 4MATIC+",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQS SUV 450 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQS SUV 450+",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQS SUV 500 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQS SUV 580 4MATIC",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQS SUV Maybach 680",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQT 200",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQV EQV 250 Extra-Long",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQV EQV 250 Long",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQV EQV 300 Extra-Long",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mercedes-Benz",
      "MODEL": "Mercedes-Benz EQV EQV 300 Long",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "MG",
      "MODEL": "MG Marvel R AWD Performance",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "MG",
      "MODEL": "MG Marvel R RWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "MG",
      "MODEL": "MG MG4 Electric Extended Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "MG",
      "MODEL": "MG MG4 Electric Long Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "MG",
      "MODEL": "MG MG4 Electric Standard Range",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "MG",
      "MODEL": "MG MG4 Electric XPower",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "MG",
      "MODEL": "MG MG5 Electric Long Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "MG",
      "MODEL": "MG MG5 Electric Standard Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "MG",
      "MODEL": "MG ZS EV Long Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "MG",
      "MODEL": "MG ZS EV Standard Range",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Mini",
      "MODEL": "Mini Cooper E",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mini",
      "MODEL": "Mini Cooper SE",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mini",
      "MODEL": "Mini Cooper SE 135 kW",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mini",
      "MODEL": "Mini Cooper SE Convertible 135 kW",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mini",
      "MODEL": "Mini Countryman E",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Mini",
      "MODEL": "Mini Countryman SE ALL4",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "NIO",
      "MODEL": "NIO EL6 100 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "NIO",
      "MODEL": "NIO EL6 150 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "NIO",
      "MODEL": "NIO EL6 75 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "NIO",
      "MODEL": "NIO EL7 100 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "NIO",
      "MODEL": "NIO EL7 75 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "NIO",
      "MODEL": "NIO ES8 Long 100 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "NIO",
      "MODEL": "NIO ES8 Long 150 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "NIO",
      "MODEL": "NIO ES8 Standard 75 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "NIO",
      "MODEL": "NIO ET5 100 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "NIO",
      "MODEL": "NIO ET5 75 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "NIO",
      "MODEL": "NIO ET5 Touring 100 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "NIO",
      "MODEL": "NIO ET5 Touring 75 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "NIO",
      "MODEL": "NIO ET7 100 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "NIO",
      "MODEL": "NIO ET7 150 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "NIO",
      "MODEL": "NIO ET7 70 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Nissan",
      "MODEL": "Nissan Ariya 63 kWh FWD",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Nissan",
      "MODEL": "Nissan Ariya 87 kWh e-4ORCE",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Nissan",
      "MODEL": "Nissan Ariya 87 kWh e-4ORCE Performance",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Nissan",
      "MODEL": "Nissan Ariya 87 kWh FWD",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Nissan",
      "MODEL": "Nissan e-NV200 Evalia 40 kWh",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Nissan",
      "MODEL": "Nissan Leaf 40 kWh",
      "AC ŞARJ GÜCÜ": "3.6 kW"
     },
     {
      "MARKA": "Nissan",
      "MODEL": "Nissan Leaf e+ 62 kWh",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Nissan",
      "MODEL": "Nissan Townstar CREW VAN",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Nissan",
      "MODEL": "Nissan Townstar VAN L1",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Nissan",
      "MODEL": "Nissan Townstar VAN L2",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Opel",
      "MODEL": "Opel Astra Electric",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Opel",
      "MODEL": "Opel Astra Sports Tourer Electric",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Opel",
      "MODEL": "Opel Combo-e Life 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Opel",
      "MODEL": "Opel Combo-e Life XL 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Opel",
      "MODEL": "Opel Corsa Electric 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Opel",
      "MODEL": "Opel Corsa Electric 51 kWh Long Range",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Opel",
      "MODEL": "Opel Corsa-e 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Opel",
      "MODEL": "Opel Mokka-e 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Opel",
      "MODEL": "Opel Rocks Electric 5,5 kWh",
      "AC ŞARJ GÜCÜ": "2.3 kW"
     },
     {
      "MARKA": "Opel",
      "MODEL": "Opel Rocks Electric Cargo",
      "AC ŞARJ GÜCÜ": "2.3 kW"
     },
     {
      "MARKA": "ORA",
      "MODEL": "ORA Funky Cat 48 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "ORA",
      "MODEL": "ORA Funky Cat 63 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot e-2008 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot e-2008 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot e-2008 54 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot e-208 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot e-208 51 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot E-3008 AWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot E-3008 FWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot E-3008 FWD Long Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot e-308 54 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot e-308 SW 54 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot e-Rifter 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot e-Rifter 50 kWh Long",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot e-Traveller L2 50 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot e-Traveller L2 75 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot e-Traveller L3 50 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Peugeot",
      "MODEL": "Peugeot e-Traveller L3 75 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Pininfarina",
      "MODEL": "Model Seçiniz",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Pininfarina",
      "MODEL": "Pininfarina Battista",
      "AC ŞARJ GÜCÜ": "9 kW"
     },
     {
      "MARKA": "Polestar",
      "MODEL": "Polestar 2 Long Range Dual Motor",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Polestar",
      "MODEL": "Polestar 2 Long range Dual motor",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Polestar",
      "MODEL": "Polestar 2 Long Range Dual Motor Performance Pack",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Polestar",
      "MODEL": "Polestar 2 Long range Dual motor Performance pack",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Polestar",
      "MODEL": "Polestar 2 Long Range Single Motor",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Polestar",
      "MODEL": "Polestar 2 Long range Single motor",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Polestar",
      "MODEL": "Polestar 2 Standard Range Single Motor",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Polestar",
      "MODEL": "Polestar 2 Standard range Single motor",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Polestar",
      "MODEL": "Polestar 3 Long Range Dual Motor",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Polestar",
      "MODEL": "Polestar 3 Long Range Dual Motor Performance Pack",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Polestar",
      "MODEL": "Polestar 4 Long Range Dual Motor",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Polestar",
      "MODEL": "Polestar 4 Long Range Single Motor",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Porsche",
      "MODEL": "Porsche Taycan",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Porsche",
      "MODEL": "Porsche Taycan 4S",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Porsche",
      "MODEL": "Porsche Taycan Cross Turismo 4",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Porsche",
      "MODEL": "Porsche Taycan Cross Turismo 4S",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Porsche",
      "MODEL": "Porsche Taycan Cross Turismo Turbo",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Porsche",
      "MODEL": "Porsche Taycan Cross Turismo Turbo S",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Porsche",
      "MODEL": "Porsche Taycan GTS",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Porsche",
      "MODEL": "Porsche Taycan Sport Turismo 350 kW",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Porsche",
      "MODEL": "Porsche Taycan Sport Turismo 4S",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Porsche",
      "MODEL": "Porsche Taycan Sport Turismo GTS",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Porsche",
      "MODEL": "Porsche Taycan Sport Turismo Turbo",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Porsche",
      "MODEL": "Porsche Taycan Sport Turismo Turbo S",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Porsche",
      "MODEL": "Porsche Taycan Turbo",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Porsche",
      "MODEL": "Porsche Taycan Turbo S",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Renault",
      "MODEL": "Renault Kangoo E-Tech Electric EV45",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Renault",
      "MODEL": "Renault Mégane E-Tech Electric EV40 130",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Renault",
      "MODEL": "Renault Mégane E-Tech Electric EV60 130",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Renault",
      "MODEL": "Renault Mégane E-Tech Electric EV60 220",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Renault",
      "MODEL": "Renault Scenic E-Tech Electric 60 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Renault",
      "MODEL": "Renault Scenic E-Tech Electric 87 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Renault",
      "MODEL": "Renault Twingo E-Tech Electric R80",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Renault",
      "MODEL": "Renault Twizy Urban 45",
      "AC ŞARJ GÜCÜ": "2.3 kW"
     },
     {
      "MARKA": "Renault",
      "MODEL": "Renault Twizy Urban 80",
      "AC ŞARJ GÜCÜ": "2.3 kW"
     },
     {
      "MARKA": "Renault",
      "MODEL": "Renault Zoe R110",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Renault",
      "MODEL": "Renault Zoe R135",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Rimac",
      "MODEL": "Rimac Nevera 1408 kW",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Rivian",
      "MODEL": "Rivian R1S Dual-Motor AWD Large Pack",
      "AC ŞARJ GÜCÜ": "11.5 kW"
     },
     {
      "MARKA": "Rivian",
      "MODEL": "Rivian R1S Dual-Motor AWD Standard Pack",
      "AC ŞARJ GÜCÜ": "11.5 kW"
     },
     {
      "MARKA": "Rivian",
      "MODEL": "Rivian R1S Quad-Motor AWD Large Pack",
      "AC ŞARJ GÜCÜ": "11.5 kW"
     },
     {
      "MARKA": "Rivian",
      "MODEL": "Rivian R1T Dual-Motor AWD Large Pack",
      "AC ŞARJ GÜCÜ": "11.5 kW"
     },
     {
      "MARKA": "Rivian",
      "MODEL": "Rivian R1T Dual-Motor AWD Max Pack",
      "AC ŞARJ GÜCÜ": "11.5 kW"
     },
     {
      "MARKA": "Rivian",
      "MODEL": "Rivian R1T Dual-Motor AWD Standard Pack",
      "AC ŞARJ GÜCÜ": "11.5 kW"
     },
     {
      "MARKA": "Rivian",
      "MODEL": "Rivian R1T Quad-Motor AWD Large Pack",
      "AC ŞARJ GÜCÜ": "11.5 kW"
     },
     {
      "MARKA": "Rivian",
      "MODEL": "Rivian R1T Quad-Motor AWD Max Pack",
      "AC ŞARJ GÜCÜ": "11.5 kW"
     },
     {
      "MARKA": "Rolls-Royce",
      "MODEL": "Rolls-Royce Spectre",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Seres",
      "MODEL": "Seres 3",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Seres",
      "MODEL": "Seres 5 2WD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Seres",
      "MODEL": "Seres 5 4WD 80 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Seres",
      "MODEL": "Seres 5 4WD 90 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda CITIGOe iV 36 kWh",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda Enyaq Coupé iV 60",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda Enyaq Coupé iV 80",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda Enyaq Coupé iV 80x",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda Enyaq Coupé iV 85",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda Enyaq Coupé iV 85x",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda Enyaq Coupé iV RS",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda Enyaq Coupé iV RS 250 kW",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda Enyaq iV 50",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda Enyaq iV 60",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda Enyaq iV 80",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda Enyaq iV 80x",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda Enyaq iV 85",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda Enyaq iV 85x",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda Enyaq iV RS",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Škoda",
      "MODEL": "Škoda Enyaq iV RS 250 kW",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Skywell",
      "MODEL": "Skywell ET-5 LR",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Smart",
      "MODEL": "Smart #1 Brabus",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Smart",
      "MODEL": "Smart #1 Pro",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Smart",
      "MODEL": "Smart #1 Pro+",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Smart",
      "MODEL": "Smart #1 Pulse",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Smart",
      "MODEL": "Smart #3",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Smart",
      "MODEL": "Smart #3 Brabus",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Smart",
      "MODEL": "Smart EQ fortwo cabrio 60 kW",
      "AC ŞARJ GÜCÜ": "4.6 kW"
     },
     {
      "MARKA": "Smart",
      "MODEL": "Smart EQ fortwo coupe 60 kW",
      "AC ŞARJ GÜCÜ": "4.6 kW"
     },
     {
      "MARKA": "Sono",
      "MODEL": "Sono Sion 54 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "SsangYong",
      "MODEL": "SsangYong Korando e-Motion 61 kWh",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Subaru",
      "MODEL": "Subaru Solterra AWD",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Subaru",
      "MODEL": "Subaru Solterra FWD",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model 3 Long Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model 3 Long Range LG battery",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model 3 Long Range Panasonic battery",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model 3 Long Range RWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model 3 Performance",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model 3 RWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model 3 RWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model S Long Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model S Plaid",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model X",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model X Plaid",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model Y AWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model Y Long Range LG battery",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model Y Long Range Panasonic battery",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model Y Performance",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Model Y RWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Tesla",
      "MODEL": "Tesla Roadster",
      "AC ŞARJ GÜCÜ": "16.5 kW"
     },
    {
      "MARKA": "TOGG",
      "MODEL": "Model Seçiniz",
      "AC ŞARJ GÜCÜ": "22 kW"
     }, 
    {
      "MARKA": "TOGG",
      "MODEL": "TOGG T10X",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Toyota",
      "MODEL": "Toyota bZ4X AWD",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Toyota",
      "MODEL": "Toyota bZ4X FWD",
      "AC ŞARJ GÜCÜ": "6.6 kW"
     },
     {
      "MARKA": "Vauxhall",
      "MODEL": "Vauxhall Astra Electric",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Vauxhall",
      "MODEL": "Vauxhall Astra Sports Tourer Electric",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Vauxhall",
      "MODEL": "Vauxhall Combo Life Electric 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Vauxhall",
      "MODEL": "Vauxhall Combo Life Electric XL 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Vauxhall",
      "MODEL": "Vauxhall Corsa Electric 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Vauxhall",
      "MODEL": "Vauxhall Mokka Electric 50 kWh",
      "AC ŞARJ GÜCÜ": "7.4 kW"
     },
     {
      "MARKA": "Vinfast",
      "MODEL": "Vinfast VF8 Eco Extended Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Vinfast",
      "MODEL": "Vinfast VF8 Eco Standard Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Vinfast",
      "MODEL": "Vinfast VF8 Plus Extended Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Vinfast",
      "MODEL": "Vinfast VF8 Plus Standard Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Vinfast",
      "MODEL": "Vinfast VF9 Extended Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Vinfast",
      "MODEL": "Vinfast VF9 Standard Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen e-up! 61 kW",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID. Buzz 82 kWh",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID. Buzz Cargo",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID. Buzz LWB",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID.3 Pro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID.3 Pro S",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID.4 GTX",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID.4 Pro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID.4 Pro 4MOTION",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID.4 Pro Performance",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID.4 Pure",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID.4 Pure Performance",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID.5 GTX",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID.5 Pro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID.5 Pro Performance",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID.7 Pro",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volkswagen",
      "MODEL": "Volkswagen ID.7 Pro S",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo C40 Recharge AWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo C40 Recharge FWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo C40 Recharge Single Motor",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo C40 Recharge Single Motor Extended Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo C40 Recharge Twin Motor",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo EX30 Single Motor",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo EX30 Single Motor Extended Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo EX30 Twin Motor Performance",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo EX90 Single Motor",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo EX90 Twin Motor",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo EX90 Twin Motor Performance",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo XC40 Recharge AWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo XC40 Recharge FWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo XC40 Recharge Single Motor",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo XC40 Recharge Single Motor Extended Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Volvo",
      "MODEL": "Volvo XC40 Recharge Twin Motor",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Voyah",
      "MODEL": "Voyah Dream AWD",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Voyah",
      "MODEL": "Voyah Free",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Xpeng",
      "MODEL": "Xpeng G9 AWD Long Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Xpeng",
      "MODEL": "Xpeng G9 RWD Long Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Xpeng",
      "MODEL": "Xpeng G9 RWD Standard Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Xpeng",
      "MODEL": "Xpeng P5 460",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Xpeng",
      "MODEL": "Xpeng P5 550",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Xpeng",
      "MODEL": "Xpeng P5 600",
      "AC ŞARJ GÜCÜ": "7.2 kW"
     },
     {
      "MARKA": "Xpeng",
      "MODEL": "Xpeng P7 4WD High Performance",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Xpeng",
      "MODEL": "Xpeng P7 RWD Long Range",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Xpeng",
      "MODEL": "Xpeng P7 Wing Edition",
      "AC ŞARJ GÜCÜ": "11 kW"
     },
     {
      "MARKA": "Zeekr",
      "MODEL": "Zeekr 001 FR",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Zeekr",
      "MODEL": "Zeekr 001 Long Range RWD",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Zeekr",
      "MODEL": "Zeekr 001 Performance AWD",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Zeekr",
      "MODEL": "Zeekr 001 Privilege AWD",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Zeekr",
      "MODEL": "Zeekr X Long Range RWD",
      "AC ŞARJ GÜCÜ": "22 kW"
     },
     {
      "MARKA": "Zeekr",
      "MODEL": "Zeekr X Privilege AWD",
      "AC ŞARJ GÜCÜ": "22 kW"
     }
  ];

  const defaultBrandOption = document.createElement('option');
  defaultBrandOption.text = 'Marka Seçiniz';
  defaultBrandOption.disabled = true;
  defaultBrandOption.selected = true;
  carBrandsDropdown.add(defaultBrandOption);

  const defaultModelOption = document.createElement('option');
  defaultModelOption.text = 'Model Seçiniz';
  defaultModelOption.disabled = true;
  defaultModelOption.selected = true;
  carModelsDropdown.add(defaultModelOption);
  
  const brands = [...new Set(data.map(item => item.MARKA))];
  brands.forEach(brand => {
    const option = document.createElement('option');
    option.text = brand;
    carBrandsDropdown.add(option);
  });

  carBrandsDropdown.addEventListener('change', () => {
    const selectedBrandValue = carBrandsDropdown.value;
    const filteredModels = data.filter(item => item.MARKA === selectedBrandValue);

    carModelsDropdown.innerHTML = '';
    filteredModels.forEach(model => {
      const option = document.createElement('option');
      option.text = model.MODEL;
      carModelsDropdown.add(option);
    });

    selectedBrandInfo.textContent = selectedBrandValue;
    selectedModelInfo.textContent = '';
    selectedPowerInfo.textContent = '';
    redirectButton.style.display = 'none';
  });

  carModelsDropdown.addEventListener('change', () => {
    const selectedModelValue = carModelsDropdown.value;
    const selectedBrandValue = carBrandsDropdown.value;
    const selectedData = data.find(item => item.MARKA === selectedBrandValue && item.MODEL === selectedModelValue);

    selectedModelInfo.textContent = selectedModelValue;
    selectedPowerInfo.textContent = selectedData ? selectedData['AC ŞARJ GÜCÜ'] : '';

    redirectButton.style.display = selectedData ? 'block' : 'none';
  });

  redirectButton.addEventListener('click', () => {
    let redirectLink = '';
    const selectedModelValue = carModelsDropdown.value;
      
    const selectedBrandValue = carBrandsDropdown.value;
        const selectedData = data.find(item => item.MARKA === selectedBrandValue && item.MODEL === selectedModelValue);
    if (selectedData) {
        const chargePower = parseFloat(selectedData['AC ŞARJ GÜCÜ'].replace(' kW', ''));
            if (chargePower <= 7.4) {
            redirectLink = 'https://solaravm.com/elektrikli-arac-ac-sarj-istasyonu#/specFilters=90m!#-!547';	
            } 	else if (7.4 < chargePower && chargePower <= 11) {
            redirectLink = 'https://solaravm.com/elektrikli-arac-ac-sarj-istasyonu#/specFilters=86m!#-!546';
        } 	else if (11 < chargePower && chargePower <= 22) {
              redirectLink = 'https://solaravm.com/elektrikli-arac-ac-sarj-istasyonu#/specFilters=90m!#-!549';
          }
    }
    window.location.href = redirectLink;
  });
});
