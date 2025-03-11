import { CoreHelperUtil } from '@mcw/mcwkit-core'

import { AppKit } from '../src/client/appkit.js'
import type { AppKitOptions } from '../src/utils/TypesUtil.js'
import { PACKAGE_VERSION } from './constants.js'

// -- Utils & Other -----------------------------------------------------
export * from '../src/utils/index.js'
export type * from '@mcw/mcwkit-core'
export type { CaipNetwork, CaipAddress, CaipNetworkId } from '@mcw/mcwkit-common'
export { CoreHelperUtil, AccountController } from '@mcw/mcwkit-core'

export type CreateAppKit = Omit<AppKitOptions, 'sdkType' | 'sdkVersion' | 'basic'>

export function createAppKit(options: CreateAppKit) {
  return new AppKit({
    ...options,
    sdkVersion: CoreHelperUtil.generateSdkVersion(options.adapters ?? [], 'html', PACKAGE_VERSION)
  })
}

export { AppKit }
export type { AppKitOptions }
