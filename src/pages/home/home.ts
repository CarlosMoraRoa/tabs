import { Component, Renderer } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OSMD } from 'opensheetmusicdisplay';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
declare var require;
const Vex = require('vexflow');
//import { MusicXmlRenderer } from 'vexflow-musicxml';
//import * as Vex from 'vexmxl';
//const Vex = require('vexflow-musicxml/src/index')
//import { Vex } from 'vexflow-musicxml/src/index';
import * as MusicXML from 'musicxml-interfaces/lib';
import 'whatwg-fetch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ScreenOrientation
  ]
})
export class HomePage {
  vf: any;
  img: any;
  constructor(
    public navCtrl: NavController, 
    private screenOrientation: ScreenOrientation,
  ) {
  }

  ngAfterViewInit() {
    ///////////////////////////////////////////////////////////
    //With Vex
    //console.dir(Vex);
    //var div = document.getElementById("display");
    //var renderer = new Vex.Vex.Flow.MusicXmlRenderer('assets/xml/Himno-Coro.xml', div);

    //var vex = Vex;
    //var renderer = Vex.Flow.MusicXmlRenderer('assets/xml/Himno-Coro.xml', div);
    
    ////////////////////////////////////////////////////////////
    //With standard vexflow
    /*const VF = Vex.Flow;
    
    // Create an SVG renderer and attach it to the DIV element named "boo".
    var div = document.getElementById("display")
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
    
    // Size our svg:
    renderer.resize(500, 500);
    
    // And get a drawing context:
    var context = renderer.getContext();

    // Create a stave at position 10, 40 of width 400 on the canvas.
    var stave = new VF.Stave(10, 40, 400);

    // Add a clef and time signature.
    stave.addClef("treble").addTimeSignature("4/4");

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    var notes = [
      // A quarter-note C.
      new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),
    
      // A quarter-note D.
      new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),
    
      // A quarter-note rest. Note that the key (b/4) specifies the vertical
      // position of the rest.
      new VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "qr" }),
    
      // A C-Major chord.
      new VF.StaveNote({clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q" })
    ];
    
    // Create a voice in 4/4 and add above notes
    var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
    voice.addTickables(notes);
    
    // Format and justify the notes to 400 pixels.
    var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
    
    // Render voice
    voice.draw(context, stave);
    
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    //With OPENSHEETMUSIC
    /*
    this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY;
    var div = document.getElementById("display");
    let osmd = new OSMD(div);
    osmd.load('assets/xml/Himno-Coro.xml')
      .then(() => osmd.render(),
      (err) => console.log(err));
    */
    ////////////////////////////////////////////////////////////
  }

}
