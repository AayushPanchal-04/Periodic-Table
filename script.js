const elements = {
    1: { number: 1, symbol: 'H', name: 'Hydrogen', mass: 1.008, category: 'Nonmetal', row: 1, col: 1 },
    2: { number: 2, symbol: 'He', name: 'Helium', mass: 4.003, category: 'Noble Gas', row: 1, col: 18 },
    3: { number: 3, symbol: 'Li', name: 'Lithium', mass: 6.941, category: 'Alkali Metal', row: 2, col: 1 },
    4: { number: 4, symbol: 'Be', name: 'Beryllium', mass: 9.012, category: 'Alkaline Earth Metal', row: 2, col: 2 },
    5: { number: 5, symbol: 'B', name: 'Boron', mass: 10.811, category: 'Metalloid', row: 2, col: 13 },
    6: { number: 6, symbol: 'C', name: 'Carbon', mass: 12.011, category: 'Nonmetal', row: 2, col: 14 },
    7: { number: 7, symbol: 'N', name: 'Nitrogen', mass: 14.007, category: 'Nonmetal', row: 2, col: 15 },
    8: { number: 8, symbol: 'O', name: 'Oxygen', mass: 15.999, category: 'Nonmetal', row: 2, col: 16 },
    9: { number: 9, symbol: 'F', name: 'Fluorine', mass: 18.998, category: 'Halogen', row: 2, col: 17 },
    10: { number: 10, symbol: 'Ne', name: 'Neon', mass: 20.180, category: 'Noble Gas', row: 2, col: 18 },
    11: { number: 11, symbol: 'Na', name: 'Sodium', mass: 22.990, category: 'Alkali Metal', row: 3, col: 1 },
    12: { number: 12, symbol: 'Mg', name: 'Magnesium', mass: 24.305, category: 'Alkaline Earth Metal', row: 3, col: 2 },
    13: { number: 13, symbol: 'Al', name: 'Aluminum', mass: 26.982, category: 'Post-transition Metal', row: 3, col: 13 },
    14: { number: 14, symbol: 'Si', name: 'Silicon', mass: 28.086, category: 'Metalloid', row: 3, col: 14 },
    15: { number: 15, symbol: 'P', name: 'Phosphorus', mass: 30.974, category: 'Nonmetal', row: 3, col: 15 },
    16: { number: 16, symbol: 'S', name: 'Sulfur', mass: 32.065, category: 'Nonmetal', row: 3, col: 16 },
    17: { number: 17, symbol: 'Cl', name: 'Chlorine', mass: 35.453, category: 'Halogen', row: 3, col: 17 },
    18: { number: 18, symbol: 'Ar', name: 'Argon', mass: 39.948, category: 'Noble Gas', row: 3, col: 18 },
    19: { number: 19, symbol: 'K', name: 'Potassium', mass: 39.098, category: 'Alkali Metal', row: 4, col: 1 },
    20: { number: 20, symbol: 'Ca', name: 'Calcium', mass: 40.078, category: 'Alkaline Earth Metal', row: 4, col: 2 },
    21: { number: 21, symbol: 'Sc', name: 'Scandium', mass: 44.956, category: 'Transition Metal', row: 4, col: 3 },
    22: { number: 22, symbol: 'Ti', name: 'Titanium', mass: 47.867, category: 'Transition Metal', row: 4, col: 4 },
    23: { number: 23, symbol: 'V', name: 'Vanadium', mass: 50.942, category: 'Transition Metal', row: 4, col: 5 },
    24: { number: 24, symbol: 'Cr', name: 'Chromium', mass: 51.996, category: 'Transition Metal', row: 4, col: 6 },
    25: { number: 25, symbol: 'Mn', name: 'Manganese', mass: 54.938, category: 'Transition Metal', row: 4, col: 7 },
    26: { number: 26, symbol: 'Fe', name: 'Iron', mass: 55.845, category: 'Transition Metal', row: 4, col: 8 },
    27: { number: 27, symbol: 'Co', name: 'Cobalt', mass: 58.933, category: 'Transition Metal', row: 4, col: 9 },
    28: { number: 28, symbol: 'Ni', name: 'Nickel', mass: 58.693, category: 'Transition Metal', row: 4, col: 10 },
    29: { number: 29, symbol: 'Cu', name: 'Copper', mass: 63.546, category: 'Transition Metal', row: 4, col: 11 },
    30: { number: 30, symbol: 'Zn', name: 'Zinc', mass: 65.38, category: 'Transition Metal', row: 4, col: 12 },
    31: { number: 31, symbol: 'Ga', name: 'Gallium', mass: 69.723, category: 'Post-transition Metal', row: 4, col: 13 },
    32: { number: 32, symbol: 'Ge', name: 'Germanium', mass: 72.630, category: 'Metalloid', row: 4, col: 14 },
    33: { number: 33, symbol: 'As', name: 'Arsenic', mass: 74.922, category: 'Metalloid', row: 4, col: 15 },
    34: { number: 34, symbol: 'Se', name: 'Selenium', mass: 78.971, category: 'Nonmetal', row: 4, col: 16 },
    35: { number: 35, symbol: 'Br', name: 'Bromine', mass: 79.904, category: 'Halogen', row: 4, col: 17 },
    36: { number: 36, symbol: 'Kr', name: 'Krypton', mass: 83.798, category: 'Noble Gas', row: 4, col: 18 },
    37: { number: 37, symbol: 'Rb', name: 'Rubidium', mass: 85.468, category: 'Alkali Metal', row: 5, col: 1 },
    38: { number: 38, symbol: 'Sr', name: 'Strontium', mass: 87.62, category: 'Alkaline Earth Metal', row: 5, col: 2 },
    39: { number: 39, symbol: 'Y', name: 'Yttrium', mass: 88.906, category: 'Transition Metal', row: 5, col: 3 },
    40: { number: 40, symbol: 'Zr', name: 'Zirconium', mass: 91.224, category: 'Transition Metal', row: 5, col: 4 },
    41: { number: 41, symbol: 'Nb', name: 'Niobium', mass: 92.906, category: 'Transition Metal', row: 5, col: 5 },
    42: { number: 42, symbol: 'Mo', name: 'Molybdenum', mass: 95.95, category: 'Transition Metal', row: 5, col: 6 },
    43: { number: 43, symbol: 'Tc', name: 'Technetium', mass: 98, category: 'Transition Metal', row: 5, col: 7 },
    44: { number: 44, symbol: 'Ru', name: 'Ruthenium', mass: 101.07, category: 'Transition Metal', row: 5, col: 8 },
    45: { number: 45, symbol: 'Rh', name: 'Rhodium', mass: 102.91, category: 'Transition Metal', row: 5, col: 9 },
    46: { number: 46, symbol: 'Pd', name: 'Palladium', mass: 106.42, category: 'Transition Metal', row: 5, col: 10 },
    47: { number: 47, symbol: 'Ag', name: 'Silver', mass: 107.87, category: 'Transition Metal', row: 5, col: 11 },
    48: { number: 48, symbol: 'Cd', name: 'Cadmium', mass: 112.41, category: 'Transition Metal', row: 5, col: 12 },
    49: { number: 49, symbol: 'In', name: 'Indium', mass: 114.82, category: 'Post-transition Metal', row: 5, col: 13 },
    50: { number: 50, symbol: 'Sn', name: 'Tin', mass: 118.71, category: 'Post-transition Metal', row: 5, col: 14 },
    51: { number: 51, symbol: 'Sb', name: 'Antimony', mass: 121.76, category: 'Metalloid', row: 5, col: 15 },
    52: { number: 52, symbol: 'Te', name: 'Tellurium', mass: 127.60, category: 'Metalloid', row: 5, col: 16 },
    53: { number: 53, symbol: 'I', name: 'Iodine', mass: 126.90, category: 'Halogen', row: 5, col: 17 },
    54: { number: 54, symbol: 'Xe', name: 'Xenon', mass: 131.29, category: 'Noble Gas', row: 5, col: 18 },
    55: { number: 55, symbol: 'Cs', name: 'Cesium', mass: 132.91, category: 'Alkali Metal', row: 6, col: 1 },
    56: { number: 56, symbol: 'Ba', name: 'Barium', mass: 137.33, category: 'Alkaline Earth Metal', row: 6, col: 2 },
    57: { number: 57, symbol: 'La', name: 'Lanthanum', mass: 138.91, category: 'Lanthanide', row: 8, col: 3 },
    58: { number: 58, symbol: 'Ce', name: 'Cerium', mass: 140.12, category: 'Lanthanide', row: 8, col: 4 },
    59: { number: 59, symbol: 'Pr', name: 'Praseodymium', mass: 140.91, category: 'Lanthanide', row: 8, col: 5 },
    60: { number: 60, symbol: 'Nd', name: 'Neodymium', mass: 144.24, category: 'Lanthanide', row: 8, col: 6 },
    61: { number: 61, symbol: 'Pm', name: 'Promethium', mass: 145, category: 'Lanthanide', row: 8, col: 7 },
    62: { number: 62, symbol: 'Sm', name: 'Samarium', mass: 150.36, category: 'Lanthanide', row: 8, col: 8 },
    63: { number: 63, symbol: 'Eu', name: 'Europium', mass: 151.96, category: 'Lanthanide', row: 8, col: 9 },
    64: { number: 64, symbol: 'Gd', name: 'Gadolinium', mass: 157.25, category: 'Lanthanide', row: 8, col: 10 },
    65: { number: 65, symbol: 'Tb', name: 'Terbium', mass: 158.93, category: 'Lanthanide', row: 8, col: 11 },
    66: { number: 66, symbol: 'Dy', name: 'Dysprosium', mass: 162.50, category: 'Lanthanide', row: 8, col: 12 },
    67: { number: 67, symbol: 'Ho', name: 'Holmium', mass: 164.93, category: 'Lanthanide', row: 8, col: 13 },
    68: { number: 68, symbol: 'Er', name: 'Erbium', mass: 167.26, category: 'Lanthanide', row: 8, col: 14 },
    69: { number: 69, symbol: 'Tm', name: 'Thulium', mass: 168.93, category: 'Lanthanide', row: 8, col: 15 },
    70: { number: 70, symbol: 'Yb', name: 'Ytterbium', mass: 173.05, category: 'Lanthanide', row: 8, col: 16 },
    71: { number: 71, symbol: 'Lu', name: 'Lutetium', mass: 174.97, category: 'Lanthanide', row: 8, col: 17 },
    72: { number: 72, symbol: 'Hf', name: 'Hafnium', mass: 178.49, category: 'Transition Metal', row: 6, col: 4 },
    73: { number: 73, symbol: 'Ta', name: 'Tantalum', mass: 180.95, category: 'Transition Metal', row: 6, col: 5 },
    74: { number: 74, symbol: 'W', name: 'Tungsten', mass: 183.84, category: 'Transition Metal', row: 6, col: 6 },
    75: { number: 75, symbol: 'Re', name: 'Rhenium', mass: 186.21, category: 'Transition Metal', row: 6, col: 7 },
    76: { number: 76, symbol: 'Os', name: 'Osmium', mass: 190.23, category: 'Transition Metal', row: 6, col: 8 },
    77: { number: 77, symbol: 'Ir', name: 'Iridium', mass: 192.22, category: 'Transition Metal', row: 6, col: 9 },
    78: { number: 78, symbol: 'Pt', name: 'Platinum', mass: 195.08, category: 'Transition Metal', row: 6, col: 10 },
    79: { number: 79, symbol: 'Au', name: 'Gold', mass: 196.97, category: 'Transition Metal', row: 6, col: 11 },
    80: { number: 80, symbol: 'Hg', name: 'Mercury', mass: 200.59, category: 'Transition Metal', row: 6, col: 12 },
    81: { number: 81, symbol: 'Tl', name: 'Thallium', mass: 204.38, category: 'Post-transition Metal', row: 6, col: 13 },
    82: { number: 82, symbol: 'Pb', name: 'Lead', mass: 207.2, category: 'Post-transition Metal', row: 6, col: 14 },
    83: { number: 83, symbol: 'Bi', name: 'Bismuth', mass: 208.98, category: 'Post-transition Metal', row: 6, col: 15 },
    84: { number: 84, symbol: 'Po', name: 'Polonium', mass: 209, category: 'Post-transition Metal', row: 6, col: 16 },
    85: { number: 85, symbol: 'At', name: 'Astatine', mass: 210, category: 'Halogen', row: 6, col: 17 },
    86: { number: 86, symbol: 'Rn', name: 'Radon', mass: 222, category: 'Noble Gas', row: 6, col: 18 },
    87: { number: 87, symbol: 'Fr', name: 'Francium', mass: 223, category: 'Alkali Metal', row: 7, col: 1 },
    88: { number: 88, symbol: 'Ra', name: 'Radium', mass: 226, category: 'Alkaline Earth Metal', row: 7, col: 2 },
    89: { number: 89, symbol: 'Ac', name: 'Actinium', mass: 227, category: 'Actinide', row: 9, col: 3 },
    90: { number: 90, symbol: 'Th', name: 'Thorium', mass: 232.04, category: 'Actinide', row: 9, col: 4 },
    91: { number: 91, symbol: 'Pa', name: 'Protactinium', mass: 231.04, category: 'Actinide', row: 9, col: 5 },
    92: { number: 92, symbol: 'U', name: 'Uranium', mass: 238.03, category: 'Actinide', row: 9, col: 6 },
    93: { number: 93, symbol: 'Np', name: 'Neptunium', mass: 237, category: 'Actinide', row: 9, col: 7 },
    94: { number: 94, symbol: 'Pu', name: 'Plutonium', mass: 244, category: 'Actinide', row: 9, col: 8 },
    95: { number: 95, symbol: 'Am', name: 'Americium', mass: 243, category: 'Actinide', row: 9, col: 9 },
    96: { number: 96, symbol: 'Cm', name: 'Curium', mass: 247, category: 'Actinide', row: 9, col: 10 },
    97: { number: 97, symbol: 'Bk', name: 'Berkelium', mass: 247, category: 'Actinide', row: 9, col: 11 },
    98: { number: 98, symbol: 'Cf', name: 'Californium', mass: 251, category: 'Actinide', row: 9, col: 12 },
    99: { number: 99, symbol: 'Es', name: 'Einsteinium', mass: 252, category: 'Actinide', row: 9, col: 13 },
    100: { number: 100, symbol: 'Fm', name: 'Fermium', mass: 257, category: 'Actinide', row: 9, col: 14 },
    101: { number: 101, symbol: 'Md', name: 'Mendelevium', mass: 258, category: 'Actinide', row: 9, col: 15 },
    102: { number: 102, symbol: 'No', name: 'Nobelium', mass: 259, category: 'Actinide', row: 9, col: 16 },
    103: { number: 103, symbol: 'Lr', name: 'Lawrencium', mass: 262, category: 'Actinide', row: 9, col: 17 },
    104: { number: 104, symbol: 'Rf', name: 'Rutherfordium', mass: 267, category: 'Transition Metal', row: 7, col: 4 },
    105: { number: 105, symbol: 'Db', name: 'Dubnium', mass: 270, category: 'Transition Metal', row: 7, col: 5 },
    106: { number: 106, symbol: 'Sg', name: 'Seaborgium', mass: 271, category: 'Transition Metal', row: 7, col: 6 },
    107: { number: 107, symbol: 'Bh', name: 'Bohrium', mass: 270, category: 'Transition Metal', row: 7, col: 7 },
    108: { number: 108, symbol: 'Hs', name: 'Hassium', mass: 277, category: 'Transition Metal', row: 7, col: 8 },
    109: { number: 109, symbol: 'Mt', name: 'Meitnerium', mass: 276, category: 'Transition Metal', row: 7, col: 9 },
    110: { number: 110, symbol: 'Ds', name: 'Darmstadtium', mass: 281, category: 'Transition Metal', row: 7, col: 10 },
    111: { number: 111, symbol: 'Rg', name: 'Roentgenium', mass: 280, category: 'Transition Metal', row: 7, col: 11 },
    112: { number: 112, symbol: 'Cn', name: 'Copernicium', mass: 285, category: 'Transition Metal', row: 7, col: 12 },
    113: { number: 113, symbol: 'Nh', name: 'Nihonium', mass: 284, category: 'Post-transition Metal', row: 7, col: 13 },
    114: { number: 114, symbol: 'Fl', name: 'Flerovium', mass: 289, category: 'Post-transition Metal', row: 7, col: 14 },
    115: { number: 115, symbol: 'Mc', name: 'Moscovium', mass: 288, category: 'Post-transition Metal', row: 7, col: 15 },
    116: { number: 116, symbol: 'Lv', name: 'Livermorium', mass: 293, category: 'Post-transition Metal', row: 7, col: 16 },
    117: { number: 117, symbol: 'Ts', name: 'Tennessine', mass: 294, category: 'Halogen', row: 7, col: 17 },
    118: { number: 118, symbol: 'Og', name: 'Oganesson', mass: 294, category: 'Noble Gas', row: 7, col: 18 }
};

