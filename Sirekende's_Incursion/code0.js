gdjs.StartMenuCode = {};
gdjs.StartMenuCode.GDStars_95ParticlesObjects1= [];
gdjs.StartMenuCode.GDStars_95ParticlesObjects2= [];
gdjs.StartMenuCode.GDStars_95ParticlesObjects3= [];
gdjs.StartMenuCode.GDStars_95ParticlesObjects4= [];
gdjs.StartMenuCode.GDAnimated_95DoorObjects1= [];
gdjs.StartMenuCode.GDAnimated_95DoorObjects2= [];
gdjs.StartMenuCode.GDAnimated_95DoorObjects3= [];
gdjs.StartMenuCode.GDAnimated_95DoorObjects4= [];
gdjs.StartMenuCode.GDHealthUpObjects1= [];
gdjs.StartMenuCode.GDHealthUpObjects2= [];
gdjs.StartMenuCode.GDHealthUpObjects3= [];
gdjs.StartMenuCode.GDHealthUpObjects4= [];
gdjs.StartMenuCode.GDArmorObjects1= [];
gdjs.StartMenuCode.GDArmorObjects2= [];
gdjs.StartMenuCode.GDArmorObjects3= [];
gdjs.StartMenuCode.GDArmorObjects4= [];
gdjs.StartMenuCode.GDFireRateObjects1= [];
gdjs.StartMenuCode.GDFireRateObjects2= [];
gdjs.StartMenuCode.GDFireRateObjects3= [];
gdjs.StartMenuCode.GDFireRateObjects4= [];
gdjs.StartMenuCode.GDPowerObjects1= [];
gdjs.StartMenuCode.GDPowerObjects2= [];
gdjs.StartMenuCode.GDPowerObjects3= [];
gdjs.StartMenuCode.GDPowerObjects4= [];
gdjs.StartMenuCode.GDSpeedObjects1= [];
gdjs.StartMenuCode.GDSpeedObjects2= [];
gdjs.StartMenuCode.GDSpeedObjects3= [];
gdjs.StartMenuCode.GDSpeedObjects4= [];
gdjs.StartMenuCode.GDCost1Objects1= [];
gdjs.StartMenuCode.GDCost1Objects2= [];
gdjs.StartMenuCode.GDCost1Objects3= [];
gdjs.StartMenuCode.GDCost1Objects4= [];
gdjs.StartMenuCode.GDCost2Objects1= [];
gdjs.StartMenuCode.GDCost2Objects2= [];
gdjs.StartMenuCode.GDCost2Objects3= [];
gdjs.StartMenuCode.GDCost2Objects4= [];
gdjs.StartMenuCode.GDCost3Objects1= [];
gdjs.StartMenuCode.GDCost3Objects2= [];
gdjs.StartMenuCode.GDCost3Objects3= [];
gdjs.StartMenuCode.GDCost3Objects4= [];
gdjs.StartMenuCode.GDCost4Objects1= [];
gdjs.StartMenuCode.GDCost4Objects2= [];
gdjs.StartMenuCode.GDCost4Objects3= [];
gdjs.StartMenuCode.GDCost4Objects4= [];
gdjs.StartMenuCode.GDCost5Objects1= [];
gdjs.StartMenuCode.GDCost5Objects2= [];
gdjs.StartMenuCode.GDCost5Objects3= [];
gdjs.StartMenuCode.GDCost5Objects4= [];
gdjs.StartMenuCode.GDPauseObjects1= [];
gdjs.StartMenuCode.GDPauseObjects2= [];
gdjs.StartMenuCode.GDPauseObjects3= [];
gdjs.StartMenuCode.GDPauseObjects4= [];
gdjs.StartMenuCode.GDReset_95TimerObjects1= [];
gdjs.StartMenuCode.GDReset_95TimerObjects2= [];
gdjs.StartMenuCode.GDReset_95TimerObjects3= [];
gdjs.StartMenuCode.GDReset_95TimerObjects4= [];
gdjs.StartMenuCode.GDReset_95ButtonObjects1= [];
gdjs.StartMenuCode.GDReset_95ButtonObjects2= [];
gdjs.StartMenuCode.GDReset_95ButtonObjects3= [];
gdjs.StartMenuCode.GDReset_95ButtonObjects4= [];
gdjs.StartMenuCode.GDBgObjects1= [];
gdjs.StartMenuCode.GDBgObjects2= [];
gdjs.StartMenuCode.GDBgObjects3= [];
gdjs.StartMenuCode.GDBgObjects4= [];

