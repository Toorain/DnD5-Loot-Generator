import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { LevelChoiceComponent } from './levelChoice/levelChoice.component';
import { LevelChoiceHoardComponent } from './levelChoiceHoard/levelChoiceHoard.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [
    Tab1Page,
    LevelChoiceComponent,
    LevelChoiceHoardComponent
  ]
})
export class Tab1PageModule {}
