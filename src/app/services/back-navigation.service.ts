import { Injectable } from '@angular/core';
import { Platform, AlertController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
// tslint:disable-next-line: no-submodule-imports
import { BackButtonEmitter } from '@ionic/angular/dist/providers/platform';
import { INavigationParameters } from '../interfaces/navigation-parameters.interface';

@Injectable({ providedIn: 'root' })
export class BackNavigationService {

    // Private properties

    private backButtonSubscription: Subscription;
    private confirmExitAlert: HTMLIonAlertElement;
    private readonly alertController: AlertController;
    private readonly backButton: BackButtonEmitter;
    private readonly navController: NavController;
    private readonly translateService: TranslateService;

    constructor(
        alertController: AlertController,
        navController: NavController,
        platform: Platform,
        translateService: TranslateService,
    ) {
        this.alertController = alertController;
        this.backButton = platform.backButton;
        this.backButtonSubscription = undefined;
        this.confirmExitAlert = undefined;
        this.navController = navController;
        this.translateService = translateService;
    }

    // Public methods

    /**
     * Subscribe a back navigation function.
     *
     * @param params navigation parameters: { toHome: boolean, inRoot: boolean }
     */
    public subscribeBackNavigation(params: INavigationParameters): void {
        this.unsubscribeBackNavigation();
        this.backButtonSubscription = this.backButton.subscribe(async () => {
            // No parameter provided: the user want to exit the app
            if (params.inRoot) {
                this.presentExitAlertConfirm().then().catch();

                return;
            }

            // A destination has been provided: navigate to that url
            await this.navigateBackTo(params.toHome);
        });
    }

    /**
     * Navigate back in the route tree or back to home.
     *
     * @param home navigate to home or not
     */
    public async navigateBackTo(home: boolean): Promise<void> {
        if (home) {
            await this.navController.navigateRoot('/home', { replaceUrl: true });
        } else {
            this.navController.back();
        }
    }

    public unsubscribeBackNavigation(): void {
        if (this.backButtonSubscription !== undefined) {
            this.backButtonSubscription.unsubscribe();
        }
    }

    // Alert

    private async presentExitAlertConfirm(): Promise<void> {
        if (this.confirmExitAlert !== undefined) {
            return;
        }

        // tslint:disable-next-line: typedef
        this.confirmExitAlert = await this.alertController.create({
            header: this.getTranslatedString('APP.close-title'),
            message: this.getTranslatedString('APP.sure-to-close'),
            buttons: [
                {
                    text: this.getTranslatedString('APP.cancel'),
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (): void => { }, // Do nothing
                },
                {
                    text: this.getTranslatedString('APP.close'),
                    // tslint:disable-next-line: no-string-literal no-unsafe-any
                    handler: (): void => { navigator['app'].exitApp(); }, // Close the app
                },
            ],
        });
        await this.confirmExitAlert.present();
        // tslint:disable-next-line: no-floating-promises
        this.confirmExitAlert.onDidDismiss().then(() => { this.confirmExitAlert = undefined; });
    }

    // Internationalization

    private getTranslatedString(key: string): string {
        // tslint:disable-next-line: typedef
        const translation = this.translateService.instant(key);
        if (typeof translation === 'string') {
            return translation;
        }
    }

}