const periodicTable = document.getElementById('periodicTable');
const modal = document.getElementById('modal');
const elementDetails = document.getElementById('elementDetails');
const closeBtn = document.querySelector('.close');
const searchInput = document.getElementById('searchInput');
const randomBtn = document.getElementById('randomElement');

let allElementDivs = [];

function createPeriodicTable() {
    // Create 9 rows and 18 columns grid
    for (let row = 1; row <= 9; row++) {
        for (let col = 1; col <= 18; col++) {
            const elementDiv = document.createElement('div');
            
            // Find element for this position
            const element = Object.values(elements).find(el => el.row === row && el.col === col);

            if (element) {
                elementDiv.className = `element ${element.category.toLowerCase().replace(/[^a-z]/g, '-')}`;
                elementDiv.innerHTML = `
                    <div class="number">${element.number}</div>
                    <div class="symbol">${element.symbol}</div>
                    <div class="name">${element.name}</div>
                    <div class="mass">${element.mass}</div>
                `;
                elementDiv.addEventListener('click', () => {
                    particleSystem.createParticles(elementDiv);
                    showElementDetails(element);
                });

                allElementDivs.push({ element, div: elementDiv });
            } else {
                elementDiv.className = 'element empty';
            }
            
            elementDiv.style.gridRow = row;
            elementDiv.style.gridColumn = col;
            periodicTable.appendChild(elementDiv);
        }
    }

    // Add lanthanide and actinide labels
    const lanthanideLabel = document.createElement('div');
    lanthanideLabel.className = 'element label';
    lanthanideLabel.innerHTML = '<div class="symbol">57-71</div><div class="name">Lanthanides</div>';
    lanthanideLabel.style.gridRow = 6;
    lanthanideLabel.style.gridColumn = 3;
    periodicTable.appendChild(lanthanideLabel);
