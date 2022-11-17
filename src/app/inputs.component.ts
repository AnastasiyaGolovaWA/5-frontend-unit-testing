import {Component, EventEmitter, Output} from '@angular/core';
import {CalcData} from "./app.component";

@Component({
  selector: 'inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./app.component.css']
})

export class InputsComponent {
  @Output() calcDataEvent = new EventEmitter<CalcData>();

  inputNum1: string = '1';
  inputNum2: string = '1';

  operations = [
    "Сложить",
    "Вычесть",
    "Поделить",
    "Умножить"
  ];
  inputSelectedValue = (this.operations)[0];

  systems = [
    "2",
    "8",
    "10",
    "16"
  ];
  inputSelectedValueSystem = (this.systems)[0];

  emitCalcData() {
    this.inputNum2 = this.inputNum2;
    const calcData: CalcData = {
      num1: this.inputNum1,
      num2: this.inputNum2,
      selectedValue: this.inputSelectedValue,
      system: this.inputSelectedValueSystem
    };

    this.calcDataEvent.emit(calcData);
  }
}
