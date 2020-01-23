import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(list: any[], searchTerm: string, attribute: string): any {
    return (list || []).filter((item: any) => {
      if (!searchTerm) {
        return list;
      }
      const valueToFilter = item[attribute];

      if (!valueToFilter) {
        return false;
      }

      return (
        valueToFilter
          .toString()
          .toLowerCase()
          .indexOf(searchTerm.toLowerCase()) !== -1
      );
    });
  }
}
