import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Official Dimensions of a Softball Diamond', component: OfficialDimensionsPage },
      { title: 'Pitching distances', component: PitchingDistancesPage },
      { title: 'Batting Box and Base Dimensions', component: BattingBoxandBaseDimensionsPage },
      { title: 'Part 1: The Pitcher', component: PartOneThePitcherPage },
      { title: 'Part 2: The Batter', component: PartTwoTheBatterPage },
      { title: 'The Strike Zone', component: TheStrikeZonePage },
      { title: 'Fair and Foul Balls', component: FairandFoulBallsPage },
      { title: 'Runner Hit by Ball', component: RunnerHitbyBallPage },
      { title: 'The Batter is Out', component: TheBatterisOutPage },
      { title: 'The Batter-Runner is Out', component: TheBatterRunnerisOutPage },
      { title: 'Force Plays', component: ForcePlaysPage },
      { title: 'Batting Out Of Order', component: BattingOutOfOrderPage },
      { title: 'Base Awards', component: BaseAwardsPage },
      { title: 'Dead Ball', component: DeadBallPage },
      { title: 'Part 3: The Runner', component: PartThreeTheRunnerPage },
      { title: 'Obstruction', component: ObstructionPage },
      { title: 'Base Awards', component: BaseAwardsThreePage },
      { title: 'Runner is Out', component: RunnerisOutPage },
      { title: 'Appeal Plays', component: AppealPlaysPage },
      { title: 'Interference Plays', component: InterferencePlaysPage },
      { title: 'Scoring Runs', component: ScoringRunsPage },
      { title: 'Part 4: The Umpire', component: PartFourTheUmpirePage },
      { title: 'Umpire Duties Prior to the Game', component: UmpireDutiesPage },
      { title: 'Position of players', component: PositionofPlayersPage },
      { title: 'A Team Training Session', component: TeamTrainingSessionPage },
      { title: 'How to make a League Schedule', component: LeagueSchedulePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
