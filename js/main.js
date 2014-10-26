var nums = {
        even: [],
        odd: [],
        fives: [],
        nines: [],
        tens: [],
        prime: [],
        all: []
    },
    primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],
    selectOptions = [
        "Odd",
        "Even",
        "Fives",
        "Tens",
        "Prime",
        "Nines",
        "All"
    ];
   boardOptions = [
        "100s Chart",
        "Addition",
        "Multiplication"
    ];
   colorTable = [
        "",
        "yellow",
        "aqua",
        "bisque",
        "lightblue",
        "cadetblue",
        "cyan",
        "gold",
        "gainsboro",
        "greenyellow",
        "honeydew",
        "mistyrose",
   ];
function selectNumGroup(key){
    var keys = Object.keys(nums),
        y,
        n,
        x;
    for(x = 0; x < keys.length; x++){
        n = nums[keys[x]];
        for(y = 0; y < n.length; y++){
            n[y].style.color = '';
            n[y].style.background = '';
        }
    }
    for(y = 0; y < nums[key].length; y++){
        nums[key][y].style.color = 'red';
       nums[key][y].style.background = '';
    }
}

function chooseCellColor( x, y, i, op) {
 var cellValue;
 var i = i;
 cellValue = (op === 'm' ? x*y : x+y);  
 if ( (i <= cellValue) && (x ===12) || (y === 12))  {
     return colorTable[12];
 }
 if ( (i <= cellValue) &&  ((x ===11) || (y === 11)))  {
     return colorTable[11];
 }
 if ( (i <= cellValue) &&  ((x ===10) || (y === 10)))  {
     return colorTable[10];
 }
 if ( (i <= cellValue) &&  ((x ===9) || (y === 9)))  {
     return colorTable[9];
 }
 if ( (i <= cellValue) &&  ((x ===8) || (y === 8)))  {
     return colorTable[8];
 }
 if ( (i <= cellValue) &&  ((x ===7) || (y === 7)))  {
     return colorTable[7];
 }
 if ( (i <= cellValue) &&  ((x ===6) || (y === 6)))  {
     return colorTable[6];
 }
 if ( (i <= cellValue) &&  ((x ===5) || (y === 5)))  {
     return colorTable[5];
 }
 if ( (i <= cellValue) &&  ((x ===4) || (y === 4)))  {
     return colorTable[4];
 }
 if ( (i <= cellValue) &&  ((x ===3) || (y === 3)))  {
     return colorTable[3];
 }
 if ( (i <= cellValue) &&  ((x ===2) || (y === 2)))  {
     return colorTable[2];
 }
 if ( (i <= cellValue) &&  ((x ===1) || (y === 1)))  {
     return '';
 }
}

