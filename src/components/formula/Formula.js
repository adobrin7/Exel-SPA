import {ExelComponent} from '@/core/ExelComponent';

export class Formula extends ExelComponent {
  static className = 'exel__formula';

  toHTML() {
    return `
      <div class="exel__formula-info">fx</div>
      <div class="exel__formula-input" contenteditable spellcheck="false"></div>
    `;
  }
}
