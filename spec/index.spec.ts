import { expect } from 'chai'
import { IndexController } from '../src/controllers/index.controller'

describe('Index Controller', function() {
    it('Can render the index page', async function() {
        expect(new IndexController().index()).to.deep.equal({})
    })
})
