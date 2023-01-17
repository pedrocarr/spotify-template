import { jest, expect, test, describe, beforeEach } from '@jest/globals'
import config from '../../../server/config.js'

const {
  pages
} = config

describe('#Routes - test site for api response', () => {
    beforeEach(() => {
      jest.resetAllMocks()
      jest.clearAllMocks() // clear all mocks
  })

test.todo('GET / - should redirect to home page')
test.todo(`GET /home - should response with ${pages.homeHTML} file stream`)
test.todo(`GET /controller - should response with ${pages.controllerHTML} file stream`)

})

