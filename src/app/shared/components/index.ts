// Import components
import { CardUserComponent } from './cards/card-user/card-user.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardLoaderComponent } from './loaders/card-loader/card-loader.component';
import { TitleH1Component } from './titles/title-h1/title-h1.component'
import { TitleH2Component } from './titles/title-h2/title-h2.component';
import { TitleH3Component } from './titles/title-h3/title-h3.component';

export const components: any[]= [
  TitleH1Component,
  TitleH2Component,
  TitleH3Component,
  CardUserComponent,
  CarouselComponent,
  CardLoaderComponent

];

// Export all components
export * from './titles/title-h1/title-h1.component';
export * from './titles/title-h2/title-h2.component';
export * from './titles/title-h3/title-h3.component';
export * from './cards/card-user/card-user.component';
export * from './carousel/carousel.component';
export * from './loaders/card-loader/card-loader.component';




