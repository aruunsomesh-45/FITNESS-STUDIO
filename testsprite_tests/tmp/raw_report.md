
# TestSprite AI Testing Report(MCP)

---

## 1️⃣ Document Metadata
- **Project Name:** newww
- **Date:** 2025-12-08
- **Prepared by:** TestSprite AI Team

---

## 2️⃣ Requirement Validation Summary

#### Test TC001
- **Test Name:** Submit Contact Form with Valid Data
- **Test Code:** [TC001_Submit_Contact_Form_with_Valid_Data.py](./TC001_Submit_Contact_Form_with_Valid_Data.py)
- **Test Error:** The Contact page navigation leads to a browser error page, preventing access to the contact form. Testing cannot proceed further. Please fix the navigation issue to continue testing.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A06C4000442B0000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2b440221a900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2b440221a900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2b440221a900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2b440221a900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/contact?_rsc=vusbg:0:0)
[ERROR] Failed to fetch RSC payload for http://localhost:3000/contact. Falling back to browser navigation. TypeError: Failed to fetch
    at createFetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2552:24)
    at fetchServerResponse (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2456:27)
    at navigateDynamicallyWithNoPrefetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7605:90)
    at navigate (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7424:15)
    at navigateReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7900:45)
    at clientReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12246:61)
    at Object.action (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12492:55)
    at runAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12397:38)
    at dispatchAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12460:9)
    at Object.dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12490:40)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1442:29
    at startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5494:31)
    at dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1441:13)
    at dispatchAppRouterAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1423:5)
    at dispatchNavigateAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12544:49)
    at http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:617:13
    at Object.startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1279:31)
    at linkClicked (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:616:24)
    at onClick (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:857:13)
    at executeDispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10308:13)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:959:74)
    at processDispatchQueue (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10334:41)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10609:13
    at batchedUpdates$1 (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:2247:44)
    at dispatchEventForPluginEventSystem (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10410:9)
    at dispatchEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12925:37)
    at dispatchDiscreteEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12907:64)
    at eval (eval at evaluate (:234:30), <anonymous>:1:12)
    at UtilityScript.evaluate (<anonymous>:241:19)
    at UtilityScript.<anonymous> (<anonymous>:1:44) (at http://localhost:3000/_next/static/chunks/node_modules_next_dist_7a8122d0._.js:3117:31)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/__nextjs_font/geist-latin.woff2:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/92eecd90-8d8d-4c5d-87e7-6ceac0cb79b7
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC002
- **Test Name:** Contact Form Client-Side Validation Enforce Name Field Constraints
- **Test Code:** [TC002_Contact_Form_Client_Side_Validation_Enforce_Name_Field_Constraints.py](./TC002_Contact_Form_Client_Side_Validation_Enforce_Name_Field_Constraints.py)
- **Test Error:** Testing stopped due to navigation failure to Contact page. Cannot verify Name field validation as the Contact page is not accessible. Please fix the navigation issue and retry.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0C43B0054060000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x65400cf6f80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x65400cf6f80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x65400cf6f80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x65400cf6f80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/contact?_rsc=vusbg:0:0)
[ERROR] Failed to fetch RSC payload for http://localhost:3000/contact. Falling back to browser navigation. TypeError: Failed to fetch
    at createFetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2552:24)
    at fetchServerResponse (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2456:27)
    at navigateDynamicallyWithNoPrefetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7605:90)
    at navigate (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7424:15)
    at navigateReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7900:45)
    at clientReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12246:61)
    at Object.action (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12492:55)
    at runAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12397:38)
    at dispatchAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12460:9)
    at Object.dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12490:40)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1442:29
    at startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5494:31)
    at dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1441:13)
    at dispatchAppRouterAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1423:5)
    at dispatchNavigateAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12544:49)
    at http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:617:13
    at Object.startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1279:31)
    at linkClicked (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:616:24)
    at onClick (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:857:13)
    at executeDispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10308:13)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:959:74)
    at processDispatchQueue (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10334:41)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10609:13
    at batchedUpdates$1 (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:2247:44)
    at dispatchEventForPluginEventSystem (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10410:9)
    at dispatchEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12925:37)
    at dispatchDiscreteEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12907:64)
    at eval (eval at evaluate (:234:30), <anonymous>:1:12)
    at UtilityScript.evaluate (<anonymous>:241:19)
    at UtilityScript.<anonymous> (<anonymous>:1:44) (at http://localhost:3000/_next/static/chunks/node_modules_next_dist_7a8122d0._.js:3117:31)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/__nextjs_font/geist-latin.woff2:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/a8ab2d02-ad06-4e79-8613-230e36938b5f
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC003
- **Test Name:** Contact Form Client-Side Validation Enforce Email Constraints
- **Test Code:** [TC003_Contact_Form_Client_Side_Validation_Enforce_Email_Constraints.py](./TC003_Contact_Form_Client_Side_Validation_Enforce_Email_Constraints.py)
- **Test Error:** The task to verify the Email field validation could not be completed because the Contact page is inaccessible. Clicking the Contact link leads to a chrome error page, preventing any further testing. The issue has been reported as requested.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0D84500F42F0000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2ff401c65380]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2ff401c65380]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2ff401c65380]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2ff401c65380]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/contact?_rsc=vusbg:0:0)
[ERROR] Failed to fetch RSC payload for http://localhost:3000/contact. Falling back to browser navigation. TypeError: Failed to fetch
    at createFetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2552:24)
    at fetchServerResponse (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2456:27)
    at navigateDynamicallyWithNoPrefetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7605:90)
    at navigate (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7424:15)
    at navigateReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7900:45)
    at clientReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12246:61)
    at Object.action (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12492:55)
    at runAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12397:38)
    at dispatchAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12460:9)
    at Object.dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12490:40)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1442:29
    at startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5494:31)
    at dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1441:13)
    at dispatchAppRouterAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1423:5)
    at dispatchNavigateAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12544:49)
    at http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:617:13
    at Object.startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1279:31)
    at linkClicked (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:616:24)
    at onClick (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:857:13)
    at executeDispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10308:13)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:959:74)
    at processDispatchQueue (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10334:41)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10609:13
    at batchedUpdates$1 (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:2247:44)
    at dispatchEventForPluginEventSystem (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10410:9)
    at dispatchEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12925:37)
    at dispatchDiscreteEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12907:64)
    at eval (eval at evaluate (:234:30), <anonymous>:1:12)
    at UtilityScript.evaluate (<anonymous>:241:19)
    at UtilityScript.<anonymous> (<anonymous>:1:44) (at http://localhost:3000/_next/static/chunks/node_modules_next_dist_7a8122d0._.js:3117:31)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/__nextjs_font/geist-latin.woff2:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/77d210f0-c336-4c36-85af-4bde1680f248
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC004
- **Test Name:** Contact Form Client-Side Validation Enforce Subject Enum
- **Test Code:** [TC004_Contact_Form_Client_Side_Validation_Enforce_Subject_Enum.py](./TC004_Contact_Form_Client_Side_Validation_Enforce_Subject_Enum.py)
- **Test Error:** The Contact page is unreachable due to a browser error page. Cannot proceed with testing the Subject field enum validation. Task stopped.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0D83B0054200000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x205401be1c00]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x205401be1c00]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x205401be1c00]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x205401be1c00]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/contact?_rsc=vusbg:0:0)
[ERROR] Failed to fetch RSC payload for http://localhost:3000/contact. Falling back to browser navigation. TypeError: Failed to fetch
    at createFetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2552:24)
    at fetchServerResponse (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2456:27)
    at navigateDynamicallyWithNoPrefetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7605:90)
    at navigate (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7424:15)
    at navigateReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7900:45)
    at clientReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12246:61)
    at Object.action (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12492:55)
    at runAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12397:38)
    at dispatchAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12460:9)
    at Object.dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12490:40)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1442:29
    at startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5494:31)
    at dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1441:13)
    at dispatchAppRouterAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1423:5)
    at dispatchNavigateAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12544:49)
    at http://localhost:3000/_next/static/chunks/node_modules_next_c5b46714._.js:617:13
    at Object.startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1279:31)
    at linkClicked (http://localhost:3000/_next/static/chunks/node_modules_next_c5b46714._.js:616:24)
    at onClick (http://localhost:3000/_next/static/chunks/node_modules_next_c5b46714._.js:857:13)
    at executeDispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10308:13)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:959:74)
    at processDispatchQueue (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10334:41)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10609:13
    at batchedUpdates$1 (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:2247:44)
    at dispatchEventForPluginEventSystem (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10410:9)
    at dispatchEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12925:37)
    at dispatchDiscreteEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12907:64)
    at eval (eval at evaluate (:234:30), <anonymous>:1:12)
    at UtilityScript.evaluate (<anonymous>:241:19)
    at UtilityScript.<anonymous> (<anonymous>:1:44) (at http://localhost:3000/_next/static/chunks/node_modules_next_dist_7a8122d0._.js:3117:31)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/__nextjs_font/geist-latin.woff2:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/303d9869-b5c4-4b33-be7e-e765fae9b906
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC005
- **Test Name:** Contact Form Client-Side Validation Enforce Message Length
- **Test Code:** [TC005_Contact_Form_Client_Side_Validation_Enforce_Message_Length.py](./TC005_Contact_Form_Client_Side_Validation_Enforce_Message_Length.py)
- **Test Error:** Testing stopped due to broken Contact page link causing navigation to an error page. Validation of Message field length cannot be performed.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0043C00443B0000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x3b44027ddc00]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x3b44027ddc00]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x3b44027ddc00]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x3b44027ddc00]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/contact?_rsc=vusbg:0:0)
[ERROR] Failed to fetch RSC payload for http://localhost:3000/contact. Falling back to browser navigation. TypeError: Failed to fetch
    at createFetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2552:24)
    at fetchServerResponse (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2456:27)
    at navigateDynamicallyWithNoPrefetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7605:90)
    at navigate (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7424:15)
    at navigateReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7900:45)
    at clientReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12246:61)
    at Object.action (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12492:55)
    at runAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12397:38)
    at dispatchAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12460:9)
    at Object.dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12490:40)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1442:29
    at startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5494:31)
    at dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1441:13)
    at dispatchAppRouterAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1423:5)
    at dispatchNavigateAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12544:49)
    at http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:617:13
    at Object.startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1279:31)
    at linkClicked (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:616:24)
    at onClick (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:857:13)
    at executeDispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10308:13)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:959:74)
    at processDispatchQueue (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10334:41)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10609:13
    at batchedUpdates$1 (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:2247:44)
    at dispatchEventForPluginEventSystem (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10410:9)
    at dispatchEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12925:37)
    at dispatchDiscreteEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12907:64)
    at eval (eval at evaluate (:234:30), <anonymous>:1:12)
    at UtilityScript.evaluate (<anonymous>:241:19)
    at UtilityScript.<anonymous> (<anonymous>:1:44) (at http://localhost:3000/_next/static/chunks/node_modules_next_dist_7a8122d0._.js:3117:31)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/__nextjs_font/geist-latin.woff2:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/a8be90b1-9c05-4a64-b4a9-9bed888d8848
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC006
- **Test Name:** Prevent Double Submission on Contact Form
- **Test Code:** [TC006_Prevent_Double_Submission_on_Contact_Form.py](./TC006_Prevent_Double_Submission_on_Contact_Form.py)
- **Test Error:** Testing stopped due to inability to access the contact form. The page leads to a chrome error page preventing further actions.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A06C40008C170000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x178c00cfaf80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x178c00cfaf80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x178c00cfaf80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x178c00cfaf80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/contact?_rsc=vusbg:0:0)
[ERROR] Failed to fetch RSC payload for http://localhost:3000/contact. Falling back to browser navigation. TypeError: Failed to fetch
    at createFetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2552:24)
    at fetchServerResponse (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2456:27)
    at navigateDynamicallyWithNoPrefetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7605:90)
    at navigate (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7424:15)
    at navigateReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7900:45)
    at clientReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12246:61)
    at Object.action (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12492:55)
    at runAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12397:38)
    at dispatchAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12460:9)
    at Object.dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12490:40)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1442:29
    at startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5494:31)
    at dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1441:13)
    at dispatchAppRouterAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1423:5)
    at dispatchNavigateAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12544:49)
    at http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:617:13
    at Object.startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1279:31)
    at linkClicked (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:616:24)
    at onClick (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:857:13)
    at executeDispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10308:13)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:959:74)
    at processDispatchQueue (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10334:41)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10609:13
    at batchedUpdates$1 (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:2247:44)
    at dispatchEventForPluginEventSystem (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10410:9)
    at dispatchEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12925:37)
    at dispatchDiscreteEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12907:64)
    at eval (eval at evaluate (:234:30), <anonymous>:1:12)
    at UtilityScript.evaluate (<anonymous>:241:19)
    at UtilityScript.<anonymous> (<anonymous>:1:44) (at http://localhost:3000/_next/static/chunks/node_modules_next_dist_7a8122d0._.js:3117:31)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/__nextjs_font/geist-latin.woff2:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/adebf673-0dc7-4e0f-a757-f6dac4c52495
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC007
- **Test Name:** Server-Side Contact Form Input Validation Rejects Invalid Data
- **Test Code:** [TC007_Server_Side_Contact_Form_Input_Validation_Rejects_Invalid_Data.py](./TC007_Server_Side_Contact_Form_Input_Validation_Rejects_Invalid_Data.py)
- **Test Error:** The API endpoint page failed to load in the browser, showing a chrome error page. Since the endpoint is not accessible via browser navigation, I will proceed to test the POST /api/contact API validation by sending direct POST requests with invalid inputs programmatically. Starting with invalid Name (1 character) to verify the server returns HTTP 400 with validation error as required.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0183B008C2A0000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2a8c02236900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2a8c02236900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2a8c02236900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2a8c02236900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/8cb6368c-82ae-48f9-bdf3-c6b94620ab2b
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC008
- **Test Name:** Server-Side Contact Form API Success Response and Data Storage
- **Test Code:** [TC008_Server_Side_Contact_Form_API_Success_Response_and_Data_Storage.py](./TC008_Server_Side_Contact_Form_API_Success_Response_and_Data_Storage.py)
- **Test Error:** Cannot navigate to API endpoint /api/contact directly in browser. Will send POST request programmatically to test server response and data storage.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0183C007C180000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x187c00cdf600]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x187c00cdf600]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x187c00cdf600]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x187c00cdf600]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/4d7a7dd2-e488-48fb-b4a4-c289e442e607
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC009
- **Test Name:** Supabase Environment Variables Load and Application Startup Fails When Missing
- **Test Code:** [TC009_Supabase_Environment_Variables_Load_and_Application_Startup_Fails_When_Missing.py](./TC009_Supabase_Environment_Variables_Load_and_Application_Startup_Fails_When_Missing.py)
- **Test Error:** Testing stopped due to persistent 404 errors preventing access to application pages. Cannot verify Supabase environment variable error handling.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0983A00EC190000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x19ec0221e900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x19ec0221e900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x19ec0221e900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x19ec0221e900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
[ERROR] Failed to load resource: the server responded with a status of 404 (Not Found) (at http://localhost:3000/admin:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/__nextjs_font/geist-latin.woff2:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/?_rsc=1e9w2:0:0)
[ERROR] Failed to fetch RSC payload for http://localhost:3000/. Falling back to browser navigation. TypeError: Failed to fetch
    at createFetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2552:24)
    at fetchServerResponse (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2456:27)
    at navigateDynamicallyWithNoPrefetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7605:90)
    at navigate (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7424:15)
    at navigateReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7900:45)
    at clientReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12246:61)
    at Object.action (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12492:55)
    at runAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12397:38)
    at dispatchAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12460:9)
    at Object.dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12490:40)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1442:29
    at startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5494:31)
    at dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1441:13)
    at dispatchAppRouterAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1423:5)
    at dispatchNavigateAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12544:49)
    at http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:617:13
    at Object.startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1279:31)
    at linkClicked (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:616:24)
    at onClick (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:857:13)
    at executeDispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10308:13)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:959:74)
    at processDispatchQueue (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10334:41)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10609:13
    at batchedUpdates$1 (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:2247:44)
    at dispatchEventForPluginEventSystem (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10410:9)
    at dispatchEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12925:37)
    at dispatchDiscreteEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12907:64) (at http://localhost:3000/_next/static/chunks/node_modules_next_dist_7a8122d0._.js:3117:31)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/06bd9b6b-bbbc-491f-bfe2-c0b3e133b628
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC010
- **Test Name:** Supabase Row Level Security (RLS) Policies Enforce Correct Permissions
- **Test Code:** [TC010_Supabase_Row_Level_Security_RLS_Policies_Enforce_Correct_Permissions.py](./TC010_Supabase_Row_Level_Security_RLS_Policies_Enforce_Correct_Permissions.py)
- **Test Error:** Testing stopped due to navigation failure to contact form. Cannot verify anonymous INSERT or SELECT permissions. Please fix the broken link or page load issue.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0843B00E42E0000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2ee400d1ef80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2ee400d1ef80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2ee400d1ef80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x2ee400d1ef80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/contact?_rsc=vusbg:0:0)
[ERROR] Failed to fetch RSC payload for http://localhost:3000/contact. Falling back to browser navigation. TypeError: Failed to fetch
    at createFetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2552:24)
    at fetchServerResponse (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2456:27)
    at navigateDynamicallyWithNoPrefetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7605:90)
    at navigate (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7424:15)
    at navigateReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7900:45)
    at clientReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12246:61)
    at Object.action (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12492:55)
    at runAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12397:38)
    at dispatchAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12460:9)
    at Object.dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12490:40)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1442:29
    at startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5494:31)
    at dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1441:13)
    at dispatchAppRouterAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1423:5)
    at dispatchNavigateAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12544:49)
    at http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:617:13
    at Object.startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1279:31)
    at linkClicked (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:616:24)
    at onClick (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:857:13)
    at executeDispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10308:13)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:959:74)
    at processDispatchQueue (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10334:41)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10609:13
    at batchedUpdates$1 (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:2247:44)
    at dispatchEventForPluginEventSystem (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10410:9)
    at dispatchEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12925:37)
    at dispatchDiscreteEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12907:64)
    at eval (eval at evaluate (:234:30), <anonymous>:1:12)
    at UtilityScript.evaluate (<anonymous>:241:19)
    at UtilityScript.<anonymous> (<anonymous>:1:44) (at http://localhost:3000/_next/static/chunks/node_modules_next_dist_7a8122d0._.js:3117:31)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/__nextjs_font/geist-latin.woff2:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/6934d708-1268-470d-a703-a4a0d32b64b4
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC011
- **Test Name:** GET API Endpoint Returns Recent Contact Messages Only for Authorized Users
- **Test Code:** [TC011_GET_API_Endpoint_Returns_Recent_Contact_Messages_Only_for_Authorized_Users.py](./TC011_GET_API_Endpoint_Returns_Recent_Contact_Messages_Only_for_Authorized_Users.py)
- **Test Error:** The GET /api/contact endpoint was tested without authorization and did not deny access as expected, indicating a potential backend misconfiguration. Attempts to test with valid admin authorization failed due to the local server or API endpoint being unreachable, resulting in navigation errors. The task could not be fully completed due to these connectivity issues. Please verify that the local server hosting the API is running and accessible, then retry the tests.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A080D900DC310000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x31dc01c0e280]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x31dc01c0e280]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x31dc01c0e280]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x31dc01c0e280]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/28f42c3c-e6da-4ed7-b119-4c961e0a1a34
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC012
- **Test Name:** Display Toast Notifications for Success and Error States on Contact Form
- **Test Code:** [TC012_Display_Toast_Notifications_for_Success_and_Error_States_on_Contact_Form.py](./TC012_Display_Toast_Notifications_for_Success_and_Error_States_on_Contact_Form.py)
- **Test Error:** The website is currently not functioning correctly. Clicking the 'Contact' button leads to a browser error page, preventing access to the Contact form. Therefore, I cannot proceed with the form submission and notification tests. Please fix the website issue and try again.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0C0D600041F0000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x1f0401c25c00]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x1f0401c25c00]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x1f0401c25c00]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x1f0401c25c00]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/__nextjs_font/geist-latin.woff2:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/contact?_rsc=vusbg:0:0)
[ERROR] Failed to fetch RSC payload for http://localhost:3000/contact. Falling back to browser navigation. TypeError: Failed to fetch
    at createFetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2552:24)
    at fetchServerResponse (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2456:27)
    at navigateDynamicallyWithNoPrefetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7605:90)
    at navigate (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7424:15)
    at navigateReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7900:45)
    at clientReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12246:61)
    at Object.action (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12492:55)
    at runAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12397:38)
    at dispatchAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12460:9)
    at Object.dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12490:40)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1442:29
    at startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5494:31)
    at dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1441:13)
    at dispatchAppRouterAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1423:5)
    at dispatchNavigateAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12544:49)
    at http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:617:13
    at Object.startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1279:31)
    at linkClicked (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:616:24)
    at onClick (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:857:13)
    at executeDispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10308:13)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:959:74)
    at processDispatchQueue (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10334:41)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10609:13
    at batchedUpdates$1 (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:2247:44)
    at dispatchEventForPluginEventSystem (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10410:9)
    at dispatchEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12925:37)
    at dispatchDiscreteEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12907:64)
    at eval (eval at evaluate (:234:30), <anonymous>:1:12)
    at UtilityScript.evaluate (<anonymous>:241:19)
    at UtilityScript.<anonymous> (<anonymous>:1:44) (at http://localhost:3000/_next/static/chunks/node_modules_next_dist_7a8122d0._.js:3117:31)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/4a8ed020-c878-49f5-a5e8-16d878b2c480
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC013
- **Test Name:** Responsive Navbar Displays Correctly Across Devices
- **Test Code:** [TC013_Responsive_Navbar_Displays_Correctly_Across_Devices.py](./TC013_Responsive_Navbar_Displays_Correctly_Across_Devices.py)
- **Test Error:** 
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0983A00D4250000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x25d40220e900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x25d40220e900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x25d40220e900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x25d40220e900]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/__nextjs_font/geist-latin.woff2:0:0)
[ERROR] WebSocket connection to 'ws://localhost:3000/_next/webpack-hmr?id=LhgtpvaKSnD8FNaXzlc5p' failed: Connection closed before receiving a handshake response (at http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:10116:0)
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0C43A00D4250000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0983A00D4250000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0983A00D4250000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/0e3632e7-2728-4f3e-8333-f117bffdae3c
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC014
- **Test Name:** Footer Displays Correctly with Links and Social Icons on All Device Sizes
- **Test Code:** [TC014_Footer_Displays_Correctly_with_Links_and_Social_Icons_on_All_Device_Sizes.py](./TC014_Footer_Displays_Correctly_with_Links_and_Social_Icons_on_All_Device_Sizes.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/f66d5a43-80b8-49f0-9437-9dfe8ef00ba6
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC015
- **Test Name:** Membership Page Calendly Scheduling Integration Works Correctly
- **Test Code:** [TC015_Membership_Page_Calendly_Scheduling_Integration_Works_Correctly.py](./TC015_Membership_Page_Calendly_Scheduling_Integration_Works_Correctly.py)
- **Test Error:** The Membership page could not be accessed because clicking the Membership link leads to a browser error page. Therefore, verification of pricing plans and the embedded Calendly scheduling component cannot be performed. Task stopped due to this critical navigation failure.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0C43A0074060000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x674021ce280]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x674021ce280]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x674021ce280]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x674021ce280]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/membership?_rsc=vusbg:0:0)
[ERROR] Failed to fetch RSC payload for http://localhost:3000/membership. Falling back to browser navigation. TypeError: Failed to fetch
    at createFetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2552:24)
    at fetchServerResponse (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2456:27)
    at navigateDynamicallyWithNoPrefetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7605:90)
    at navigate (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7424:15)
    at navigateReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7900:45)
    at clientReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12246:61)
    at Object.action (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12492:55)
    at runAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12397:38)
    at dispatchAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12460:9)
    at Object.dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12490:40)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1442:29
    at startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5494:31)
    at dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1441:13)
    at dispatchAppRouterAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1423:5)
    at dispatchNavigateAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12544:49)
    at http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:617:13
    at Object.startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1279:31)
    at linkClicked (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:616:24)
    at onClick (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:857:13)
    at executeDispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10308:13)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:959:74)
    at processDispatchQueue (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10334:41)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10609:13
    at batchedUpdates$1 (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:2247:44)
    at dispatchEventForPluginEventSystem (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10410:9)
    at dispatchEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12925:37)
    at dispatchDiscreteEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12907:64)
    at eval (eval at evaluate (:234:30), <anonymous>:1:12)
    at UtilityScript.evaluate (<anonymous>:241:19)
    at UtilityScript.<anonymous> (<anonymous>:1:44) (at http://localhost:3000/_next/static/chunks/node_modules_next_dist_7a8122d0._.js:3117:31)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/__nextjs_font/geist-latin.woff2:0:0)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/2304c76c-d872-46f8-8aec-a1ba018536f8
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC016
- **Test Name:** Home Page Components Render and Animate Correctly
- **Test Code:** [TC016_Home_Page_Components_Render_and_Animate_Correctly.py](./TC016_Home_Page_Components_Render_and_Animate_Correctly.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/d9b265f3-cf46-40a9-9987-82c968be15eb
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC017
- **Test Name:** About Page Displays Trainer Profiles and Achievements
- **Test Code:** [TC017_About_Page_Displays_Trainer_Profiles_and_Achievements.py](./TC017_About_Page_Displays_Trainer_Profiles_and_Achievements.py)
- **Test Error:** The About page is not loading and leads to a browser error page. Verification of the About page content cannot proceed. The issue has been reported. Task stopped.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A06CD80084210000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x218401c0d580]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x218401c0d580]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x218401c0d580]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x218401c0d580]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/__nextjs_font/geist-latin.woff2:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/about?_rsc=vusbg:0:0)
[ERROR] Failed to fetch RSC payload for http://localhost:3000/about. Falling back to browser navigation. TypeError: Failed to fetch
    at createFetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2552:24)
    at fetchServerResponse (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2456:27)
    at navigateDynamicallyWithNoPrefetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7605:90)
    at navigate (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7424:15)
    at navigateReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7900:45)
    at clientReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12246:61)
    at Object.action (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12492:55)
    at runAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12397:38)
    at dispatchAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12460:9)
    at Object.dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12490:40)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1442:29
    at startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5494:31)
    at dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1441:13)
    at dispatchAppRouterAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1423:5)
    at dispatchNavigateAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12544:49)
    at http://localhost:3000/_next/static/chunks/node_modules_next_c5b46714._.js:617:13
    at Object.startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1279:31)
    at linkClicked (http://localhost:3000/_next/static/chunks/node_modules_next_c5b46714._.js:616:24)
    at onClick (http://localhost:3000/_next/static/chunks/node_modules_next_c5b46714._.js:857:13)
    at executeDispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10308:13)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:959:74)
    at processDispatchQueue (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10334:41)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10609:13
    at batchedUpdates$1 (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:2247:44)
    at dispatchEventForPluginEventSystem (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10410:9)
    at dispatchEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12925:37)
    at dispatchDiscreteEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12907:64)
    at eval (eval at evaluate (:234:30), <anonymous>:1:12)
    at UtilityScript.evaluate (<anonymous>:241:19)
    at UtilityScript.<anonymous> (<anonymous>:1:44) (at http://localhost:3000/_next/static/chunks/node_modules_next_dist_7a8122d0._.js:3117:31)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/67d0ae1d-af72-4d9b-a36e-3a1e07dfa66f
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC018
- **Test Name:** Classes Page Displays Fitness Class Descriptions and Images
- **Test Code:** [TC018_Classes_Page_Displays_Fitness_Class_Descriptions_and_Images.py](./TC018_Classes_Page_Displays_Fitness_Class_Descriptions_and_Images.py)
- **Test Error:** Navigation to the Classes page failed with a browser error page. Unable to verify classes content as requested. Reporting the issue and stopping further testing.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0D83A00D41A0000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x1ad40012fc80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x1ad40012fc80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x1ad40012fc80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x1ad40012fc80]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/__nextjs_font/geist-latin.woff2:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/classes?_rsc=vusbg:0:0)
[ERROR] Failed to fetch RSC payload for http://localhost:3000/classes. Falling back to browser navigation. TypeError: Failed to fetch
    at createFetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2552:24)
    at fetchServerResponse (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2456:27)
    at navigateDynamicallyWithNoPrefetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7605:90)
    at navigate (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7424:15)
    at navigateReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7900:45)
    at clientReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12246:61)
    at Object.action (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12492:55)
    at runAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12397:38)
    at dispatchAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12460:9)
    at Object.dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12490:40)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1442:29
    at startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5494:31)
    at dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1441:13)
    at dispatchAppRouterAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1423:5)
    at dispatchNavigateAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12544:49)
    at http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:617:13
    at Object.startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1279:31)
    at linkClicked (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:616:24)
    at onClick (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:857:13)
    at executeDispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10308:13)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:959:74)
    at processDispatchQueue (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10334:41)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10609:13
    at batchedUpdates$1 (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:2247:44)
    at dispatchEventForPluginEventSystem (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10410:9)
    at dispatchEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12925:37)
    at dispatchDiscreteEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12907:64)
    at eval (eval at evaluate (:234:30), <anonymous>:1:12)
    at UtilityScript.evaluate (<anonymous>:241:19)
    at UtilityScript.<anonymous> (<anonymous>:1:44) (at http://localhost:3000/_next/static/chunks/node_modules_next_dist_7a8122d0._.js:3117:31)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/310915c7-9008-4fc3-ae23-a27182bae54c
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC019
- **Test Name:** Contact Page Calendly Scheduling Link Works and Form Validation is Real-Time
- **Test Code:** [TC019_Contact_Page_Calendly_Scheduling_Link_Works_and_Form_Validation_is_Real_Time.py](./TC019_Contact_Page_Calendly_Scheduling_Link_Works_and_Form_Validation_is_Real_Time.py)
- **Test Error:** The Contact page link is broken and leads to a browser error page. Unable to proceed with verification of Calendly scheduling link and contact form validation. Please fix the navigation issue to continue testing.
Browser Console Logs:
[WARNING] [GroupMarkerNotSet(crbug.com/242999)!:A0C43A0064060000]Automatic fallback to software WebGL has been deprecated. Please use the --enable-unsafe-swiftshader flag to opt in to lower security guarantees for trusted content. (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x66401c0e080]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x66401c0e080]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x66401c0e080]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (at http://localhost:3000/:0:0)
[WARNING] [.WebGL-0x66401c0e080]GL Driver Message (OpenGL, Performance, GL_CLOSE_PATH_NV, High): GPU stall due to ReadPixels (this message will no longer repeat) (at http://localhost:3000/:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/__nextjs_font/geist-latin.woff2:0:0)
[ERROR] Failed to load resource: net::ERR_EMPTY_RESPONSE (at http://localhost:3000/contact?_rsc=vusbg:0:0)
[ERROR] Failed to fetch RSC payload for http://localhost:3000/contact. Falling back to browser navigation. TypeError: Failed to fetch
    at createFetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2552:24)
    at fetchServerResponse (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:2456:27)
    at navigateDynamicallyWithNoPrefetch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7605:90)
    at navigate (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7424:15)
    at navigateReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:7900:45)
    at clientReducer (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12246:61)
    at Object.action (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12492:55)
    at runAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12397:38)
    at dispatchAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12460:9)
    at Object.dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12490:40)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1442:29
    at startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:5494:31)
    at dispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1441:13)
    at dispatchAppRouterAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:1423:5)
    at dispatchNavigateAction (http://localhost:3000/_next/static/chunks/node_modules_next_dist_client_aaee43fe._.js:12544:49)
    at http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:617:13
    at Object.startTransition (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:1279:31)
    at linkClicked (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:616:24)
    at onClick (http://localhost:3000/_next/static/chunks/node_modules_6272974d._.js:857:13)
    at executeDispatch (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10308:13)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:959:74)
    at processDispatchQueue (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10334:41)
    at http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10609:13
    at batchedUpdates$1 (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:2247:44)
    at dispatchEventForPluginEventSystem (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10410:9)
    at dispatchEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12925:37)
    at dispatchDiscreteEvent (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:12907:64)
    at eval (eval at evaluate (:234:30), <anonymous>:1:12)
    at UtilityScript.evaluate (<anonymous>:241:19)
    at UtilityScript.<anonymous> (<anonymous>:1:44) (at http://localhost:3000/_next/static/chunks/node_modules_next_dist_7a8122d0._.js:3117:31)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/2a3817bd-f1d5-44c1-ba7a-5cf32c70a2a8
- **Status:** ❌ Failed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---

#### Test TC020
- **Test Name:** Metadata and SEO Features Are Present Including Sitemap and Robots.txt
- **Test Code:** [TC020_Metadata_and_SEO_Features_Are_Present_Including_Sitemap_and_Robots.txt.py](./TC020_Metadata_and_SEO_Features_Are_Present_Including_Sitemap_and_Robots.txt.py)
- **Test Visualization and Result:** https://www.testsprite.com/dashboard/mcp/tests/acd3f9c4-0691-4075-bc0d-c9f51cd86396/c83d1031-46ee-416c-9a26-ff929082b750
- **Status:** ✅ Passed
- **Analysis / Findings:** {{TODO:AI_ANALYSIS}}.
---


## 3️⃣ Coverage & Matching Metrics

- **15.00** of tests passed

| Requirement        | Total Tests | ✅ Passed | ❌ Failed  |
|--------------------|-------------|-----------|------------|
| ...                | ...         | ...       | ...        |
---


## 4️⃣ Key Gaps / Risks
{AI_GNERATED_KET_GAPS_AND_RISKS}
---