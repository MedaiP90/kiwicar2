import { BackNavigationService } from '../services/back-navigation.service';
import { INavigationParameters } from '../interfaces/navigation-parameters.interface';

export abstract class AbstractBackNavigationPage {

    protected readonly backNavigationService: BackNavigationService;
    protected readonly navigationParams: { toHome: boolean; inRoot: boolean };

    constructor(
        backNavigationService: BackNavigationService,
        navigationParams: INavigationParameters,
    ) {
        this.backNavigationService = backNavigationService;
        this.navigationParams = navigationParams;
    }

    public async ionViewDidEnter(): Promise<void> {
        this.backNavigationService.subscribeBackNavigation(this.navigationParams);
    }

}
