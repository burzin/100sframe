(function(){
    'use strict';
    var trash = [],
        stopEqLoop = false,
        selectedOpt,
        screen,
        stack,
        nums = {
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
        ],
        boardOptions = [
            "100s Chart",
            "Addition",
            "Multiplication"
        ],
        colorTable = [
            "",
            "yellow",
            "aquamarine",
            "bisque",
            "lightblue",
            "gold",
            "cyan",
            "gainsboro",
            "cadetblue",
            "greenyellow",
            "honeydew",
            "springgreen",
            "moccasin"
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

    function chooseCellColor(x, y) {
        if (x === 12 || y === 12)  {
            return colorTable[12];
        }
        if (x ===11 || y === 11)  {
            return colorTable[11];
        }
        if (x ===10 || y === 10)  {
            return colorTable[10];
        }
        if (x ===9 || y === 9)  {
            return colorTable[9];
        }
        if (x ===8 || y === 8)  {
            return colorTable[8];
        }
        if (x ===7 || y === 7)  {
            return colorTable[7];
        }
        if (x ===6 || y === 6)  {
            return colorTable[6];
        }
        if (x ===5 || y === 5)  {
            return colorTable[5];
        }
        if (x ===4 || y === 4)  {
            return colorTable[4];
        }
        if (x ===3 || y === 3)  {
            return colorTable[3];
        }
        if (x ===2 || y === 2)  {
            return colorTable[2];
        }
        if (x ===1 || y === 1)  {
            return '';
        }
    }
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
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
        c.innerHTML = '<img id="hundredsTitle" class="titleImage" src="img/numbers1-100.png" alt="">';
        c.setAttribute('colspan', 10);
        t.appendChild(r);
        t.className = 'hundredsTable';
        for(x=0; x < 10; x++){
            r = document.createElement('tr');
            t.appendChild(r);
            for(y=0; y < 10; y++){
                even = i % 2 === 0;
                c = document.createElement('td');
                c.id = 'cell_' + i;
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
        c.innerHTML = '<img id="hundredsTitle" class="titleImage" src="img/addition.png" alt="">';
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
                c.style.background = chooseCellColor(x+1, y+1);
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
        c.innerHTML = '<img id="hundredsTitle" class="titleImage" src="img/multiplication.png" alt="">';
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
                c.style.background = chooseCellColor(x, y);
                b(i, c);
            }
        }
        d.appendChild(t);
        d.className = 'multiChart';
        return d;
    }
    function b(i, c){
        c.onclick = function(){
            alert( "The number is " + i);
        };
    }
    function getTableByIndex(index){
        if(index === '0'){
            selectedOpt = selectOptions.length -1;
            return make100s();
        }else if(index === '1'){
            return makeAdd();
        }else if(index === '2'){
            return makeMulti();
        }
    }
    function position(e) {
        var x = 0, y = 0;
        while (e) {
            x += e.offsetLeft;
            y += e.offsetTop;
            x -= e.scrollLeft;
            y -= e.scrollTop;
            e = e.offsetParent;
        }
        return { x: x, y: y };
    }
    function startEqLoop(add){
        stopEqLoop = false;
        var clickEvent = function(){
            document.body.removeEventListener('click', clickEvent);
            stopEqLoop = true;
        };
        document.body.addEventListener('click', clickEvent);
        async.whilst(function(){
            return !stopEqLoop;
        }, function(callback){
            getEquation(add, function(){
                cleanupTrash();
                callback();
            });
        }, function(){

        });
    }
    function getEquation(add, callback){
        function animateString(aryStates, node, timing, callback){
            var procs = [],
                previousNode = node,
                offset = 0,
                str = node.innerHTML;
            aryStates.map(function(i){
                procs.push(function(done){
                    var clone = node.cloneNode();
                    str += i;
                    clone.innerHTML = str;
                    clone.style.opacity = 0;
                    document.body.appendChild(clone);
                    $(clone).animate({
                        opacity: 1
                    }, timing, function(){
                        $(previousNode).animate({
                            opacity: 0
                        }, timing, function(){
                            previousNode = clone;
                            trash.push(previousNode);
                            done();
                        });
                    });
                });
            });
            async.waterfall(procs, callback);
        }
        var numA = getRandomInt(1, 99),
            numB = getRandomInt(1, 100 - numA),
            numT,
            eq = document.createElement('span'),
            eqa = document.createElement('span'),
            eqOp = document.createElement('span'),
            eqb = document.createElement('span'),
            eqEq = document.createElement('span'),
            eq2 = document.createElement('span'),
            //eq3 = document.createElement('span'),
            h = document.documentElement.clientHeight,
            w = document.documentElement.clientWidth,
            numB1, 
            numB2,
            cell,
            posA,
            //numB3 = '',
            //numB4 = '',
            img = document.getElementById('hundredsTitle'),
            pos = position(img),
            eqcClone,
            eqaClone,
            eqbClone;
        trash.push(eq);
        numB = (numA === numB ? getRandomInt(1, 100-numA) : numB);
        if(numB > numA){
            numT = numA;
            numA = numB;
            numB = numT;
        }
        numB1 = Math.floor(numB / 10);
        numB2 = numB % 10;
        var tens = [];
        if (numB1 === 0) {
            tens.push('0');
        } else {
            for (var i=1; i<=numB1; i++) {
                tens.push(' 10 ' + ' + ');
            }
        }
        tens.push(numB2);
        cell = document.getElementById('cell_' + numA);
        posA = position(cell);
        eqa.innerHTML = numA;
        eqOp.innerHTML = add ? ' + ' : ' - ';
        eqb.innerHTML = numB;
        eqEq.innerHTML = ' = ';
        eq.appendChild(eqa);
        eq.appendChild(eqOp);
        eq.appendChild(eqb);
        eq.appendChild(eqEq);
        document.body.appendChild(eq);
        eq.className = 'eq';
        eq.style.left = (w / 2) - (eq.offsetWidth / 2) + 'px';
        eq.style.top = (h /2) - (eq.offsetHeight/ 2) + 'px';


        // numB3 += (numB2 === 0 ? '' : numB2);
        //numB3 += numB2;
        //numB4 = numB + " = " + '(' + numB1 + ')' + "10's" + " + " + '(' + numB2 + ')' + " " + "1's";  
        //trash.push(eq2, eq3);

        //eq2.innerHTML = (numB + '=' + numB3);
        //eq2.className = 'eq2';
        //eq2.style.left = pos.x + 'px';
        //eq2.style.top = pos.y + 20 + 'px';
        //
        //eq3.innerHTML = numB4;
        //eq3.className = 'eq3';
        //eq3.style.left = pos.x + 50 + 'px';
        //eq3.style.top = pos.y + 50 + 'px';

        //document.body.appendChild(eq3);
        //document.body.appendChild(eq2);

        var keyFrames = [];
        var keyFrameRate = 300;
        keyFrames.push(function(done){
            setTimeout(done, keyFrameRate);
        });

        keyFrames.push(function(done){
            $(eq).animate({
                fontSize: '200%',
                top: pos.y + 'px',
                left: pos.x + 'px'
            }, keyFrameRate, done);
            $(img).animate({
                opacity: 0
            }, keyFrameRate);
        });

        keyFrames.push(function(done){
            // clone for numA
            var pos = position(eqa);
            eqaClone = eq.cloneNode();
            eqaClone.style.top = pos.y + 'px';
            eqaClone.style.left = pos.x + 'px';
            document.body.appendChild(eqaClone);
            eqaClone.innerHTML = numA;
            trash.push(eqaClone);
            $(eqaClone).animate({
                top: posA.y + 'px',
                left: posA.x + 'px',
                fontSize: '100%'
            }, keyFrameRate, done);
        });

        keyFrames.push(function(done){
            $(eqaClone).animate({
                opacity: 0
            }, keyFrameRate * 0.5);
            $(cell).animate({
                backgroundColor: '#DDA0DD'
            }, keyFrameRate * 0.5, done);
        });

        keyFrames.push(function(done){
            var pos = position(eqb);
            var posA = position(eqa);
            eqbClone = eq.cloneNode();
            eqbClone.style.top = pos.y + 'px';
            eqbClone.style.left = pos.x + 'px';
            eqbClone.innerHTML = numB + ' = ';
            document.body.appendChild(eqbClone);
            $(eqbClone).animate({
                top: (pos.y + eq.offsetHeight) + 'px',
                left: posA.x + 'px'
            }, keyFrameRate, done);
        });



        keyFrames.push(function(done){
           animateString(tens, eqbClone, keyFrameRate, done);
        });

        async.waterfall(keyFrames, callback);

    }
    function cleanupTrash(){
        var img = document.getElementById('hundredsTitle'),
            x,
            y,
            i = 1;
        img.style.opacity = '1';
        for(x = 0; x < trash.length; x++){
            if(trash[x].parentNode){
                trash[x].parentNode.removeChild(trash[x]);
            }
        }
    // cell_X is only set for 100s table so check if its not null then clear
       if (document.getElementById('cell_1')) {
        for(x = 0; x < 10; x++){
            for(y = 0; y < 10; y++){
                document.getElementById('cell_' + i++).style.background = '';
            }
        }
       }
        trash = [];
    }
    function showMenu(index){
        var instHtml = '<iframe class="instructions" src="instructions.html"></iframe>',
            opt = new joOption(selectOptions),
            boardOpt = new joOption(boardOptions),
            backButton = new joButton('Back', 'buttonTopMargin'),
            playAddButton = new joButton('Play Addition'),
            playSubButton = new joButton('Play Subtraction'),
            instructions = new joHTML(instHtml);
        backButton.selectEvent.subscribe(function(){
            stack.pop();
        });
        opt.setValue(selectedOpt);
        boardOpt.setValue(index);
        boardOpt.selectEvent.subscribe(loadTableView);
        playAddButton.selectEvent.subscribe(function(index){
            stack.pop();
            startEqLoop(true);
        });
        playSubButton.selectEvent.subscribe(function(index){
            stack.pop();
            startEqLoop(false);
        });
        opt.selectEvent.subscribe(function(index){
            selectedOpt = index;
            var group = opt.data[index];
            selectNumGroup(group.toLowerCase());
            stack.pop();
        });
        return function(){
            cleanupTrash();
            var expando = new joExpando([
                    new joExpandoTitle('Instructions'),
                    new joExpandoContent([instructions])
                ]),
                cardArray = [
                    boardOpt,
                    expando,
                    backButton
                ],
                card;
            if(index === '0'){
                cardArray.unshift(opt);
                cardArray.unshift(playAddButton);
                cardArray.unshift(playSubButton);
            }
            card = new joCard(cardArray);
            stack.push(card);
        };
    }
    function loadTableView(index){
        var menuButton = new joButton('&#x1801;', 'menu'),
            table = getTableByIndex(index),
            card = new joCard([menuButton, table]);
        menuButton.selectEvent.subscribe(showMenu(index));
        stack.push(card);
    }
    function init(){
        jo.load();
        stack = new joStack();
        screen = new joScreen(stack);
        loadTableView('0');
    }

    window.addEventListener('DOMContentLoaded', init);
})();