function make100s(){
    var i = 1,
        d = document.createElement('div'),
        t = document.createElement('table'),
        r = document.createElement('tr'),
        c = document.createElement('td'),
        x,
        y,
        even;
    r.appendChild(c);
    c.className = 'titleCell';
    c.innerHTML = '<img id="title" src="img/hundreds-chart.png" alt="">';
    c.setAttribute('colspan', 10);
    t.appendChild(r);
    t.className = 'hundredsTable';
    for(x=0; x < 10; x++){
        r = document.createElement('tr');
        t.appendChild(r);
        for(y=0; y < 10; y++){
            even = i % 2 === 0;
            c = document.createElement('td');
            r.appendChild(c);
            c.innerHTML = i;
            (even ? nums.even : nums.odd).push(c);
            if(primes.indexOf(i) !== -1){
                nums.prime.push(c);
            }
            if(i % 5 === 0){
                nums.fives.push(c);
            }
            if(i % 10 === 0){
                nums.tens.push(c);
            }
            if(i % 9 === 0){
                nums.nines.push(c);
            }
            b(i, c);
            i++;
        }
    }
    d.appendChild(t);
    d.className = 'hundredsChart';
    return d;
}
function makeAdd(){
    var i = 1,
        d = document.createElement('div'),
        t = document.createElement('table'),
        r = document.createElement('tr'),
        c = document.createElement('td'),
        x,
        y,
        even;
    r.appendChild(c);
    c.setAttribute('colspan', 12);
    c.className = 'titleCell';
    c.innerHTML = '<img id="title" src="img/hundreds-chart.png" alt="">';
    t.appendChild(r);
    t.className = 'addTable';
    for(x=0; x <= 10; x++){
        r = document.createElement('tr');
        t.appendChild(r);
        for(y=0; y <= 10; y++){
            i = x+y;
            c = document.createElement('td');
            r.appendChild(c);
            c.innerHTML = i;
	    c.style.background = chooseCellColor(x, y, i, 'a');
            b(i, c);
        }
    }
    d.appendChild(t);
    d.className = 'addChart';
    return d;
}
function makeMulti(){
    var i = 1,
        d = document.createElement('div'),
        t = document.createElement('table'),
        r = document.createElement('tr'),
        c = document.createElement('td'),
        x,
        y,
        even;
    r.appendChild(c);
    c.className = 'titleCell';
    c.innerHTML = '<img id="title" src="img/hundreds-chart.png" alt="">';
    c.setAttribute('colspan', 12);
    t.appendChild(r);
    t.className = 'multiTable';
    for(x=1; x <= 12; x++){
        r = document.createElement('tr');
        t.appendChild(r);
        for(y=1; y <= 12; y++){
            i = x*y;
            c = document.createElement('td');
            r.appendChild(c);
            c.innerHTML = i;
	    c.style.background = chooseCellColor(x, y, i, 'm');
//           if ( (i <= 12*12) && (x ===12) || (y === 12))  {
//             c.style.background = 'mistyrose';
//            }
//           if ( (i <= 11*11) &&  ((x ===11) || (y === 11)))  {
//             c.style.background = 'honeydew';
//            }
//           if ( (i <= 10*10) &&  ((x ===10) || (y === 10)))  {
//             c.style.background = 'greenyellow';
//            }
//           if ( (i <= 9*9) &&  ((x ===9) || (y === 9)))  {
//             c.style.background = 'gainsboro';
//            }
//           if ( (i <= 8*8) &&  ((x ===8) || (y === 8)))  {
//             c.style.background = 'gold';
//            }
//           if ( (i <= 7*7) &&  ((x ===7) || (y === 7)))  {
//             c.style.background = 'cyan';
//            }
//           if ( (i <= 6*6) &&  ((x ===6) || (y === 6)))  {
//             c.style.background = 'cadetblue';
//            }
//           if ( (i <= 5*5) &&  ((x ===5) || (y === 5)))  {
//             c.style.background = 'lightblue';
//            }
//           if ( (i <= 4*4) &&  ((x ===4) || (y === 4)))  {
//             c.style.background = 'bisque';
//            }
//           if ( (i <= 3*3) &&  ((x ===3) || (y === 3)))  {
//             c.style.background = 'aqua';
//            }
//           if ( (i <= 2*2) &&  ((x ===2) || (y === 2)))  {
//             c.style.background = 'yellow';
//            }
            b(i, c);
        }
    }
    d.appendChild(t);
    d.className = 'multiChart';
    return d;
}
function b(i, c){
    c.onclick = function(){
        alert(i);
    };
}

function init(){
    jo.load();
    var screen,
        instructionsView = new joView(),
        instructions = document.createElement('iframe'),
        stack = new joStack(),
        showInstructions = new joButton("", "instructionsButton"),
        label = new joLabel("Select"),
        opt = new joOption(selectOptions),
        boardOpt = new joOption(boardOptions);
    instructions.src = 'instructions.html';
    instructionsView.setContainer(instructions);
    opt.setValue(opt.data.length-1);
    showInstructions.selectEvent.subscribe(function(){
        screen.showPopup(instructionsView);
    });
    boardOpt.selectEvent.subscribe(function(index){
        var table;
        if(index === '0'){
            table = make100s();
        }else if(index === '1'){
            table = makeAdd();
        }else if(index === '2'){
            table = makeMulti();
        }
        card = new joCard([label, opt, showInstructions, table, boardOpt]);
        stack.push(card);
    });
    card = new joCard([label, opt, showInstructions, make100s(), boardOpt]);
    opt.selectEvent.subscribe(function(index){
        //stack.push(card);
        var group = opt.data[index];
        selectNumGroup(group.toLowerCase());
    });
    screen = new joScreen(stack);
    stack.push(card);
}

window.addEventListener('DOMContentLoaded', init);
