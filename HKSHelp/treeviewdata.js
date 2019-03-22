//mirror my internal AHK system that adds functions to the JS interpreter but to add links to the treeview
//so I can copy my internal code to make links
//func does nothing
function Func(ignore)
{
	return ignore;
}
//stub for .m_Js
class StubJSCommands {
  // AddObject now does a link array to the array of links
  AddObject(funcname, ingore) {
    this.arr.push([funcname,"Coding" + funcname,"https://autohotkey.com/docs/commands/" + funcname +".htm#" +funcname,[]])
  }
  SetArr(arr)
  {
	  this.arr = arr
  }
}


/*
Broken
TimerExists
TimerTimeLeft
SendMessageGet
SendMessageSet

*/
class AHKLinker
{
	
	GetSupportedFunctions()
	{
		var ret = [];
	
		this.m_Js = new StubJSCommands();
		this.m_Js.SetArr(ret)
			
			
			this.m_Js.AddObject("Abs", Func("Abs"))
			this.m_Js.AddObject("ACos", Func("ACos"))
			this.m_Js.AddObject("Asc", Func("Asc"))
			this.m_Js.AddObject("ASin", Func("ASin"))
			this.m_Js.AddObject("ATan", Func("ATan"))
			this.m_Js.AddObject("Ceil", Func("Ceil"))
			this.m_Js.AddObject("Chr", Func("Chr"))
			this.m_Js.AddObject("Cos", Func("Cos"))
			
			this.m_Js.AddObject("Exp", Func("Exp"))
			this.m_Js.AddObject("FileExist", Func("FileExist"))
			this.m_Js.AddObject("Floor", Func("Floor"))
			this.m_Js.AddObject("Format", Func("Format"))
			
			this.m_Js.AddObject("GetKeyName", Func("GetKeyName"))
			this.m_Js.AddObject("GetKeySC", Func("GetKeySC"))
			this.m_Js.AddObject("GetKeyState", Func("GetKeyState"))
			this.m_Js.AddObject("GetKeyVK", Func("GetKeyVK"))
			
			this.m_Js.AddObject("IL_Add", Func("IL_Add"))
			this.m_Js.AddObject("IL_Create", Func("IL_Create"))
			this.m_Js.AddObject("IL_Destroy", Func("IL_Destroy"))
			this.m_Js.AddObject("IsByRef", Func("IsByRef"))
			this.m_Js.AddObject("IsFunc", Func("IsFunc"))
			this.m_Js.AddObject("IsLabel", Func("IsLabel"))
			this.m_Js.AddObject("IsObject", Func("IsObject"))
			this.m_Js.AddObject("InStr", Func("InStr"))
			
			
			this.m_Js.AddObject("Ln", Func("Ln"))
			this.m_Js.AddObject("LoadPicture", Func("LoadPicture"))
			this.m_Js.AddObject("Log", Func("Log"))
			this.m_Js.AddObject("LTrim", Func("LTrim"))
			
			this.m_Js.AddObject("LV_Add", Func("LV_Add"))
			this.m_Js.AddObject("LV_Delete", Func("LV_Delete"))
			this.m_Js.AddObject("LV_DeleteCol", Func("LV_DeleteCol"))
			this.m_Js.AddObject("LV_GetCount", Func("LV_GetCount"))
			this.m_Js.AddObject("LV_GetNext", Func("LV_GetNext"))
			this.m_Js.AddObject("LV_GetText", Func("LV_GetText"))
			this.m_Js.AddObject("LV_Insert", Func("LV_Insert"))
			this.m_Js.AddObject("LV_InsertCol", Func("LV_InsertCol"))
			this.m_Js.AddObject("LV_Modify", Func("LV_Modify"))
			this.m_Js.AddObject("LV_ModifyCol", Func("LV_ModifyCol"))
			this.m_Js.AddObject("LV_SetImageList", Func("LV_SetImageList"))
			this.m_Js.AddObject("Mod", Func("Mod"))
			this.m_Js.AddObject("MenuGetHandle", Func("MenuGetHandle"))
			this.m_Js.AddObject("MenuGetName", Func("MenuGetName"))
			this.m_Js.AddObject("Ord", Func("Ord"))
			
			this.m_Js.AddObject("RegExMatch", Func("RegExMatch"))
			this.m_Js.AddObject("RegExReplace", Func("RegExReplace"))
			this.m_Js.AddObject("Round", Func("Round"))
			this.m_Js.AddObject("RTrim", Func("RTrim"))
			
			this.m_Js.AddObject("SB_SetIcon", Func("SB_SetIcon"))
			this.m_Js.AddObject("SB_SetParts", Func("SB_SetParts"))
			this.m_Js.AddObject("SB_SetText", Func("SB_SetText"))
			this.m_Js.AddObject("Sin", Func("Sin"))
			this.m_Js.AddObject("Sqrt", Func("Sqrt"))
			
			this.m_Js.AddObject("StrGet", Func("StrGet"))
			this.m_Js.AddObject("StrLen", Func("StrLen"))
			
			this.m_Js.AddObject("StrPut", Func("StrPut"))
			this.m_Js.AddObject("StrReplace", Func("StrReplace"))
			this.m_Js.AddObject("StrSplit", Func("StrSplit"))
			
			
			this.m_Js.AddObject("SubStr", Func("SubStr"))
			
			this.m_Js.AddObject("Tan", Func("Tan"))
			
			this.m_Js.AddObject("TimerExists", Func("TimerExists"))
			this.m_Js.AddObject("TimerTimeLeft", Func("TimerTimeLeft"))
			this.m_Js.AddObject("Trim", Func("Trim"))

			this.m_Js.AddObject("TV_Add", Func("TV_Add"))
			this.m_Js.AddObject("TV_Delete", Func("TV_Delete"))
			this.m_Js.AddObject("TV_Get", Func("TV_Get"))
			this.m_Js.AddObject("TV_GetChild", Func("TV_GetChild"))
			this.m_Js.AddObject("TV_GetCount", Func("TV_GetCount"))
			this.m_Js.AddObject("TV_GetNext", Func("TV_GetNext"))
			this.m_Js.AddObject("TV_GetParent", Func("TV_GetParent"))
			this.m_Js.AddObject("TV_GetPrev", Func("TV_GetPrev"))
			this.m_Js.AddObject("TV_GetSelection", Func("TV_GetSelection"))
			this.m_Js.AddObject("TV_GetText", Func("TV_GetText"))
			this.m_Js.AddObject("TV_Modify", Func("TV_Modify"))
			this.m_Js.AddObject("VarSetCapacity", Func("VarSetCapacity"))
			this.m_Js.AddObject("WinActive", Func("WinActive"))
			this.m_Js.AddObject("WinExist", Func("WinExist"))
            

			
			
			

			
			
			
			return ret;
	}
	
