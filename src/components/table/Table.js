import {ExelComponent} from '@/core/ExelComponent';

export class Table extends ExelComponent {
  static className = 'exel__table';

  toHTML() {
    return `
      <div class="exel__table-row row">
                <div class="row__info">

                </div>
                <div class="row__data">
                    <div class="exel__table-column column">
                        A
                    </div>
                    <div class="exel__table-column column">
                        B
                    </div>
                    <div class="exel__table-column column">
                        C
                    </div>
                </div>
            </div>
            <div class="exel__table-row row">
                <div class="row__info">
                    1
                </div>
                <div class="row__data">
                    <div class="exel__table-cell" contenteditable="true">
                        2
                    </div>
                    <div class="exel__table-cell exel__table-cell_selected">
                        2
                    </div>
                    <div class="exel__table-cell">
                        2
                    </div>
                </div>
            </div>

            <div class="exel__table-row row">
                <div class="row__info">
                    2
                </div>
                <div class="row__data">
                </div>
            </div>
    `;
  }
}
