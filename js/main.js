var nums = {
        even: [],
        odd: [],
        nines: [],
        prime: [],
        all: []
    },
    primes = [7, 9],
    selectOptions = [
        "Odd",
        "Even",
        "Prime",
        "Nines",
        "All"
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
        nums[key][y].style.color = 'black';
        nums[key][y].style.background = 'blue';
    }
}
function make100s(){
    var i = 0,
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
            i++;
            c = document.createElement('td');
            r.appendChild(c);
            c.innerHTML = i;
            (even ? nums.even : nums.odd).push(c);
            if(primes.indexOf(i) !== -1){
                nums.prime.push(c);
            }
            c.className = even ? 'even' : 'odd';
            b(i, c);
        }
    }
    d.appendChild(t);
    d.className = 'hundredsChart';
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
        card = new joCard([label, opt, showInstructions, make100s()]);
    instructions.src = 'instructions.html';
    instructionsView.setContainer(instructions);
    opt.setValue(opt.data.length-1);
    showInstructions.selectEvent.subscribe(function(){
        screen.showPopup(instructionsView);
    });
    opt.selectEvent.subscribe(function(index){
        var group = opt.data[index];
        selectNumGroup(group.toLowerCase());
    });
    screen = new joScreen(stack);
    stack.push(card);
}

window.addEventListener('DOMContentLoaded', init);