	GetSupportedCommands()
	{
		var ret = [];
	
		this.m_Js = new StubJSCommands();
		this.m_Js.SetArr(ret)
			
			this.m_Js.AddObject("Click", Func("MyClick"))
			this.m_Js.AddObject("ClipWait", Func("MyClipWait"))
			this.m_Js.AddObject("Control", Func("MyControl"))
			this.m_Js.AddObject("ControlClick", Func("MyControlClick"))
			this.m_Js.AddObject("ControlFocus", Func("MyControlFocus"))
			this.m_Js.AddObject("ControlGet", Func("MyControlGet"))
			this.m_Js.AddObject("ControlGetFocus", Func("MyControlGetFocus"))
			this.m_Js.AddObject("ControlGetPos", Func("MyControlGetPos"))
			this.m_Js.AddObject("ControlGetText", Func("MyControlGetText"))
			this.m_Js.AddObject("ControlMove", Func("MyControlMove"))
			this.m_Js.AddObject("ControlSend", Func("MyControlSend"))
			this.m_Js.AddObject("ControlSendRaw", Func("MyControlSendRaw"))
			this.m_Js.AddObject("ControlSetText", Func("MyControlSetText"))
			this.m_Js.AddObject("CoordMode", Func("MyCoordMode"))
			this.m_Js.AddObject("Critical", Func("MyCritical"))
			this.m_Js.AddObject("DetectHiddenText", Func("MyDetectHiddenText"))
			this.m_Js.AddObject("DetectHiddenWindows", Func("MyDetectHiddenWindows"))
			
			this.m_Js.AddObject("FormatTime", Func("MyFormatTime"))
			
			this.m_Js.AddObject("GroupActivate", Func("MyGroupActivate"))
			this.m_Js.AddObject("GroupAdd", Func("MyGroupAdd"))
			this.m_Js.AddObject("GroupClose", Func("MyGroupClose"))
			this.m_Js.AddObject("GroupDeactivate", Func("MyGroupDeactivate"))
			this.m_Js.AddObject("Gui", Func("MyGui"))
			this.m_Js.AddObject("GuiControl", Func("MyGuiControl"))
			this.m_Js.AddObject("GuiControlGet", Func("MyGuiControlGet"))
			this.m_Js.AddObject("Hotkey", Func("MyHotkey"))
			this.m_Js.AddObject("ImageSearch", Func("MyImageSearch"))
			this.m_Js.AddObject("IniDelete", Func("MyIniDelete"))
			this.m_Js.AddObject("IniRead", Func("MyIniRead"))
			this.m_Js.AddObject("IniWrite", Func("MyIniWrite"))

			this.m_Js.AddObject("InputBox", Func("MyInputBox"))
			
			this.m_Js.AddObject("KeyWait", Func("MyKeyWait"))
			
			this.m_Js.AddObject("Menu", Func("MyMenu"))
			this.m_Js.AddObject("MouseClick", Func("MyMouseClick"))
			this.m_Js.AddObject("MouseClickDrag", Func("MyMouseClickDrag"))
			this.m_Js.AddObject("MouseGetPos", Func("MyMouseGetPos"))
			this.m_Js.AddObject("MouseMove", Func("MyMouseMove"))
			this.m_Js.AddObject("MsgBox", Func("MyMsgBox"))
			
			this.m_Js.AddObject("OutputDebug", Func("MyOutputDebug"))
			
			this.m_Js.AddObject("PixelGetColor", Func("MyPixelGetColor"))
			this.m_Js.AddObject("PixelSearch", Func("MyPixelSearch"))
			this.m_Js.AddObject("PostMessage", Func("MyPostMessage"))
			this.m_Js.AddObject("Process", Func("MyProcess"))
			this.m_Js.AddObject("Progress", Func("MyProgress"))
			this.m_Js.AddObject("Random", Func("MyRandom"))
			this.m_Js.AddObject("RegRead", Func("MyRegRead"))
			
			this.m_Js.AddObject("Run", Func("MyRun"))
			
			this.m_Js.AddObject("RunWait", Func("MyRunWait"))
			this.m_Js.AddObject("Send", Func("MySend"))
			this.m_Js.AddObject("SendEvent", Func("MySendEvent"))
			this.m_Js.AddObject("SendInput", Func("MySendInput"))

			
			this.m_Js.AddObject("SendMessage", Func("MySendMessageSet"))
			this.m_Js.AddObject("SendMode", Func("MySendMode"))
			this.m_Js.AddObject("SendPlay", Func("MySendPlay"))
			this.m_Js.AddObject("SendRaw", Func("MySendRaw"))
			
			this.m_Js.AddObject("SetCapsLockState", Func("MySetCapsLockState"))
			this.m_Js.AddObject("SetControlDelay", Func("MySetControlDelay"))
			this.m_Js.AddObject("SetDefaultMouseSpeed", Func("MySetDefaultMouseSpeed"))
			this.m_Js.AddObject("SetEnv", Func("MySetEnv"))
			this.m_Js.AddObject("SetFormat", Func("MySetFormat"))
			this.m_Js.AddObject("SetKeyDelay", Func("MySetKeyDelay"))
			this.m_Js.AddObject("SetMouseDelay", Func("MySetMouseDelay"))
			this.m_Js.AddObject("SetNumLockState", Func("MySetNumLockState"))
			this.m_Js.AddObject("SetScrollLockState", Func("MySetScrollLockState"))
			this.m_Js.AddObject("SetStoreCapslockMode", Func("MySetStoreCapslockMode"))
			
			this.m_Js.AddObject("SetTitleMatchMode", Func("MySetTitleMatchMode"))
			this.m_Js.AddObject("SetTimer", Func("MySetTimer"))
			this.m_Js.AddObject("SetWinDelay", Func("MySetWinDelay"))
			
			this.m_Js.AddObject("SendLevel", Func("MySendLevel"))
			
			this.m_Js.AddObject("Sleep", Func("MySleep"))
			
			this.m_Js.AddObject("SoundBeep", Func("MySoundBeep"))
			this.m_Js.AddObject("SoundGet", Func("MySoundGet"))
			this.m_Js.AddObject("SoundGetWaveVolume", Func("MySoundGetWaveVolume"))
			this.m_Js.AddObject("SoundPlay", Func("MySoundPlay"))
			this.m_Js.AddObject("SoundSet", Func("MySoundSet"))
			this.m_Js.AddObject("SoundSetWaveVolume", Func("MySoundSetWaveVolume"))
			this.m_Js.AddObject("SplashImage", Func("MySplashImage"))
			this.m_Js.AddObject("SplashTextOff", Func("MySplashTextOff"))
			this.m_Js.AddObject("SplashTextOn", Func("MySplashTextOn"))
			this.m_Js.AddObject("SplitPath", Func("MySplitPath"))
			this.m_Js.AddObject("StatusBarGetText", Func("MyStatusBarGetText"))
			this.m_Js.AddObject("StatusBarWait", Func("MyStatusBarWait"))
			this.m_Js.AddObject("StringGetPos", Func("MyStringGetPos"))
			this.m_Js.AddObject("StringLeft", Func("MyStringLeft"))
			this.m_Js.AddObject("StringLen", Func("MyStringLen"))
			this.m_Js.AddObject("StringLower", Func("MyStringLower"))
			this.m_Js.AddObject("StringMid", Func("MyStringMid"))
			this.m_Js.AddObject("StringReplace", Func("MyStringReplace"))
			this.m_Js.AddObject("StringRight", Func("MyStringRight"))
			this.m_Js.AddObject("StringSplit", Func("MyStringSplit"))
			this.m_Js.AddObject("StringTrimLeft", Func("MyStringTrimLeft"))
			this.m_Js.AddObject("StringTrimRight", Func("MyStringTrimRight"))
			this.m_Js.AddObject("StringUpper", Func("MyStringUpper"))
			this.m_Js.AddObject("Suspend", Func("MySuspend"))
			this.m_Js.AddObject("SysGet", Func("MySysGet"))
			
			this.m_Js.AddObject("ToolTip", Func("MyToolTip"))
			this.m_Js.AddObject("Transform", Func("MyTransform"))
			this.m_Js.AddObject("TrayTip", Func("MyTrayTip"))
			
			this.m_Js.AddObject("WinActivate", Func("MyWinActivate"))
			this.m_Js.AddObject("WinActivateBottom", Func("MyWinActivateBottom"))
			this.m_Js.AddObject("WinClose", Func("MyWinClose"))
			this.m_Js.AddObject("WinGet", Func("MyWinGet"))
			this.m_Js.AddObject("WinGetActiveStats", Func("MyWinGetActiveStats"))
			this.m_Js.AddObject("WinGetActiveTitle", Func("MyWinGetActiveTitle"))
			this.m_Js.AddObject("WinGetClass", Func("MyWinGetClass"))
			this.m_Js.AddObject("WinGetPos", Func("MyWinGetPos"))
			this.m_Js.AddObject("WinGetText", Func("MyWinGetText"))
			this.m_Js.AddObject("WinGetTitle", Func("MyWinGetTitle"))
			this.m_Js.AddObject("WinHide", Func("MyWinHide"))
			this.m_Js.AddObject("WinKill", Func("MyWinKill"))
			this.m_Js.AddObject("WinMaximize", Func("MyWinMaximize"))
			this.m_Js.AddObject("WinMenuSelectItem", Func("MyWinMenuSelectItem"))
			this.m_Js.AddObject("WinMinimize", Func("MyWinMinimize"))
			this.m_Js.AddObject("WinMinimizeAll", Func("MyWinMinimizeAll"))
			this.m_Js.AddObject("WinMinimizeAllUndo", Func("MyWinMinimizeAllUndo"))
			this.m_Js.AddObject("WinMove", Func("MyWinMove"))
			this.m_Js.AddObject("WinRestore", Func("MyWinRestore"))
			this.m_Js.AddObject("WinSet", Func("MyWinSet"))
			this.m_Js.AddObject("WinSetTitle", Func("MyWinSetTitle"))
			this.m_Js.AddObject("WinShow", Func("MyWinShow"))
			this.m_Js.AddObject("WinWait", Func("MyWinWait"))
			this.m_Js.AddObject("WinWaitActive", Func("MyWinWaitActive"))
			this.m_Js.AddObject("WinWaitClose", Func("MyWinWaitClose"))
			this.m_Js.AddObject("WinWaitNotActive", Func("MyWinWaitNotActive"))
			
			
			
			
			
			return ret;
	}
	GetSupportedBuiltInVariables()
	{
		var ret = [];
	
		this.m_Js = new StubJSCommands();
		this.m_Js.SetArr(ret)
			


			
			this.m_Js.AddObject("ErrorLevel", Func("MyErrorLevel"))
			
			
			
			
			return ret;
	}
}

