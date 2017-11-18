import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { GiveLyricsHomepageContainerComponent } from './givelyricshomepagecontainer/givelyricshomepagecontainer.component';
import { NavbarTwoComponent } from './navbar-two/navbar-two.component';
import { ArtistsHomepageComponent } from './artistshomepage/artistshomepage.component';
import { CharitiesHomepageComponent } from './charitieshomepage/charitieshomepage.component';
import { ArtistnavComponent } from './artistshomepage/artistnav/artistnav.component';
import { CartComponent } from './app/cart/cart.component';


import { CountryDisplayComponent } from './artistshomepage/countrydisplay/countrydisplay.component';
import { CountryMenuComponent } from './artistshomepage/countrydisplay/countrymenu/countrymenu.component';
import { CountryArtistsComponent } from './artistshomepage/countrydisplay/countryartists/countryartists.component';
import { CountryArtistsOneComponent } from './artistshomepage/countrydisplay/countryartists/countryartistsone/countryartistsone.component';
import { CountryArtistsTwoComponent } from './artistshomepage/countrydisplay/countryartists/countryartiststwo/countryartiststwo.component';


import { EDMDisplayComponent } from './artistshomepage/edmdisplay/edmdisplay.component';
import { EDMMenuComponent } from './artistshomepage/edmdisplay/edmmenu/edmmenu.component';
import { EDMArtistsComponent } from './artistshomepage/edmdisplay/edmartists/edmartists.component';
import { EDMArtistOneComponent } from './artistshomepage/edmdisplay/edmartists/edmartistone/edmartistone.component';
import { EDMArtistTwoComponent } from './artistshomepage/edmdisplay/edmartists/edmartisttwo/edmartisttwo.component';


import { HipHopDisplayComponent } from './artistshomepage/hiphopsdisplay/hiphopdisplay.component';
import { HipHopMenuComponent } from './artistshomepage/hiphopsdisplay/hiphopmenu/hiphopmenu.component';
import { HipHopArtistsComponent } from './artistshomepage/hiphopsdisplay/hiphopartists/hiphopartists.component';
import { APaakComponent } from './artistshomepage/hiphopsdisplay/hiphopartists/apaak/apaak.component';
import { DannyBrownTwoComponent } from './artistshomepage/hiphopsdisplay/hiphopartists/dannybrown/dannybrown.component';
import { Royceda59Component } from './artistshomepage/hiphopsdisplay/hiphopartists/royceda59/royceda59.component';
import { IcewearvezzoComponent } from './artistshomepage/hiphopsdisplay/hiphopartists/icewearvezzo/icewearvezzo.component';


import { OtherDisplayComponent } from './artistshomepage/otherdisplay/otherdisplay.component';
import { OtherMenuComponent } from './artistshomepage/otherdisplay/othermenu/othermenu.component';
import { OtherArtistsComponent } from './artistshomepage/otherdisplay/otherartists/otherartists.component';
import { OtherArtistsOneComponent } from './artistshomepage/otherdisplay/otherartists/otherartistsone/otherartistsone.component';
import { OtherArtistsTwoComponent } from './artistshomepage/otherdisplay/otherartists/otherartisttwo/otherartisttwo.component';


import { RockDisplayComponent } from './artistshomepage/rocksdisplay/rockdisplay.component';
import { RockMenuComponent } from './artistshomepage/rocksdisplay/rockmenu/rockmenu.component';
import { RockArtistsComponent } from './artistshomepage/rocksdisplay/rockartists/rockartists.component';
import { RockArtistOneComponent } from './artistshomepage/rocksdisplay/rockartists/rockartistone/rockartistone.component';
import { RockArtistTwoComponent } from './artistshomepage/rocksdisplay/rockartists/rockartisttwo/rockartisttwo.component';


import { RBDisplayComponent } from './artistshomepage/rbdisplay/rbdisplay.component';
import { RBMenuComponent } from './artistshomepage/rbdisplay/rbmenu/rbmenu.component';
import { RBArtistsComponent } from './artistshomepage/rbdisplay/rbartists/rbartists.component';
import { DweleComponent } from './artistshomepage/rbdisplay/rbartists/dwele/dwele.component';
import { MonicablaireComponent } from './artistshomepage/rbdisplay/rbartists/monicablaire/monicablaire.component';
import { ArtistdashboardComponent } from './artistdashboard/artistdashboard.component';









@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SocialmediaComponent,
    GiveLyricsHomepageContainerComponent,
    NavbarTwoComponent,
    ArtistsHomepageComponent,
    CharitiesHomepageComponent,
    ArtistnavComponent,
    CartComponent,

    CountryDisplayComponent,
    CountryMenuComponent,
    CountryArtistsComponent,
    EDMDisplayComponent,
    EDMMenuComponent,
    EDMArtistsComponent,


    HipHopDisplayComponent,
    HipHopMenuComponent,
    HipHopArtistsComponent,
    APaakComponent,
    DannyBrownTwoComponent,
    Royceda59Component,
    IcewearvezzoComponent,


    OtherDisplayComponent,
    OtherMenuComponent,
    OtherArtistsComponent,
    RockDisplayComponent,
    RockMenuComponent,
    RockArtistsComponent,

    RBDisplayComponent,
    RBMenuComponent,
    RBArtistsComponent,
    RockArtistOneComponent,
    RockArtistTwoComponent,
    DweleComponent,
    MonicablaireComponent,



    EDMArtistOneComponent,
    EDMArtistTwoComponent,
    OtherArtistsOneComponent,
    OtherArtistsTwoComponent,
    CountryArtistsOneComponent,
    CountryArtistsTwoComponent,
    ArtistdashboardComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
  { path: '', redirectTo: '/givelyricshomepagecontainer', pathMatch: 'full' },
  { path: 'givelyricshomepagecontainer',component: GiveLyricsHomepageContainerComponent },
  { path: 'artistshomepage',component: ArtistsHomepageComponent },
  { path: 'charitieshomepage',  component: CharitiesHomepageComponent },

  { path: 'rockdisplay',  component: RockDisplayComponent },
  { path: 'rockartistone',  component: RockArtistOneComponent },
  { path: 'rockartisttwo',  component: RockArtistTwoComponent },

  { path: 'hiphopdisplay',  component: HipHopDisplayComponent },
  { path: 'apaak',  component: APaakComponent },
  { path: 'dannybrown',  component: DannyBrownTwoComponent },
  { path: 'royceda59',  component: Royceda59Component },
  { path: 'icewearvezzo',  component: IcewearvezzoComponent },


  { path: 'edmdisplay',  component: EDMDisplayComponent },
  { path: 'edmartistone',  component:EDMArtistOneComponent },
  { path: 'edmartisttwo',  component:EDMArtistTwoComponent },

  { path: 'rbdisplay',  component: RBDisplayComponent },
  { path: 'dwele',  component: DweleComponent },
  { path: 'monicablaire',  component: MonicablaireComponent },

  { path: 'otherdisplay',  component: OtherDisplayComponent },
  { path: 'otherartistone',  component: OtherArtistsOneComponent },
  { path: 'otherartisttwo',  component: OtherArtistsTwoComponent },

  { path: 'countrydisplay',  component: CountryDisplayComponent },
  { path: 'countryartistone',  component: CountryArtistsOneComponent },
  { path: 'countryartisttwo',  component: CountryArtistsTwoComponent },







])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
