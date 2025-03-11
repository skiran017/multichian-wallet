import type { CaipNetwork } from '@mcw/mcwkit-common'
import type { Connector } from '@mcw/mcwkit-core'

export interface ChainAdapterConnector extends Connector {
  chains: CaipNetwork[]
}
