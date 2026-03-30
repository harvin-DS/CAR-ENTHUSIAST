const rawCsvData = `Car_ID,Brand,Model,Variant,Year,Fuel_Type,Transmission,Price,Mileage,Engine_CC,Seating_Capacity,Service_Cost,Horsepower,Torque,Fuel_Efficiency_Class,Segment
1,Mahindra,XUV700,MX,2024,Petrol,Manual,1399000,15,1999,7,9793,200,380,Medium,SUV
2,Mahindra,XUV700,MX,2024,Petrol,Automatic,1549000,14,1999,7,10843,200,380,Medium,SUV
3,Mahindra,XUV700,AX3,2024,Petrol,Manual,1479000,15,1999,7,10353,200,380,Medium,SUV
4,Mahindra,XUV700,AX3,2024,Petrol,Automatic,1629000,14,1999,7,11403,200,380,Medium,SUV
5,Mahindra,XUV700,AX5,2024,Petrol,Manual,1559000,15,1999,7,10913,200,380,Medium,SUV
6,Mahindra,XUV700,AX5,2024,Petrol,Automatic,1709000,14,1999,7,11963,200,380,Medium,SUV
7,Mahindra,XUV700,AX7,2024,Petrol,Manual,1639000,15,1999,7,11473,200,380,Medium,SUV
8,Mahindra,XUV700,AX7,2024,Petrol,Automatic,1789000,14,1999,7,12523,200,380,Medium,SUV
9,Mahindra,XUV700,AX7L,2024,Petrol,Manual,1719000,15,1999,7,12033,200,380,Medium,SUV
10,Mahindra,XUV700,AX7L,2024,Petrol,Automatic,1869000,14,1999,7,13083,200,380,Medium,SUV
11,Mahindra,XUV700,MX,2024,Diesel,Manual,1519000,17,1999,7,12760,205,430,Medium,SUV
12,Mahindra,XUV700,MX,2024,Diesel,Automatic,1669000,16,1999,7,14020,205,430,Medium,SUV
13,Mahindra,XUV700,AX3,2024,Diesel,Manual,1599000,17,1999,7,13432,205,430,Medium,SUV
14,Mahindra,XUV700,AX3,2024,Diesel,Automatic,1749000,16,1999,7,14692,205,430,Medium,SUV
15,Mahindra,XUV700,AX5,2024,Diesel,Manual,1679000,17,1999,7,14104,205,430,Medium,SUV
16,Mahindra,XUV700,AX5,2024,Diesel,Automatic,1829000,16,1999,7,15364,205,430,Medium,SUV
17,Mahindra,XUV700,AX7,2024,Diesel,Manual,1759000,17,1999,7,14776,205,430,Medium,SUV
18,Mahindra,XUV700,AX7,2024,Diesel,Automatic,1909000,16,1999,7,16036,205,430,Medium,SUV
19,Mahindra,XUV700,AX7L,2024,Diesel,Manual,1839000,17,1999,7,15448,205,430,Medium,SUV
20,Mahindra,XUV700,AX7L,2024,Diesel,Automatic,1989000,16,1999,7,16708,205,430,Medium,SUV
21,Mahindra,Scorpio-N,Z2,2024,Petrol,Manual,1385000,16.2,2198,5,9695,175,400,Medium,SUV
22,Mahindra,Scorpio-N,Z2,2024,Petrol,Automatic,1535000,15.2,2198,5,10745,175,400,Medium,SUV
23,Mahindra,Scorpio-N,Z4,2024,Petrol,Manual,1465000,16.2,2198,5,10255,175,400,Medium,SUV
24,Mahindra,Scorpio-N,Z4,2024,Petrol,Automatic,1615000,15.2,2198,5,11305,175,400,Medium,SUV
25,Mahindra,Scorpio-N,Z6,2024,Petrol,Manual,1545000,16.2,2198,5,10815,175,400,Medium,SUV
26,Mahindra,Scorpio-N,Z6,2024,Petrol,Automatic,1695000,15.2,2198,5,11865,175,400,Medium,SUV
27,Mahindra,Scorpio-N,Z8,2024,Petrol,Manual,1625000,16.2,2198,5,11375,175,400,Medium,SUV
28,Mahindra,Scorpio-N,Z8,2024,Petrol,Automatic,1775000,15.2,2198,5,12425,175,400,Medium,SUV
29,Mahindra,Scorpio-N,Z8L,2024,Petrol,Manual,1705000,16.2,2198,5,11935,175,400,Medium,SUV
30,Mahindra,Scorpio-N,Z8L,2024,Petrol,Automatic,1855000,15.2,2198,5,12985,175,400,Medium,SUV
31,Mahindra,Scorpio-N,Z2,2024,Diesel,Manual,1505000,18.2,2198,5,12642,180,450,Medium,SUV
32,Mahindra,Scorpio-N,Z2,2024,Diesel,Automatic,1655000,17.2,2198,5,13902,180,450,Medium,SUV
33,Mahindra,Scorpio-N,Z4,2024,Diesel,Manual,1585000,18.2,2198,5,13314,180,450,Medium,SUV
34,Mahindra,Scorpio-N,Z4,2024,Diesel,Automatic,1735000,17.2,2198,5,14574,180,450,Medium,SUV
35,Mahindra,Scorpio-N,Z6,2024,Diesel,Manual,1665000,18.2,2198,5,13986,180,450,Medium,SUV
36,Mahindra,Scorpio-N,Z6,2024,Diesel,Automatic,1815000,17.2,2198,5,15246,180,450,Medium,SUV
37,Mahindra,Scorpio-N,Z8,2024,Diesel,Manual,1745000,18.2,2198,5,14658,180,450,Medium,SUV
38,Mahindra,Scorpio-N,Z8,2024,Diesel,Automatic,1895000,17.2,2198,5,15918,180,450,Medium,SUV
39,Mahindra,Scorpio-N,Z8L,2024,Diesel,Manual,1825000,18.2,2198,5,15330,180,450,Medium,SUV
40,Mahindra,Scorpio-N,Z8L,2024,Diesel,Automatic,1975000,17.2,2198,5,16590,180,450,Medium,SUV
41,Mahindra,Thar,AX Opt,2024,Petrol,Manual,1125000,15.2,2184,5,7875,130,300,Medium,SUV
42,Mahindra,Thar,AX Opt,2024,Petrol,Automatic,1275000,14.2,2184,5,8925,130,300,Medium,SUV
43,Mahindra,Thar,LX,2024,Petrol,Manual,1325000,15.2,2184,5,9275,130,300,Medium,SUV
44,Mahindra,Thar,LX,2024,Petrol,Automatic,1475000,14.2,2184,5,10325,130,300,Medium,SUV
45,Mahindra,Thar,AX Opt,2024,Diesel,Manual,1245000,17.2,2184,5,10458,135,350,Medium,SUV
46,Mahindra,Thar,AX Opt,2024,Diesel,Automatic,1395000,16.2,2184,5,11718,135,350,Medium,SUV
47,Mahindra,Thar,LX,2024,Diesel,Manual,1445000,17.2,2184,5,12138,135,350,Medium,SUV
48,Mahindra,Thar,LX,2024,Diesel,Automatic,1595000,16.2,2184,5,13398,135,350,Medium,SUV
49,Mahindra,Bolero Neo,N4,2024,Diesel,Manual,1110000,19.29,1493,5,9324,105,310,Medium,SUV
50,Mahindra,Bolero Neo,N8,2024,Diesel,Manual,1210000,19.29,1493,5,10164,105,310,Medium,SUV
51,Mahindra,Bolero Neo,N10,2024,Diesel,Manual,1310000,19.29,1493,5,11004,105,310,Medium,SUV
52,Mahindra,Bolero Neo,N10(O),2024,Diesel,Manual,1410000,19.29,1493,5,11844,105,310,Medium,SUV
53,Nissan,Magnite,XE,2024,Petrol,Manual,599000,19.35,999,5,4193,72,96,Medium,SUV
54,Nissan,Magnite,XE,2024,Petrol,AMT,749000,18.35,999,5,5243,72,96,Medium,SUV
55,Nissan,Magnite,XE,2024,Petrol,CVT,749000,18.35,999,5,5243,72,96,Medium,SUV
56,Nissan,Magnite,XL,2024,Petrol,Manual,699000,19.35,999,5,4893,72,96,Medium,SUV
57,Nissan,Magnite,XL,2024,Petrol,AMT,849000,18.35,999,5,5943,72,96,Medium,SUV
58,Nissan,Magnite,XL,2024,Petrol,CVT,849000,18.35,999,5,5943,72,96,Medium,SUV
59,Nissan,Magnite,XV,2024,Petrol,Manual,799000,19.35,999,5,5593,72,96,Medium,SUV
60,Nissan,Magnite,XV,2024,Petrol,AMT,949000,18.35,999,5,6643,72,96,Medium,SUV
61,Nissan,Magnite,XV,2024,Petrol,CVT,949000,18.35,999,5,6643,72,96,Medium,SUV
62,Nissan,Magnite,XV Premium,2024,Petrol,Manual,899000,19.35,999,5,6293,72,96,Medium,SUV
63,Nissan,Magnite,XV Premium,2024,Petrol,AMT,1049000,18.35,999,5,7343,72,96,Medium,SUV
64,Nissan,Magnite,XV Premium,2024,Petrol,CVT,1049000,18.35,999,5,7343,72,96,Medium,SUV
65,Maruti Suzuki,Swift,LXi,2024,Petrol,Manual,649000,24.8,1197,5,4543,82,112,High,Hatchback
66,Maruti Suzuki,Swift,LXi,2024,Petrol,AMT,799000,23.8,1197,5,5593,82,112,High,Hatchback
67,Maruti Suzuki,Swift,VXi,2024,Petrol,Manual,749000,24.8,1197,5,5243,82,112,High,Hatchback
68,Maruti Suzuki,Swift,VXi,2024,Petrol,AMT,899000,23.8,1197,5,6293,82,112,High,Hatchback
69,Maruti Suzuki,Swift,ZXi,2024,Petrol,Manual,849000,24.8,1197,5,5943,82,112,High,Hatchback
70,Maruti Suzuki,Swift,ZXi,2024,Petrol,AMT,999000,23.8,1197,5,6993,82,112,High,Hatchback
71,Maruti Suzuki,Swift,ZXi+,2024,Petrol,Manual,949000,24.8,1197,5,6643,82,112,High,Hatchback
72,Maruti Suzuki,Swift,ZXi+,2024,Petrol,AMT,1099000,23.8,1197,5,7693,82,112,High,Hatchback
73,Maruti Suzuki,Baleno,Sigma,2024,Petrol,Manual,666000,22.35,1197,5,4662,90,113,High,Hatchback
74,Maruti Suzuki,Baleno,Sigma,2024,Petrol,AMT,816000,21.35,1197,5,5712,90,113,Medium,Hatchback
75,Maruti Suzuki,Baleno,Delta,2024,Petrol,Manual,766000,22.35,1197,5,5362,90,113,High,Hatchback
76,Maruti Suzuki,Baleno,Delta,2024,Petrol,AMT,916000,21.35,1197,5,6412,90,113,Medium,Hatchback
77,Maruti Suzuki,Baleno,Zeta,2024,Petrol,Manual,866000,22.35,1197,5,6062,90,113,High,Hatchback
78,Maruti Suzuki,Baleno,Zeta,2024,Petrol,AMT,1016000,21.35,1197,5,7112,90,113,Medium,Hatchback
79,Maruti Suzuki,Baleno,Alpha,2024,Petrol,Manual,966000,22.35,1197,5,6762,90,113,High,Hatchback
80,Maruti Suzuki,Baleno,Alpha,2024,Petrol,AMT,1116000,21.35,1197,5,7812,90,113,Medium,Hatchback
81,Maruti Suzuki,Brezza,LXi,2024,Petrol,Manual,834500,17.38,1462,5,5842,103,137,Medium,SUV
82,Maruti Suzuki,Brezza,LXi,2024,Petrol,Automatic,984500,16.38,1462,5,6892,103,137,Medium,SUV
83,Maruti Suzuki,Brezza,VXi,2024,Petrol,Manual,934500,17.38,1462,5,6542,103,137,Medium,SUV
84,Maruti Suzuki,Brezza,VXi,2024,Petrol,Automatic,1084500,16.38,1462,5,7592,103,137,Medium,SUV
85,Maruti Suzuki,Brezza,ZXi,2024,Petrol,Manual,1034500,17.38,1462,5,7242,103,137,Medium,SUV
86,Maruti Suzuki,Brezza,ZXi,2024,Petrol,Automatic,1184500,16.38,1462,5,8292,103,137,Medium,SUV
87,Maruti Suzuki,Brezza,ZXi+,2024,Petrol,Manual,1134500,17.38,1462,5,7942,103,137,Medium,SUV
88,Maruti Suzuki,Brezza,ZXi+,2024,Petrol,Automatic,1284500,16.38,1462,5,8992,103,137,Medium,SUV
89,Maruti Suzuki,Grand Vitara,Sigma,2024,Petrol,Manual,1080000,21.11,1462,5,7560,103,137,Medium,SUV
90,Maruti Suzuki,Grand Vitara,Sigma,2024,Petrol,Automatic,1230000,20.11,1462,5,8610,103,137,Medium,SUV
91,Maruti Suzuki,Grand Vitara,Delta,2024,Petrol,Manual,1180000,21.11,1462,5,8260,103,137,Medium,SUV
92,Maruti Suzuki,Grand Vitara,Delta,2024,Petrol,Automatic,1330000,20.11,1462,5,9310,103,137,Medium,SUV
93,Maruti Suzuki,Grand Vitara,Zeta,2024,Petrol,Manual,1280000,21.11,1462,5,8960,103,137,Medium,SUV
94,Maruti Suzuki,Grand Vitara,Zeta,2024,Petrol,Automatic,1430000,20.11,1462,5,10010,103,137,Medium,SUV
95,Maruti Suzuki,Grand Vitara,Alpha,2024,Petrol,Manual,1380000,21.11,1462,5,9660,103,137,Medium,SUV
96,Maruti Suzuki,Grand Vitara,Alpha,2024,Petrol,Automatic,1530000,20.11,1462,5,10710,103,137,Medium,SUV
97,Maruti Suzuki,Grand Vitara Hybrid,Zeta+,2024,Hybrid,e-CVT,2230000,26.97,1490,5,15610,116,141,High,SUV
98,Maruti Suzuki,Grand Vitara Hybrid,Alpha+,2024,Hybrid,e-CVT,2430000,26.97,1490,5,17010,116,141,High,SUV
99,Maruti Suzuki,Ertiga,LXi,2024,Petrol,Manual,869000,20.51,1462,7,6083,103,137,Medium,MUV
100,Maruti Suzuki,Ertiga,LXi,2024,Petrol,Automatic,1019000,19.51,1462,7,7133,103,137,Medium,MUV
101,Maruti Suzuki,Ertiga,VXi,2024,Petrol,Manual,969000,20.51,1462,7,6783,103,137,Medium,MUV
102,Maruti Suzuki,Ertiga,VXi,2024,Petrol,Automatic,1119000,19.51,1462,7,7833,103,137,Medium,MUV
103,Maruti Suzuki,Ertiga,ZXi,2024,Petrol,Manual,1069000,20.51,1462,7,7483,103,137,Medium,MUV
104,Maruti Suzuki,Ertiga,ZXi,2024,Petrol,Automatic,1219000,19.51,1462,7,8533,103,137,Medium,MUV
105,Maruti Suzuki,Ertiga,ZXi+,2024,Petrol,Manual,1169000,20.51,1462,7,8183,103,137,Medium,MUV
106,Maruti Suzuki,Ertiga,ZXi+,2024,Petrol,Automatic,1319000,19.51,1462,7,9233,103,137,Medium,MUV
107,Maruti Suzuki,Fronx,Sigma,2024,Petrol,Manual,751000,21.79,1197,5,5257,90,113,Medium,Micro SUV
108,Maruti Suzuki,Fronx,Sigma,2024,Petrol,AMT,901000,20.79,1197,5,6307,90,113,Medium,Micro SUV
109,Maruti Suzuki,Fronx,Delta,2024,Petrol,Manual,851000,21.79,1197,5,5957,90,113,Medium,Micro SUV
110,Maruti Suzuki,Fronx,Delta,2024,Petrol,AMT,1001000,20.79,1197,5,7007,90,113,Medium,Micro SUV
111,Maruti Suzuki,Fronx,Zeta,2024,Petrol,Manual,951000,21.79,1197,5,6657,90,113,Medium,Micro SUV
112,Maruti Suzuki,Fronx,Zeta,2024,Petrol,AMT,1101000,20.79,1197,5,7707,90,113,Medium,Micro SUV
113,Maruti Suzuki,Fronx,Alpha,2024,Petrol,Manual,1051000,21.79,1197,5,7357,90,113,Medium,Micro SUV
114,Maruti Suzuki,Fronx,Alpha,2024,Petrol,AMT,1201000,20.79,1197,5,8407,90,113,Medium,Micro SUV
115,Maruti Suzuki,Invicto,Zeta+,2024,Hybrid,e-CVT,2900000,22.24,1987,7,20300,186,206,High,MUV
116,Maruti Suzuki,Invicto,Alpha+,2024,Hybrid,e-CVT,3100000,22.24,1987,7,21700,186,206,High,MUV
117,Maruti Suzuki,Alto K10,Std,2024,Petrol,Manual,399000,24.39,998,5,2793,67,89,High,Hatchback
118,Maruti Suzuki,Alto K10,Std,2024,Petrol,AMT,549000,23.39,998,5,3843,67,89,High,Hatchback
119,Maruti Suzuki,Alto K10,LXi,2024,Petrol,Manual,499000,24.39,998,5,3493,67,89,High,Hatchback
120,Maruti Suzuki,Alto K10,LXi,2024,Petrol,AMT,649000,23.39,998,5,4543,67,89,High,Hatchback
121,Maruti Suzuki,Alto K10,VXi,2024,Petrol,Manual,599000,24.39,998,5,4193,67,89,High,Hatchback
122,Maruti Suzuki,Alto K10,VXi,2024,Petrol,AMT,749000,23.39,998,5,5243,67,89,High,Hatchback
123,Maruti Suzuki,Alto K10,VXi+,2024,Petrol,Manual,699000,24.39,998,5,4893,67,89,High,Hatchback
124,Maruti Suzuki,Alto K10,VXi+,2024,Petrol,AMT,849000,23.39,998,5,5943,67,89,High,Hatchback
125,Hyundai,Creta,E,2024,Petrol,Manual,1100000,17.4,1497,5,7700,115,144,Medium,SUV
126,Hyundai,Creta,E,2024,Petrol,iVT,1250000,16.4,1497,5,8750,115,144,Medium,SUV
127,Hyundai,Creta,E,2024,Petrol,Automatic,1250000,16.4,1497,5,8750,115,144,Medium,SUV
128,Hyundai,Creta,EX,2024,Petrol,Manual,1166667,17.4,1497,5,8167,115,144,Medium,SUV
129,Hyundai,Creta,EX,2024,Petrol,iVT,1316667,16.4,1497,5,9217,115,144,Medium,SUV
130,Hyundai,Creta,EX,2024,Petrol,Automatic,1316667,16.4,1497,5,9217,115,144,Medium,SUV
131,Hyundai,Creta,S,2024,Petrol,Manual,1233333,17.4,1497,5,8633,115,144,Medium,SUV
132,Hyundai,Creta,S,2024,Petrol,iVT,1383333,16.4,1497,5,9683,115,144,Medium,SUV
133,Hyundai,Creta,S,2024,Petrol,Automatic,1383333,16.4,1497,5,9683,115,144,Medium,SUV
134,Hyundai,Creta,SX,2024,Petrol,Manual,1300000,17.4,1497,5,9100,115,144,Medium,SUV
135,Hyundai,Creta,SX,2024,Petrol,iVT,1450000,16.4,1497,5,10150,115,144,Medium,SUV
136,Hyundai,Creta,SX,2024,Petrol,Automatic,1450000,16.4,1497,5,10150,115,144,Medium,SUV
137,Hyundai,Creta,SX Tech,2024,Petrol,Manual,1366667,17.4,1497,5,9567,115,144,Medium,SUV
138,Hyundai,Creta,SX Tech,2024,Petrol,iVT,1516667,16.4,1497,5,10617,115,144,Medium,SUV
139,Hyundai,Creta,SX Tech,2024,Petrol,Automatic,1516667,16.4,1497,5,10617,115,144,Medium,SUV
140,Hyundai,Creta,SX(O),2024,Petrol,Manual,1433333,17.4,1497,5,10033,115,144,Medium,SUV
141,Hyundai,Creta,SX(O),2024,Petrol,iVT,1583333,16.4,1497,5,11083,115,144,Medium,SUV
142,Hyundai,Creta,SX(O),2024,Petrol,Automatic,1583333,16.4,1497,5,11083,115,144,Medium,SUV
143,Hyundai,Creta,E,2024,Diesel,Manual,1220000,19.4,1497,5,10248,120,194,Medium,SUV
144,Hyundai,Creta,E,2024,Diesel,iVT,1370000,18.4,1497,5,11508,120,194,Medium,SUV
145,Hyundai,Creta,E,2024,Diesel,Automatic,1370000,18.4,1497,5,11508,120,194,Medium,SUV
146,Hyundai,Creta,EX,2024,Diesel,Manual,1286667,19.4,1497,5,10808,120,194,Medium,SUV
147,Hyundai,Creta,EX,2024,Diesel,iVT,1436667,18.4,1497,5,12068,120,194,Medium,SUV
148,Hyundai,Creta,EX,2024,Diesel,Automatic,1436667,18.4,1497,5,12068,120,194,Medium,SUV
149,Hyundai,Creta,S,2024,Diesel,Manual,1353333,19.4,1497,5,11368,120,194,Medium,SUV
150,Hyundai,Creta,S,2024,Diesel,iVT,1503333,18.4,1497,5,12628,120,194,Medium,SUV
151,Hyundai,Creta,S,2024,Diesel,Automatic,1503333,18.4,1497,5,12628,120,194,Medium,SUV
152,Hyundai,Creta,SX,2024,Diesel,Manual,1420000,19.4,1497,5,11928,120,194,Medium,SUV
153,Hyundai,Creta,SX,2024,Diesel,iVT,1570000,18.4,1497,5,13188,120,194,Medium,SUV
154,Hyundai,Creta,SX,2024,Diesel,Automatic,1570000,18.4,1497,5,13188,120,194,Medium,SUV
155,Hyundai,Creta,SX Tech,2024,Diesel,Manual,1486667,19.4,1497,5,12488,120,194,Medium,SUV
156,Hyundai,Creta,SX Tech,2024,Diesel,iVT,1636667,18.4,1497,5,13748,120,194,Medium,SUV
157,Hyundai,Creta,SX Tech,2024,Diesel,Automatic,1636667,18.4,1497,5,13748,120,194,Medium,SUV
158,Hyundai,Creta,SX(O),2024,Diesel,Manual,1553333,19.4,1497,5,13048,120,194,Medium,SUV
159,Hyundai,Creta,SX(O),2024,Diesel,iVT,1703333,18.4,1497,5,14308,120,194,Medium,SUV
160,Hyundai,Creta,SX(O),2024,Diesel,Automatic,1703333,18.4,1497,5,14308,120,194,Medium,SUV
161,Hyundai,Venue,E,2024,Petrol,Manual,794000,17.5,1197,5,5558,83,114,Medium,SUV
162,Hyundai,Venue,E,2024,Petrol,DCT,944000,16.5,1197,5,6608,83,114,Medium,SUV
163,Hyundai,Venue,S,2024,Petrol,Manual,874000,17.5,1197,5,6118,83,114,Medium,SUV
164,Hyundai,Venue,S,2024,Petrol,DCT,1024000,16.5,1197,5,7168,83,114,Medium,SUV
165,Hyundai,Venue,S(O),2024,Petrol,Manual,954000,17.5,1197,5,6678,83,114,Medium,SUV
166,Hyundai,Venue,S(O),2024,Petrol,DCT,1104000,16.5,1197,5,7728,83,114,Medium,SUV
167,Hyundai,Venue,SX,2024,Petrol,Manual,1034000,17.5,1197,5,7238,83,114,Medium,SUV
168,Hyundai,Venue,SX,2024,Petrol,DCT,1184000,16.5,1197,5,8288,83,114,Medium,SUV
169,Hyundai,Venue,SX(O),2024,Petrol,Manual,1114000,17.5,1197,5,7798,83,114,Medium,SUV
170,Hyundai,Venue,SX(O),2024,Petrol,DCT,1264000,16.5,1197,5,8848,83,114,Medium,SUV
171,Hyundai,Exter,EX,2024,Petrol,Manual,613000,19.4,1197,5,4291,83,114,Medium,Micro SUV
172,Hyundai,Exter,EX,2024,Petrol,AMT,763000,18.4,1197,5,5341,83,114,Medium,Micro SUV
173,Hyundai,Exter,S,2024,Petrol,Manual,713000,19.4,1197,5,4991,83,114,Medium,Micro SUV
174,Hyundai,Exter,S,2024,Petrol,AMT,863000,18.4,1197,5,6041,83,114,Medium,Micro SUV
175,Hyundai,Exter,SX,2024,Petrol,Manual,813000,19.4,1197,5,5691,83,114,Medium,Micro SUV
176,Hyundai,Exter,SX,2024,Petrol,AMT,963000,18.4,1197,5,6741,83,114,Medium,Micro SUV
177,Hyundai,Exter,SX(O),2024,Petrol,Manual,913000,19.4,1197,5,6391,83,114,Medium,Micro SUV
178,Hyundai,Exter,SX(O),2024,Petrol,AMT,1063000,18.4,1197,5,7441,83,114,Medium,Micro SUV
179,Hyundai,Verna,EX,2024,Petrol,Manual,1100000,18.6,1497,5,7700,115,144,Medium,Sedan
180,Hyundai,Verna,EX,2024,Petrol,iVT,1250000,17.6,1497,5,8750,115,144,Medium,Sedan
181,Hyundai,Verna,S,2024,Petrol,Manual,1200000,18.6,1497,5,8400,115,144,Medium,Sedan
182,Hyundai,Verna,S,2024,Petrol,iVT,1350000,17.6,1497,5,9450,115,144,Medium,Sedan
183,Hyundai,Verna,SX,2024,Petrol,Manual,1300000,18.6,1497,5,9100,115,144,Medium,Sedan
184,Hyundai,Verna,SX,2024,Petrol,iVT,1450000,17.6,1497,5,10150,115,144,Medium,Sedan
185,Hyundai,Verna,SX(O),2024,Petrol,Manual,1400000,18.6,1497,5,9800,115,144,Medium,Sedan
186,Hyundai,Verna,SX(O),2024,Petrol,iVT,1550000,17.6,1497,5,10850,115,144,Medium,Sedan
187,Renault,Kwid,RXE,2024,Petrol,Manual,469000,22.3,999,5,3283,68,91,High,Hatchback
188,Renault,Kwid,RXE,2024,Petrol,AMT,619000,21.3,999,5,4333,68,91,Medium,Hatchback
189,Renault,Kwid,RXL,2024,Petrol,Manual,569000,22.3,999,5,3983,68,91,High,Hatchback
190,Renault,Kwid,RXL,2024,Petrol,AMT,719000,21.3,999,5,5033,68,91,Medium,Hatchback
191,Renault,Kwid,RXT,2024,Petrol,Manual,669000,22.3,999,5,4683,68,91,High,Hatchback
192,Renault,Kwid,RXT,2024,Petrol,AMT,819000,21.3,999,5,5733,68,91,Medium,Hatchback
193,Renault,Kwid,Climber,2024,Petrol,Manual,769000,22.3,999,5,5383,68,91,High,Hatchback
194,Renault,Kwid,Climber,2024,Petrol,AMT,919000,21.3,999,5,6433,68,91,Medium,Hatchback
195,Renault,Kiger,RXE,2024,Petrol,Manual,599000,20.5,999,5,4193,72,96,Medium,SUV
196,Renault,Kiger,RXE,2024,Petrol,AMT,749000,19.5,999,5,5243,72,96,Medium,SUV
197,Renault,Kiger,RXE,2024,Petrol,CVT,749000,19.5,999,5,5243,72,96,Medium,SUV
198,Renault,Kiger,RXL,2024,Petrol,Manual,699000,20.5,999,5,4893,72,96,Medium,SUV
199,Renault,Kiger,RXL,2024,Petrol,AMT,849000,19.5,999,5,5943,72,96,Medium,SUV
200,Renault,Kiger,RXL,2024,Petrol,CVT,849000,19.5,999,5,5943,72,96,Medium,SUV
201,Renault,Kiger,RXT,2024,Petrol,Manual,799000,20.5,999,5,5593,72,96,Medium,SUV
202,Renault,Kiger,RXT,2024,Petrol,AMT,949000,19.5,999,5,6643,72,96,Medium,SUV
203,Renault,Kiger,RXT,2024,Petrol,CVT,949000,19.5,999,5,6643,72,96,Medium,SUV
204,Renault,Kiger,RXZ,2024,Petrol,Manual,899000,20.5,999,5,6293,72,96,Medium,SUV
205,Renault,Kiger,RXZ,2024,Petrol,AMT,1049000,19.5,999,5,7343,72,96,Medium,SUV
206,Renault,Kiger,RXZ,2024,Petrol,CVT,1049000,19.5,999,5,7343,72,96,Medium,SUV
207,Kia,Seltos,HTE,2024,Petrol,Manual,1090000,17.7,1497,5,7630,115,144,Medium,SUV
208,Kia,Seltos,HTE,2024,Petrol,iMT,1240000,16.7,1497,5,8680,115,144,Medium,SUV
209,Kia,Seltos,HTE,2024,Petrol,IVT,1240000,16.7,1497,5,8680,115,144,Medium,SUV
210,Kia,Seltos,HTE,2024,Petrol,DCT,1240000,16.7,1497,5,8680,115,144,Medium,SUV
211,Kia,Seltos,HTK,2024,Petrol,Manual,1170000,17.7,1497,5,8190,115,144,Medium,SUV
212,Kia,Seltos,HTK,2024,Petrol,iMT,1320000,16.7,1497,5,9240,115,144,Medium,SUV
213,Kia,Seltos,HTK,2024,Petrol,IVT,1320000,16.7,1497,5,9240,115,144,Medium,SUV
214,Kia,Seltos,HTK,2024,Petrol,DCT,1320000,16.7,1497,5,9240,115,144,Medium,SUV
215,Kia,Seltos,HTX,2024,Petrol,Manual,1250000,17.7,1497,5,8750,115,144,Medium,SUV
216,Kia,Seltos,HTX,2024,Petrol,iMT,1400000,16.7,1497,5,9800,115,144,Medium,SUV
217,Kia,Seltos,HTX,2024,Petrol,IVT,1400000,16.7,1497,5,9800,115,144,Medium,SUV
218,Kia,Seltos,HTX,2024,Petrol,DCT,1400000,16.7,1497,5,9800,115,144,Medium,SUV
219,Kia,Seltos,GTX+,2024,Petrol,Manual,1330000,17.7,1497,5,9310,115,144,Medium,SUV
220,Kia,Seltos,GTX+,2024,Petrol,iMT,1480000,16.7,1497,5,10360,115,144,Medium,SUV
221,Kia,Seltos,GTX+,2024,Petrol,IVT,1480000,16.7,1497,5,10360,115,144,Medium,SUV
222,Kia,Seltos,GTX+,2024,Petrol,DCT,1480000,16.7,1497,5,10360,115,144,Medium,SUV
223,Kia,Seltos,X-Line,2024,Petrol,Manual,1410000,17.7,1497,5,9870,115,144,Medium,SUV
224,Kia,Seltos,X-Line,2024,Petrol,iMT,1560000,16.7,1497,5,10920,115,144,Medium,SUV
225,Kia,Seltos,X-Line,2024,Petrol,IVT,1560000,16.7,1497,5,10920,115,144,Medium,SUV
226,Kia,Seltos,X-Line,2024,Petrol,DCT,1560000,16.7,1497,5,10920,115,144,Medium,SUV
227,Kia,Seltos,HTE,2024,Diesel,Manual,1210000,19.7,1497,5,10164,120,194,Medium,SUV
228,Kia,Seltos,HTE,2024,Diesel,iMT,1360000,18.7,1497,5,11424,120,194,Medium,SUV
229,Kia,Seltos,HTE,2024,Diesel,IVT,1360000,18.7,1497,5,11424,120,194,Medium,SUV
230,Kia,Seltos,HTE,2024,Diesel,DCT,1360000,18.7,1497,5,11424,120,194,Medium,SUV
231,Kia,Seltos,HTK,2024,Diesel,Manual,1290000,19.7,1497,5,10836,120,194,Medium,SUV
232,Kia,Seltos,HTK,2024,Diesel,iMT,1440000,18.7,1497,5,12096,120,194,Medium,SUV
233,Kia,Seltos,HTK,2024,Diesel,IVT,1440000,18.7,1497,5,12096,120,194,Medium,SUV
234,Kia,Seltos,HTK,2024,Diesel,DCT,1440000,18.7,1497,5,12096,120,194,Medium,SUV
235,Kia,Seltos,HTX,2024,Diesel,Manual,1370000,19.7,1497,5,11508,120,194,Medium,SUV
236,Kia,Seltos,HTX,2024,Diesel,iMT,1520000,18.7,1497,5,12768,120,194,Medium,SUV
237,Kia,Seltos,HTX,2024,Diesel,IVT,1520000,18.7,1497,5,12768,120,194,Medium,SUV
238,Kia,Seltos,HTX,2024,Diesel,DCT,1520000,18.7,1497,5,12768,120,194,Medium,SUV
239,Kia,Seltos,GTX+,2024,Diesel,Manual,1450000,19.7,1497,5,12180,120,194,Medium,SUV
240,Kia,Seltos,GTX+,2024,Diesel,iMT,1600000,18.7,1497,5,13440,120,194,Medium,SUV
241,Kia,Seltos,GTX+,2024,Diesel,IVT,1600000,18.7,1497,5,13440,120,194,Medium,SUV
242,Kia,Seltos,GTX+,2024,Diesel,DCT,1600000,18.7,1497,5,13440,120,194,Medium,SUV
243,Kia,Seltos,X-Line,2024,Diesel,Manual,1530000,19.7,1497,5,12852,120,194,Medium,SUV
244,Kia,Seltos,X-Line,2024,Diesel,iMT,1680000,18.7,1497,5,14112,120,194,Medium,SUV
245,Kia,Seltos,X-Line,2024,Diesel,IVT,1680000,18.7,1497,5,14112,120,194,Medium,SUV
246,Kia,Seltos,X-Line,2024,Diesel,DCT,1680000,18.7,1497,5,14112,120,194,Medium,SUV
247,Kia,Sonet,HTE,2024,Petrol,Manual,799000,18.8,1197,5,5593,83,115,Medium,SUV
248,Kia,Sonet,HTE,2024,Petrol,iMT,949000,17.8,1197,5,6643,83,115,Medium,SUV
249,Kia,Sonet,HTE,2024,Petrol,DCT,949000,17.8,1197,5,6643,83,115,Medium,SUV
250,Kia,Sonet,HTK,2024,Petrol,Manual,879000,18.8,1197,5,6153,83,115,Medium,SUV
251,Kia,Sonet,HTK,2024,Petrol,iMT,1029000,17.8,1197,5,7203,83,115,Medium,SUV
252,Kia,Sonet,HTK,2024,Petrol,DCT,1029000,17.8,1197,5,7203,83,115,Medium,SUV
253,Kia,Sonet,HTX,2024,Petrol,Manual,959000,18.8,1197,5,6713,83,115,Medium,SUV
254,Kia,Sonet,HTX,2024,Petrol,iMT,1109000,17.8,1197,5,7763,83,115,Medium,SUV
255,Kia,Sonet,HTX,2024,Petrol,DCT,1109000,17.8,1197,5,7763,83,115,Medium,SUV
256,Kia,Sonet,GTX+,2024,Petrol,Manual,1039000,18.8,1197,5,7273,83,115,Medium,SUV
257,Kia,Sonet,GTX+,2024,Petrol,iMT,1189000,17.8,1197,5,8323,83,115,Medium,SUV
258,Kia,Sonet,GTX+,2024,Petrol,DCT,1189000,17.8,1197,5,8323,83,115,Medium,SUV
259,Kia,Sonet,X-Line,2024,Petrol,Manual,1119000,18.8,1197,5,7833,83,115,Medium,SUV
260,Kia,Sonet,X-Line,2024,Petrol,iMT,1269000,17.8,1197,5,8883,83,115,Medium,SUV
261,Kia,Sonet,X-Line,2024,Petrol,DCT,1269000,17.8,1197,5,8883,83,115,Medium,SUV
262,Kia,Sonet,HTE,2024,Diesel,Manual,919000,20.8,1197,5,7720,88,165,Medium,SUV
263,Kia,Sonet,HTE,2024,Diesel,iMT,1069000,19.8,1197,5,8980,88,165,Medium,SUV
264,Kia,Sonet,HTE,2024,Diesel,DCT,1069000,19.8,1197,5,8980,88,165,Medium,SUV
265,Kia,Sonet,HTK,2024,Diesel,Manual,999000,20.8,1197,5,8392,88,165,Medium,SUV
266,Kia,Sonet,HTK,2024,Diesel,iMT,1149000,19.8,1197,5,9652,88,165,Medium,SUV
267,Kia,Sonet,HTK,2024,Diesel,DCT,1149000,19.8,1197,5,9652,88,165,Medium,SUV
268,Kia,Sonet,HTX,2024,Diesel,Manual,1079000,20.8,1197,5,9064,88,165,Medium,SUV
269,Kia,Sonet,HTX,2024,Diesel,iMT,1229000,19.8,1197,5,10324,88,165,Medium,SUV
270,Kia,Sonet,HTX,2024,Diesel,DCT,1229000,19.8,1197,5,10324,88,165,Medium,SUV
271,Kia,Sonet,GTX+,2024,Diesel,Manual,1159000,20.8,1197,5,9736,88,165,Medium,SUV
272,Kia,Sonet,GTX+,2024,Diesel,iMT,1309000,19.8,1197,5,10996,88,165,Medium,SUV
273,Kia,Sonet,GTX+,2024,Diesel,DCT,1309000,19.8,1197,5,10996,88,165,Medium,SUV
274,Kia,Sonet,X-Line,2024,Diesel,Manual,1239000,20.8,1197,5,10408,88,165,Medium,SUV
275,Kia,Sonet,X-Line,2024,Diesel,iMT,1389000,19.8,1197,5,11668,88,165,Medium,SUV
276,Kia,Sonet,X-Line,2024,Diesel,DCT,1389000,19.8,1197,5,11668,88,165,Medium,SUV
277,Volkswagen,Taigun,Comfortline,2024,Petrol,Manual,1170000,19.87,999,5,8190,115,178,Medium,SUV
278,Volkswagen,Taigun,Comfortline,2024,Petrol,Automatic,1320000,18.87,999,5,9240,115,178,Medium,SUV
279,Volkswagen,Taigun,Highline,2024,Petrol,Manual,1270000,19.87,999,5,8890,115,178,Medium,SUV
280,Volkswagen,Taigun,Highline,2024,Petrol,Automatic,1420000,18.87,999,5,9940,115,178,Medium,SUV
281,Volkswagen,Taigun,Topline,2024,Petrol,Manual,1370000,19.87,999,5,9590,115,178,Medium,SUV
282,Volkswagen,Taigun,Topline,2024,Petrol,Automatic,1520000,18.87,999,5,10640,115,178,Medium,SUV
283,Volkswagen,Taigun,GT Plus,2024,Petrol,Manual,1470000,19.87,999,5,10290,115,178,Medium,SUV
284,Volkswagen,Taigun,GT Plus,2024,Petrol,Automatic,1620000,18.87,999,5,11340,115,178,Medium,SUV
285,Volkswagen,Virtus,Comfortline,2024,Petrol,Manual,1156000,20.8,999,5,8092,115,178,Medium,Sedan
286,Volkswagen,Virtus,Comfortline,2024,Petrol,Automatic,1306000,19.8,999,5,9142,115,178,Medium,Sedan
287,Volkswagen,Virtus,Highline,2024,Petrol,Manual,1256000,20.8,999,5,8792,115,178,Medium,Sedan
288,Volkswagen,Virtus,Highline,2024,Petrol,Automatic,1406000,19.8,999,5,9842,115,178,Medium,Sedan
289,Volkswagen,Virtus,Topline,2024,Petrol,Manual,1356000,20.8,999,5,9492,115,178,Medium,Sedan
290,Volkswagen,Virtus,Topline,2024,Petrol,Automatic,1506000,19.8,999,5,10542,115,178,Medium,Sedan
291,Volkswagen,Virtus,GT Plus,2024,Petrol,Manual,1456000,20.8,999,5,10192,115,178,Medium,Sedan
292,Volkswagen,Virtus,GT Plus,2024,Petrol,Automatic,1606000,19.8,999,5,11242,115,178,Medium,Sedan
293,Toyota,Glanza,E,2024,Petrol,Manual,681000,22.35,1197,5,4767,90,113,High,Hatchback
294,Toyota,Glanza,E,2024,Petrol,AMT,831000,21.35,1197,5,5817,90,113,Medium,Hatchback
295,Toyota,Glanza,S,2024,Petrol,Manual,781000,22.35,1197,5,5467,90,113,High,Hatchback
296,Toyota,Glanza,S,2024,Petrol,AMT,931000,21.35,1197,5,6517,90,113,Medium,Hatchback
297,Toyota,Glanza,G,2024,Petrol,Manual,881000,22.35,1197,5,6167,90,113,High,Hatchback
298,Toyota,Glanza,G,2024,Petrol,AMT,1031000,21.35,1197,5,7217,90,113,Medium,Hatchback
299,Toyota,Glanza,V,2024,Petrol,Manual,981000,22.35,1197,5,6867,90,113,High,Hatchback
300,Toyota,Glanza,V,2024,Petrol,AMT,1131000,21.35,1197,5,7917,90,113,Medium,Hatchback
301,Toyota,Hyryder,E,2024,Petrol,Manual,1114000,21.12,1462,5,7798,103,137,Medium,SUV
302,Toyota,Hyryder,E,2024,Petrol,Automatic,1264000,20.12,1462,5,8848,103,137,Medium,SUV
303,Toyota,Hyryder,S,2024,Petrol,Manual,1214000,21.12,1462,5,8498,103,137,Medium,SUV
304,Toyota,Hyryder,S,2024,Petrol,Automatic,1364000,20.12,1462,5,9548,103,137,Medium,SUV
305,Toyota,Hyryder,G,2024,Petrol,Manual,1314000,21.12,1462,5,9198,103,137,Medium,SUV
306,Toyota,Hyryder,G,2024,Petrol,Automatic,1464000,20.12,1462,5,10248,103,137,Medium,SUV
307,Toyota,Hyryder,V,2024,Petrol,Manual,1414000,21.12,1462,5,9898,103,137,Medium,SUV
308,Toyota,Hyryder,V,2024,Petrol,Automatic,1564000,20.12,1462,5,10948,103,137,Medium,SUV
309,Toyota,Hyryder,E,2024,Hybrid,Manual,1364000,21.12,1462,5,9548,103,137,High,SUV
310,Toyota,Hyryder,E,2024,Hybrid,Automatic,1514000,20.12,1462,5,10598,103,137,High,SUV
311,Toyota,Hyryder,S,2024,Hybrid,Manual,1464000,21.12,1462,5,10248,103,137,High,SUV
312,Toyota,Hyryder,S,2024,Hybrid,Automatic,1614000,20.12,1462,5,11298,103,137,High,SUV
313,Toyota,Hyryder,G,2024,Hybrid,Manual,1564000,21.12,1462,5,10948,103,137,High,SUV
314,Toyota,Hyryder,G,2024,Hybrid,Automatic,1714000,20.12,1462,5,11998,103,137,High,SUV
315,Toyota,Hyryder,V,2024,Hybrid,Manual,1664000,21.12,1462,5,11648,103,137,High,SUV
316,Toyota,Hyryder,V,2024,Hybrid,Automatic,1814000,20.12,1462,5,12698,103,137,High,SUV
317,Toyota,Innova Hycross,GX,2024,Hybrid,e-CVT,2377000,22.24,1987,7,16639,186,206,High,MUV
318,Toyota,Innova Hycross,VX,2024,Hybrid,e-CVT,2510333,22.24,1987,7,17572,186,206,High,MUV
319,Toyota,Innova Hycross,ZX,2024,Hybrid,e-CVT,2643667,22.24,1987,7,18506,186,206,High,MUV
320,Toyota,Fortuner,Standard,2024,Petrol,Manual,3343000,14.4,2755,7,23401,204,500,Medium,SUV
321,Toyota,Fortuner,Standard,2024,Petrol,Automatic,3493000,13.4,2755,7,24451,204,500,Medium,SUV
322,Toyota,Fortuner,Legender,2024,Petrol,Manual,3476333,14.4,2755,7,24334,204,500,Medium,SUV
323,Toyota,Fortuner,Legender,2024,Petrol,Automatic,3626333,13.4,2755,7,25384,204,500,Medium,SUV
324,Toyota,Fortuner,GR-S,2024,Petrol,Manual,3609667,14.4,2755,7,25268,204,500,Medium,SUV
325,Toyota,Fortuner,GR-S,2024,Petrol,Automatic,3759667,13.4,2755,7,26318,204,500,Medium,SUV
326,Toyota,Fortuner,Standard,2024,Diesel,Manual,3463000,16.4,2755,7,29089,209,550,Medium,SUV
327,Toyota,Fortuner,Standard,2024,Diesel,Automatic,3613000,15.4,2755,7,30349,209,550,Medium,SUV
328,Toyota,Fortuner,Legender,2024,Diesel,Manual,3596333,16.4,2755,7,30209,209,550,Medium,SUV
329,Toyota,Fortuner,Legender,2024,Diesel,Automatic,3746333,15.4,2755,7,31469,209,550,Medium,SUV
330,Toyota,Fortuner,GR-S,2024,Diesel,Manual,3729667,16.4,2755,7,31329,209,550,Medium,SUV
331,Toyota,Fortuner,GR-S,2024,Diesel,Automatic,3879667,15.4,2755,7,32589,209,550,Medium,SUV
332,Audi,A4,Premium,2024,Petrol,Automatic,5052000,16.42,1984,5,35364,190,320,Medium,Sedan
333,Audi,A4,Premium Plus,2024,Petrol,Automatic,5452000,16.42,1984,5,38164,190,320,Medium,Sedan
334,Audi,A4,Technology,2024,Petrol,Automatic,5852000,16.42,1984,5,40964,190,320,Medium,Sedan
335,Audi,Q3,Premium,2024,Petrol,Automatic,4875000,13.93,1984,5,34125,190,320,Medium,SUV
336,Audi,Q3,Premium Plus,2024,Petrol,Automatic,5275000,13.93,1984,5,36925,190,320,Medium,SUV
337,Audi,Q3,Technology,2024,Petrol,Automatic,5675000,13.93,1984,5,39725,190,320,Medium,SUV
338,Honda,City,SV,2024,Petrol,Manual,1182000,18.4,1498,5,8274,121,145,Medium,Sedan
339,Honda,City,SV,2024,Petrol,CVT,1332000,17.4,1498,5,9324,121,145,Medium,Sedan
340,Honda,City,V,2024,Petrol,Manual,1282000,18.4,1498,5,8974,121,145,Medium,Sedan
341,Honda,City,V,2024,Petrol,CVT,1432000,17.4,1498,5,10024,121,145,Medium,Sedan
342,Honda,City,VX,2024,Petrol,Manual,1382000,18.4,1498,5,9674,121,145,Medium,Sedan
343,Honda,City,VX,2024,Petrol,CVT,1532000,17.4,1498,5,10724,121,145,Medium,Sedan
344,Honda,City,ZX,2024,Petrol,Manual,1482000,18.4,1498,5,10374,121,145,Medium,Sedan
345,Honda,City,ZX,2024,Petrol,CVT,1632000,17.4,1498,5,11424,121,145,Medium,Sedan
346,Honda,City,SV,2024,Hybrid,Manual,1432000,18.4,1498,5,10024,121,145,High,Sedan
347,Honda,City,SV,2024,Hybrid,CVT,1582000,17.4,1498,5,11074,121,145,High,Sedan
348,Honda,City,V,2024,Hybrid,Manual,1532000,18.4,1498,5,10724,121,145,High,Sedan
349,Honda,City,V,2024,Hybrid,CVT,1682000,17.4,1498,5,11774,121,145,High,Sedan
350,Honda,City,VX,2024,Hybrid,Manual,1632000,18.4,1498,5,11424,121,145,High,Sedan
351,Honda,City,VX,2024,Hybrid,CVT,1782000,17.4,1498,5,12474,121,145,High,Sedan
352,Honda,City,ZX,2024,Hybrid,Manual,1732000,18.4,1498,5,12124,121,145,High,Sedan
353,Honda,City,ZX,2024,Hybrid,CVT,1882000,17.4,1498,5,13174,121,145,High,Sedan
354,Honda,Elevate,SV,2024,Petrol,Manual,1169000,16.92,1498,5,8183,121,145,Medium,SUV
355,Honda,Elevate,SV,2024,Petrol,CVT,1319000,15.92,1498,5,9233,121,145,Medium,SUV
356,Honda,Elevate,V,2024,Petrol,Manual,1269000,16.92,1498,5,8883,121,145,Medium,SUV
357,Honda,Elevate,V,2024,Petrol,CVT,1419000,15.92,1498,5,9933,121,145,Medium,SUV
358,Honda,Elevate,VX,2024,Petrol,Manual,1369000,16.92,1498,5,9583,121,145,Medium,SUV
359,Honda,Elevate,VX,2024,Petrol,CVT,1519000,15.92,1498,5,10633,121,145,Medium,SUV
360,Honda,Elevate,ZX,2024,Petrol,Manual,1469000,16.92,1498,5,10283,121,145,Medium,SUV
361,Honda,Elevate,ZX,2024,Petrol,CVT,1619000,15.92,1498,5,11333,121,145,Medium,SUV
362,Honda,Amaze,E,2024,Petrol,Manual,716000,18.6,1199,5,5012,89,110,Medium,Sedan
363,Honda,Amaze,E,2024,Petrol,CVT,866000,17.6,1199,5,6062,89,110,Medium,Sedan
364,Honda,Amaze,S,2024,Petrol,Manual,849333,18.6,1199,5,5945,89,110,Medium,Sedan
365,Honda,Amaze,S,2024,Petrol,CVT,999333,17.6,1199,5,6995,89,110,Medium,Sedan
366,Honda,Amaze,VX,2024,Petrol,Manual,982667,18.6,1199,5,6879,89,110,Medium,Sedan
367,Honda,Amaze,VX,2024,Petrol,CVT,1132667,17.6,1199,5,7929,89,110,Medium,Sedan
368,BMW,3 Series,330Li M Sport,2024,Petrol,Automatic,6510000,14.39,1998,5,45570,258,400,Medium,Sedan
369,BMW,X1,sDrive18i xLine,2024,Petrol,Automatic,5400000,15.35,1499,5,37800,136,230,Medium,SUV
370,BMW,X1,sDrive18d M Sport,2024,Petrol,Automatic,6000000,15.35,1499,5,42000,136,230,Medium,SUV
371,BMW,X1,sDrive18i xLine,2024,Diesel,Automatic,5520000,17.35,1499,5,46368,141,280,Medium,SUV
372,BMW,X1,sDrive18d M Sport,2024,Diesel,Automatic,6120000,17.35,1499,5,51408,141,280,Medium,SUV
373,Skoda,Kushaq,Active,2024,Petrol,Manual,1189000,19.65,999,5,8323,115,178,Medium,SUV
374,Skoda,Kushaq,Active,2024,Petrol,Automatic,1339000,18.65,999,5,9373,115,178,Medium,SUV
375,Skoda,Kushaq,Ambition,2024,Petrol,Manual,1289000,19.65,999,5,9023,115,178,Medium,SUV
376,Skoda,Kushaq,Ambition,2024,Petrol,Automatic,1439000,18.65,999,5,10073,115,178,Medium,SUV
377,Skoda,Kushaq,Style,2024,Petrol,Manual,1389000,19.65,999,5,9723,115,178,Medium,SUV
378,Skoda,Kushaq,Style,2024,Petrol,Automatic,1539000,18.65,999,5,10773,115,178,Medium,SUV
379,Skoda,Kushaq,Monte Carlo,2024,Petrol,Manual,1489000,19.65,999,5,10423,115,178,Medium,SUV
380,Skoda,Kushaq,Monte Carlo,2024,Petrol,Automatic,1639000,18.65,999,5,11473,115,178,Medium,SUV
381,Skoda,Slavia,Active,2024,Petrol,Manual,1148000,20.32,999,5,8036,115,178,Medium,Sedan
382,Skoda,Slavia,Active,2024,Petrol,Automatic,1298000,19.32,999,5,9086,115,178,Medium,Sedan
383,Skoda,Slavia,Ambition,2024,Petrol,Manual,1248000,20.32,999,5,8736,115,178,Medium,Sedan
384,Skoda,Slavia,Ambition,2024,Petrol,Automatic,1398000,19.32,999,5,9786,115,178,Medium,Sedan
385,Skoda,Slavia,Style,2024,Petrol,Manual,1348000,20.32,999,5,9436,115,178,Medium,Sedan
386,Skoda,Slavia,Style,2024,Petrol,Automatic,1498000,19.32,999,5,10486,115,178,Medium,Sedan
387,Skoda,Slavia,Matte Edition,2024,Petrol,Manual,1448000,20.32,999,5,10136,115,178,Medium,Sedan
388,Skoda,Slavia,Matte Edition,2024,Petrol,Automatic,1598000,19.32,999,5,11186,115,178,Medium,Sedan
389,Tata,Nexon,Smart,2024,Petrol,Manual,815000,17.44,1199,5,5705,120,170,Medium,SUV
390,Tata,Nexon,Smart,2024,Petrol,AMT,965000,16.44,1199,5,6755,120,170,Medium,SUV
391,Tata,Nexon,Smart,2024,Petrol,DCA,965000,16.44,1199,5,6755,120,170,Medium,SUV
392,Tata,Nexon,Pure,2024,Petrol,Manual,915000,17.44,1199,5,6405,120,170,Medium,SUV
393,Tata,Nexon,Pure,2024,Petrol,AMT,1065000,16.44,1199,5,7455,120,170,Medium,SUV
394,Tata,Nexon,Pure,2024,Petrol,DCA,1065000,16.44,1199,5,7455,120,170,Medium,SUV
395,Tata,Nexon,Creative,2024,Petrol,Manual,1015000,17.44,1199,5,7105,120,170,Medium,SUV
396,Tata,Nexon,Creative,2024,Petrol,AMT,1165000,16.44,1199,5,8155,120,170,Medium,SUV
397,Tata,Nexon,Creative,2024,Petrol,DCA,1165000,16.44,1199,5,8155,120,170,Medium,SUV
398,Tata,Nexon,Fearless,2024,Petrol,Manual,1115000,17.44,1199,5,7805,120,170,Medium,SUV
399,Tata,Nexon,Fearless,2024,Petrol,AMT,1265000,16.44,1199,5,8855,120,170,Medium,SUV
400,Tata,Nexon,Fearless,2024,Petrol,DCA,1265000,16.44,1199,5,8855,120,170,Medium,SUV
401,Tata,Nexon,Smart,2024,Diesel,Manual,935000,19.44,1199,5,7854,125,220,Medium,SUV
402,Tata,Nexon,Smart,2024,Diesel,AMT,1085000,18.44,1199,5,9114,125,220,Medium,SUV
403,Tata,Nexon,Smart,2024,Diesel,DCA,1085000,18.44,1199,5,9114,125,220,Medium,SUV
404,Tata,Nexon,Pure,2024,Diesel,Manual,1035000,19.44,1199,5,8694,125,220,Medium,SUV
405,Tata,Nexon,Pure,2024,Diesel,AMT,1185000,18.44,1199,5,9954,125,220,Medium,SUV
406,Tata,Nexon,Pure,2024,Diesel,DCA,1185000,18.44,1199,5,9954,125,220,Medium,SUV
407,Tata,Nexon,Creative,2024,Diesel,Manual,1135000,19.44,1199,5,9534,125,220,Medium,SUV
408,Tata,Nexon,Creative,2024,Diesel,AMT,1285000,18.44,1199,5,10794,125,220,Medium,SUV
409,Tata,Nexon,Creative,2024,Diesel,DCA,1285000,18.44,1199,5,10794,125,220,Medium,SUV
410,Tata,Nexon,Fearless,2024,Diesel,Manual,1235000,19.44,1199,5,10374,125,220,Medium,SUV
411,Tata,Nexon,Fearless,2024,Diesel,AMT,1385000,18.44,1199,5,11634,125,220,Medium,SUV
412,Tata,Nexon,Fearless,2024,Diesel,DCA,1385000,18.44,1199,5,11634,125,220,Medium,SUV
413,Tata,Harrier,Smart,2024,Diesel,Manual,1669000,18.8,1956,5,14020,175,400,Medium,SUV
414,Tata,Harrier,Smart,2024,Diesel,Automatic,1819000,17.8,1956,5,15280,175,400,Medium,SUV
415,Tata,Harrier,Pure,2024,Diesel,Manual,1769000,18.8,1956,5,14860,175,400,Medium,SUV
416,Tata,Harrier,Pure,2024,Diesel,Automatic,1919000,17.8,1956,5,16120,175,400,Medium,SUV
417,Tata,Harrier,Adventure,2024,Diesel,Manual,1869000,18.8,1956,5,15700,175,400,Medium,SUV
418,Tata,Harrier,Adventure,2024,Diesel,Automatic,2019000,17.8,1956,5,16960,175,400,Medium,SUV
419,Tata,Harrier,Fearless,2024,Diesel,Manual,1969000,18.8,1956,5,16540,175,400,Medium,SUV
420,Tata,Harrier,Fearless,2024,Diesel,Automatic,2119000,17.8,1956,5,17800,175,400,Medium,SUV
421,Tata,Safari,Smart,2024,Diesel,Manual,1739000,18.3,1956,7,14608,175,400,Medium,SUV
422,Tata,Safari,Smart,2024,Diesel,Automatic,1889000,17.3,1956,7,15868,175,400,Medium,SUV
423,Tata,Safari,Pure,2024,Diesel,Manual,1839000,18.3,1956,7,15448,175,400,Medium,SUV
424,Tata,Safari,Pure,2024,Diesel,Automatic,1989000,17.3,1956,7,16708,175,400,Medium,SUV
425,Tata,Safari,Adventure,2024,Diesel,Manual,1939000,18.3,1956,7,16288,175,400,Medium,SUV
426,Tata,Safari,Adventure,2024,Diesel,Automatic,2089000,17.3,1956,7,17548,175,400,Medium,SUV
427,Tata,Safari,Accomplished,2024,Diesel,Manual,2039000,18.3,1956,7,17128,175,400,Medium,SUV
428,Tata,Safari,Accomplished,2024,Diesel,Automatic,2189000,17.3,1956,7,18388,175,400,Medium,SUV
429,Tata,Punch,Pure,2024,Petrol,Manual,612000,20.09,1199,5,4284,88,115,Medium,Micro SUV
430,Tata,Punch,Pure,2024,Petrol,AMT,762000,19.09,1199,5,5334,88,115,Medium,Micro SUV
431,Tata,Punch,Adventure,2024,Petrol,Manual,712000,20.09,1199,5,4984,88,115,Medium,Micro SUV
432,Tata,Punch,Adventure,2024,Petrol,AMT,862000,19.09,1199,5,6034,88,115,Medium,Micro SUV
433,Tata,Punch,Accomplished,2024,Petrol,Manual,812000,20.09,1199,5,5684,88,115,Medium,Micro SUV
434,Tata,Punch,Accomplished,2024,Petrol,AMT,962000,19.09,1199,5,6734,88,115,Medium,Micro SUV
435,Tata,Punch,Creative,2024,Petrol,Manual,912000,20.09,1199,5,6384,88,115,Medium,Micro SUV
436,Tata,Punch,Creative,2024,Petrol,AMT,1062000,19.09,1199,5,7434,88,115,Medium,Micro SUV
437,Tata,Punch,Pure,2024,CNG,Manual,612000,20.09,1199,5,4284,88,115,Medium,Micro SUV
438,Tata,Punch,Pure,2024,CNG,AMT,762000,19.09,1199,5,5334,88,115,Medium,Micro SUV
439,Tata,Punch,Adventure,2024,CNG,Manual,712000,20.09,1199,5,4984,88,115,Medium,Micro SUV
440,Tata,Punch,Adventure,2024,CNG,AMT,862000,19.09,1199,5,6034,88,115,Medium,Micro SUV
441,Tata,Punch,Accomplished,2024,CNG,Manual,812000,20.09,1199,5,5684,88,115,Medium,Micro SUV
442,Tata,Punch,Accomplished,2024,CNG,AMT,962000,19.09,1199,5,6734,88,115,Medium,Micro SUV
443,Tata,Punch,Creative,2024,CNG,Manual,912000,20.09,1199,5,6384,88,115,Medium,Micro SUV
444,Tata,Punch,Creative,2024,CNG,AMT,1062000,19.09,1199,5,7434,88,115,Medium,Micro SUV
445,Tata,Altroz,XE,2024,Petrol,Manual,665000,19.33,1199,5,4655,88,115,Medium,Hatchback
446,Tata,Altroz,XE,2024,Petrol,DCA,815000,18.33,1199,5,5705,88,115,Medium,Hatchback
447,Tata,Altroz,XM,2024,Petrol,Manual,745000,19.33,1199,5,5215,88,115,Medium,Hatchback
448,Tata,Altroz,XM,2024,Petrol,DCA,895000,18.33,1199,5,6265,88,115,Medium,Hatchback
449,Tata,Altroz,XT,2024,Petrol,Manual,825000,19.33,1199,5,5775,88,115,Medium,Hatchback
450,Tata,Altroz,XT,2024,Petrol,DCA,975000,18.33,1199,5,6825,88,115,Medium,Hatchback
451,Tata,Altroz,XZ,2024,Petrol,Manual,905000,19.33,1199,5,6335,88,115,Medium,Hatchback
452,Tata,Altroz,XZ,2024,Petrol,DCA,1055000,18.33,1199,5,7385,88,115,Medium,Hatchback
453,Tata,Altroz,XZ+,2024,Petrol,Manual,985000,19.33,1199,5,6895,88,115,Medium,Hatchback
454,Tata,Altroz,XZ+,2024,Petrol,DCA,1135000,18.33,1199,5,7945,88,115,Medium,Hatchback
455,Tata,Tiago,XE,2024,Petrol,Manual,565000,19.01,1199,5,3955,86,113,Medium,Hatchback
456,Tata,Tiago,XE,2024,Petrol,AMT,715000,18.01,1199,5,5005,86,113,Medium,Hatchback
457,Tata,Tiago,XM,2024,Petrol,Manual,645000,19.01,1199,5,4515,86,113,Medium,Hatchback
458,Tata,Tiago,XM,2024,Petrol,AMT,795000,18.01,1199,5,5565,86,113,Medium,Hatchback
459,Tata,Tiago,XT,2024,Petrol,Manual,725000,19.01,1199,5,5075,86,113,Medium,Hatchback
460,Tata,Tiago,XT,2024,Petrol,AMT,875000,18.01,1199,5,6125,86,113,Medium,Hatchback
461,Tata,Tiago,XZ,2024,Petrol,Manual,805000,19.01,1199,5,5635,86,113,Medium,Hatchback
462,Tata,Tiago,XZ,2024,Petrol,AMT,955000,18.01,1199,5,6685,86,113,Medium,Hatchback
463,Tata,Tiago,XZ+,2024,Petrol,Manual,885000,19.01,1199,5,6195,86,113,Medium,Hatchback
464,Tata,Tiago,XZ+,2024,Petrol,AMT,1035000,18.01,1199,5,7245,86,113,Medium,Hatchback
465,Mercedes-Benz,C-Class,200,2024,Petrol,Automatic,6635000,16.5,1496,5,46445,204,300,Medium,Sedan
466,Mercedes-Benz,C-Class,220d,2024,Petrol,Automatic,7035000,16.5,1496,5,49245,204,300,Medium,Sedan
467,Mercedes-Benz,C-Class,300d,2024,Petrol,Automatic,7435000,16.5,1496,5,52045,204,300,Medium,Sedan
468,Mercedes-Benz,C-Class,200,2024,Diesel,Automatic,6755000,18.5,1496,5,56742,209,350,Medium,Sedan
469,Mercedes-Benz,C-Class,220d,2024,Diesel,Automatic,7155000,18.5,1496,5,60102,209,350,Medium,Sedan
470,Mercedes-Benz,C-Class,300d,2024,Diesel,Automatic,7555000,18.5,1496,5,63462,209,350,Medium,Sedan
471,Mercedes-Benz,GLA,200,2024,Petrol,Automatic,5625000,16.4,1332,5,39375,163,250,Medium,SUV
472,Mercedes-Benz,GLA,220d 4MATIC,2024,Petrol,Automatic,6225000,16.4,1332,5,43575,163,250,Medium,SUV
473,Mercedes-Benz,GLA,200,2024,Diesel,Automatic,5745000,18.4,1332,5,48258,168,300,Medium,SUV
474,Mercedes-Benz,GLA,220d 4MATIC,2024,Diesel,Automatic,6345000,18.4,1332,5,53298,168,300,Medium,SUV
475,MG,Hector,Style,2024,Petrol,Manual,1399000,13.79,1451,7,9793,143,250,Medium,SUV
476,MG,Hector,Style,2024,Petrol,CVT,1549000,12.79,1451,7,10843,143,250,Low,SUV
477,MG,Hector,Shine,2024,Petrol,Manual,1479000,13.79,1451,7,10353,143,250,Medium,SUV
478,MG,Hector,Shine,2024,Petrol,CVT,1629000,12.79,1451,7,11403,143,250,Low,SUV
479,MG,Hector,Smart,2024,Petrol,Manual,1559000,13.79,1451,7,10913,143,250,Medium,SUV
480,MG,Hector,Smart,2024,Petrol,CVT,1709000,12.79,1451,7,11963,143,250,Low,SUV
481,MG,Hector,Sharp,2024,Petrol,Manual,1639000,13.79,1451,7,11473,143,250,Medium,SUV
482,MG,Hector,Sharp,2024,Petrol,CVT,1789000,12.79,1451,7,12523,143,250,Low,SUV
483,MG,Hector,Savvy Pro,2024,Petrol,Manual,1719000,13.79,1451,7,12033,143,250,Medium,SUV
484,MG,Hector,Savvy Pro,2024,Petrol,CVT,1869000,12.79,1451,7,13083,143,250,Low,SUV
485,MG,Hector,Style,2024,Diesel,Manual,1519000,15.79,1451,7,12760,148,300,Medium,SUV
486,MG,Hector,Style,2024,Diesel,CVT,1669000,14.79,1451,7,14020,148,300,Medium,SUV
487,MG,Hector,Shine,2024,Diesel,Manual,1599000,15.79,1451,7,13432,148,300,Medium,SUV
488,MG,Hector,Shine,2024,Diesel,CVT,1749000,14.79,1451,7,14692,148,300,Medium,SUV
489,MG,Hector,Smart,2024,Diesel,Manual,1679000,15.79,1451,7,14104,148,300,Medium,SUV
490,MG,Hector,Smart,2024,Diesel,CVT,1829000,14.79,1451,7,15364,148,300,Medium,SUV
491,MG,Hector,Sharp,2024,Diesel,Manual,1759000,15.79,1451,7,14776,148,300,Medium,SUV
492,MG,Hector,Sharp,2024,Diesel,CVT,1909000,14.79,1451,7,16036,148,300,Medium,SUV
493,MG,Hector,Savvy Pro,2024,Diesel,Manual,1839000,15.79,1451,7,15448,148,300,Medium,SUV
494,MG,Hector,Savvy Pro,2024,Diesel,CVT,1989000,14.79,1451,7,16708,148,300,Medium,SUV
495,MG,Astor,Sprint,2024,Petrol,Manual,998000,15.4,1498,5,6986,110,144,Medium,SUV
496,MG,Astor,Sprint,2024,Petrol,CVT,1148000,14.4,1498,5,8036,110,144,Medium,SUV
497,MG,Astor,Shine,2024,Petrol,Manual,1078000,15.4,1498,5,7546,110,144,Medium,SUV
498,MG,Astor,Shine,2024,Petrol,CVT,1228000,14.4,1498,5,8596,110,144,Medium,SUV
499,MG,Astor,Select,2024,Petrol,Manual,1158000,15.4,1498,5,8106,110,144,Medium,SUV
500,MG,Astor,Select,2024,Petrol,CVT,1308000,14.4,1498,5,9156,110,144,Medium,SUV
501,MG,Astor,Sharp Pro,2024,Petrol,Manual,1238000,15.4,1498,5,8666,110,144,Medium,SUV
502,MG,Astor,Sharp Pro,2024,Petrol,CVT,1388000,14.4,1498,5,9716,110,144,Medium,SUV
503,MG,Astor,Savvy Pro,2024,Petrol,Manual,1318000,15.4,1498,5,9226,110,144,Medium,SUV
504,MG,Astor,Savvy Pro,2024,Petrol,CVT,1468000,14.4,1498,5,10276,110,144,Medium,SUV
505,MG,Comet EV,Pace,2024,Electric,Automatic,849000,230,0,5,5943,42,110,High,Hatchback
506,MG,Comet EV,Play,2024,Electric,Automatic,982333,230,0,5,6876,42,110,High,Hatchback
507,MG,Comet EV,Plush,2024,Electric,Automatic,1115667,230,0,5,7810,42,110,High,Hatchback
508,Hyundai,i20,Era,2024,Petrol,Manual,699000,19.37,1197,5,6000,83,115,High,Hatchback
509,Hyundai,i20,Magna,2024,Petrol,Manual,775000,19.37,1197,5,6200,83,115,High,Hatchback
510,Hyundai,i20,Sportz,2024,Petrol,Manual,838000,19.37,1197,5,6400,83,115,High,Hatchback
511,Hyundai,i20,Sportz,2024,Petrol,iVT,943000,20,1197,5,6600,88,115,High,Hatchback
512,Hyundai,i20,Asta,2024,Petrol,Manual,934000,19.37,1197,5,6800,83,115,High,Hatchback
513,Hyundai,i20,Asta(O),2024,Petrol,Manual,1000000,19.37,1197,5,7000,83,115,High,Hatchback
514,Hyundai,i20,Asta(O),2024,Petrol,iVT,1116000,20,1197,5,7200,88,115,High,Hatchback
`;