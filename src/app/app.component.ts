import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { OfficialDimensionsPage } from '../pages/official-dimensions/official-dimensions';
import { PitchingDistancesPage } from '../pages/pitching-distances/pitching-distances';
import { BattingBoxandBaseDimensionsPage } from '../pages/batting-boxand-base-dimensions/batting-boxand-base-dimensions';
import { PartOneThePitcherPage } from '../pages/part-one-the-pitcher/part-one-the-pitcher';
import { PartTwoTheBatterPage } from '../pages/part-two-the-batter/part-two-the-batter';
import { TheStrikeZonePage } from '../pages/the-strike-zone/the-strike-zone';
import { FairandFoulBallsPage } from '../pages/fairand-foul-balls/fairand-foul-balls';
import { RunnerHitbyBallPage } from '../pages/runner-hitby-ball/runner-hitby-ball';
import { TheBatterisOutPage } from '../pages/the-batteris-out/the-batteris-out';
import { TheBatterRunnerisOutPage } from '../pages/the-batter-runneris-out/the-batter-runneris-out';
import { ForcePlaysPage } from '../pages/force-plays/force-plays';
import { BattingOutOfOrderPage } from '../pages/batting-out-of-order/batting-out-of-order';
import { BaseAwardsPage } from '../pages/base-awards/base-awards';
import { DeadBallPage } from '../pages/dead-ball/dead-ball';
import { PartThreeTheRunnerPage } from '../pages/part-three-the-runner/part-three-the-runner';
import { ObstructionPage } from '../pages/obstruction/obstruction';
import { BaseAwardsThreePage } from '../pages/base-awards-three/base-awards-three';
import { RunnerisOutPage } from '../pages/runneris-out/runneris-out';
import { AppealPlaysPage } from '../pages/appeal-plays/appeal-plays';
import { InterferencePlaysPage } from '../pages/interference-plays/interference-plays';
import { ScoringRunsPage } from '../pages/scoring-runs/scoring-runs';
import { PartFourTheUmpirePage } from '../pages/part-four-the-umpire/part-four-the-umpire';
import { UmpireDutiesPage } from '../pages/umpire-duties/umpire-duties';
import { PositionofPlayersPage } from '../pages/positionof-players/positionof-players';
import { TeamTrainingSessionPage } from '../pages/team-training-session/team-training-session';
import { LeagueSchedulePage } from '../pages/league-schedule/league-schedule';

// Side Menu Component
import { SideMenuContentComponent } from './../shared/side-menu-content/side-menu-content.component';
import { SideMenuSettings } from './../shared/side-menu-content/models/side-menu-settings';
import { MenuOptionModel } from './../shared/side-menu-content/models/menu-option-model';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // Get the instance to call the public methods
	@ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

  rootPage: any = HomePage;

	// Options to show in the SideMenuComponent
	public options: Array<MenuOptionModel>;

	// Settings for the SideMenuComponent
	public sideMenuSettings: SideMenuSettings = {
		accordionMode: true,
		showSelectedOption: true,
		selectedOptionClass: 'active-side-menu-option',
		subOptionIndentation: {
			md: '56px',
			ios: '64px',
			wp: '56px'
		}
	};

  constructor(private platform: Platform,
				private statusBar: StatusBar,
				private splashScreen: SplashScreen,
				private alertCtrl: AlertController,
				private menuCtrl: MenuController) {
		this.initializeApp();
	}

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Initialize some options
			this.initializeOptions();
    });
  }

  private initializeOptions(): void {
		this.options = new Array<MenuOptionModel>();

		// Load simple menu options
		// ------------------------------------------
		this.options.push({
			displayName: 'Home',
			component: HomePage,

			// This option is already selected
			selected: true
		});

    this.options.push({
			displayName: 'Official Dimensions of a Softball Diamond',
			component: OfficialDimensionsPage
		});

    this.options.push({
			displayName: 'Pitching distances',
			component: PitchingDistancesPage
		});

    this.options.push({
			displayName: 'Batting Box and Base Dimensions',
			component: BattingBoxandBaseDimensionsPage
		});

    this.options.push({
			displayName: 'Part 1: The Pitcher',
			component: PartOneThePitcherPage
		});

    this.options.push({
			displayName: 'Part 2: The Batter',
			subItems: [
        {
					displayName: 'The Batter',
					component: PartTwoTheBatterPage
				},
        {
					displayName: 'The Strike Zone',
					component: TheStrikeZonePage
				},
				{
					displayName: 'Fair and Foul Balls',
					component: FairandFoulBallsPage
				},
				{
					displayName: 'Runner Hit by Ball',
					component: RunnerHitbyBallPage
				},
				{
					displayName: 'The Batter is Out',
					component: TheBatterisOutPage
				},
        {
					displayName: 'The Batter-Runner is Out',
					component: TheBatterRunnerisOutPage
				},
        {
					displayName: 'Force Plays',
					component: ForcePlaysPage
				},
        {
					displayName: 'Batting Out Of Order',
					component: BattingOutOfOrderPage
				},
        {
					displayName: 'Base Awards',
					component: BaseAwardsPage
				},
        {
					displayName: 'Dead Ball',
					component: DeadBallPage
				}
			]
		});

    this.options.push({
			displayName: 'Part 3: The Runner',
			subItems: [
				{
					displayName: 'The Runner',
					component: PartThreeTheRunnerPage
				},
				{
					displayName: 'Obstruction',
					component: ObstructionPage
				},
				{
					displayName: 'Base Awards',
					component: BaseAwardsThreePage
				},
				{
					displayName: 'Runner is Out',
					component: RunnerisOutPage
				},
        {
					displayName: 'Appeal Plays',
					component: AppealPlaysPage
				},
        {
					displayName: 'Interference Plays',
					component: InterferencePlaysPage
				},
        {
					displayName: 'Scoring Runs',
					component: ScoringRunsPage
				}
			]
		});

    this.options.push({
			displayName: 'Part 4: The Umpire',
			subItems: [
				{
					displayName: 'The Umpire',
					component: PartFourTheUmpirePage
				},
				{
					displayName: 'Umpire Duties Prior to the Game',
					component: UmpireDutiesPage
				}
			]
		});

    this.options.push({
			displayName: 'Position of players',
			component: PositionofPlayersPage
		});

    this.options.push({
			displayName: 'A Team Training Session',
			component: TeamTrainingSessionPage
		});

    this.options.push({
			displayName: 'How to make a League Schedule',
			component: LeagueSchedulePage
		});
  }
  public selectOption(option: MenuOptionModel): void {
		this.menuCtrl.close().then(() => {
			// Redirect to the selected page
			this.nav.setRoot(option.component);
		});
	}

	public collapseMenuOptions(): void {
		this.sideMenu.collapseAllOptions();
	}

	public presentAlert(message: string): void {
		let alert = this.alertCtrl.create({
			title: 'Information',
			message: message,
			buttons: ['Ok']
		});
		alert.present();
	}

}
