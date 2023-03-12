/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Feb 20, 2020
 * @since Feb 26, 2021
 * @since Mar 7, 2023
 * @version 3
 * @desc TS Object Oriented Analog Canvas based Clock
 * @tutorial Adapted from {@link https://www.w3schools.com/graphics/canvas_clock.asp}
 * Also, check out {@link https://gist.github.com/fixiecoder/a6146501aaa8ad3bf885fa30a66ba079}
 */
/** @classdesc Represents an analog clock */
var Clock = /** @class */ (function () {
    /**
     * @description Creates a clock
     * @param containerElement - The HTML that will include the clock
     * @param size - clock size
     */
    function Clock(containerElement, size, centerX, centerY, radius, hands, 
    // By default document.createElement returns a HTMLElementtype which is a generic type.
    // In order to make your app understand it is a canvas element you need to cast it 
    canvas, // Creates A new HTML element: a canvas
    context) {
        if (centerX === void 0) { centerX = 0; }
        if (centerY === void 0) { centerY = 0; }
        if (radius === void 0) { radius = 0; }
        if (hands === void 0) { hands = {}; }
        if (canvas === void 0) { canvas = document.createElement("CANVAS"); }
        if (context === void 0) { context = canvas.getContext('2d'); }
        var _this = this;
        this.containerElement = containerElement;
        this.size = size;
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.hands = hands;
        this.canvas = canvas;
        this.context = context;
        this.renderArrow = function () {
            _this.drawClockFace(_this.context);
            _this.drawNumbers(_this.context);
            _this.drawTime();
            _this.drawCentralCircle(_this.context);
            requestAnimationFrame(_this.renderArrow); // Animate the clock
        };
        this.radius = 0.95 * (this.size / 2);
        this.hands = {
            second: {
                length: this.radius * 0.90,
                color: 'lightgrey',
                width: this.radius * 0.01
            },
            minute: {
                length: this.radius * 0.90,
                color: 'darkgrey',
                width: this.radius * 0.03
            },
            hour: {
                length: this.radius * 0.7,
                color: 'black',
                width: this.radius * 0.05
            }
        };
        this.canvas.width = size;
        this.canvas.height = size;
        this.containerElement.appendChild(this.canvas); // Adds the canvas HTML element as a 'child' of the containerElement (body)
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
        this.context.translate(this.centerX, this.centerY);
        // this.render = this.render.bind(this);
        // this.render();
        // setInterval(this.render, 1000);  // An alternative for animation
        this.renderArrow();
    }
    Clock.prototype.drawClockFace = function (context) {
        var FILL_STYLE = '#333'; // For gradient (external ring)
        context.beginPath();
        context.arc(0, 0, this.radius, 0, 2 * Math.PI);
        context.fillStyle = 'white';
        context.fill();
        var gradient = context.createRadialGradient(0, 0, this.radius * 0.95, 0, 0, this.radius * 1.05);
        gradient.addColorStop(0, FILL_STYLE);
        gradient.addColorStop(0.5, 'white');
        gradient.addColorStop(1, FILL_STYLE);
        context.strokeStyle = gradient;
        context.lineWidth = this.radius * 0.1;
        context.stroke();
        context.beginPath();
        context.arc(0, 0, this.radius * 0.1, 0, 2 * Math.PI);
        context.fillStyle = FILL_STYLE;
        context.fill();
    };
    Clock.prototype.drawNumbers = function (context) {
        context.font = this.radius * 0.15 + 'px arial';
        context.fillStyle = 'black'; // Numbers color
        context.textBaseline = 'middle';
        context.textAlign = 'center';
        for (var hour = 1; hour <= 12; hour++) {
            var RATIO = 0.85; // 85%
            var ANGLE = hour * Math.PI / 6; // Pi/6 = 2*Pi/12
            context.rotate(ANGLE);
            context.translate(0, -this.radius * RATIO);
            context.rotate(-ANGLE);
            context.fillText(hour.toString(), 0, 0);
            context.rotate(ANGLE);
            context.translate(0, this.radius * RATIO);
            context.rotate(-ANGLE);
        }
    };
    Clock.prototype.drawHand = function (handType, context) {
        var NOW = new Date();
        var SECONDS = NOW.getSeconds();
        var MINUTES = NOW.getMinutes();
        var HOURS = NOW.getHours() % 12;
        var HAND = this.hands[handType];
        var angle = 0;
        switch (handType) {
            case 'second':
                angle = (SECONDS * Math.PI / 30);
                break;
            case 'minute':
                angle = (MINUTES * Math.PI / 30) + (SECONDS * Math.PI / (30 * 60));
                break;
            case 'hour':
                angle = (HOURS * Math.PI / 6) + (MINUTES * Math.PI / (6 * 60)) + (SECONDS * Math.PI / (360 * 60));
                break;
            default:
                throw new Error('Error in handType');
                break;
        }
        context.beginPath();
        context.lineWidth = HAND.width;
        context.lineCap = 'round';
        context.strokeStyle = HAND.color;
        context.moveTo(0, 0);
        context.rotate(angle);
        context.lineTo(0, -HAND.length);
        context.stroke();
        context.rotate(-angle);
    };
    Clock.prototype.drawTime = function () {
        this.drawHand('second', this.context);
        this.drawHand('minute', this.context);
        this.drawHand('hour', this.context);
    };
    Clock.prototype.drawCentralCircle = function (context) {
        context.beginPath();
        context.arc(0, 0, this.radius * 0.04, 0, 2 * Math.PI);
        context.fillStyle = 'goldenrod';
        context.fill();
    };
    Clock.prototype.render = function () {
        this.drawClockFace(this.context);
        this.drawNumbers(this.context);
        this.drawTime();
        this.drawCentralCircle(this.context);
        requestAnimationFrame(this.render); // Animate the clock
    };
    return Clock;
}());
var clock = new Clock(document.body, 800);
console.log(clock);
