import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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
import { ImagePage } from '../pages/image/image';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OfficialDimensionsPage,
    PitchingDistancesPage,
    BattingBoxandBaseDimensionsPage,
    PartOneThePitcherPage,
    PartTwoTheBatterPage,
    TheStrikeZonePage,
    FairandFoulBallsPage,
    RunnerHitbyBallPage,
    TheBatterisOutPage,
    TheBatterRunnerisOutPage,
    ForcePlaysPage,
    BattingOutOfOrderPage,
    BaseAwardsPage,
    DeadBallPage,
    PartThreeTheRunnerPage,
    ObstructionPage,
    BaseAwardsThreePage,
    RunnerisOutPage,
    AppealPlaysPage,
    InterferencePlaysPage,
    ScoringRunsPage,
    PartFourTheUmpirePage,
    UmpireDutiesPage,
    PositionofPlayersPage,
    TeamTrainingSessionPage,
    LeagueSchedulePage,
    ImagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OfficialDimensionsPage,
    PitchingDistancesPage,
    BattingBoxandBaseDimensionsPage,
    PartOneThePitcherPage,
    PartTwoTheBatterPage,
    TheStrikeZonePage,
    FairandFoulBallsPage,
    RunnerHitbyBallPage,
    TheBatterisOutPage,
    TheBatterRunnerisOutPage,
    ForcePlaysPage,
    BattingOutOfOrderPage,
    BaseAwardsPage,
    DeadBallPage,
    PartThreeTheRunnerPage,
    ObstructionPage,
    BaseAwardsThreePage,
    RunnerisOutPage,
    AppealPlaysPage,
    InterferencePlaysPage,
    ScoringRunsPage,
    PartFourTheUmpirePage,
    UmpireDutiesPage,
    PositionofPlayersPage,
    TeamTrainingSessionPage,
    LeagueSchedulePage,
    ImagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
