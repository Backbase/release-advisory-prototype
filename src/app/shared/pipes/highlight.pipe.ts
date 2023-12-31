import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch',
  standalone: true,
})
export class HighlightSearchPipe implements PipeTransform {
  transform(value: string, search: string): string {
    const valueStr = value + ''; // Ensure numeric values are converted to strings
    return valueStr.replace(
      new RegExp(
        '(?![^&;]+;)(?!<[^<>]*)(' + search + ')(?![^<>]*>)(?![^&;]+;)',
        'gi'
      ),
      '<strong class="your-class">$1</strong>'
    );
  }
}
