import {ExelComponent} from '@/core/ExelComponent';
import {createTable} from './table.template';
import {resizeHandler} from './table.resize';
import {isCell, matrix, shouldResize} from './functions';
import {TableSelection} from './TableSelection';
import {$} from '../../core/dom';

export class Table extends ExelComponent {
  static className = 'exel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();
    const $cell = this.$root.find('[data-id="0:0"]');
    this.selection.select($cell);
  }

  toHTML() {
    return createTable(15);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(event, this.$root);
    } else if (isCell(event)) {
      const $target = $(event.target);
      if (event.shiftKey) {
        const $cells = matrix($target, this.selection.current)
            .map(id => this.$root.find(`[data-id="${id}"]`));
        this.selection.selectGroup($cells);
      } else {
        this.selection.select($target);
      }
    }
  }
}
