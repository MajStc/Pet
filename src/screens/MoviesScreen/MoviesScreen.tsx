import React, { useCallback } from 'react'

import { Text, useNavigationHeader } from '../../ui'

export const MoviesScreen = () => {
  const renderHeaderOptions = useCallback(() => {
    const renderHeaderLeft = () => (
      <Text size="medium" variant="body">
        Go left
      </Text>
    )

    const renderHeaderRight = () => (
      <Text size="medium" variant="body">
        Go right
      </Text>
    )

    return { renderHeaderLeft, renderHeaderRight }
  }, [])

  useNavigationHeader({
    headerLeft: renderHeaderOptions().renderHeaderLeft,
    headerRight: renderHeaderOptions().renderHeaderRight,
  })

  return null
}
