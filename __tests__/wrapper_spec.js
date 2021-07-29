
import Wrapper from '../src/wrapper.js';

describe("tests for Wrapper", () => {

  describe("#root", () => {
    test("root", async () => {
      let token = " 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"
let ghWrapper = new Wrapper(token)
      expect(ghWrapper.root())
    })
  })
})
