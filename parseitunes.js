var page = require('webpage').create(), 
    system = require('system'),
    url;

if (system.args.length !== 2) {
    console.log('Usage: phantomjs.exe parseitunes.js url');
    phantom.exit(1);
} else {
    url = system.args[1];
    parse(url);

}

function parse(url) {
    page.open(url, function (status) {
        if (status === 'fail') {
            console.log('url failed');            

        } else {
            console.log('parsing..');
            var data = page.evaluate(function() {
                return document.querySelector('#left-stack img.artwork').src;

            });
            console.log(data);
        }

        window.setTimeout(function() {
            phantom.exit();
        },3000);

    });

}