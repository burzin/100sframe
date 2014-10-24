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
            c.className = even ? 'even' : 'odd';
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
    c.innerHTML = 'Addition';
    c.setAttribute('colspan', 12);
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
    c.innerHTML = 'Multiplication';
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
        boardOpt = new joOption(boardOptions),
        //card = new joCard([label, opt, showInstructions, make100s()]);
        //card = new joCard([label, opt, showInstructions, makeMulti()]);
        card = new joCard([label, opt, showInstructions, makeAdd(), boardOpt]);
    instructions.src = 'instructions.html';
    instructionsView.setContainer(instructions);
    opt.setValue(opt.data.length-1);
    showInstructions.selectEvent.subscribe(function(){
        screen.showPopup(instructionsView);
    });
    opt.selectEvent.subscribe(function(index){
        //stack.push(card);
        var group = opt.data[index];
        selectNumGroup(group.toLowerCase());
    });
    screen = new joScreen(stack);
    stack.push(card);
}

window.addEventListener('DOMContentLoaded', init);
