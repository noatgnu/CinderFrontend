import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string | null | undefined, searchTerm: string | null | undefined): SafeHtml {
    if (!value) return '';
    if (!searchTerm) return value;

    const regex = new RegExp(`(${this.escapeRegExp(searchTerm)})`, 'gi');
    const highlightedValue = value.replace(regex, '<span class="text-highlight">$1</span>');
    
    return this.sanitizer.bypassSecurityTrustHtml(highlightedValue);
  }

  private escapeRegExp(text: string): string {
    return text.replace(/[-[\]{}()*+?.,\^$|#\s]/g, '\$&');
  }
}
