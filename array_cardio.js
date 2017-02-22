const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn',
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William'
];

function inventors_from_1500(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].year >= 1500 && array[i].year < 1600) {
            console.log("Birth Year:" + " " + array[i].year + "," + " " + "Died: " + array[i].passed + "," + " " + "Name:" + " " + array[i].first + " " + array[i].last);
        }
    }
}

function return_all_names(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i].first + " " + array[i].last);
    }
}


function sort_by_birthday(array) {
    array.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        } else {
            return -1;
        }
    });
    for (var i = 0; i < array.length; i++) {
        console.log("Birth Year:" + " " + array[i].year + "," + " " + "Name:" + " " + " " + array[i].last + ", " + array[i].first);
    }
}


const oldest = inventors.sort(function (a, b) {
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    if (lastInventor > nextInventor) {
        return -1;
    } else {
        return 1;
    }
});


function log_everything() {
    var blank_space = " ";

    inventors_from_1500(inventors);
    console.log(blank_space); // set a blank string to separate everything on the console.
    return_all_names(inventors);

    console.log(blank_space);
    sort_by_birthday(inventors);

    console.log(blank_space);
    console.table(oldest);

    console.log(blank_space);
    console.log(people);
    console.table(inventors);
}

log_everything();
