/*
 * Dataset: map_features
 * What it holds: the grey background of the map sketches: lakes, rivers, towns, the motorway and the railway between
 *   Milan and Verona, and some streets of Milan (Loreto, Centrale) and Verona (around Porta Nuova). Approximate shapes
 *   from real places, for a placeholder only: in the product the background would come from a map service (OQ-36).
 * Used by: run.html, alternative.html (through components/map-base.js)
 * Fields: water[{name, kind: lake|river, points[[lat, lon]]}], towns[{name, lat, lon, r, label}],
 *   roads[{name, kind: motorway|main|street, points[[lat, lon]]}], rail[{name, points[[lat, lon]]}]
 * Source: mock
 * Updated: 2026-11-21
 */
window.DATA = window.DATA || {};
DATA.map_features = {
  water: [
    { name: "Lago di Garda", kind: "lake", points: [[45.88, 10.84], [45.80, 10.78], [45.70, 10.70], [45.62, 10.62], [45.55, 10.56], [45.48, 10.53], [45.44, 10.60], [45.44, 10.68], [45.47, 10.73], [45.55, 10.72], [45.63, 10.74], [45.72, 10.80], [45.80, 10.84], [45.88, 10.88]] },
    { name: "Lago d'Iseo", kind: "lake", points: [[45.82, 10.07], [45.76, 10.04], [45.70, 10.04], [45.66, 10.07], [45.68, 10.11], [45.74, 10.10], [45.81, 10.11]] },
    { name: "Adige", kind: "river", points: [[45.52, 10.88], [45.47, 10.95], [45.448, 10.985], [45.443, 11.000], [45.432, 11.006], [45.420, 10.998], [45.40, 11.02], [45.33, 11.12], [45.25, 11.30]] },
    { name: "Adda", kind: "river", points: [[45.75, 9.43], [45.63, 9.47], [45.55, 9.50], [45.45, 9.52], [45.33, 9.55], [45.20, 9.70]] },
    { name: "Oglio", kind: "river", points: [[45.66, 9.96], [45.55, 9.90], [45.45, 9.95], [45.30, 10.10]] },
    { name: "Naviglio Martesana", kind: "river", points: [[45.4875, 9.2085], [45.4905, 9.2160], [45.4960, 9.2250], [45.5020, 9.2380]] }
  ],
  towns: [
    { name: "Milano", lat: 45.4642, lon: 9.1900, r: 0.075, label: true },
    { name: "Bergamo", lat: 45.6983, lon: 9.6773, r: 0.035, label: true },
    { name: "Brescia", lat: 45.5416, lon: 10.2118, r: 0.040, label: true },
    { name: "Verona", lat: 45.4384, lon: 10.9916, r: 0.045, label: true },
    { name: "Vicenza", lat: 45.5455, lon: 11.5354, r: 0.030, label: true },
    { name: "Treviglio", lat: 45.5210, lon: 9.5930, r: 0.012 },
    { name: "Desenzano", lat: 45.4690, lon: 10.5370, r: 0.012 },
    { name: "Peschiera", lat: 45.4390, lon: 10.6920, r: 0.008 },
    { name: "Monza", lat: 45.5845, lon: 9.2744, r: 0.025, label: true },
    { name: "San Bonifacio", lat: 45.3960, lon: 11.2730, r: 0.010 }
  ],
  roads: [
    { name: "A4", kind: "motorway", points: [[45.515, 9.230], [45.560, 9.330], [45.640, 9.560], [45.660, 9.660], [45.590, 9.960], [45.530, 10.170], [45.500, 10.330], [45.450, 10.560], [45.430, 10.760], [45.405, 10.930], [45.410, 11.150], [45.520, 11.480]] },
    { name: "Tangenziale Est", kind: "motorway", points: [[45.440, 9.270], [45.480, 9.265], [45.515, 9.245], [45.560, 9.260]] },
    { name: "Viale Monza", kind: "main", points: [[45.4858, 9.2160], [45.4920, 9.2185], [45.5000, 9.2215], [45.5080, 9.2250]] },
    { name: "Via Padova", kind: "main", points: [[45.4858, 9.2160], [45.4880, 9.2195], [45.4920, 9.2260], [45.4975, 9.2350]] },
    { name: "Corso Buenos Aires", kind: "main", points: [[45.4858, 9.2160], [45.4800, 9.2100], [45.4745, 9.2045]] },
    { name: "Viale Abruzzi", kind: "main", points: [[45.4858, 9.2160], [45.4790, 9.2170], [45.4720, 9.2180]] },
    { name: "Via Vittor Pisani", kind: "main", points: [[45.4847, 9.2025], [45.4810, 9.2005], [45.4775, 9.1990]] },
    { name: "Via Andrea Doria", kind: "street", points: [[45.4855, 9.2105], [45.4858, 9.2160]] },
    { name: "Viale Brianza", kind: "street", points: [[45.4870, 9.2090], [45.4905, 9.2120], [45.4940, 9.2150]] },
    { name: "Via Pergolesi", kind: "street", points: [[45.4840, 9.2120], [45.4880, 9.2200]] },
    { name: "Corso Porta Nuova", kind: "main", points: [[45.4290, 10.9825], [45.4330, 10.9880], [45.4370, 10.9940]] },
    { name: "Viale Piave", kind: "main", points: [[45.4290, 10.9825], [45.4250, 10.9900], [45.4210, 10.9990]] },
    { name: "Ring road", kind: "main", points: [[45.4378, 10.9403], [45.4350, 10.9500], [45.4330, 10.9600], [45.4310, 10.9720], [45.4290, 10.9825]] },
    { name: "Via San Marco", kind: "street", points: [[45.4378, 10.9403], [45.4420, 10.9600], [45.4430, 10.9750]] },
    { name: "Viale Colombo", kind: "street", points: [[45.4300, 10.9500], [45.4250, 10.9700], [45.4230, 10.9850]] }
  ],
  rail: [
    { name: "Milano–Venezia", points: [[45.4862, 9.2040], [45.4950, 9.2300], [45.5160, 9.5900], [45.5329, 10.2129], [45.4706, 10.5395], [45.4386, 10.6918], [45.4290, 10.9825], [45.3960, 11.2730], [45.5455, 11.5410]] },
    { name: "Milano–Bergamo", points: [[45.4862, 9.2040], [45.5300, 9.2800], [45.6000, 9.4800], [45.6900, 9.6750]] },
    { name: "Milano–Bologna", points: [[45.4862, 9.2040], [45.4400, 9.2300], [45.3800, 9.3000]] }
  ]
};
