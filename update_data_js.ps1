# update_data_js.ps1
$csvPath = "c:\CAR ENTHUSIAST\indian_cars_1000_dataset.csv"
$jsPath = "c:\CAR ENTHUSIAST\data.js"
$csv = Get-Content $csvPath -Raw
$data = "const rawCsvData = ``$($csv -replace '`','\`')``;"
Set-Content -Path $jsPath -Value $data -NoNewline -Encoding UTF8
