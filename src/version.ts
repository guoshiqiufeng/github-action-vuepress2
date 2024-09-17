import * as core from '@actions/core'
import * as exec from '@actions/exec'

/**
 *
 * @returns {Promise<string>}
 */
export async function version(): Promise<string> {
    return new Promise(async resolve => {
      const versionFileName: string = core.getInput('versionFileName')
      const versionFileParam: string = core.getInput('versionFileParam')
      console.log(versionFileName)
      console.log(versionFileParam)
      const result = await exec.exec('grep \'' + versionFileParam + '\' ' + versionFileName + ' | awk -F\'=\' \'{print $2}\' | tr -d \'[:space:]\'')
      console.log(result)
      return result
    })
}
