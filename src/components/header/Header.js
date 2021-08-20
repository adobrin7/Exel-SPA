import {ExelComponent} from '@/core/ExelComponent';

export class Header extends ExelComponent {
  static className = 'exel__header';

  toHTML() {
    return `
      <input type="text" class="exel__header-input" value="New table">
      
      <div>

        <div class="exel__header-button">
          <i class="material-icons">exit_to_app</i>
        </div>

        <div class="exel__header-button">
          <i class="material-icons">delete</i>
        </div>

      </div>
    `;
  }
}

