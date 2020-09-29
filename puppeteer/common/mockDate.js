// const expression = `
// /**
//  * Overwrite Date constructor with configurable current time
//  * @param {object} Date         - The native Date object
//  * @param {Number} year         - Optional. Default year to this.
//  * @param {Number} month        - Optional. Default month to this.
//  * @param {Number} day          - Optional. Default day to this.
//  * @param {Number} minute       - Optional. Default minute to this.
//  * @param {Number} second       - Optional. Default second to this.
//  * @param {Number} milliseconds - Optional. Default milliseconds to this.
//  */
// Date = function (Date, year, month, day, hour, minute, second, milliseconds) {

//     function MyDate() {

//         // Get arguments passed into new Date()
//         var args = Array.prototype.slice.call(arguments);

//         // Add null to start
//         args.unshift(null);

//         // Call new Date() with the original arguments
//         var date = new (Function.prototype.bind.apply(Date, args));

//         if (typeof year !== 'undefined' && arguments.length === 0) {
//             // date.setFullYear(year);
//             date.setFullYear(1970,0,31);
//         }

//         if (typeof year !== 'undefined' && arguments.length === 1) {
//             // date.setMonth(month);
//             date.setMonth(0);
//         }

//         if (typeof year !== 'undefined' && (arguments.length === 0 || arguments.length === 2)) {
//             // date.setDate(day);
//             date.setDate(31);
//         }

//         if (typeof year !== 'undefined' && (arguments.length === 0 || arguments.length === 3)) {
//             // date.setHours(hour);
//             date.setHours(10);
//         }
//         if (typeof minute !== 'undefined' && (arguments.length === 0 || arguments.length === 4)) {
//             date.setMinutes(minute);
//         }
//         if (typeof second !== 'undefined' && (arguments.length === 0 || arguments.length === 5)) {
//             date.setSeconds(second);
//         }
//         if (typeof milliseconds !== 'undefined' && (arguments.length === 0 || arguments.length === 6)) {
//             date.setMilliseconds(milliseconds);
//         }

//         return date;
//     }

//     MyDate.prototype = Date.prototype;

//     return MyDate;

// }(Date, 1970);
// Date.now = () => new Date().getTime();`;

const expression = `const startFrom = 2622000000;
  const diff = Date.now() - startFrom;
  const RealDateImpl = Date;
  Date = function(timestamp) {
    return timestamp !== undefined ? new RealDateImpl(timestamp) : new RealDateImpl(Date.now());
  };
  Date.now = () => RealDateImpl.now() - diff;`;

module.exports = {
  expression
};
