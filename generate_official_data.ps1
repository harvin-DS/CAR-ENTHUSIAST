# generate_official_data.ps1
# Generate 15-brand Indian car dataset with separate Model and Variant columns (2024-2025)
# Including VW, Skoda, MG, Honda Elevate, Honda Amaze and Micro SUV category

$brands = @{
    "Maruti Suzuki" = @(
        @{ Model = "Swift"; Trims = @("LXi", "VXi", "ZXi", "ZXi+"); Engine = 1197; HP = 82; Torque = 112; BasePrice = 649000; Mileage = 24.8; Fuel = "Petrol"; Trans = @("Manual", "AMT"); Seg = "Hatchback" },
        @{ Model = "Baleno"; Trims = @("Sigma", "Delta", "Zeta", "Alpha"); Engine = 1197; HP = 90; Torque = 113; BasePrice = 666000; Mileage = 22.35; Fuel = "Petrol"; Trans = @("Manual", "AMT"); Seg = "Hatchback" },
        @{ Model = "Brezza"; Trims = @("LXi", "VXi", "ZXi", "ZXi+"); Engine = 1462; HP = 103; Torque = 137; BasePrice = 834500; Mileage = 17.38; Fuel = "Petrol"; Trans = @("Manual", "Automatic"); Seg = "SUV" },
        @{ Model = "Grand Vitara"; Trims = @("Sigma", "Delta", "Zeta", "Alpha"); Engine = 1462; HP = 103; Torque = 137; BasePrice = 1080000; Mileage = 21.11; Fuel = "Petrol"; Trans = @("Manual", "Automatic"); Seg = "SUV" },
        @{ Model = "Grand Vitara Hybrid"; Trims = @("Zeta+", "Alpha+"); Engine = 1490; HP = 116; Torque = 141; BasePrice = 1830000; Mileage = 27.97; Fuel = "Hybrid"; Trans = @("e-CVT"); Seg = "SUV" },
        @{ Model = "Ertiga"; Trims = @("LXi", "VXi", "ZXi", "ZXi+"); Engine = 1462; HP = 103; Torque = 137; BasePrice = 869000; Mileage = 20.51; Fuel = "Petrol"; Trans = @("Manual", "Automatic"); Seg = "MUV" },
        @{ Model = "Fronx"; Trims = @("Sigma", "Delta", "Zeta", "Alpha"); Engine = 1197; HP = 90; Torque = 113; BasePrice = 751000; Mileage = 21.79; Fuel = "Petrol"; Trans = @("Manual", "AMT"); Seg = "Micro SUV" },
        @{ Model = "Invicto"; Trims = @("Zeta+", "Alpha+"); Engine = 1987; HP = 186; Torque = 206; BasePrice = 2500000; Mileage = 23.24; Fuel = "Hybrid"; Trans = @("e-CVT"); Seg = "MUV" },
        @{ Model = "Alto K10"; Trims = @("Std", "LXi", "VXi", "VXi+"); Engine = 998; HP = 67; Torque = 89; BasePrice = 399000; Mileage = 24.39; Fuel = "Petrol"; Trans = @("Manual", "AMT"); Seg = "Hatchback" }
    );
    "Hyundai" = @(
        @{ Model = "Creta"; Trims = @("E", "EX", "S", "SX", "SX Tech", "SX(O)"); Engine = 1497; HP = 115; Torque = 144; BasePrice = 1100000; Mileage = 17.4; Fuel = @("Petrol","Diesel"); Trans = @("Manual", "iVT", "Automatic"); Seg = "SUV" },
        @{ Model = "Venue"; Trims = @("E", "S", "S(O)", "SX", "SX(O)"); Engine = 1197; HP = 83; Torque = 114; BasePrice = 794000; Mileage = 17.5; Fuel = "Petrol"; Trans = @("Manual", "DCT"); Seg = "SUV" },
        @{ Model = "Exter"; Trims = @("EX", "S", "SX", "SX(O)"); Engine = 1197; HP = 83; Torque = 114; BasePrice = 613000; Mileage = 19.4; Fuel = "Petrol"; Trans = @("Manual", "AMT"); Seg = "Micro SUV" },
        @{ Model = "Verna"; Trims = @("EX", "S", "SX", "SX(O)"); Engine = 1497; HP = 115; Torque = 144; BasePrice = 1100000; Mileage = 18.6; Fuel = "Petrol"; Trans = @("Manual", "iVT"); Seg = "Sedan" }
    );
    "Toyota" = @(
        @{ Model = "Glanza"; Trims = @("E", "S", "G", "V"); Engine = 1197; HP = 90; Torque = 113; BasePrice = 681000; Mileage = 22.35; Fuel = "Petrol"; Trans = @("Manual", "AMT"); Seg = "Hatchback" },
        @{ Model = "Hyryder"; Trims = @("E", "S", "G", "V"); Engine = 1462; HP = 103; Torque = 137; BasePrice = 1114000; Mileage = 21.12; Fuel = @("Petrol","Hybrid"); Trans = @("Manual", "Automatic"); Seg = "SUV" },
        @{ Model = "Innova Hycross"; Trims = @("GX", "VX", "ZX"); Engine = 1987; HP = 186; Torque = 206; BasePrice = 1977000; Mileage = 23.24; Fuel = "Hybrid"; Trans = @("e-CVT"); Seg = "MUV" },
        @{ Model = "Fortuner"; Trims = @("Standard", "Legender", "GR-S"); Engine = 2755; HP = 204; Torque = 500; BasePrice = 3343000; Mileage = 14.4; Fuel = @("Petrol","Diesel"); Trans = @("Manual", "Automatic"); Seg = "SUV" }
    );
    "Tata" = @(
        @{ Model = "Nexon"; Trims = @("Smart", "Pure", "Creative", "Fearless"); Engine = 1199; HP = 120; Torque = 170; BasePrice = 815000; Mileage = 17.44; Fuel = @("Petrol","Diesel"); Trans = @("Manual", "AMT", "DCA"); Seg = "SUV" },
        @{ Model = "Harrier"; Trims = @("Smart", "Pure", "Adventure", "Fearless"); Engine = 1956; HP = 170; Torque = 350; BasePrice = 1549000; Mileage = 16.8; Fuel = "Diesel"; Trans = @("Manual", "Automatic"); Seg = "SUV" },
        @{ Model = "Safari"; Trims = @("Smart", "Pure", "Adventure", "Accomplished"); Engine = 1956; HP = 170; Torque = 350; BasePrice = 1619000; Mileage = 16.3; Fuel = "Diesel"; Trans = @("Manual", "Automatic"); Seg = "SUV" },
        @{ Model = "Punch"; Trims = @("Pure", "Adventure", "Accomplished", "Creative"); Engine = 1199; HP = 88; Torque = 115; BasePrice = 612000; Mileage = 20.09; Fuel = @("Petrol","CNG"); Trans = @("Manual", "AMT"); Seg = "Micro SUV" },
        @{ Model = "Altroz"; Trims = @("XE", "XM", "XT", "XZ", "XZ+"); Engine = 1199; HP = 88; Torque = 115; BasePrice = 665000; Mileage = 19.33; Fuel = "Petrol"; Trans = @("Manual", "DCA"); Seg = "Hatchback" },
        @{ Model = "Tiago"; Trims = @("XE", "XM", "XT", "XZ", "XZ+"); Engine = 1199; HP = 86; Torque = 113; BasePrice = 565000; Mileage = 19.01; Fuel = "Petrol"; Trans = @("Manual", "AMT"); Seg = "Hatchback" }
    );
    "Mahindra" = @(
        @{ Model = "XUV700"; Trims = @("MX", "AX3", "AX5", "AX7", "AX7L"); Engine = 1999; HP = 200; Torque = 380; BasePrice = 1399000; Mileage = 15.0; Fuel = @("Petrol","Diesel"); Trans = @("Manual", "Automatic"); Seg = "SUV" },
        @{ Model = "Scorpio-N"; Trims = @("Z2", "Z4", "Z6", "Z8", "Z8L"); Engine = 2198; HP = 175; Torque = 400; BasePrice = 1385000; Mileage = 16.2; Fuel = @("Petrol","Diesel"); Trans = @("Manual", "Automatic"); Seg = "SUV" },
        @{ Model = "Thar"; Trims = @("AX Opt", "LX"); Engine = 2184; HP = 130; Torque = 300; BasePrice = 1125000; Mileage = 15.2; Fuel = @("Petrol","Diesel"); Trans = @("Manual", "Automatic"); Seg = "SUV" },
        @{ Model = "Bolero Neo"; Trims = @("N4", "N8", "N10", "N10(O)"); Engine = 1493; HP = 100; Torque = 260; BasePrice = 990000; Mileage = 17.29; Fuel = "Diesel"; Trans = @("Manual"); Seg = "SUV" }
    );
    "Volkswagen" = @(
        @{ Model = "Taigun"; Trims = @("Comfortline", "Highline", "Topline", "GT Plus"); Engine = 999; HP = 115; Torque = 178; BasePrice = 1170000; Mileage = 19.87; Fuel = "Petrol"; Trans = @("Manual", "Automatic"); Seg = "SUV" },
        @{ Model = "Virtus"; Trims = @("Comfortline", "Highline", "Topline", "GT Plus"); Engine = 999; HP = 115; Torque = 178; BasePrice = 1156000; Mileage = 20.8; Fuel = "Petrol"; Trans = @("Manual", "Automatic"); Seg = "Sedan" }
    );
    "Skoda" = @(
        @{ Model = "Kushaq"; Trims = @("Active", "Ambition", "Style", "Monte Carlo"); Engine = 999; HP = 115; Torque = 178; BasePrice = 1189000; Mileage = 19.65; Fuel = "Petrol"; Trans = @("Manual", "Automatic"); Seg = "SUV" },
        @{ Model = "Slavia"; Trims = @("Active", "Ambition", "Style", "Matte Edition"); Engine = 999; HP = 115; Torque = 178; BasePrice = 1148000; Mileage = 20.32; Fuel = "Petrol"; Trans = @("Manual", "Automatic"); Seg = "Sedan" }
    );
    "MG" = @(
        @{ Model = "Hector"; Trims = @("Style", "Shine", "Smart", "Sharp", "Savvy Pro"); Engine = 1451; HP = 143; Torque = 250; BasePrice = 1399000; Mileage = 13.79; Fuel = @("Petrol","Diesel"); Trans = @("Manual", "CVT"); Seg = "SUV" },
        @{ Model = "Astor"; Trims = @("Sprint", "Shine", "Select", "Sharp Pro", "Savvy Pro"); Engine = 1498; HP = 110; Torque = 144; BasePrice = 998000; Mileage = 15.4; Fuel = "Petrol"; Trans = @("Manual", "CVT"); Seg = "SUV" },
        @{ Model = "Comet EV"; Trims = @("Pace", "Play", "Plush"); Engine = 0; HP = 42; Torque = 110; BasePrice = 699000; Mileage = 230; Fuel = "Electric"; Trans = @("Automatic"); Seg = "Hatchback" }
    );
    "BMW" = @(
        @{ Model = "3 Series"; Trims = @("330Li M Sport"); Engine = 1998; HP = 258; Torque = 400; BasePrice = 6060000; Mileage = 15.39; Fuel = "Petrol"; Trans = @("Automatic"); Seg = "Sedan" },
        @{ Model = "X1"; Trims = @("sDrive18i xLine", "sDrive18d M Sport"); Engine = 1499; HP = 136; Torque = 230; BasePrice = 4950000; Mileage = 16.35; Fuel = @("Petrol","Diesel"); Trans = @("Automatic"); Seg = "SUV" }
    );
    "Mercedes-Benz" = @(
        @{ Model = "C-Class"; Trims = @("200", "220d", "300d"); Engine = 1496; HP = 204; Torque = 300; BasePrice = 6185000; Mileage = 17.5; Fuel = @("Petrol","Diesel"); Trans = @("Automatic"); Seg = "Sedan" },
        @{ Model = "GLA"; Trims = @("200", "220d 4MATIC"); Engine = 1332; HP = 163; Torque = 250; BasePrice = 5175000; Mileage = 17.4; Fuel = @("Petrol","Diesel"); Trans = @("Automatic"); Seg = "SUV" }
    );
    "Audi" = @(
        @{ Model = "A4"; Trims = @("Premium", "Premium Plus", "Technology"); Engine = 1984; HP = 190; Torque = 320; BasePrice = 4602000; Mileage = 17.42; Fuel = "Petrol"; Trans = @("Automatic"); Seg = "Sedan" },
        @{ Model = "Q3"; Trims = @("Premium", "Premium Plus", "Technology"); Engine = 1984; HP = 190; Torque = 320; BasePrice = 4425000; Mileage = 14.93; Fuel = "Petrol"; Trans = @("Automatic"); Seg = "SUV" }
    );
    "Kia" = @(
        @{ Model = "Seltos"; Trims = @("HTE", "HTK", "HTX", "GTX+", "X-Line"); Engine = 1497; HP = 115; Torque = 144; BasePrice = 1090000; Mileage = 17.7; Fuel = @("Petrol","Diesel"); Trans = @("Manual", "iMT", "IVT", "DCT"); Seg = "SUV" },
        @{ Model = "Sonet"; Trims = @("HTE", "HTK", "HTX", "GTX+", "X-Line"); Engine = 1197; HP = 83; Torque = 115; BasePrice = 799000; Mileage = 18.8; Fuel = @("Petrol","Diesel"); Trans = @("Manual", "iMT", "DCT"); Seg = "SUV" }
    );
    "Honda" = @(
        @{ Model = "City"; Trims = @("SV", "V", "VX", "ZX"); Engine = 1498; HP = 121; Torque = 145; BasePrice = 1182000; Mileage = 18.4; Fuel = @("Petrol","Hybrid"); Trans = @("Manual", "CVT"); Seg = "Sedan" },
        @{ Model = "Elevate"; Trims = @("SV", "V", "VX", "ZX"); Engine = 1498; HP = 121; Torque = 145; BasePrice = 1169000; Mileage = 16.92; Fuel = "Petrol"; Trans = @("Manual", "CVT"); Seg = "SUV" },
        @{ Model = "Amaze"; Trims = @("E", "S", "VX"); Engine = 1199; HP = 89; Torque = 110; BasePrice = 716000; Mileage = 18.6; Fuel = "Petrol"; Trans = @("Manual", "CVT"); Seg = "Sedan" }
    );
    "Nissan" = @(
        @{ Model = "Magnite"; Trims = @("XE", "XL", "XV", "XV Premium"); Engine = 999; HP = 72; Torque = 96; BasePrice = 599000; Mileage = 19.35; Fuel = "Petrol"; Trans = @("Manual", "AMT", "CVT"); Seg = "SUV" }
    );
    "Renault" = @(
        @{ Model = "Kwid"; Trims = @("RXE", "RXL", "RXT", "Climber"); Engine = 999; HP = 68; Torque = 91; BasePrice = 469000; Mileage = 22.3; Fuel = "Petrol"; Trans = @("Manual", "AMT"); Seg = "Hatchback" },
        @{ Model = "Kiger"; Trims = @("RXE", "RXL", "RXT", "RXZ"); Engine = 999; HP = 72; Torque = 96; BasePrice = 599000; Mileage = 20.5; Fuel = "Petrol"; Trans = @("Manual", "AMT", "CVT"); Seg = "SUV" }
    );
}

