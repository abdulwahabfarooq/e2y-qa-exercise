import { configure } from '@serenity-js/core';

export default configure({
    crew: [
        '@serenity-js/console-reporter',
        '@serenity-js/cucumber'
    ],
});
