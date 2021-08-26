import {ExelComponent} from '@/core/ExelComponent';
import {createTable} from './table.template';
import {resizeHandler} from './table.resize';
import {shouldResize} from './functions';

export class Table extends ExelComponent {
  static className = 'exel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable(15);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(event, this.$root);
    }
  }
}
