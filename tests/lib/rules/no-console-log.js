/**
 * @fileoverview no console log
 * @author sivan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-console-log"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-console-log", rule, {

    valid: [

        // give me some code that won't trigger a warning
        "console.info('test');",
        "console.error('test');"
    ],

    invalid: [
        {
            code: "console.log('test')",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
