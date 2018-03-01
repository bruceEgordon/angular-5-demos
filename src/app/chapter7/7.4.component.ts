import { Component } from '@angular/core';

@Component({
    selector: "chapter7",
    template: `
        <h3>ngIf with Variable Example</h3>
        <div *ngIf="things.car; let car">
            Nice {{car}}!
        </div>
    `
})
export class Chapter7 {
    things = {car: "Ferrari", shoes: "Nike", watch: "Rolex"};
};