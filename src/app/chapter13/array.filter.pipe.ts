import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

@Pipe({
    name: "arrayfilter"
})
export class ArrayFilterPipe implements PipeTransform {
    transform(array_instance, filter_term) {
        return array_instance.filter(function(item) {
            return item.includes(filter_term);
        });
    }
}