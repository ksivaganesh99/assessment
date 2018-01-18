import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatStepperModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatToolbarModule,MatListModule,MatRadioModule} from '@angular/material'; 

@NgModule({

    imports:[MatStepperModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatToolbarModule,MatListModule,MatRadioModule],
    exports:[MatStepperModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatToolbarModule,MatListModule,MatRadioModule]
})

export class MaterialModule{

}
