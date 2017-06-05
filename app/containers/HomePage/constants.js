/*
* HomeConstants
* Each action has a corresponding type, which the reducer knows and picks up on.
* To avoid weird typos between the reducer and the actions, we save them as
* constants here. We prefix them with 'yourproject/YourComponent' so we avoid
* reducers accidentally picking up actions they shouldn't.
*
* Follow this format:
* export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
*/
export const LOAD_RUBY_QUESTIONS = 'boilerplate/App/LOAD_RUBY_QUESTIONS';
export const LOAD_RUBY_QUESTIONS_SUCCESS = 'boilerplate/App/LOAD_RUBY_QUESTIONS_SUCCESS';
export const LOAD_C_QUESTIONS = 'boilerplate/App/LOAD_C_QUESTIONS';
export const LOAD_C_QUESTIONS_SUCCESS = 'boilerplate/App/LOAD_C_QUESTIONS_SUCCESS';
export const LOAD_QUESTIONS = 'boilerplate/App/LOAD_QUESTIONS';
export const LOAD_JS_QUESTIONS_SUCCESS = 'boilerplate/App/LOAD_JS_QUESTIONS_SUCCESS';
export const LOAD_ERROR = 'boilerplate/App/LOAD_ERROR';
export const LOAD_JS_QUESTIONS = 'boilerplate/App/LOAD_JS_QUESTIONS';
