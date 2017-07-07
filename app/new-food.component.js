System.register(['angular2/core', './food.model'], function(exports_1, context_1) {
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
    var core_1, food_model_1;
    var NewFoodComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (food_model_1_1) {
                food_model_1 = food_model_1_1;
            }],
        execute: function() {
            NewFoodComponent = (function () {
                function NewFoodComponent() {
                    this.onSubmitNewFood = new core_1.EventEmitter();
                }
                NewFoodComponent.prototype.addFood = function (userName, userDescription, userCalories) {
                    var newFood = new food_model_1.Food(userName.value, userDescription.value, parseInt(userCalories.value));
                    this.onSubmitNewFood.emit(newFood);
                    userName.value = "";
                    userDescription.value = "";
                    userCalories.value = "";
                };
                NewFoodComponent = __decorate([
                    core_1.Component({
                        selector: 'new-food',
                        outputs: ['onSubmitNewFood'],
                        template: "\n    <div class=\"food-form\">\n      <h4>Add a new Food Item:</h4>\n      <input placeholder=\"Enter item\" class=\"input-md\" #newName>\n      <input placeholder=\"Enter description\" class=\"input-md\" #newDescription>\n      <input placeholder=\"Enter calories\" class=\"input-md\" #newCalories>\n      <br><br>\n      <button class=\"btn\" (click)=\"addFood(newName, newDescription, newCalories)\">Add</button>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewFoodComponent);
                return NewFoodComponent;
            }());
            exports_1("NewFoodComponent", NewFoodComponent);
        }
    }
});
//# sourceMappingURL=new-food.component.js.map