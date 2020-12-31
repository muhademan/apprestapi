// tugasnya 
// datanya kodenya benar2 dijalankan dengan ketat use strict
'use strict';

exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'values': values
    }

    res.json(data);
    res.end();
};