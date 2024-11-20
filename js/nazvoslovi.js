import { removeAccents } from "./removeAccents.js";
const elems = {
    "vod": { "abbrev": "H", "proton": "1", "group": "1", "name": "vod\u00edk" },
    "hel": { "abbrev": "He", "proton": "2", "group": "18", "name": "helium" },
    "lith": { "abbrev": "Li", "proton": "3", "group": "1", "name": "lithium" },
    "beryl": {
        "abbrev": "Be",
        "proton": "4",
        "group": "2",
        "name": "beryllium"
    },
    "bor": { "abbrev": "B", "proton": "5", "group": "13", "name": "bor" },
    "uhl": { "abbrev": "C", "proton": "6", "group": "14", "name": "uhl\u00edk" },
    "dus": { "abbrev": "N", "proton": "7", "group": "15", "name": "dus\u00edk" },
    "kysl": {
        "abbrev": "O",
        "proton": "8",
        "group": "16",
        "name": "kysl\u00edk"
    },
    "fluor": { "abbrev": "F", "proton": "9", "group": "17", "name": "fluor" },
    "neon": { "abbrev": "Ne", "proton": "10", "group": "18", "name": "neon" },
    "sod": { "abbrev": "Na", "proton": "11", "group": "1", "name": "sod\u00edk" },
    "horec": {
        "abbrev": "Mg",
        "proton": "12",
        "group": "2",
        "name": "ho\u0159\u010d\u00edk"
    },
    "hlin": {
        "abbrev": "Al",
        "proton": "13",
        "group": "13",
        "name": "hlin\u00edk"
    },
    "krem": {
        "abbrev": "Si",
        "proton": "14",
        "group": "14",
        "name": "k\u0159em\u00edk"
    },
    "fosfor": { "abbrev": "P", "proton": "15", "group": "15", "name": "fosfor" },
    "sir": { "abbrev": "S", "proton": "16", "group": "16", "name": "s\u00edra" },
    "chlor": { "abbrev": "Cl", "proton": "17", "group": "17", "name": "chlor" },
    "argon": { "abbrev": "Ar", "proton": "18", "group": "18", "name": "argon" },
    "drasel": {
        "abbrev": "K",
        "proton": "19",
        "group": "1",
        "name": "drasl\u00edk"
    },
    "vapen": {
        "abbrev": "Ca",
        "proton": "20",
        "group": "2",
        "name": "v\u00e1pn\u00edk"
    },
    "skand": { "abbrev": "Sc", "proton": "21", "group": "3", "name": "skandium" },
    "titan": { "abbrev": "Ti", "proton": "22", "group": "4", "name": "titan" },
    "vanad": { "abbrev": "V", "proton": "23", "group": "5", "name": "vanad" },
    "chr": { "abbrev": "Cr", "proton": "24", "group": "6", "name": "chrom" },
    "mangan": { "abbrev": "Mn", "proton": "25", "group": "7", "name": "mangan" },
    "zelez": {
        "abbrev": "Fe",
        "proton": "26",
        "group": "8",
        "name": "\u017eelezo"
    },
    "kobalt": { "abbrev": "Co", "proton": "27", "group": "9", "name": "kobalt" },
    "nikl": { "abbrev": "Ni", "proton": "28", "group": "10", "name": "nikl" },
    "med": {
        "abbrev": "Cu",
        "proton": "29",
        "group": "11",
        "name": "m\u011b\u010f"
    },
    "zin": { "abbrev": "Zn", "proton": "30", "group": "12", "name": "zinek" },
    "gal": { "abbrev": "Ga", "proton": "31", "group": "13", "name": "gallium" },
    "german": {
        "abbrev": "Ge",
        "proton": "32",
        "group": "14",
        "name": "germanium"
    },
    "arsen": { "abbrev": "As", "proton": "33", "group": "15", "name": "arsen" },
    "selen": { "abbrev": "Se", "proton": "34", "group": "16", "name": "selen" },
    "brom": { "abbrev": "Br", "proton": "35", "group": "17", "name": "brom" },
    "krypton": {
        "abbrev": "Kr",
        "proton": "36",
        "group": "18",
        "name": "krypton"
    },
    "rubid": { "abbrev": "Rb", "proton": "37", "group": "1", "name": "rubidium" },
    "stronc": {
        "abbrev": "Sr",
        "proton": "38",
        "group": "2",
        "name": "stroncium"
    },
    "yttr": { "abbrev": "Y", "proton": "39", "group": "3", "name": "yttrium" },
    "zirkon": {
        "abbrev": "Zr",
        "proton": "40",
        "group": "4",
        "name": "zirkonium"
    },
    "niob": { "abbrev": "Nb", "proton": "41", "group": "5", "name": "niob" },
    "molybden": {
        "abbrev": "Mo",
        "proton": "42",
        "group": "6",
        "name": "molybden"
    },
    "technec": {
        "abbrev": "Tc",
        "proton": "43",
        "group": "7",
        "name": "technecium"
    },
    "ruthen": {
        "abbrev": "Ru",
        "proton": "44",
        "group": "8",
        "name": "ruthenium"
    },
    "rhod": { "abbrev": "Rh", "proton": "45", "group": "9", "name": "rhodium" },
    "pallad": {
        "abbrev": "Pd",
        "proton": "46",
        "group": "10",
        "name": "palladium"
    },
    "stribr": {
        "abbrev": "Ag",
        "proton": "47",
        "group": "11",
        "name": "st\u0159\u00edbro"
    },
    "kadm": { "abbrev": "Cd", "proton": "48", "group": "12", "name": "kadmium" },
    "ind": { "abbrev": "In", "proton": "49", "group": "13", "name": "indium" },
    "cin": { "abbrev": "Sn", "proton": "50", "group": "14", "name": "c\u00edn" },
    "antimon": {
        "abbrev": "Sb",
        "proton": "51",
        "group": "15",
        "name": "antimon"
    },
    "tellur": { "abbrev": "Te", "proton": "52", "group": "16", "name": "tellur" },
    "jod": { "abbrev": "I", "proton": "53", "group": "17", "name": "jod" },
    "xenon": { "abbrev": "Xe", "proton": "54", "group": "18", "name": "xenon" },
    "ces": { "abbrev": "Cs", "proton": "55", "group": "1", "name": "cesium" },
    "bary": { "abbrev": "Ba", "proton": "56", "group": "2", "name": "baryum" },
    "lanthan": { "abbrev": "La", "proton": "57", "group": "", "name": "lanthan" },
    "cer": { "abbrev": "Ce", "proton": "58", "group": "", "name": "cer" },
    "praseody": {
        "abbrev": "Pr",
        "proton": "59",
        "group": "",
        "name": "praseodym"
    },
    "neody": { "abbrev": "Nd", "proton": "60", "group": "", "name": "neodym" },
    "prometh": {
        "abbrev": "Pm",
        "proton": "61",
        "group": "",
        "name": "promethium"
    },
    "samar": { "abbrev": "Sm", "proton": "62", "group": "", "name": "samarium" },
    "europ": { "abbrev": "Eu", "proton": "63", "group": "", "name": "europium" },
    "gadolin": {
        "abbrev": "Gd",
        "proton": "64",
        "group": "",
        "name": "gadolinium"
    },
    "terb": { "abbrev": "Tb", "proton": "65", "group": "", "name": "terbium" },
    "dyspros": {
        "abbrev": "Dy",
        "proton": "66",
        "group": "",
        "name": "dysprosium"
    },
    "holm": { "abbrev": "Ho", "proton": "67", "group": "", "name": "holmium" },
    "erb": { "abbrev": "Er", "proton": "68", "group": "", "name": "erbium" },
    "thul": { "abbrev": "Tm", "proton": "69", "group": "", "name": "thulium" },
    "ytterb": {
        "abbrev": "Yb",
        "proton": "70",
        "group": "",
        "name": "ytterbium"
    },
    "lutec": { "abbrev": "Lu", "proton": "71", "group": "3", "name": "lutecium" },
    "hafn": { "abbrev": "Hf", "proton": "72", "group": "4", "name": "hafnium" },
    "tantal": { "abbrev": "Ta", "proton": "73", "group": "5", "name": "tantal" },
    "wolfr": { "abbrev": "W", "proton": "74", "group": "6", "name": "wolfram" },
    "rhen": { "abbrev": "Re", "proton": "75", "group": "7", "name": "rhenium" },
    "osm": { "abbrev": "Os", "proton": "76", "group": "8", "name": "osmium" },
    "irid": { "abbrev": "Ir", "proton": "77", "group": "9", "name": "iridium" },
    "platin": {
        "abbrev": "Pt",
        "proton": "78",
        "group": "10",
        "name": "platina"
    },
    "zlat": { "abbrev": "Au", "proton": "79", "group": "11", "name": "zlato" },
    "rtut": {
        "abbrev": "Hg",
        "proton": "80",
        "group": "12",
        "name": "rtu\u0165"
    },
    "thall": {
        "abbrev": "Tl",
        "proton": "81",
        "group": "13",
        "name": "thallium"
    },
    "olov": { "abbrev": "Pb", "proton": "82", "group": "14", "name": "olovo" },
    "bismut": { "abbrev": "Bi", "proton": "83", "group": "15", "name": "bismut" },
    "polon": {
        "abbrev": "Po",
        "proton": "84",
        "group": "16",
        "name": "polonium"
    },
    "astat": { "abbrev": "At", "proton": "85", "group": "17", "name": "astat" },
    "radon": { "abbrev": "Rn", "proton": "86", "group": "18", "name": "radon" },
    "franc": { "abbrev": "Fr", "proton": "87", "group": "1", "name": "francium" },
    "rad": { "abbrev": "Ra", "proton": "88", "group": "2", "name": "radium" },
    "aktin": { "abbrev": "Ac", "proton": "89", "group": "", "name": "aktinium" },
    "thor": { "abbrev": "Th", "proton": "90", "group": "", "name": "thorium" },
    "protaktin": {
        "abbrev": "Pa",
        "proton": "91",
        "group": "",
        "name": "protaktinium"
    },
    "uran": { "abbrev": "U", "proton": "92", "group": "", "name": "uran" },
    "neptun": {
        "abbrev": "Np",
        "proton": "93",
        "group": "",
        "name": "neptunium"
    },
    "pluton": {
        "abbrev": "Pu",
        "proton": "94",
        "group": "",
        "name": "plutonium"
    },
    "americ": {
        "abbrev": "Am",
        "proton": "95",
        "group": "",
        "name": "americium"
    },
    "cur": { "abbrev": "Cm", "proton": "96", "group": "", "name": "curium" },
    "berkel": {
        "abbrev": "Bk",
        "proton": "97",
        "group": "",
        "name": "berkelium"
    },
    "kaliforn": {
        "abbrev": "Cf",
        "proton": "98",
        "group": "",
        "name": "kalifornium"
    },
    "einstein": {
        "abbrev": "Es",
        "proton": "99",
        "group": "",
        "name": "einsteinium"
    },
    "ferm": { "abbrev": "Fm", "proton": "100", "group": "", "name": "fermium" },
    "mendelev": {
        "abbrev": "Md",
        "proton": "101",
        "group": "",
        "name": "mendelevium"
    },
    "nobel": { "abbrev": "No", "proton": "102", "group": "", "name": "nobelium" },
    "lawrenc": {
        "abbrev": "Lr",
        "proton": "103",
        "group": "3",
        "name": "lawrencium"
    },
    "rutherford": {
        "abbrev": "Rf",
        "proton": "104",
        "group": "4",
        "name": "rutherfordium"
    },
    "dubn": { "abbrev": "Db", "proton": "105", "group": "5", "name": "dubnium" },
    "seaborg": {
        "abbrev": "Sg",
        "proton": "106",
        "group": "6",
        "name": "seaborgium"
    },
    "bohr": { "abbrev": "Bh", "proton": "107", "group": "7", "name": "bohrium" },
    "hass": { "abbrev": "Hs", "proton": "108", "group": "8", "name": "hassium" },
    "meitner": {
        "abbrev": "Mt",
        "proton": "109",
        "group": "9",
        "name": "meitnerium"
    },
    "darmstadt": {
        "abbrev": "Ds",
        "proton": "110",
        "group": "10",
        "name": "darmstadtium"
    },
    "roentgen": {
        "abbrev": "Rg",
        "proton": "111",
        "group": "11",
        "name": "roentgenium"
    },
    "kopernic": {
        "abbrev": "Cn",
        "proton": "112",
        "group": "12",
        "name": "kopernicium"
    },
    "nihon": {
        "abbrev": "Nh",
        "proton": "113",
        "group": "13",
        "name": "nihonium"
    },
    "flerov": {
        "abbrev": "Fl",
        "proton": "114",
        "group": "14",
        "name": "flerovium"
    },
    "moscov": {
        "abbrev": "Mc",
        "proton": "115",
        "group": "15",
        "name": "moscovium"
    },
    "livermor": {
        "abbrev": "Lv",
        "proton": "116",
        "group": "16",
        "name": "livermorium"
    },
    "tennessin": {
        "abbrev": "Ts",
        "proton": "117",
        "group": "17",
        "name": "tennessin"
    },
    "oganesson": {
        "abbrev": "Og",
        "proton": "118",
        "group": "18",
        "name": "oganesson"
    }
};
const anions = {
    "oxid": { sum: ["O", 1], charge: -2 },
    "kyanid": { sum: ["CN", 1], charge: -1 },
    "chlorid": { sum: ["Cl", 1], charge: -1 },
    "bromid": { sum: ["Br", 1], charge: -1 },
    "fluorid": { sum: ["F", 1], charge: -1 },
    "jodid": { sum: ["I", 1], charge: -1 },
    "disulfid": { sum: ["S", 2], charge: -2 },
    "hydrogensulfid": { sum: ["HS", 1], charge: -1 },
    "sulfid": { sum: ["S", 1], charge: -2 },
    "ditellurid": { sum: ["Te", 2], charge: -2 },
    "hydrogentellurid": { sum: ["HTe", 1], charge: -1 },
    "tellurid": { sum: ["Te", 1], charge: -2 },
    "diselenid": { sum: ["Se", 2], charge: -2 },
    "hydrogenselenid": { sum: ["HSe", 1], charge: -1 },
    "selenid": { sum: ["Se", 1], charge: -2 },
    "peroxid": { sum: ["O", 2], charge: -2 },
    "hydroxid": { sum: ["OH", 1], charge: -1 },
    "hydrid": { sum: ["H", 1], charge: -1 },
    "ozonid": { sum: ["O", 3], charge: -3 },
    "azid": { sum: ["N", 3], charge: -1 },
};
const kationEndings = ["ny", "naty", "ity", "icity", "cny", "ovy", "isty", "icely"].reverse();
const acidEndings = ["na", "nata", "ita", "icita", "cna", "ova", "ista", "icela"].reverse();
const saltEndings = ["nan", "natan", "itan", "icitan", "cnan", "an", "istan", "icelan"].reverse();
const numbers = ["mono", "di", "tri", "tetra", "penta", "hexa", "septa", "okta", "nona", "deka"];
const except = { "peroxid vodiku": [["H", 2], ["O", 2]] };
const acidExcept = { "fosforecna": "trihydrogenfosforecna", "jodista": "pentahydrogenjodista" };
export function convert(name) {
    name = removeAccents(name);
    var words = name.split(" ");
    if (Object.keys(except).includes(name)) {
        return except[name];
    }
    else if (words[0] == "kyselina") {
        if (name.includes("vodikova")) {
            return bezOKyseliny(words[1]).concat(["(l)"]);
        }
        else {
            return kyselina(words[1]);
        }
    }
    else if (words[0].endsWith("vodik")) {
        return bezOKyseliny(words[0]).concat(["(g)"]);
    }
    else if (words[0].endsWith("n") || words[0].endsWith("id")) {
        var anion;
        if (words[0].endsWith("n")) {
            anion = saltAnion(words[0]);
        }
        else {
            anion = anions[words[0]];
        }
        var kat = kation(words[1]);
        var quantity = reduce(Math.abs(anion.charge), Math.abs(kat.charge));
        return [[kat.sum, quantity[0]], [anion.sum, quantity[1]]];
    }
}
function getOxc(name, endings) {
    var oxc = 0;
    var maxMatch = 0;
    for (const end of endings) {
        if (name.endsWith(end)) {
            if (end.length > maxMatch) {
                maxMatch = end.length;
                oxc = endings.indexOf(end);
            }
        }
    }
    oxc = 8 - oxc;
    return oxc;
}
function getElem(name) {
    var element = "";
    for (const elem of Object.keys(elems)) {
        if (name.includes(elem)) {
            element = elems[elem].abbrev;
            break;
        }
    }
    if (element == "")
        throw Error("Unknown element");
    return element;
}
function reduce(a, b) {
    var gcd = (a, b) => {
        return b ? gcd(b, a % b) : a;
    };
    var gcd_v = gcd(a, b);
    return [a / gcd_v, b / gcd_v];
}
function kation(name) {
    var oxc = getOxc(name, kationEndings);
    var element = getElem(name);
    return { sum: element, charge: oxc };
}
function bezOKyseliny(name) {
    for (const anion of Object.keys(anions)) {
        if (name.startsWith(anion.replace("id", ""))) {
            const anion_H = anions[anion];
            return [["H", -1 * anion_H.charge], anion_H.sum];
        }
    }
    throw Error("Unknown anion");
}
function kyselina(name) {
    var hydrogen = 1;
    var quantity = 1;
    var oxc = getOxc(name, acidEndings);
    if (oxc % 2 == 0) {
        hydrogen = 2;
    }
    var element = getElem(name);
    if (Object.keys(acidExcept).includes(name)) {
        name = acidExcept[name];
    }
    for (const num of numbers) {
        if (name.startsWith(num + "hydrogen")) {
            hydrogen = numbers.indexOf(num) + 1;
        }
        if (name.replace(num + "hydrogen", "").startsWith(num)) {
            quantity = numbers.indexOf(num) + 1;
        }
    }
    return [["H", hydrogen], [element, quantity], ["O", (hydrogen + (quantity * oxc)) / 2]];
}
function saltAnion(name) {
    var hydrogen = 0;
    var oxc = getOxc(name, saltEndings);
    name = name.replace(saltEndings[8 - oxc], acidEndings[8 - oxc]);
    if (name.includes("hydrogen")) {
        hydrogen = 1;
    }
    else {
        for (const num of numbers) {
            if (name.includes(num + "hydrogen")) {
                name = name.replace(num + "hydrogen", "");
                hydrogen = numbers.indexOf(num) + 1;
            }
        }
    }
    var acid = kyselina(name);
    var charge = -acid[0][1] + hydrogen;
    if (hydrogen == 0) {
        acid.shift();
    }
    else {
        acid[0][1] = hydrogen;
    }
    return { sum: acid, charge: charge };
}