gdjs.StartMenuCode.conditionTrue_0 = {val:false};
gdjs.StartMenuCode.condition0IsTrue_0 = {val:false};
gdjs.StartMenuCode.condition1IsTrue_0 = {val:false};
gdjs.StartMenuCode.condition2IsTrue_0 = {val:false};
gdjs.StartMenuCode.condition3IsTrue_0 = {val:false};
gdjs.StartMenuCode.conditionTrue_1 = {val:false};
gdjs.StartMenuCode.condition0IsTrue_1 = {val:false};
gdjs.StartMenuCode.condition1IsTrue_1 = {val:false};
gdjs.StartMenuCode.condition2IsTrue_1 = {val:false};
gdjs.StartMenuCode.condition3IsTrue_1 = {val:false};


gdjs.StartMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartMenuCode.GDReset_95ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_95TimerObjects1);
{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95ButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95ButtonObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenuCode.GDReset_95ButtonObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95ButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95ButtonObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 1, 1, 5, 0.3, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects1[i].hide();
}
}}

}


};gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDReset_9595ButtonObjects2Objects = Hashtable.newFrom({"Reset_Button": gdjs.StartMenuCode.GDReset_95ButtonObjects2});
gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDReset_9595ButtonObjects1Objects = Hashtable.newFrom({"Reset_Button": gdjs.StartMenuCode.GDReset_95ButtonObjects1});
gdjs.StartMenuCode.asyncCallback48481972 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lvl1", false);
}}
gdjs.StartMenuCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartMenuCode.asyncCallback48481972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartMenuCode.asyncCallback48480828 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_95TimerObjects3);

{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects3.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects3[i].setString("1");
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects3.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects3[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenuCode.GDReset_95TimerObjects3[i].getWidth()) / 2));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 50, 1.2);
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects3.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects3[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 7, 7, 7, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.StartMenuCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.StartMenuCode.GDReset_95TimerObjects2) asyncObjectsList.addObject("Reset_Timer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartMenuCode.asyncCallback48480828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartMenuCode.asyncCallback48479772 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_95TimerObjects2);

{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects2[i].setString("2");
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects2[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenuCode.GDReset_95TimerObjects2[i].getWidth()) / 2));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 40, 1);
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 4, 4, 4, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.StartMenuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.StartMenuCode.GDReset_95TimerObjects1) asyncObjectsList.addObject("Reset_Timer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartMenuCode.asyncCallback48479772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartMenuCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartMenuCode.GDReset_95ButtonObjects2);

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
gdjs.StartMenuCode.condition1IsTrue_0.val = false;
gdjs.StartMenuCode.condition2IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDReset_9595ButtonObjects2Objects) > 0;
}if ( gdjs.StartMenuCode.condition0IsTrue_0.val ) {
{
gdjs.StartMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.StartMenuCode.condition1IsTrue_0.val ) {
{
{gdjs.StartMenuCode.conditionTrue_1 = gdjs.StartMenuCode.condition2IsTrue_0;
gdjs.StartMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(48476540);
}
}}
}
if (gdjs.StartMenuCode.condition2IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDReset_95ButtonObjects2 */
{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95ButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95ButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Start");
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuButtomPress.wav", false, 30, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartMenuCode.GDReset_95ButtonObjects1);

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
gdjs.StartMenuCode.condition1IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDReset_9595ButtonObjects1Objects) == 0;
}if ( gdjs.StartMenuCode.condition0IsTrue_0.val ) {
{
{gdjs.StartMenuCode.conditionTrue_1 = gdjs.StartMenuCode.condition1IsTrue_0;
gdjs.StartMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(48478220);
}
}}
if (gdjs.StartMenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_95TimerObjects1);
{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects1[i].setString("3");
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenuCode.GDReset_95TimerObjects1[i].getWidth()) / 2));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 30, 0.8);
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_95TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_95TimerObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 2, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.StartMenuCode.eventsList5 = function(runtimeScene) {

{


gdjs.StartMenuCode.eventsList0(runtimeScene);
}


{


gdjs.StartMenuCode.eventsList4(runtimeScene);
}


};

