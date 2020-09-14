var Links = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            console.log(alist[i]);
            alist[i].style.color = color;
            i++;
        }
    }
}

var Body = {
    setColor: function (color) {
        var target = document.querySelector('body');
        target.style.color = color;
    },
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'Night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'Day';

        Links.setColor('yellow');
    }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'Night';

        Links.setColor('blue');
    }
}