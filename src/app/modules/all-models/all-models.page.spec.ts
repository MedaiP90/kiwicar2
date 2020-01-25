import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllModelsPage } from './all-models.page';

describe('AllModelsPage', () => {
  let component: AllModelsPage;
  let fixture: ComponentFixture<AllModelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllModelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllModelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