gdjs.StartMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartMenuCode.GDStars_95ParticlesObjects1.length = 0;
gdjs.StartMenuCode.GDStars_95ParticlesObjects2.length = 0;
gdjs.StartMenuCode.GDStars_95ParticlesObjects3.length = 0;
gdjs.StartMenuCode.GDStars_95ParticlesObjects4.length = 0;
gdjs.StartMenuCode.GDAnimated_95DoorObjects1.length = 0;
gdjs.StartMenuCode.GDAnimated_95DoorObjects2.length = 0;
gdjs.StartMenuCode.GDAnimated_95DoorObjects3.length = 0;
gdjs.StartMenuCode.GDAnimated_95DoorObjects4.length = 0;
gdjs.StartMenuCode.GDHealthUpObjects1.length = 0;
gdjs.StartMenuCode.GDHealthUpObjects2.length = 0;
gdjs.StartMenuCode.GDHealthUpObjects3.length = 0;
gdjs.StartMenuCode.GDHealthUpObjects4.length = 0;
gdjs.StartMenuCode.GDArmorObjects1.length = 0;
gdjs.StartMenuCode.GDArmorObjects2.length = 0;
gdjs.StartMenuCode.GDArmorObjects3.length = 0;
gdjs.StartMenuCode.GDArmorObjects4.length = 0;
gdjs.StartMenuCode.GDFireRateObjects1.length = 0;
gdjs.StartMenuCode.GDFireRateObjects2.length = 0;
gdjs.StartMenuCode.GDFireRateObjects3.length = 0;
gdjs.StartMenuCode.GDFireRateObjects4.length = 0;
gdjs.StartMenuCode.GDPowerObjects1.length = 0;
gdjs.StartMenuCode.GDPowerObjects2.length = 0;
gdjs.StartMenuCode.GDPowerObjects3.length = 0;
gdjs.StartMenuCode.GDPowerObjects4.length = 0;
gdjs.StartMenuCode.GDSpeedObjects1.length = 0;
gdjs.StartMenuCode.GDSpeedObjects2.length = 0;
gdjs.StartMenuCode.GDSpeedObjects3.length = 0;
gdjs.StartMenuCode.GDSpeedObjects4.length = 0;
gdjs.StartMenuCode.GDCost1Objects1.length = 0;
gdjs.StartMenuCode.GDCost1Objects2.length = 0;
gdjs.StartMenuCode.GDCost1Objects3.length = 0;
gdjs.StartMenuCode.GDCost1Objects4.length = 0;
gdjs.StartMenuCode.GDCost2Objects1.length = 0;
gdjs.StartMenuCode.GDCost2Objects2.length = 0;
gdjs.StartMenuCode.GDCost2Objects3.length = 0;
gdjs.StartMenuCode.GDCost2Objects4.length = 0;
gdjs.StartMenuCode.GDCost3Objects1.length = 0;
gdjs.StartMenuCode.GDCost3Objects2.length = 0;
gdjs.StartMenuCode.GDCost3Objects3.length = 0;
gdjs.StartMenuCode.GDCost3Objects4.length = 0;
gdjs.StartMenuCode.GDCost4Objects1.length = 0;
gdjs.StartMenuCode.GDCost4Objects2.length = 0;
gdjs.StartMenuCode.GDCost4Objects3.length = 0;
gdjs.StartMenuCode.GDCost4Objects4.length = 0;
gdjs.StartMenuCode.GDCost5Objects1.length = 0;
gdjs.StartMenuCode.GDCost5Objects2.length = 0;
gdjs.StartMenuCode.GDCost5Objects3.length = 0;
gdjs.StartMenuCode.GDCost5Objects4.length = 0;
gdjs.StartMenuCode.GDPauseObjects1.length = 0;
gdjs.StartMenuCode.GDPauseObjects2.length = 0;
gdjs.StartMenuCode.GDPauseObjects3.length = 0;
gdjs.StartMenuCode.GDPauseObjects4.length = 0;
gdjs.StartMenuCode.GDReset_95TimerObjects1.length = 0;
gdjs.StartMenuCode.GDReset_95TimerObjects2.length = 0;
gdjs.StartMenuCode.GDReset_95TimerObjects3.length = 0;
gdjs.StartMenuCode.GDReset_95TimerObjects4.length = 0;
gdjs.StartMenuCode.GDReset_95ButtonObjects1.length = 0;
gdjs.StartMenuCode.GDReset_95ButtonObjects2.length = 0;
gdjs.StartMenuCode.GDReset_95ButtonObjects3.length = 0;
gdjs.StartMenuCode.GDReset_95ButtonObjects4.length = 0;
gdjs.StartMenuCode.GDBgObjects1.length = 0;
gdjs.StartMenuCode.GDBgObjects2.length = 0;
gdjs.StartMenuCode.GDBgObjects3.length = 0;
gdjs.StartMenuCode.GDBgObjects4.length = 0;

gdjs.StartMenuCode.eventsList5(runtimeScene);

return;

}

gdjs['StartMenuCode'] = gdjs.StartMenuCode;
