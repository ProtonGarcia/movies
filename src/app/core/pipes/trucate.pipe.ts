import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: any[]): string {
    // Validate that the input value is a string
    if (typeof value !== 'string') {
      console.warn('Invalid input for truncate pipe. Expected a string.');
      return ''; // Return an empty string for invalid input
    }

    const limit = args && args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args && args.length > 1 ? args[1] : '...';

    // Handle optional properties (e.g., title, description)
    const truncatedValue = value.length > limit ? value.substring(0, limit) + trail : value;

    return truncatedValue;
  }
}
