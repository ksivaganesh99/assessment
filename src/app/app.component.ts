import { Component } from '@angular/core';
import {FormBuilder, FormGroup,ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
favoriteSeason: string;

  seasons = ['Winter','Spring','Summer','Autumn',];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  questions=[
    {stepControl:'secondFormGroup',formGroup:'secondFormGroup',matStepLabel:'Question Two',p:'What is approximate user count for this PRODUCT? ',},
    {stepControl:'thirdFormGroup',formGroup:'thirdFormGroup',matStepLabel:'Question Three',p:'What is count of max concurrent hits to PRODUCT?',},
    {stepControl:'fourthFormGroup',formGroup:'fourthFormGroup',matStepLabel:'Question Four',p:'What are Users geographic locations in ?',},
  ]

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
}

