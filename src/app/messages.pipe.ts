import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'messages'
})
export class MessagesPipe implements PipeTransform {

    transform(value: string, endIndex?: number): string {
        return value.slice(0, endIndex || 11);
    }
}
