const moment = require('moment')
dateTo = moment().subtract(1, 'd').format('YYYY-MM-DD');
dateFrom = moment().subtract(7, 'd').format('YYYY-MM-DD');
console.log(dateTo)
console.log(dateFrom)