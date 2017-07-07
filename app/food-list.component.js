System.register(['angular2/core', './food.component', './edit-food-details.component', './new-food.component', './health.pipe'], function(exports_1, context_1) {
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
    var core_1, food_component_1, edit_food_details_component_1, new_food_component_1, health_pipe_1;
    var FoodListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (food_component_1_1) {
                food_component_1 = food_component_1_1;
            },
            function (edit_food_details_component_1_1) {
                edit_food_details_component_1 = edit_food_details_component_1_1;
            },
            function (new_food_component_1_1) {
                new_food_component_1 = new_food_component_1_1;
            },
            function (health_pipe_1_1) {
                health_pipe_1 = health_pipe_1_1;
            }],
        execute: function() {
            FoodListComponent = (function () {
                function FoodListComponent() {
                    this.filterHealth = "all";
                    this.onFoodSelect = new core_1.EventEmitter();
                }
                FoodListComponent.prototype.foodClicked = function (clickedFood) {
                    this.selectedFood = clickedFood;
                    this.onFoodSelect.emit(clickedFood);
                };
                FoodListComponent.prototype.createFood = function (newFood) {
                    this.foodList.push(newFood);
                };
                FoodListComponent.prototype.onChange = function (filterOption) {
                    this.filterHealth = filterOption;
                };
                FoodListComponent = __decorate([
                    core_1.Component({
                        selector: 'food-list',
                        inputs: ['foodList'],
                        outputs: ['onFoodSelect'],
                        pipes: [health_pipe_1.HealthPipe],
                        directives: [food_component_1.FoodComponent, edit_food_details_component_1.EditFoodDetailsComponent, new_food_component_1.NewFoodComponent],
                        template: "\n    <select (change)=\"onChange($event.target.value)\" class=\"filter\">\n      <option value=\"all\" selected=\"selected\">Show All Food Items</option>\n      <option value=\"low\">Show Low Calorie Food Items</option>\n      <option value=\"high\">Show High Calorie Food Items</option>\n    </select>\n    <food-display *ngFor=\"#currentFood of foodList | health:filterHealth\"\n      (click)=\"foodClicked(currentFood)\"\n      [class.selected]=\"currentFood === selectedFood\"\n      [food]=\"currentFood\">\n    </food-display>\n    <edit-food-details *ngIf=\"selectedFood\" [food]=\"selectedFood\">\n    </edit-food-details>\n    <new-food (onSubmitNewFood)=\"createFood($event)\">\n    </new-food>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FoodListComponent);
                return FoodListComponent;
            }());
            exports_1("FoodListComponent", FoodListComponent);
        }
    }
});
//# sourceMappingURL=food-list.component.js.map