import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { LegendsModule } from 'src/app/shared/components/legends/legends.module';
import { FormsComponentModule } from 'src/app/shared/components/forms/forms.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    LegendsModule,
    FormsComponentModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