var AHKLinkit = new AHKLinker;
//[ItemText,TopicTag,URL,SubElements]
var treeviewdata = 	[
						[
							"Introduction","Introduction","Introduction/Introduction.html#Introduction",
							[
								["Introduction","Introduction","Introduction/Introduction.html#Introduction",[]]
								,
								["HotKeySpeak","HotKeySpeak","Introduction/Introduction.html#HotKeySpeak",[]]
								,
								["Features","Features","Introduction/Introduction.html#Features",[]]
								,
								["AutoHotKey","AutoHotKey","Introduction/Introduction.html#AutoHotKey",[]]
								,
								["Known Issues","KnownIssues","Introduction/Introduction.html#KnownIssues",[]]
							]
						],
						["Main Interface","MainUI","MainUI/MainUI.html#MainUI",[
							["Main Interface","MainUI","MainUI/MainUI.html#MainUI",[]],
							["How To Use","MainUIHowToUse","MainUI/MainUI.html#MainUIHowToUse",[]],
							["Tree-view","MainUITreeview","MainUI/MainUI.html#MainUITreeview",[
								["Tree-view","MainUITreeview","MainUI/MainUI.html#MainUITreeview",[]],
								["Applications and Games","MainUIApplicationsAndGames","MainUI/MainUI.html#MainUIApplicationsAndGames",[]],
								["Applications","MainUIApplications","MainUI/MainUI.html#MainUIApplications",[]],
								["Groups","MainUIGroups","MainUI/MainUI.html#MainUIGroups",[]],
								["Command Action","MainUICommand","MainUI/MainUI.html#MainUICommand",[]],
								["Context Action","MainUIContext","MainUI/MainUI.html#MainUIContext",[]],
								["Window Context Action","MainUIWindowContext","MainUI/MainUI.html#MainUIWindowContext",[]],
								["File Resource","MainUIFileResource","MainUI/MainUI.html#MainUIFileResource",[]],
							]]
							,
							["Tool Ribbon","MainUIToolRibbon","MainUI/MainUI.html#MainUIToolRibbon",[
								["Tool Ribbon","MainUIToolRibbon","MainUI/MainUI.html#MainUIToolRibbon",[]],
								["Options","MainUIOptions","MainUI/MainUI.html#MainUIOptions",[]],
								["Save","MainUISave","MainUI/MainUI.html#MainUISave",[]],
								["Reload","MainUIReload","MainUI/MainUI.html#MainUIReload",[]],
								["Support Forum","MainUISupport","MainUI/MainUI.html#MainUISupport",[]],
								["Help","MainUIHelp","MainUI/MainUI.html#MainUIHelp",[]]
							]]
							,
							["Right Click Context Menu","RightClickContextMenu","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenu",[
								["Right Click Context Menu","RightClickContextMenu","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenu",[]],
								["How To Use","RightClickContextMenuHowToUse","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenuHowToUse",[]],
								["Add Application","RightClickContextMenuAddApplication","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenuAddApplication",[]],
								["Add Command","RightClickContextMenuAddCommand","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenuAddCommand",[]],
								["Add Context","RightClickContextMenuAddContext","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenuAddContext",[]],
								["Add Window Context","RightClickContextMenuAddWindowContext","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenuAddWindowContext",[]],
								["Add Group","RightClickContextMenuAddGroup","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenuAddGroup",[]],
								["Add Resource","RightClickContextMenuAddResource","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenuAddResource",[]],
								["Edit","RightClickContextMenuEdit","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenuEdit",[]],
								["Cut (Prep for Move)","RightClickContextMenuCut","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenuCut",[]],
								["Copy (Prep for Clone)","RightClickContextMenuCopy","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenuCopy",[]],
								["Paste (Copy/Move To)","RightClickContextMenuPaste","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenuPaste",[]],
								["Save to File","RightClickContextMenuSaveToFile","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenuSaveToFile",[]],
								["Load From File","RightClickContextMenuLoadFromFile","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenuLoadFromFile",[]],
								["Scan For Issues","RightClickContextMenuScanForIssues","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenuScanForIssues",[]],
								["Delete","RightClickContextMenuDelete","RightClickContextMenu/RightClickContextMenu.html#RightClickContextMenuDelete",[]]
							]]
							,
							["Select Application Interface","ListProcess","SelectAppUI/SelectAppUI.html#ListProcess",[
								["Select Application Interface","ListProcess","SelectAppUI/SelectAppUI.html#ListProcess",[]],
								["How To Use","ListProcessHowToUse","SelectAppUI/SelectAppUI.html#ListProcessHowToUse",[]],
								["Find Window","ListProcessFindWindow","SelectAppUI/SelectAppUI.html#ListProcessFindWindow",[]],
								["Select From File","ListProcessSelectFromFile","SelectAppUI/SelectAppUI.html#ListProcessSelectFromFile",[]]
							]]
							,
							["Application Interface","Exe","ApplicationUI/ApplicationUI.html#Exe",[
								["Application Interface","Exe","ApplicationUI/ApplicationUI.html#Exe",[]],
								["How To Use","ExeHowToUse","ApplicationUI/ApplicationUI.html#ExeHowToUse",[]],
								["Name","ExeName","ApplicationUI/ApplicationUI.html#ExeName",[]],
								["Program File","ExeProgramFile","ApplicationUI/ApplicationUI.html#ExeProgramFile",[]],
								["Enabled","ExeEnabled","ApplicationUI/ApplicationUI.html#ExeEnabled",[]],
								["Code","ExeCode","ApplicationUI/ApplicationUI.html#ExeCode",[]],
								["OK","ExeOK","ApplicationUI/ApplicationUI.html#ExeOK",[]],
								["Cancel","ExeCancel","ApplicationUI/ApplicationUI.html#ExeCancel",[]]
							]]
							,
							["Group Interface","GroupUI","GroupUI/GroupUI.html#Group",[
								["Group Interface","GroupUI","GroupUI/GroupUI.html#Group",[]],
								["How To Use","GroupHowToUse","GroupUI/GroupUI.html#GroupHowToUse",[]],
								["Name","GroupName","GroupUI/GroupUI.html#GroupName",[]],
								["Enabled","GroupEnabled","GroupUI/GroupUI.html#GroupEnabled",[]],
								["OK","GroupOK","GroupUI/GroupUI.html#GroupOK",[]],
								["Cancel","GroupCancel","GroupUI/GroupUI.html#GroupCancel",[]]
							]]
							,
							["Command Action Interface","Command","CommandUI/CommandUI.html#Command",[
								["Command Action Interface","Command","CommandUI/CommandUI.html#Command",[]],
								["How To Use","CommandHowToUse","CommandUI/CommandUI.html#CommandHowToUse",[]],
								["Name","CommandName","CommandUI/CommandUI.html#CommandName",[]],
								["Hot Key","CommandHotKey","CommandUI/CommandUI.html#CommandHotKey",[]],
								["Spoken Words","CommandSpokenWords","CommandUI/CommandUI.html#CommandSpokenWords",[]],
								["Enabled","CommandEnabled","CommandUI/CommandUI.html#CommandEnabled",[]],
								["Code","CommandCode","CommandUI/CommandUI.html#CommandCode",[]],
								["OK","CommandOK","CommandUI/CommandUI.html#CommandOK",[]],
								["Cancel","CommandCancel","CommandUI/CommandUI.html#CommandCancel",[]]
							]]
							,
							["Command Context Interface","Context","CommandContextUI/CommandContextUI.html#Context",[
								["Command Context Interface","Context","CommandContextUI/CommandContextUI.html#Context",[]],
								["How To Use","ContextHowToUse","CommandContextUI/CommandContextUI.html#ContextHowToUse",[]],
								["Name","ContextName","CommandContextUI/CommandContextUI.html#ContextName",[]],
								["Hot Key","ContextHotKey","CommandContextUI/CommandContextUI.html#ContextHotKey",[]],
								["Spoken Words","ContextSpokenWords","CommandContextUI/CommandContextUI.html#ContextSpokenWords",[]],
								["Enabled","ContextEnabled","CommandContextUI/CommandContextUI.html#ContextEnabled",[]],
								["Code","ContextCode","CommandContextUI/CommandContextUI.html#ContextCode",[]],
								["OK","ContextOK","CommandContextUI/CommandContextUI.html#ContextOK",[]],
								["Cancel","ContextCancel","CommandContextUI/CommandContextUI.html#ContextCancel",[]]
							]]
							,
							["Window Context Interface","WindowContext","WindowContextUI/WindowContextUI.html#WindowContext",[
								["Window Context Interface","WindowContext","WindowContextUI/WindowContextUI.html#WindowContext",[]],
								["How To Use","WindowContextHowToUse","WindowContextUI/WindowContextUI.html#WindowContextHowToUse",[]],
								["Find Window","WindowContextFindWindow","WindowContextUI/WindowContextUI.html#WindowContextFindWindow",[]],
								["Name","WindowContextName","WindowContextUI/WindowContextUI.html#WindowContextName",[]],
								["Window Title","WindowContextWindowTitle","WindowContextUI/WindowContextUI.html#WindowContextWindowTitle",[]],
								["Window Class","WindowContextWindowClass","WindowContextUI/WindowContextUI.html#WindowContextWindowClass",[]],
								["Control Name","WindowContextControlName","WindowContextUI/WindowContextUI.html#WindowContextControlName",[]],
								["Control Text","WindowContextControlText","WindowContextUI/WindowContextUI.html#WindowContextControlText",[]],
								["Enabled","WindowContextEnabled","WindowContextUI/WindowContextUI.html#WindowContextEnabled",[]],
								["Code","WindowContextCode","WindowContextUI/WindowContextUI.html#WindowContextCode",[]],
								["OK","WindowContextOK","WindowContextUI/WindowContextUI.html#WindowContextOK",[]],
								["Cancel","WindowContextCancel","WindowContextUI/WindowContextUI.html#WindowContextCancel",[]]
							]]
							,
							["File Resource Interface","FileResource","FileResourceUI/FileResourceUI.html#FileResource",[
								["File Resource Interface","FileResource","FileResourceUI/FileResourceUI.html#FileResource",[]],
								["How To Use","FileResourceHowToUse","FileResourceUI/FileResourceUI.html#FileResourceHowToUse",[]],
								["File Name","FileResourceFileName","FileResourceUI/FileResourceUI.html#FileResourceFileName",[]],
								["Save","FileResourceSave","FileResourceUI/FileResourceUI.html#FileResourceSave",[]],
								["Cancel","FileResourceCancel","FileResourceUI/FileResourceUI.html#FileResourceCancel",[]]
							]]
							,
							["Options Window","OptionsWindow","OptionsUI/OptionsUI.html#OptionsWindow",[
							    ["Options Window","OptionsWindow","OptionsUI/OptionsUI.html#OptionsWindow",[]],
								["HotKeys","OptionsHotKeys","OptionsUI/OptionsUI.html#OptionsHotKeys",[
									["HotKeys","OptionsHotKeys","OptionsUI/OptionsUI.html#OptionsHotKeys",[]],
								    ["Enable Keyboard Hot Keys","OptionsEnableHotKeys","OptionsUI/OptionsUI.html#OptionsEnableHotKeys",[]]
									,
									["Toggle With Key","OptionsToggleHKWithKey","OptionsUI/OptionsUI.html#OptionsToggleHKWithKey",[]]
								]]
								,
								["Speech Recognition","OptionsSpeechRecognition","OptionsUI/OptionsUI.html#OptionsSpeechRecognition",[
									["Speech Recognition","OptionsSpeechRecognition","OptionsUI/OptionsUI.html#OptionsSpeechRecognition",[]],
								    ["Enable Speech Recognition","OptionsEnableSpeechRecognition","OptionsUI/OptionsUI.html#OptionsEnableSpeechRecognition",[]]
									,
									["Toggle With Key","OptionsToggleRecWithKey","OptionsUI/OptionsUI.html#OptionsToggleRecWithKey",[]]
									,
									["Recognize as I Speak","OptionsRecAsISpeak","OptionsUI/OptionsUI.html#OptionsRecAsISpeak",[]]
									,
									["Recognize When I Stop","OptionsRecWhenIStop","OptionsUI/OptionsUI.html#OptionsRecWhenIStop",[]]
									,
									["Hold When Key","OptionsRecHoldOnKey","OptionsUI/OptionsUI.html#OptionsRecHoldOnKey",[]]
								]]
								,
								["Speech Refinements","OptionsSpeechRefinements","OptionsUI/OptionsUI.html#OptionsSpeechRefinements",[
									["Speech Refinements","OptionsSpeechRefinements","OptionsUI/OptionsUI.html#OptionsSpeechRefinements",[]],
								    ["Ignore Noise Issues","OptionsSRIgnoreNoise","OptionsUI/OptionsUI.html#OptionsSRIgnoreNoise",[]]
									,
									["Errors per Minute","OptionsSRErrosPerMinute","OptionsUI/OptionsUI.html#OptionsSRErrosPerMinute",[]]
									,
									["Confidence Threshold","OptionsSRConfidenceThreshold","OptionsUI/OptionsUI.html#OptionsSRConfidenceThreshold",[]]
									,
									["Train MS SAPI","OptionsSRTrainSAPI","OptionsUI/OptionsUI.html#OptionsSRTrainSAPI",[]]
								]]
								,
								["Text to Speech","OptionsTextToSpeech","OptionsUI/OptionsUI.html#OptionsTextToSpeech",[
									["Text to Speech","OptionsTextToSpeech","OptionsUI/OptionsUI.html#OptionsTextToSpeech",[]],
								    ["Speak Rate","OptionsSpeakRate","OptionsUI/OptionsUI.html#OptionsSpeakRate",[]]
									,
									["Voice Volume","OptionsVoiceVolume","OptionsUI/OptionsUI.html#OptionsVoiceVolume",[]]
									,
									["Voice","OptionsVoice","OptionsUI/OptionsUI.html#OptionsVoice",[]]
								]]
																,
								["Debug Console","OptionsDebugConsole","OptionsUI/OptionsUI.html#OptionsDebugConsole",[
									["Debug Console","OptionsDebugConsole","OptionsUI/OptionsUI.html#OptionsDebugConsole",[]],
								    ["Debug Level","OptionsDebugLevel","OptionsUI/OptionsUI.html#OptionsDebugLevel",[]]
									,
									["Log To","OptionsLogTo","OptionsUI/OptionsUI.html#OptionsLogTo",[]]
									,
									["Open Console","OptionsOpenConsole","OptionsUI/OptionsUI.html#OptionsOpenConsole",[]]
								]]
								,
								["OK","OptionsOK","OptionsUI/OptionsUI.html#OptionsOK",[]]
								,
								["Cancel","OptionsCancel","OptionsUI/OptionsUI.html#OptionsCancel",[]]
							]]
							
						]]
						,
						["Coding Actions","Coding","Coding/Coding.html#Coding",[
							
							["Coding Actions","Coding","Coding/Coding.html#Coding",[]]
							,
							["Code Box Tools","CodingCodeBoxTools","Coding/Coding.html#CodingCodeBoxTools",[]]
							,
							["How It Works","CodingHowItWorks","Coding/Coding.html#CodingHowItWorks",[]]
							,
							["Testing","CodingTesting","Coding/Coding.html#CodingTesting",[]]
							,
							["Proper Function Setup","CodingProperFunctionSetup","Coding/Coding.html#CodingProperFunctionSetup",[]]
							,
							["Global Variables and Functions","CodingGlobals","Coding/Coding.html#CodingGlobals",[]]
							,
							["HKS (JScript) vs AHK","CodingHKSvsAHK","Coding/Coding.html#CodingHKSvsAHK",[]]
							,
							["AHK Functions in JScript","CodingAHKFunctionsInJScript","Coding/Coding.html#CodingAHKFunctionsInJScript",[]]
							,
							["AHK Commands in JScript","CodingAHKCommandsInJScript","Coding/Coding.html#CodingAHKCommandsInJScript",[]]
							,
							["Multiple Output Arguments","CodingAHKMultipleOutputArguments","Coding/Coding.html#CodingAHKMultipleOutputArguments",[]]
							,
							["Single Output Argument","CodingAHKSingleArgument","Coding/Coding.html#CodingAHKSingleArgument",[]]
							,
							["AHK Built-in Variables in JScript","CodingAHKBultInVariablesInJScript","Coding/Coding.html#CodingAHKBultInVariablesInJScript",[]]
							,
							["Supported AHK Functions","CodingAHKFunctionsInJScript","Coding/Coding.html#CodingAHKFunctionsInJScript",AHKLinkit.GetSupportedFunctions()]
							,
							["Supported AHK Commands","CodingAHKCommandsInJScript","Coding/Coding.html#CodingAHKCommandsInJScript",AHKLinkit.GetSupportedCommands()]
							,
							["Redesigned Functions","CodingRedesignedFunctions","Coding/Coding.html#CodingRedesignedFunctions",[
								["Redesigned Functions","CodingRedesignedFunctions","Coding/Coding.html#CodingRedesignedFunctions",[]]
								,
								["BlockInput","CodingBlockInput","Coding/Coding.html#CodingBlockInput",[]]
								,
								["GetBuiltInVar","CodingAHKGetBuiltInVar","Coding/Coding.html#CodingAHKGetBuiltInVar",[]]
								,
								["KeyWaitAll","CodingKeyWaitAll","Coding/Coding.html#CodingKeyWaitAll",[]]
								,
								["OutputDebug","CodingOutputDebug","Coding/Coding.html#CodingOutputDebug",[]]
								,
								["SetTimer","CodingSetTimer","Coding/Coding.html#CodingSetTimer",[]]
								,
								["TimerExists","CodingTimerExists","Coding/Coding.html#CodingTimerExists",[]]
								,
								["TimerClearAll","CodingTimerClearAll","Coding/Coding.html#CodingTimerClearAll",[]]
								,
								["TimerTimeLeft","CodingTimerTimeLeft","Coding/Coding.html#CodingTimerTimeLeft",[]]
								,
								["SetBuiltInVar","CodingAHKSetBuiltInVar","Coding/Coding.html#CodingAHKSetBuiltInVar",[]]
								
								
							]]
							,
							["Helper Classes","CodingHelperClassed","Coding/Coding.html#CodingHelperClassed",[
								["Helper Classes","CodingHelperClassed","Coding/Coding.html#CodingHelperClassed",[]]
								,
								["HKS Root Class","CodingHKSRootClasse","Coding/Coding.html#CodingHKSRootClasse",[]]
								,
								["HKS.Action","CodingHKS.Action","Coding/Coding.html#CodingHKS.Action",[
									["Action Class","CodingHKS.Action","Coding/Coding.html#CodingHKS.Action",[]]
									,
									["Activate","CodingHKS.Action.Activate","Coding/Coding.html#CodingHKS.Action.Activate",[]]
									,
									["Run","CodingHKS.Action.Run","Coding/Coding.html#CodingHKS.Action.Run",[]]
								]]
								,
								["HKS.Debug","CodingHKS.Debug","Coding/Coding.html#CodingHKS.Debug",[
									["Debug Class","CodingHKS.Debug","Coding/Coding.html#CodingHKS.Debug",[]]
									,
									["BreakPoint","CodingHKS.Debug.Breakpoint","Coding/Coding.html#CodingHKS.Debug.Breakpoint",[]]
									,
									["MsgBox","CodingHKS.Debug.MsgBox","Coding/Coding.html#CodingHKS.Debug.MsgBox",[]]
									,
									["Write","CodingHKS.Debug.Write","Coding/Coding.html#CodingHKS.Debug.Write",[]]
									,
									["WriteNL","CodingHKS.Debug.WriteNL","Coding/Coding.html#CodingHKS.Debug.WriteNL",[]]
									,
									["WriteSP","CodingHKS.Debug.WriteSP","Coding/Coding.html#CodingHKS.Debug.WriteSP",[]]
									,
									["WriteClear","CodingHKS.Debug.WriteClear","Coding/Coding.html#CodingHKS.Debug.WriteClear",[]]
									,
									["Show","CodingHKS.Debug.Show","Coding/Coding.html#CodingHKS.Debug.Show",[]]
								
								]]
								,
								["HKS.Mouse","CodingHKS.Mouse","Coding/Coding.html#CodingHKS.Mouse",[
									["HKS.Mouse","CodingHKS.Mouse","Coding/Coding.html#CodingHKS.Mouse",[]]
									,
									["StartDetect","CodingHKS.Mouse.StartDetect","Coding/Coding.html#CodingHKS.Mouse.StartDetect",[]]
									,
									["StopDetect","CodingHKS.Mouse.StopDetect","Coding/Coding.html#CodingHKS.Mouse.StopDetect",[]]
								]]
								,
								["HKS.Mouse.Direct","CodingHKS.Mouse.Direct","Coding/Coding.html#CodingHKS.Mouse.Direct",[
									["Mouse.Direct Class","CodingHKS.Mouse.Direct","Coding/Coding.html#CodingHKS.Mouse.Direct",[]]
									,
									["MoveByXYVector","CodingHKS.Mouse.Direct.MoveByXYVector","Coding/Coding.html#CodingHKS.Mouse.Direct.MoveByXYVector",[]]
									,
									["MoveInDirection","CodingHKS.Mouse.Direct.MoveInDirection","Coding/Coding.html#CodingHKS.Mouse.Direct.MoveInDirection",[]]
								]]
								,
								["HKS.Mouse.Pix","CodingHKS.Mouse.Pix","Coding/Coding.html#CodingHKS.Mouse.Pix",[
									["Mouse.Pix Class","CodingHKS.Mouse.Pix","Coding/Coding.html#CodingHKS.Mouse.Pix",[]]
									,
									["MoveOnScreen","CodingHKS.Mouse.Pix.MoveOnScreen","Coding/Coding.html#CodingHKS.Mouse.Pix.MoveOnScreen",[]]
									,
									["MoveOnWindow","CodingHKS.Mouse.Pix.MoveOnWindow","Coding/Coding.html#CodingHKS.Mouse.Pix.MoveOnWindow",[]]
									,
									["MoveInDirectionScreen","CodingHKS.Mouse.Pix.MoveInDirectionScreen","Coding/Coding.html#CodingHKS.Mouse.Pix.MoveInDirectionScreen",[]]
									,
									["MoveInDirectionWindow","CodingHKS.Mouse.Pix.MoveInDirectionWindow","Coding/Coding.html#CodingHKS.Mouse.Pix.MoveInDirectionWindow",[]]
								]]
								,
								["HKS.Mouse.UV","CodingHKS.Mouse.UV","Coding/Coding.html#CodingHKS.Mouse.UV",[
									["Mouse.UV Class","CodingHKS.Mouse.UV","Coding/Coding.html#CodingHKS.Mouse.UV",[]]
									,
									["MoveOnScreen","CodingHKS.Mouse.UV.MoveOnScreen","Coding/Coding.html#CodingHKS.Mouse.UV.MoveOnScreen",[]]
									,
									["MoveOnWindow","CodingHKS.Mouse.UV.MoveOnWindow","Coding/Coding.html#CodingHKS.Mouse.UV.MoveOnWindow",[]]
									,
									["MoveInDirectionScreen","CodingHKS.Mouse.UV.MoveInDirectionScreen","Coding/Coding.html#CodingHKS.Mouse.UV.MoveInDirectionScreen",[]]
									,
									["MoveInDirectionWindow","CodingHKS.Mouse.UV.MoveInDirectionWindow","Coding/Coding.html#CodingHKS.Mouse.UV.MoveInDirectionWindow",[]]
								]]
								,
								["HKS.Process","CodingHKS.Process","Coding/Coding.html#CodingHKS.Process",[
									["Process Class","CodingHKS.Process","Coding/Coding.html#CodingHKS.Process",[]]
									,
									["GetProcessExe","CodingHKS.Process.GetProcessExe","Coding/Coding.html#CodingHKS.Process.GetProcessExe",[]]
									,
									["GetProcessName","CodingHKS.Process.GetProcessName","Coding/Coding.html#CodingHKS.Process.GetProcessName",[]]
									,
									["GetProcessPath","CodingHKS.Process.GetProcessPath","Coding/Coding.html#CodingHKS.Process.GetProcessPath",[]]
									,
									["GetProcessID","CodingHKS.Process.GetProcessID","Coding/Coding.html#CodingHKS.Process.GetProcessID",[]]
									,
									["GetActiveWindowClassName","CodingHKS.Process.GetActiveWindowClassName","Coding/Coding.html#CodingHKS.Process.GetActiveWindowClassName",[]]
									,
									["GetActiveWindowTitle","CodingHKS.Process.GetActiveWindowTitle","Coding/Coding.html#CodingHKS.Process.GetActiveWindowTitle",[]]
									,
									["GetActiveWindowhWnd","CodingHKS.Process.GetActiveWindowhWnd","Coding/Coding.html#CodingHKS.Process.GetActiveWindowhWnd",[]]
									,
									["GetActiveControlName","CodingHKS.Process.GetActiveControlName","Coding/Coding.html#CodingHKS.Process.GetActiveControlName",[]]
									,
									["GetActiveControlText","CodingHKS.Process.GetActiveControlText","Coding/Coding.html#CodingHKS.Process.GetActiveControlText",[]]
									,
									["GetActiveControlhWnd","CodingHKS.Process.GetActiveControlhWnd","Coding/Coding.html#CodingHKS.Process.GetActiveControlhWnd",[]]
									,
									["IsWindowMine","CodingHKS.Process.IsWindowMine","Coding/Coding.html#CodingHKS.Process.IsWindowMine",[]]
									
								]]
								,
								["HKS.Recognition","CodingHKS.Recognition","Coding/Coding.html#CodingHKS.Recognition",[
									["Recognition Class","CodingHKS.Recognition","Coding/Coding.html#CodingHKS.Recognition",[]]
									,
									["GetDictationText","CodingHKS.Recognition.GetDictationText","Coding/Coding.html#CodingHKS.Recognition.GetDictationText",[]]
									
									,
									["GetCommandsArray","CodingHKS.Recognition.GetCommandsArray","Coding/Coding.html#CodingHKS.Recognition.GetCommandsArray",[]]
									,
									["GetCommandString","CodingHKS.Recognition.GetCommandString","Coding/Coding.html#CodingHKS.Recognition.GetCommandString",[]]
									,
									["GetConfidence","CodingHKS.Recognition.GetConfidence","Coding/Coding.html#CodingHKS.Recognition.GetConfidence",[]]
									,
									["GetConfidencesArray","CodingHKS.Recognition.GetConfidencesArray","Coding/Coding.html#CodingHKS.Recognition.GetConfidencesArray",[]]
									,
									["GetConfidenceThreshold","CodingHKS.Recognition.GetConfidenceThreshold","Coding/Coding.html#CodingHKS.Recognition.GetConfidenceThreshold",[]]
									,
									["GetSentencesArray","CodingHKS.Recognition.GetSentencesArray","Coding/Coding.html#CodingHKS.Recognition.GetSentencesArray",[]]
									,
									["IsDictating","CodingHKS.Recognition.IsDictating","Coding/Coding.html#CodingHKS.Recognition.IsDictating",[]]
									,
									["StartDictating","CodingHKS.Recognition.StartDictating","Coding/Coding.html#CodingHKS.Recognition.StartDictating",[]]
									
									
								]]
								,
								["HKS.Resource","CodingHKS.Resource","Coding/Coding.html#CodingHKS.Resource",[
									["Resource Class","CodingHKS.Resource","Coding/Coding.html#CodingHKS.Resource",[]]
									,
									["Fetch","CodingHKS.Resource.Fetch","Coding/Coding.html#CodingHKS.Resource.Fetch",[]]
								]]
								,
								["HKS.VoiceAgent","CodingHKS.VoiceAgent","Coding/Coding.html#CodingHKS.VoiceAgent",[
									["VoiceAgent Class","CodingHKS.VoiceAgent","Coding/Coding.html#CodingHKS.VoiceAgent",[]]
									,
									["Say","CodingHKS.VoiceAgent.Say","Coding/Coding.html#CodingHKS.VoiceAgent.Say",[]]
									,
									["SayWait","CodingHKS.VoiceAgent.SayWait","Coding/Coding.html#CodingHKS.VoiceAgent.SayWait",[]]
									,
									["SayXML","CodingHKS.VoiceAgent.SayXML","Coding/Coding.html#CodingHKS.VoiceAgent.SayXML",[]]
									,
									["SayXMLWait","CodingHKS.VoiceAgent.SayXMLWait","Coding/Coding.html#CodingHKS.VoiceAgent.SayXMLWait",[]]
									,
									["Stop","CodingHKS.VoiceAgent.Stop","Coding/Coding.html#CodingHKS.VoiceAgent.Stop",[]]
								]]
								,
								["HKS.WinAPI","CodingHKS.WinAPI","Coding/Coding.html#CodingHKS.WinAPI",[
									["WinAPI Class","CodingHKS.WinAPI","Coding/Coding.html#CodingHKS.WinAPI",[]]
									,
									["HKS.WinAPI.KB","CodingHKS.WinAPI.KB","Coding/Coding.html#CodingHKS.WinAPI.KB",[
									    ["KB Class","CodingHKS.WinAPI.KB","Coding/Coding.html#CodingHKS.WinAPI.KB",[]]
										,
										["EnableWindow","CodingHKS.WinAPI.KB.EnableWindow","Coding/Coding.html#CodingHKS.WinAPI.KB.EnableWindow",[]]
										,
										["GetAsyncKeyState","CodingHKS.WinAPI.KB.GetAsyncKeyState","Coding/Coding.html#CodingHKS.WinAPI.KB.GetAsyncKeyState",[]]
										,
										["GetKeyboardType","CodingHKS.WinAPI.KB.GetKeyboardType","Coding/Coding.html#CodingHKS.WinAPI.KB.GetKeyboardType",[]]
										,
										["GetKeyState","CodingHKS.WinAPI.KB.GetKeyState","Coding/Coding.html#CodingHKS.WinAPI.KB.GetKeyState",[]]
										,
										["IsWindowEnabled","CodingHKS.WinAPI.KB.IsWindowEnabled","Coding/Coding.html#CodingHKS.WinAPI.KB.IsWindowEnabled",[]]
										,
										["VkKeyScan","CodingHKS.WinAPI.KB.VkKeyScan","Coding/Coding.html#CodingHKS.WinAPI.KB.VkKeyScan",[]]
										,
										["VkKeyScanEx","CodingHKS.WinAPI.KB.VkKeyScanEx","Coding/Coding.html#CodingHKS.WinAPI.KB.VkKeyScanEx",[]]
									]]
									,
									["HKS.WinAPI.Mouse","CodingHKS.WinAPI.KB","Coding/Coding.html#CodingHKS.WinAPI.Mouse",[
										["Mouse Class","CodingHKS.WinAPI.KB","Coding/Coding.html#CodingHKS.WinAPI.Mouse",[]]
										,
										["DragDetect","CodingHKS.WinAPI.KB.DragDetect","Coding/Coding.html#CodingHKS.WinAPI.KB.DragDetect",[]]
										,
										["GetCapture","CodingHKS.WinAPI.KB.GetCapture","Coding/Coding.html#CodingHKS.WinAPI.KB.GetCapture",[]]
										,
										["GetDoubleClickTime","CodingHKS.WinAPI.KB.GetDoubleClickTime","Coding/Coding.html#CodingHKS.WinAPI.KB.GetDoubleClickTime",[]]
										,
										["mouse_event","CodingHKS.WinAPI.KB.mouse_event","Coding/Coding.html#CodingHKS.WinAPI.KB.mouse_event",[]]
										,
										["ReleaseCapture","CodingHKS.WinAPI.KB.ReleaseCapture","Coding/Coding.html#CodingHKS.WinAPI.KB.ReleaseCapture",[]]
										,
										["SetCapture","CodingHKS.WinAPI.KB.SetCapture","Coding/Coding.html#CodingHKS.WinAPI.KB.SetCapture",[]]
										,
										["SetDoubleClickTime","CodingHKS.WinAPI.KB.SetDoubleClickTime","Coding/Coding.html#CodingHKS.WinAPI.KB.SetDoubleClickTime",[]]
										,
										["SwapMouseButton","CodingHKS.WinAPI.KB.SwapMouseButton","Coding/Coding.html#CodingHKS.WinAPI.KB.SwapMouseButton",[]]
									]]
									,
									["HKS.WinAPI.Win","CodingHKS.WinAPI.Win","Coding/Coding.html#CodingHKS.WinAPI.Win",[
										["Win Class","CodingHKS.WinAPI.Win","Coding/Coding.html#CodingHKS.WinAPI.Win",[]]
										,
										["AllowSetForegroundWindow","CodingHKS.WinAPI.Win.AllowSetForegroundWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.AllowSetForegroundWindow",[]]
										,
										["AnimateWindow","CodingHKS.WinAPI.Win.AnimateWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.AnimateWindow",[]]
										,
										["AnyPopup","CodingHKS.WinAPI.Win.AnyPopup","Coding/Coding.html#CodingHKS.WinAPI.Win.AnyPopup",[]]
										,
										["ArrangeIconicWindows","CodingHKS.WinAPI.Win.ArrangeIconicWindows","Coding/Coding.html#CodingHKS.WinAPI.Win.ArrangeIconicWindows",[]]
										,
										["BeginDeferWindowPos","CodingHKS.WinAPI.Win.BeginDeferWindowPos","Coding/Coding.html#CodingHKS.WinAPI.Win.BeginDeferWindowPos",[]]
										,
										["BringWindowToTop","CodingHKS.WinAPI.Win.BringWindowToTop","Coding/Coding.html#CodingHKS.WinAPI.Win.BringWindowToTop",[]]
										,
										["ChildWindowFromPoint","CodingHKS.WinAPI.Win.ChildWindowFromPoint","Coding/Coding.html#CodingHKS.WinAPI.Win.ChildWindowFromPoint",[]]
										,
										["ChildWindowFromPointEx","CodingHKS.WinAPI.Win.ChildWindowFromPointEx","Coding/Coding.html#CodingHKS.WinAPI.Win.ChildWindowFromPointEx",[]]
										,
										["CloseWindow","CodingHKS.WinAPI.Win.CloseWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.CloseWindow",[]]
										,
										["DeferWindowPos","CodingHKS.WinAPI.Win.DeferWindowPos","Coding/Coding.html#CodingHKS.WinAPI.Win.DeferWindowPos",[]]
										,
										["DestroyWindow","CodingHKS.WinAPI.Win.DestroyWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.DestroyWindow",[]]
										,
										["EndDeferWindowPos","CodingHKS.WinAPI.Win.EndDeferWindowPos","Coding/Coding.html#CodingHKS.WinAPI.Win.EndDeferWindowPos",[]]
										,
										["EndTask","CodingHKS.WinAPI.Win.EndTask","Coding/Coding.html#CodingHKS.WinAPI.Win.EndTask",[]]
										,
										["FindWindow","CodingHKS.WinAPI.Win.FindWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.FindWindow",[]]
										,
										["FindWindowEx","CodingHKS.WinAPI.Win.FindWindowEx","Coding/Coding.html#CodingHKS.WinAPI.Win.FindWindowEx",[]]
										,
										["GetAncestor","CodingHKS.WinAPI.Win.GetAncestor","Coding/Coding.html#CodingHKS.WinAPI.Win.GetAncestor",[]]
										,
										["GetDesktopWindow","CodingHKS.WinAPI.Win.GetDesktopWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.GetDesktopWindow",[]]
										,
										["GetForegroundWindow","CodingHKS.WinAPI.Win.GetForegroundWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.GetForegroundWindow",[]]
										,
										["GetLastActivePopup","CodingHKS.WinAPI.Win.GetLastActivePopup","Coding/Coding.html#CodingHKS.WinAPI.Win.GetLastActivePopup",[]]
										,
										["GetNextWindow","CodingHKS.WinAPI.Win.GetNextWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.GetNextWindow",[]]
										,
										["GetParent","CodingHKS.WinAPI.Win.GetParent","Coding/Coding.html#CodingHKS.WinAPI.Win.GetParent",[]]
										,
										["GetShellWindow","CodingHKS.WinAPI.Win.GetShellWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.GetShellWindow",[]]
										,
										["GetSysColor","CodingHKS.WinAPI.Win.GetSysColor","Coding/Coding.html#CodingHKS.WinAPI.Win.GetSysColor",[]]
										,
										["GetTopWindow","CodingHKS.WinAPI.Win.GetTopWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.GetTopWindow",[]]
										,
										["GetWindow","CodingHKS.WinAPI.Win.GetWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.GetWindow",[]]
										,
										["IsChild","CodingHKS.WinAPI.Win.IsChild","Coding/Coding.html#CodingHKS.WinAPI.Win.IsChild",[]]
										,
										["IsHungAppWindow","CodingHKS.WinAPI.Win.IsHungAppWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.IsHungAppWindow",[]]
										,
										["IsIconic","CodingHKS.WinAPI.Win.IsIconic","Coding/Coding.html#CodingHKS.WinAPI.Win.IsIconic",[]]
										,
										["IsWindow","CodingHKS.WinAPI.Win.IsWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.IsWindow",[]]
										,
										["IsWindowUnicode","CodingHKS.WinAPI.Win.IsWindowUnicode","Coding/Coding.html#CodingHKS.WinAPI.Win.IsWindowUnicode",[]]
										,
										["IsWindowVisible","CodingHKS.WinAPI.Win.IsWindowVisible","Coding/Coding.html#CodingHKS.WinAPI.Win.IsWindowVisible",[]]
										,
										["IsZoomed","CodingHKS.WinAPI.Win.IsZoomed","Coding/Coding.html#CodingHKS.WinAPI.Win.IsZoomed",[]]
										,
										["MoveWindow","CodingHKS.WinAPI.Win.MoveWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.MoveWindow",[]]
										,
										["OpenIcon","CodingHKS.WinAPI.Win.OpenIcon","Coding/Coding.html#CodingHKS.WinAPI.Win.OpenIcon",[]]
										,
										["RealChildWindowFromPoint","CodingHKS.WinAPI.Win.RealChildWindowFromPoint","Coding/Coding.html#CodingHKS.WinAPI.Win.RealChildWindowFromPoint",[]]
										,
										["SetForegroundWindow","CodingHKS.WinAPI.Win.SetForegroundWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.SetForegroundWindow",[]]
										,
										["SetLayeredWindowAttributes","CodingHKS.WinAPI.Win.SetLayeredWindowAttributes","Coding/Coding.html#CodingHKS.WinAPI.Win.SetLayeredWindowAttributes",[]]
										,
										["SetParent","CodingHKS.WinAPI.Win.SetParent","Coding/Coding.html#CodingHKS.WinAPI.Win.SetParent",[]]
										,
										["SetWindowPos","CodingHKS.WinAPI.Win.SetWindowPos","Coding/Coding.html#CodingHKS.WinAPI.Win.SetWindowPos",[]]
										,
										["SetWindowText","CodingHKS.WinAPI.Win.SetWindowText","Coding/Coding.html#CodingHKS.WinAPI.Win.SetWindowText",[]]
										,
										["ShowOwnedPopups","CodingHKS.WinAPI.Win.ShowOwnedPopups","Coding/Coding.html#CodingHKS.WinAPI.Win.ShowOwnedPopups",[]]
										,
										["ShowWindow","CodingHKS.WinAPI.Win.ShowWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.ShowWindow",[]]
										,
										["ShowWindowAsync","CodingHKS.WinAPI.Win.ShowWindowAsync","Coding/Coding.html#CodingHKS.WinAPI.Win.ShowWindowAsync",[]]
										,
										["SoundSentry","CodingHKS.WinAPI.Win.SoundSentry","Coding/Coding.html#CodingHKS.WinAPI.Win.SoundSentry",[]]
										,
										["SwitchToThisWindow","CodingHKS.WinAPI.Win.SwitchToThisWindow","Coding/Coding.html#CodingHKS.WinAPI.Win.SwitchToThisWindow",[]]
										,
										["WindowFromPhysicalPoint","CodingHKS.WinAPI.Win.WindowFromPhysicalPoint","Coding/Coding.html#CodingHKS.WinAPI.Win.WindowFromPhysicalPoint",[]]
										,
										["WindowFromPoint","CodingHKS.WinAPI.Win.WindowFromPoint","Coding/Coding.html#CodingHKS.WinAPI.Win.WindowFromPoint",[]]
									]]
									
								]]

							]]
						]]
						,
						["Debug Console","DebugConsole","DebugConsole/DebugConsole.html#DebugConsole",[
							["Debug Console","DebugConsole","DebugConsole/DebugConsole.html#DebugConsole",[]]
							,
							["How To Use","DebugConsoleHowToUse","DebugConsole/DebugConsole.html#DebugConsoleHowToUse",[]]
						]]
					];






