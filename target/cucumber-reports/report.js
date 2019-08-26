$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserCreation.feature");
formatter.feature({
  "line": 1,
  "name": "User Creation in OrangeHRM",
  "description": "",
  "id": "user-creation-in-orangehrm",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify UserCreation in Orangehrm",
  "description": "",
  "id": "user-creation-in-orangehrm;verify-usercreation-in-orangehrm",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I Launch OrangeHRM on FireFox",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Enter Username in UsernameField",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter password in PasswordField",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on LoginButton",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I validate title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I move mouse on Admin",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on Usermanagement",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I Click Users",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I Click Addbutton",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I Select User Role",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I Enter EmployeeName",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Enter Username",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select status of the Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I Enter passwored",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Enter ConfirmPassword",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I wait For Password matching",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click On Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I am Close The Browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.i_Launch_OrangeHRM_on_FireFox()"
});
formatter.result({
  "duration": 3250636017,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 74\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.29 seconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027RAMSUNKARA\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:122)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:125)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:212)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:130)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:103)\r\n\tat stepDefinitions.stepDefinitions.i_Launch_OrangeHRM_on_FireFox(stepDefinitions.java:23)\r\n\tat ✽.When I Launch OrangeHRM on FireFox(UserCreation.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitions.i_Enter_Username_in_UsernameField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_enter_password_in_PasswordField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_click_on_LoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_validate_title_of_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_move_mouse_on_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_click_on_Usermanagement()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_Click_Users()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_Click_Addbutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_Select_User_Role()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_Enter_EmployeeName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_Enter_Username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_select_status_of_the_Employee()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_Enter_passwored()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_Enter_ConfirmPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_wait_For_Password_matching()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_click_On_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitions.i_am_Close_The_Browser()"
});
formatter.result({
  "status": "skipped"
});
});