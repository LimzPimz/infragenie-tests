import * as core from '@actions/core';
import * as github from '@actions/github';
import { wait } from './wait';


/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
      const text = core.getInput('text');
      core.debug(`Hello ${text}`);
      core.debug(github.context.payload.toString());
      core.setOutput('greeting', `Hello ${text}`);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}