$header = "Car_ID,Brand,Model,Variant,Year,Fuel_Type,Transmission,Price,Mileage,Engine_CC,Seating_Capacity,Service_Cost,Horsepower,Torque,Fuel_Efficiency_Class,Segment"
$rows = @($header)
$id = 1

foreach ($brandName in $brands.Keys) {
    foreach ($m in $brands[$brandName]) {
        # Normalize Fuel to Array
        $fuels = $m.Fuel
        if ($fuels -isnot [Array]) { $fuels = @($fuels) }

        foreach ($f in $fuels) {
            foreach ($trim in $m.Trims) {
                foreach ($trans in $m.Trans) {
                    $trimIdx = [array]::IndexOf($m.Trims, $trim)
                    $premiumFactor = 1.0
                    if ($brandName -eq "BMW" -or $brandName -eq "Mercedes-Benz" -or $brandName -eq "Audi") { $premiumFactor = 3.0 }

                    $trimPremium = ($trimIdx / $m.Trims.Count) * 400000 * $premiumFactor
                    $fuelPremium = 0
                    if ($f -eq "Diesel") { $fuelPremium = 120000 }
                    elseif ($f -eq "Hybrid") { $fuelPremium = 250000 }
                    
                    $transPremium = 0
                    if ($trans -ne "Manual") { $transPremium = 150000 * $premiumFactor }
                    
                    $finalPrice = $m.BasePrice + $trimPremium + $transPremium + $fuelPremium
                    
                    $year = 2024
                    $mileage = $m.Mileage
                    if ($trans -ne "Manual" -and $f -ne "Electric") { $mileage -= 1.0 }
                    if ($f -eq "Diesel") { $mileage += 2.0 } 
                    
                    $seats = 5
                    if ($m.Seg -eq "MUV") { $seats = 7 }
                    if ($m.Model -eq "Fortuner" -or $m.Model -eq "XUV700" -or $m.Model -eq "Safari" -or $m.Model -eq "Q7" -or $m.Model -eq "GLE" -or $m.Model -eq "Hector" -or $m.Model -eq "Ertiga" -or $m.Model -eq "Invicto") { $seats = 7 }
                    
                    $service = $finalPrice * 0.007
                    if ($f -eq "Diesel") { $service *= 1.2 } 
                    
                    $hp = $m.HP
                    $torque = $m.Torque
                    if ($f -eq "Diesel") { $hp += 5; $torque += 50 } 

                    $effClass = "Medium"
                    if ($f -eq "Hybrid" -or $f -eq "Electric" -or $mileage -gt 22) { $effClass = "High" }
                    elseif ($mileage -lt 13 -and $f -ne "Electric") { $effClass = "Low" }

                    $rows += [string]::Format("{0},{1},{2},{3},{4},{5},{6},{7},{8},{9},{10},{11},{12},{13},{14},{15}", 
                        $id, $brandName, $m.Model, $trim, $year, $f, $trans, [Math]::Round($finalPrice), [Math]::Round($mileage, 2), $m.Engine, $seats, [Math]::Round($service), $hp, $torque, $effClass, $m.Seg)
                    $id++
                }
            }
        }
    }
}

$rows | Out-File "c:\CAR ENTHUSIAST\car_dataset_india.csv" -Encoding UTF8
$rows | Out-File "c:\CAR ENTHUSIAST\indian_cars_1000_dataset.csv" -Encoding UTF8
