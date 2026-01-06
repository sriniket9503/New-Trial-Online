/************************ 
 * Trialexperiment *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'TrialExperiment';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
    'Gender': '',
    'Age': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color((-1.0000, -1.0000, -1.0000)),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeScreenRoutineBegin());
flowScheduler.add(WelcomeScreenRoutineEachFrame());
flowScheduler.add(WelcomeScreenRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(exitRoutineRoutineBegin());
flowScheduler.add(exitRoutineRoutineEachFrame());
flowScheduler.add(exitRoutineRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'loopTemplate1.xlsx', 'path': 'loopTemplate1.xlsx'},
    {'name': 'images/Wallet.jpg', 'path': 'images/Wallet.jpg'},
    {'name': 'images/TrolleyImpersonal.jpg', 'path': 'images/TrolleyImpersonal.jpg'},
    {'name': 'images/Poisoning.jpg', 'path': 'images/Poisoning.jpg'},
    {'name': 'images/Transplant.jpg', 'path': 'images/Transplant.jpg'},
    {'name': 'images/HangSon.jpg', 'path': 'images/HangSon.jpg'},
    {'name': 'images/TrolleyPersonal.jpg', 'path': 'images/TrolleyPersonal.jpg'},
    {'name': 'images/Baby.jpg', 'path': 'images/Baby.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'images/Baby.jpg', 'path': 'images/Baby.jpg'},
    {'name': 'images/HangSon.jpg', 'path': 'images/HangSon.jpg'},
    {'name': 'images/Poisoning.jpg', 'path': 'images/Poisoning.jpg'},
    {'name': 'images/Transplant.jpg', 'path': 'images/Transplant.jpg'},
    {'name': 'images/TrolleyImpersonal.jpg', 'path': 'images/TrolleyImpersonal.jpg'},
    {'name': 'images/TrolleyPersonal.jpg', 'path': 'images/TrolleyPersonal.jpg'},
    {'name': 'images/Wallet.jpg', 'path': 'images/Wallet.jpg'},
    {'name': 'loopTemplate1.xlsx', 'path': 'loopTemplate1.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var WelcomeScreenClock;
var text;
var pressSpace;
var TrialClock;
var textDilemma;
var key_resp_YesNo;
var imagesDilemmas;
var exitRoutineClock;
var text_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "WelcomeScreen"
  WelcomeScreenClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Directions (Please read it carefully)  \n\nThank you for participating in our survey. The data we collect from you will be anonymous and completely confidential. If you have already participated in this study, please tell the experimenter now.  \n\nOn the following page you will be presented with a description of a situation and an action that a person in that situation (Joe) might perform in response to that situation. Your job is to tell us would you do the specified action. \nIf your answer is YES, then you must press Y and if your answer is NO, press N.\n\nNote that you will NOT be asked to say whether you think Mr. Jones, yourself, or anyone else would actually perform this action in this situation. The questions concern the action’s moral acceptability, and not what Mr. Jones, yourself, or anyone else would actually do in the situation described.  You might feel that the situation as we describe it is not realistic. For example, it might say that if Joe does X, then Y will happen, and you might think that this is not realistic, that Y might not necessarily happen if Mr. Jones does X. If you find yourself having these sorts of doubts, “suspend disbelief” just as you would at an unrealistic movie and assume that this situation really is the way it’s described.  Likewise, you may feel that you need more information than is provided about the situation before you can give your answer. If this happens, you should make  your best guess about what you think the situation is like without making any  unnecessary assumptions. For example, if it doesn’t say that the other person in the situation is related to Mr. Jones, then you should assume that Joe and the other person are unrelated.  \n\nPlease proceed to the next page by clicking on the SPACEBAR',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((1.0000, 1.0000, 1.0000)),  opacity: undefined,
    depth: 0.0 
  });
  
  pressSpace = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Trial"
  TrialClock = new util.Clock();
  textDilemma = new visual.TextStim({
    win: psychoJS.window,
    name: 'textDilemma',
    text: '',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, (- 0.2)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((1.0000, 1.0000, 1.0000)),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_YesNo = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  imagesDilemmas = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imagesDilemmas', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "exitRoutine"
  exitRoutineClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Please wait while we save your results... ',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((1.0000, 1.0000, 1.0000)),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var WelcomeScreenMaxDurationReached;
var _pressSpace_allKeys;
var WelcomeScreenMaxDuration;
var WelcomeScreenComponents;
function WelcomeScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WelcomeScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    WelcomeScreenClock.reset();
    routineTimer.reset();
    WelcomeScreenMaxDurationReached = false;
    // update component parameters for each repeat
    pressSpace.keys = undefined;
    pressSpace.rt = undefined;
    _pressSpace_allKeys = [];
    psychoJS.experiment.addData('WelcomeScreen.started', globalClock.getTime());
    WelcomeScreenMaxDuration = null
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(text);
    WelcomeScreenComponents.push(pressSpace);
    
    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WelcomeScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WelcomeScreen' ---
    // get current time
    t = WelcomeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *pressSpace* updates
    if (t >= 0.0 && pressSpace.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressSpace.tStart = t;  // (not accounting for frame time here)
      pressSpace.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pressSpace.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pressSpace.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pressSpace.clearEvents(); });
    }
    
    // if pressSpace is active this frame...
    if (pressSpace.status === PsychoJS.Status.STARTED) {
      let theseKeys = pressSpace.getKeys({
        keyList: typeof ['space',] === 'string' ? [['space',]] : ['space',], 
        waitRelease: false
      });
      _pressSpace_allKeys = _pressSpace_allKeys.concat(theseKeys);
      if (_pressSpace_allKeys.length > 0) {
        pressSpace.keys = _pressSpace_allKeys[_pressSpace_allKeys.length - 1].name;  // just the last key pressed
        pressSpace.rt = _pressSpace_allKeys[_pressSpace_allKeys.length - 1].rt;
        pressSpace.duration = _pressSpace_allKeys[_pressSpace_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WelcomeScreen' ---
    for (const thisComponent of WelcomeScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('WelcomeScreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(pressSpace.corr, level);
    }
    psychoJS.experiment.addData('pressSpace.keys', pressSpace.keys);
    if (typeof pressSpace.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pressSpace.rt', pressSpace.rt);
        psychoJS.experiment.addData('pressSpace.duration', pressSpace.duration);
        routineTimer.reset();
        }
    
    pressSpace.stop();
    // the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.FULLRANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'loopTemplate1.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(TrialRoutineBegin(snapshot));
      trialsLoopScheduler.add(TrialRoutineEachFrame());
      trialsLoopScheduler.add(TrialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var TrialMaxDurationReached;
var _key_resp_YesNo_allKeys;
var TrialMaxDuration;
var TrialComponents;
function TrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    TrialClock.reset(routineTimer.getTime());
    routineTimer.add(20.000000);
    TrialMaxDurationReached = false;
    // update component parameters for each repeat
    textDilemma.setText(Dilemmas_Personal);
    key_resp_YesNo.keys = undefined;
    key_resp_YesNo.rt = undefined;
    _key_resp_YesNo_allKeys = [];
    imagesDilemmas.setImage(Dilemmas_Images);
    psychoJS.experiment.addData('Trial.started', globalClock.getTime());
    TrialMaxDuration = null
    // keep track of which components have finished
    TrialComponents = [];
    TrialComponents.push(textDilemma);
    TrialComponents.push(key_resp_YesNo);
    TrialComponents.push(imagesDilemmas);
    
    for (const thisComponent of TrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function TrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Trial' ---
    // get current time
    t = TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textDilemma* updates
    if (t >= 0.0 && textDilemma.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textDilemma.tStart = t;  // (not accounting for frame time here)
      textDilemma.frameNStart = frameN;  // exact frame index
      
      textDilemma.setAutoDraw(true);
    }
    
    
    // if textDilemma is active this frame...
    if (textDilemma.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (textDilemma.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      textDilemma.tStop = t;  // not accounting for scr refresh
      textDilemma.frameNStop = frameN;  // exact frame index
      // update status
      textDilemma.status = PsychoJS.Status.FINISHED;
      textDilemma.setAutoDraw(false);
    }
    
    
    // *key_resp_YesNo* updates
    if (t >= 0.0 && key_resp_YesNo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_YesNo.tStart = t;  // (not accounting for frame time here)
      key_resp_YesNo.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_YesNo.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_YesNo.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_YesNo.clearEvents(); });
    }
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_YesNo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp_YesNo.tStop = t;  // not accounting for scr refresh
      key_resp_YesNo.frameNStop = frameN;  // exact frame index
      // update status
      key_resp_YesNo.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp_YesNo.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_YesNo.tStop = t;  // not accounting for scr refresh
        key_resp_YesNo.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_YesNo.status = PsychoJS.Status.FINISHED;
        key_resp_YesNo.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp_YesNo is active this frame...
      if (key_resp_YesNo.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_YesNo.getKeys({
          keyList: typeof ['y','n'] === 'string' ? [['y','n']] : ['y','n'], 
          waitRelease: false
        });
        _key_resp_YesNo_allKeys = _key_resp_YesNo_allKeys.concat(theseKeys);
        if (_key_resp_YesNo_allKeys.length > 0) {
          key_resp_YesNo.keys = _key_resp_YesNo_allKeys[_key_resp_YesNo_allKeys.length - 1].name;  // just the last key pressed
          key_resp_YesNo.rt = _key_resp_YesNo_allKeys[_key_resp_YesNo_allKeys.length - 1].rt;
          key_resp_YesNo.duration = _key_resp_YesNo_allKeys[_key_resp_YesNo_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      
      // *imagesDilemmas* updates
      if (t >= 0.0 && imagesDilemmas.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        imagesDilemmas.tStart = t;  // (not accounting for frame time here)
        imagesDilemmas.frameNStart = frameN;  // exact frame index
        
        imagesDilemmas.setAutoDraw(true);
      }
      
      
      // if imagesDilemmas is active this frame...
      if (imagesDilemmas.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (imagesDilemmas.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        imagesDilemmas.tStop = t;  // not accounting for scr refresh
        imagesDilemmas.frameNStop = frameN;  // exact frame index
        // update status
        imagesDilemmas.status = PsychoJS.Status.FINISHED;
        imagesDilemmas.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of TrialComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function TrialRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'Trial' ---
      for (const thisComponent of TrialComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('Trial.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_YesNo.corr, level);
      }
      psychoJS.experiment.addData('key_resp_YesNo.keys', key_resp_YesNo.keys);
      if (typeof key_resp_YesNo.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_YesNo.rt', key_resp_YesNo.rt);
          psychoJS.experiment.addData('key_resp_YesNo.duration', key_resp_YesNo.duration);
          routineTimer.reset();
          }
      
      key_resp_YesNo.stop();
      if (routineForceEnded) {
          routineTimer.reset();} else if (TrialMaxDurationReached) {
          TrialClock.add(TrialMaxDuration);
      } else {
          TrialClock.add(20.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var exitRoutineMaxDurationReached;
var exitRoutineMaxDuration;
var exitRoutineComponents;
function exitRoutineRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'exitRoutine' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      exitRoutineClock.reset();
      routineTimer.reset();
      exitRoutineMaxDurationReached = false;
      // update component parameters for each repeat
      // Disable downloading results to browser
      psychoJS._saveResults = 0;
      
      // Generate filename for results
      let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
      
      // Extract data object from experiment
      let dataObj = psychoJS._experiment._trialsData;
      
      // Convert data object to CSV
      let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
      }).join('\n')
      
      // Send data to OSF via DataPipe
      console.log('Saving data...');
      fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
        body: JSON.stringify({
          experimentID: 'MSaeD0A12P4x', // * UPDATE WITH YOUR DATAPIPE EXPERIMENT ID *
          filename: filename,
          data: data,
        }),
      }).then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
      })
      psychoJS.experiment.addData('exitRoutine.started', globalClock.getTime());
      exitRoutineMaxDuration = null
      // keep track of which components have finished
      exitRoutineComponents = [];
      exitRoutineComponents.push(text_2);
      
      for (const thisComponent of exitRoutineComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function exitRoutineRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'exitRoutine' ---
      // get current time
      t = exitRoutineClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_2* updates
      if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_2.tStart = t;  // (not accounting for frame time here)
        text_2.frameNStart = frameN;  // exact frame index
        
        text_2.setAutoDraw(true);
      }
      
      
      // if text_2 is active this frame...
      if (text_2.status === PsychoJS.Status.STARTED) {
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of exitRoutineComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function exitRoutineRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'exitRoutine' ---
      for (const thisComponent of exitRoutineComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('exitRoutine.stopped', globalClock.getTime());
      // the Routine "exitRoutine" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  
async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    
    return Scheduler.Event.QUIT;
  }
