import { Component, OnInit } from "@angular/core";
import { PetService } from "./pet.service";

@Component({
    selector: "chapter11",
    template: `
        <div class="block">
            <h3>Pets</h3>
            <ul>
                <li *ngFor="let pet of pet_data">{{pet}}</li>
            </ul>
        </div>
    `,
    providers: [PetService]
})
export class Chapter11 implements OnInit {
    pet_data: Object[];

    constructor(private petSrv: PetService) {}

    ngOnInit() {
        this.pet_data = this.petSrv.getPets();
    }
}