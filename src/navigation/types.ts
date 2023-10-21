import { ParamListBase } from '@react-navigation/native'

import { Route } from './routes'

export type RootStackParamList = ParamListBase & {
  [Route.Details]: { id: string }
}
