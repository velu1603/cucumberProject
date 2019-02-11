$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "In order to perform login \r\nAs a user\r\nI want to enter correct username and password",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "In order to verify the login to facebook",
  "description": "",
  "id": "login;in-order-to-verify-the-login-to-facebook",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user entered \"\u003cusername\u003e \" username",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entered \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "Age",
        "location"
      ],
      "line": 13
    },
    {
      "cells": [
        "below 18",
        "India"
      ],
      "line": 14
    },
    {
      "cells": [
        "above 18",
        "UK"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user \"\u003cloginType\u003e\" sucessfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login;in-order-to-verify-the-login-to-facebook;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "loginType"
      ],
      "line": 20,
      "id": "login;in-order-to-verify-the-login-to-facebook;;1"
    },
    {
      "cells": [
        "valid",
        "valid",
        "should"
      ],
      "line": 21,
      "id": "login;in-order-to-verify-the-login-to-facebook;;2"
    },
    {
      "cells": [
        "invalid",
        "invalid",
        "should not"
      ],
      "line": 22,
      "id": "login;in-order-to-verify-the-login-to-facebook;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 353873,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "In order to verify the login to facebook",
  "description": "",
  "id": "login;in-order-to-verify-the-login-to-facebook;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user entered \"valid \" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entered \"valid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "Age",
        "location"
      ],
      "line": 13
    },
    {
      "cells": [
        "below 18",
        "India"
      ],
      "line": 14
    },
    {
      "cells": [
        "above 18",
        "UK"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user \"should\" sucessfully logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 124246581,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 61579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid ",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_username(String)"
});
formatter.result({
  "duration": 2230389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_password(String)"
});
formatter.result({
  "duration": 96473,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_the_age_category(DataTable)"
});
formatter.result({
  "duration": 1319432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_shouldbe_sucessfully_logged_in(String)"
});
formatter.result({
  "duration": 92779,
  "status": "passed"
});
formatter.after({
  "duration": 78000,
  "status": "passed"
});
formatter.before({
  "duration": 80874,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "In order to verify the login to facebook",
  "description": "",
  "id": "login;in-order-to-verify-the-login-to-facebook;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user entered \"invalid \" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entered \"invalid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "Age",
        "location"
      ],
      "line": 13
    },
    {
      "cells": [
        "below 18",
        "India"
      ],
      "line": 14
    },
    {
      "cells": [
        "above 18",
        "UK"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user \"should not\" sucessfully logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 60758,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 78821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid ",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_username(String)"
});
formatter.result({
  "duration": 112074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_password(String)"
});
formatter.result({
  "duration": 139169,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_select_the_age_category(DataTable)"
});
formatter.result({
  "duration": 205674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should not",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_shouldbe_sucessfully_logged_in(String)"
});
formatter.result({
  "duration": 199926,
  "status": "passed"
});
formatter.after({
  "duration": 66916,
  "status": "passed"
});
formatter.uri("Prodfeature.feature");
formatter.feature({
  "line": 2,
  "name": "Login in production",
  "description": "In order to perform login in production\r\nAs a user\r\nI want to enter correct username and password",
  "id": "login-in-production",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@bvt"
    },
    {
      "line": 1,
      "name": "@prodnew"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "In order to verify the login to facebook",
  "description": "",
  "id": "login-in-production;in-order-to-verify-the-login-to-facebook",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user entered \"\u003cusername\u003e \" username",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entered \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user \"\u003cloginType\u003e\" sucessfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-in-production;in-order-to-verify-the-login-to-facebook;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "loginType"
      ],
      "line": 16,
      "id": "login-in-production;in-order-to-verify-the-login-to-facebook;;1"
    },
    {
      "cells": [
        "valid",
        "valid",
        "should"
      ],
      "line": 17,
      "id": "login-in-production;in-order-to-verify-the-login-to-facebook;;2"
    },
    {
      "cells": [
        "invalid",
        "invalid",
        "should not"
      ],
      "line": 18,
      "id": "login-in-production;in-order-to-verify-the-login-to-facebook;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 89495,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "In order to verify the login to facebook",
  "description": "",
  "id": "login-in-production;in-order-to-verify-the-login-to-facebook;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@prodnew"
    },
    {
      "line": 1,
      "name": "@bvt"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user entered \"valid \" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entered \"valid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user \"should\" sucessfully logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 60348,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 73074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid ",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_username(String)"
});
formatter.result({
  "duration": 131779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_password(String)"
});
formatter.result({
  "duration": 88263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_shouldbe_sucessfully_logged_in(String)"
});
formatter.result({
  "duration": 78000,
  "status": "passed"
});
formatter.after({
  "duration": 63632,
  "status": "passed"
});
formatter.before({
  "duration": 75537,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "In order to verify the login to facebook",
  "description": "",
  "id": "login-in-production;in-order-to-verify-the-login-to-facebook;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@prodnew"
    },
    {
      "line": 1,
      "name": "@bvt"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user entered \"invalid \" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user entered \"invalid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user \"should not\" sucessfully logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 59937,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 52958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid ",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_username(String)"
});
formatter.result({
  "duration": 88673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 14
    }
  ],
  "location": "LoginStep.user_entered_valid_password(String)"
});
formatter.result({
  "duration": 137116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should not",
      "offset": 6
    }
  ],
  "location": "LoginStep.user_shouldbe_sucessfully_logged_in(String)"
});
formatter.result({
  "duration": 118642,
  "status": "passed"
});
formatter.after({
  "duration": 54600,
  "status": "passed"
});
});