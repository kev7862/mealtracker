System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HealthPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HealthPipe = (function () {
                function HealthPipe() {
                }
                HealthPipe.prototype.transform = function (input, args) {
                    var desiredCalorieLevel = args[0];
                    if (desiredCalorieLevel === "low") {
                        return input.filter(function (food) {
                            if (food.calories < 300) {
                                return !food.health;
                            }
                        });
                    }
                    else if (desiredCalorieLevel === "high") {
                        return input.filter(function (food) {
                            if (food.calories > 300) {
                                return !food.health;
                            }
                        });
                    }
                    else {
                        return input;
                    }
                };
                HealthPipe = __decorate([
                    core_1.Pipe({
                        name: "health",
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], HealthPipe);
                return HealthPipe;
            }());
            exports_1("HealthPipe", HealthPipe);
        }
    }
});
//# sourceMappingURL=health.pipe.js.map